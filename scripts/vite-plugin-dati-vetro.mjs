/* Plugin di Vite per i dati del Catalogo Vetro.

   Legge src/data/vetro/catalogo.json e i file di src/data/vetro/prodotti e
   li offre a src/datiVetro.js come modulo "virtual:dati-vetro", con due
   ritocchi:
   - i nomi di foto e PDF diventano import veri, cosi' la build li pubblica
     con il loro indirizzo e si ferma se un file non esiste;
   - le note, che servono a chi modifica i dati, restano fuori dal sito.

   Senza plugin i nomi andrebbero risolti nel browser, con una tabella di
   corrispondenza che duplica ogni percorso e appesantisce ogni visita. */

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, resolve, posix } from 'node:path';

const ID = 'virtual:dati-vetro';
const ID_RISOLTO = '\0' + ID;

// Campi di un prodotto che contengono nomi di file: un nome solo, una lista
// di nomi (immagini, per finitura) o un oggetto { variante: nome }.
const CAMPI_FILE = ['scheda', 'anteprimaScheda', 'istruzioni', 'rapporto'];

export default function datiVetro({ radice }) {
  const cartellaDati = resolve(radice, 'src/data/vetro');

  function genera(ctx) {
    const leggi = (file) => {
      ctx.addWatchFile(file);
      try { return JSON.parse(readFileSync(file, 'utf8')); }
      catch (e) { ctx.error(`JSON non valido in ${file}: ${e.message}`); }
    };
    const catalogo = leggi(join(cartellaDati, 'catalogo.json'));
    const cartellaProdotti = join(cartellaDati, 'prodotti');
    const prodotti = readdirSync(cartellaProdotti).filter(f => f.endsWith('.json')).sort()
      .flatMap(f => leggi(join(cartellaProdotti, f)));

    // Ogni file diventa un import; nel JSON generato resta un segnaposto che
    // alla fine viene sostituito con il nome dell'import.
    const imp = new Map();
    const file = (nome, dove) => {
      const percorso = posix.normalize(posix.join('src/assets/vetro', nome));
      const assoluto = resolve(radice, percorso);
      if (!assoluto.startsWith(resolve(radice, 'src/assets')) || !existsSync(assoluto)) {
        ctx.error(`File non trovato: "${nome}" (${dove}). I nomi sono relativi a src/assets/vetro.`);
      }
      if (!imp.has(assoluto)) imp.set(assoluto, `__file_${imp.size}__`);
      return imp.get(assoluto);
    };
    const campoFile = (v, dove) => (v && typeof v === 'object')
      ? Object.fromEntries(Object.entries(v).map(([k, n]) => [k, file(n, dove)]))
      : (v ? file(v, dove) : v);

    const prodottiSito = prodotti.map(({ note, ...p }) => {
      const dove = `prodotto #${p.id} ${p.nome}`;
      for (const c of CAMPI_FILE) if (c in p) p[c] = campoFile(p[c], dove);
      if (p.immagini) {
        p.immagini = Object.fromEntries(Object.entries(p.immagini).map(([fin, nomi]) => [fin, nomi.map(n => file(n, dove))]));
      }
      return p;
    });
    const { noteFiniture, ...catalogoSito } = catalogo;
    catalogoSito.fornitori = Object.fromEntries(Object.entries(catalogo.fornitori)
      .map(([nome, logo]) => [nome, logo ? file(logo, `logo di ${nome}`) : null]));

    const righe = [...imp].map(([assoluto, segnaposto]) => `import ${segnaposto} from ${JSON.stringify(assoluto)};`);
    const conImport = (valore) => JSON.stringify(valore).replace(/"(__file_\d+__)"/g, '$1');
    return `${righe.join('\n')}\nexport const catalogo = ${conImport(catalogoSito)};\nexport const prodotti = ${conImport(prodottiSito)};\n`;
  }

  return {
    name: 'dati-vetro',
    resolveId(id) { return id === ID ? ID_RISOLTO : null; },
    load(id) { return id === ID_RISOLTO ? genera(this) : null; },
    // In sviluppo, un file di prodotti aggiunto o tolto ricarica i dati.
    configureServer(server) {
      const ricarica = (f) => {
        if (!resolve(f).startsWith(cartellaDati)) return;
        const mod = server.moduleGraph.getModuleById(ID_RISOLTO);
        if (mod) server.moduleGraph.invalidateModule(mod);
        server.ws.send({ type: 'full-reload' });
      };
      server.watcher.on('add', ricarica);
      server.watcher.on('unlink', ricarica);
    },
  };
}
