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
     conversione a ogni avvio;
   - le anteprime delle schede tecniche (anteprimaScheda) diventano WebP
     allo stesso modo, tagliate in fette: sono immagini anche di decine di
     pagine, e cosi' il visore scarica solo le fette che si guardano.

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
const CAMPI_FILE = ['scheda', 'istruzioni', 'rapporto'];

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

// Anteprime delle schede tecniche. Nel visore sono larghe al massimo 900 px:
// si pubblicano a 900 e, per gli schermi ad alta densita', fino a 1800 (mai
// ingrandite; se le due misure sono vicine resta solo la piu' grande). La
// qualita' e' un po' piu' alta delle foto perche' sono pagine di testo.
// Ogni fetta e' alta al massimo 4096 px dell'originale: WebP non va oltre
// i 16383 px e le schede piu' lunghe superano i 28000.
const LARGHEZZE_ANTEPRIMA = [900, 1800];
const QUALITA_ANTEPRIMA = 82;
const ALTEZZA_FETTA = 4096;

async function convertiAnteprima(assoluto, cartellaCache) {
  const dati = await readFile(assoluto);
  const impronta = createHash('sha1').update(dati).digest('hex').slice(0, 16);
  const { width, height } = await sharp(dati).metadata();
  let larghezze = [...new Set(LARGHEZZE_ANTEPRIMA.map(l => Math.min(l, width)))];
  if (larghezze.length > 1 && larghezze[1] / larghezze[0] < 1.3) larghezze = [larghezze[1]];
  // L'immagine si apre una volta sola, e solo se manca qualche fetta:
  // decodificare da capo un JPEG di 28000 px per ogni fetta costa secondi.
  let aperta = null;
  const apri = async () => (aperta ||= await sharp(dati).removeAlpha().raw().toBuffer({ resolveWithObject: true }));
  const fette = [];
  for (let alto = 0; alto < height; alto += ALTEZZA_FETTA) {
    const h = Math.min(ALTEZZA_FETTA, height - alto);
    const versioni = [];
    for (const l of larghezze) {
      const cache = join(cartellaCache, `${impronta}-f${alto}-${l}-q${QUALITA_ANTEPRIMA}.webp`);
      if (!existsSync(cache)) {
        const { data, info } = await apri();
        writeFileSync(cache, await sharp(data, { raw: { width: info.width, height: info.height, channels: info.channels } })
          .extract({ left: 0, top: alto, width, height: h })
          .resize({ width: l }).webp({ quality: QUALITA_ANTEPRIMA, effort: 4, smartSubsample: true }).toBuffer());
      }
      versioni.push({ larghezza: l, dati: readFileSync(cache) });
    }
    fette.push({ w: width, h, versioni });
  }
  return fette;
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
    // Le anteprime delle schede: come le foto, ma il valore e' la lista
    // delle fette, [{ src, srcSet, w, h }].
    const anteprime = new Map();
    const fileAnteprima = (nome, dove) => {
      file(nome, dove, true);
      const assoluto = assolutoDi(nome);
      if (!anteprime.has(assoluto)) anteprime.set(assoluto, `__ante_${anteprime.size}__`);
      return anteprime.get(assoluto);
    };
    const campo = (v, dove, uno) => (v && typeof v === 'object')
      ? Object.fromEntries(Object.entries(v).map(([k, n]) => [k, uno(n, dove)]))
      : (v ? uno(v, dove) : v);

    const prodottiSito = prodotti.map(({ note, ...p }) => {
      const dove = `prodotto #${p.id} ${p.nome}`;
      for (const c of CAMPI_FILE) if (c in p) p[c] = campo(p[c], dove, file);
      if ('anteprimaScheda' in p) p.anteprimaScheda = campo(p.anteprimaScheda, dove, fileAnteprima);
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
    const righeAnteprime = [];
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
      // Le anteprime a gruppi di 4: le piu' lunghe sono immagini enormi.
      const tutteAnteprime = [...anteprime];
      for (let i = 0; i < tutteAnteprime.length; i += 4) {
        await Promise.all(tutteAnteprime.slice(i, i + 4).map(async ([assoluto, segnaposto], j) => {
          const nome = basename(assoluto, extname(assoluto));
          const fette = (await convertiAnteprima(assoluto, cartellaCache)).map((f, k) => {
            const versioni = f.versioni.map(v => ({ ...v, url: indirizzo(`${nome}-${k + 1}`, v) }));
            return { src: versioni[versioni.length - 1].url, srcSet: versioni.map(v => `${v.url} ${v.larghezza}w`).join(', '), w: f.w, h: f.h };
          });
          righeAnteprime[i + j] = `const ${segnaposto} = ${JSON.stringify(fette)};`;
        }));
      }
    } else {
      for (const [assoluto, segnaposto] of foto) righeFoto.push(`const ${segnaposto} = { src: ${imp.get(assoluto)} };`);
      for (const [assoluto, segnaposto] of anteprime) righeAnteprime.push(`const ${segnaposto} = [{ src: ${imp.get(assoluto)} }];`);
    }
    // Nella build le foto originali non vanno importate, o finirebbero
    // comunque pubblicate.
    const importate = build ? [...imp].filter(([assoluto]) => !(foto.has(assoluto) || anteprime.has(assoluto)) || altriUsi.has(assoluto)) : [...imp];
    const righe = importate.map(([assoluto, segnaposto]) => `import ${segnaposto} from ${JSON.stringify(assoluto)};`);
    righe.push(...righeFoto, ...righeAnteprime);
    const conImport = (valore) => JSON.stringify(valore).replace(/"(__(?:file|foto|ante)_\d+__)"/g, '$1');
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
