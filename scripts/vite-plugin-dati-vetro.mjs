/* Plugin di Vite per i dati del Catalogo Vetro.

   Legge src/data/vetro/catalogo.json e i file di src/data/vetro/prodotti e
   li offre a src/datiVetro.js come modulo "virtual:dati-vetro", con tre
   ritocchi:
   - i nomi di foto e PDF diventano import veri, cosi' la build li pubblica
     con il loro indirizzo e si ferma se un file non esiste;
   - le note, che servono a chi modifica i dati, restano fuori dal sito;
   - nella build le foto dei prodotti diventano WebP in due misure, 640 e
     1280 px di larghezza (mai ingrandite): ogni foto arriva come
     { src, srcSet } e il browser scarica la misura adatta allo schermo.
     In sviluppo resta la foto originale, { src }, per non aspettare la
     conversione a ogni avvio.

   Senza plugin i nomi andrebbero risolti nel browser, con una tabella di
   corrispondenza che duplica ogni percorso e appesantisce ogni visita. */

import { readFileSync, readdirSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { join, resolve, posix, basename, extname } from 'node:path';
import sharp from 'sharp';

const ID = 'virtual:dati-vetro';
const ID_RISOLTO = '\0' + ID;

// Campi di un prodotto che contengono nomi di file: un nome solo, una lista
// di nomi (immagini, per finitura) o un oggetto { variante: nome }.
const CAMPI_FILE = ['scheda', 'anteprimaScheda', 'istruzioni', 'rapporto'];

// Larghezze delle foto convertite e qualita' WebP. 640 basta per le card e
// le miniature, 1280 per la foto grande della pagina prodotto anche sugli
// schermi ad alta densita'.
const LARGHEZZE = [640, 1280];
const QUALITA = 80;

// Converte una foto nelle larghezze previste. Il risultato resta in
// node_modules/.cache, cosi' le build successive rifanno solo le foto nuove
// o cambiate.
async function convertiFoto(assoluto, cartellaCache) {
  const dati = await readFile(assoluto);
  const impronta = createHash('sha1').update(dati).digest('hex').slice(0, 16);
  const { width } = await sharp(dati).metadata();
  const larghezze = [...new Set(LARGHEZZE.map(l => Math.min(l, width)))];
  return Promise.all(larghezze.map(async (l) => {
    const cache = join(cartellaCache, `${impronta}-${l}-q${QUALITA}.webp`);
    if (existsSync(cache)) return { larghezza: l, dati: readFileSync(cache) };
    const webp = await sharp(dati).rotate().resize({ width: l, withoutEnlargement: true })
      .webp({ quality: QUALITA, effort: 5 }).toBuffer();
    writeFileSync(cache, webp);
    return { larghezza: l, dati: webp };
  }));
}

export default function datiVetro({ radice }) {
  const cartellaDati = resolve(radice, 'src/data/vetro');
  const cartellaCache = resolve(radice, 'node_modules/.cache/dati-vetro-foto');
  let build = false;
  let base = '/';
  let assetsDir = 'assets';

  async function genera(ctx) {
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
    const altriUsi = new Set(); // file usati anche fuori da "immagini"
    const assolutoDi = (nome) => resolve(radice, posix.normalize(posix.join('src/assets/vetro', nome)));
    const file = (nome, dove, perFoto = false) => {
      const assoluto = assolutoDi(nome);
      if (!assoluto.startsWith(resolve(radice, 'src/assets')) || !existsSync(assoluto)) {
        ctx.error(`File non trovato: "${nome}" (${dove}). I nomi sono relativi a src/assets/vetro.`);
      }
      if (!imp.has(assoluto)) imp.set(assoluto, `__file_${imp.size}__`);
      if (!perFoto) altriUsi.add(assoluto);
      return imp.get(assoluto);
    };
    // Le foto dei prodotti: stesso controllo, ma diventano un oggetto
    // { src, srcSet } che viene completato piu' sotto.
    const foto = new Map();
    const fileFoto = (nome, dove) => {
      file(nome, dove, true);
      const assoluto = assolutoDi(nome);
      if (!foto.has(assoluto)) foto.set(assoluto, `__foto_${foto.size}__`);
      return foto.get(assoluto);
    };
    const campoFile = (v, dove) => (v && typeof v === 'object')
      ? Object.fromEntries(Object.entries(v).map(([k, n]) => [k, file(n, dove)]))
      : (v ? file(v, dove) : v);

    const prodottiSito = prodotti.map(({ note, ...p }) => {
      const dove = `prodotto #${p.id} ${p.nome}`;
      for (const c of CAMPI_FILE) if (c in p) p[c] = campoFile(p[c], dove);
      if (p.immagini) {
        p.immagini = Object.fromEntries(Object.entries(p.immagini).map(([fin, nomi]) => [fin, nomi.map(n => fileFoto(n, dove))]));
      }
      return p;
    });
    const { noteFiniture, ...catalogoSito } = catalogo;
    catalogoSito.fornitori = Object.fromEntries(Object.entries(catalogo.fornitori)
      .map(([nome, logo]) => [nome, logo ? file(logo, `logo di ${nome}`) : null]));

    // In sviluppo la foto resta l'originale. Nella build le versioni WebP
    // vengono pubblicate come file a parte e l'originale non serve piu'.
    let righeFoto = [];
    if (build) {
      mkdirSync(cartellaCache, { recursive: true });
      // Il nome del file pubblicato lo decidiamo qui, con l'impronta del
      // contenuto come fa Vite: cosi' l'indirizzo e' gia' noto e nei dati
      // finisce come testo semplice.
      const indirizzo = (nome, v) => {
        const impronta = createHash('sha256').update(v.dati).digest('base64url').slice(0, 8);
        const fileName = posix.join(assetsDir, `${nome}-${v.larghezza}-${impronta}.webp`);
        ctx.emitFile({ type: 'asset', fileName, source: v.dati });
        return base + fileName;
      };
      // A gruppi di 8 per non tenere in memoria tutte le foto insieme; le
      // righe restano nell'ordine dei dati, cosi' la build e' ripetibile.
      const tutte = [...foto];
      righeFoto = new Array(tutte.length);
      for (let i = 0; i < tutte.length; i += 8) {
        await Promise.all(tutte.slice(i, i + 8).map(async ([assoluto, segnaposto], j) => {
          const nome = basename(assoluto, extname(assoluto));
          const versioni = (await convertiFoto(assoluto, cartellaCache)).map(v => ({ ...v, url: indirizzo(nome, v) }));
          const valore = {
            src: versioni[versioni.length - 1].url,
            srcSet: versioni.map(v => `${v.url} ${v.larghezza}w`).join(', '),
          };
          righeFoto[i + j] = `const ${segnaposto} = ${JSON.stringify(valore)};`;
        }));
      }
    } else {
      for (const [assoluto, segnaposto] of foto) righeFoto.push(`const ${segnaposto} = { src: ${imp.get(assoluto)} };`);
    }
    // Nella build le foto originali non vanno importate, o finirebbero
    // comunque pubblicate.
    const importate = build ? [...imp].filter(([assoluto]) => !foto.has(assoluto) || altriUsi.has(assoluto)) : [...imp];
    const righe = importate.map(([assoluto, segnaposto]) => `import ${segnaposto} from ${JSON.stringify(assoluto)};`);
    righe.push(...righeFoto);
    const conImport = (valore) => JSON.stringify(valore).replace(/"(__(?:file|foto)_\d+__)"/g, '$1');
    return `${righe.join('\n')}\nexport const catalogo = ${conImport(catalogoSito)};\nexport const prodotti = ${conImport(prodottiSito)};\n`;
  }

  return {
    name: 'dati-vetro',
    configResolved(config) {
      build = config.command === 'build';
      base = config.base;
      assetsDir = config.build.assetsDir;
    },
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
