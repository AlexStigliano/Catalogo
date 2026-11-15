/* Filigrana Ferramenta Stigliano su foto, disegni e schede tecniche.

   Il logo viene ripetuto a scacchiera, inclinato, molto trasparente: quanto
   basta perche' la foto non si possa riusare, senza coprire il prodotto.

     node scripts/filigrana.mjs foto    <foto>     <uscita.jpg>
     node scripts/filigrana.mjs disegno <disegno>  <uscita.jpg>
     node scripts/filigrana.mjs pdf     <scheda.pdf> <uscita.pdf> [--pagine 1-2] [--anteprima <uscita.jpg>]

   - foto: le foto dei prodotti (src/assets/vetro/prodotti).
   - disegno: disegni quotati e immagini al tratto, con un logo piu' piccolo
     e piu' leggero per non confondersi con le linee.
   - pdf: la scheda tecnica, con la filigrana su ogni pagina. --pagine tiene
     solo quelle indicate (es. 1 oppure 1-3,5). --anteprima crea anche
     l'immagine per il visore del sito (src/assets/vetro/schede), con le
     pagine una sotto l'altra: serve pdftoppm (pacchetto poppler-utils).

   I valori qui sotto sono quelli di tutte le immagini gia' pubblicate:
   cambiarli vuol dire avere filigrane diverse nel catalogo. */

import { readFileSync, writeFileSync, mkdtempSync, readdirSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { tmpdir } from 'node:os';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const LOGO = join(dirname(fileURLToPath(import.meta.url)), 'risorse/logo-filigrana.png');

// opacita': quanto si vede il logo. scala: larghezza di un logo, col suo
// margine, rispetto alla larghezza dell'immagine.
const TIPI = {
  foto: { opacita: 0.17, scala: 0.26 },
  disegno: { opacita: 0.13, scala: 0.22 },
  pdf: { opacita: 0.15, scala: 0.22 },
};
const ANGOLO = 20;             // gradi, in senso orario
const PASSO = 2.15;            // distanza fra i loghi, in larghezze/altezze del logo inclinato
const MARGINE = [1.36, 1.56];  // spazio vuoto attorno al logo (larghezza, altezza)
const LARGHEZZA_ANTEPRIMA = 1012;

/* Lo strato trasparente con i loghi, grande quanto l'immagine (PNG). */
export async function stratoFiligrana(larghezza, altezza, { opacita, scala }) {
  const logo = sharp(readFileSync(LOGO));
  const { width: lw, height: lh } = await logo.metadata();
  const mx = Math.round(lw * (MARGINE[0] - 1) / 2), my = Math.round(lh * (MARGINE[1] - 1) / 2);
  const trasparente = { r: 0, g: 0, b: 0, alpha: 0 };
  const conMargine = await logo.extend({ left: mx, right: mx, top: my, bottom: my, background: trasparente }).png().toBuffer();
  const ridotto = await sharp(conMargine).resize({ width: Math.max(8, Math.round(larghezza * scala)) }).png().toBuffer();
  const { data, info } = await sharp(ridotto).rotate(ANGOLO, { background: trasparente }).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  for (let i = 3; i < data.length; i += 4) data[i] = Math.round(data[i] * opacita);
  const tessera = await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } }).png().toBuffer();

  // Scacchiera: una riga si' e una no parte da mezzo passo. Si disegna su un
  // foglio piu' grande e poi si ritaglia, cosi' i loghi sui bordi restano
  // tagliati a meta' invece di mancare.
  const sx = info.width * PASSO, sy = info.height * PASSO;
  const loghi = [];
  for (let riga = 0; riga * sy < altezza; riga++) {
    for (let x = (riga % 2 ? 0 : sx / 2) - sx; x < larghezza; x += sx) {
      loghi.push({ input: tessera, left: Math.round(x) + info.width, top: Math.round(riga * sy) + info.height });
    }
  }
  const foglio = await sharp({ create: { width: larghezza + 2 * info.width, height: altezza + 2 * info.height, channels: 4, background: trasparente } })
    .composite(loghi).png().toBuffer();
  return sharp(foglio).extract({ left: info.width, top: info.height, width: larghezza, height: altezza }).png().toBuffer();
}

export async function filigranaImmagine(ingresso, uscita, tipo = 'foto') {
  const base = await sharp(ingresso).rotate().flatten({ background: '#ffffff' }).toBuffer({ resolveWithObject: true });
  const strato = await stratoFiligrana(base.info.width, base.info.height, TIPI[tipo]);
  await sharp(base.data).composite([{ input: strato }]).jpeg({ quality: 90, mozjpeg: true }).toFile(uscita);
}

// "1-3,5" -> [0, 1, 2, 4]
const leggiPagine = (testo, totale) => [...new Set(testo.split(',').flatMap(parte => {
  const [da, a = da] = parte.split('-').map(Number);
  return Array.from({ length: a - da + 1 }, (_, i) => da + i - 1);
}))].filter(i => i >= 0 && i < totale).sort((a, b) => a - b);

export async function filigranaPdf(ingresso, uscita, { pagine, anteprima } = {}) {
  const { PDFDocument } = await import('pdf-lib');
  const origine = await PDFDocument.load(readFileSync(ingresso));
  let doc = origine;
  if (pagine) {
    doc = await PDFDocument.create();
    const scelte = leggiPagine(pagine, origine.getPageCount());
    if (!scelte.length) throw new Error(`--pagine ${pagine}: il PDF ha ${origine.getPageCount()} pagine.`);
    (await doc.copyPages(origine, scelte)).forEach(p => doc.addPage(p));
  }
  // Lo strato si disegna al triplo della misura della pagina, cosi' resta
  // nitido ingrandendo; pagine della stessa misura lo condividono.
  const strati = new Map();
  for (const pagina of doc.getPages()) {
    const { x, y, width, height } = pagina.getCropBox();
    const chiave = `${Math.round(width)}x${Math.round(height)}`;
    if (!strati.has(chiave)) {
      strati.set(chiave, await doc.embedPng(await stratoFiligrana(Math.round(width * 3), Math.round(height * 3), TIPI.pdf)));
    }
    pagina.drawImage(strati.get(chiave), { x, y, width, height });
  }
  writeFileSync(uscita, await doc.save());
  if (anteprima) await anteprimaPdf(uscita, anteprima);
}

/* L'immagine della scheda per il visore del sito: tutte le pagine, una sotto
   l'altra. La build la converte poi in WebP e la taglia in fette. */
export async function anteprimaPdf(pdf, uscita) {
  const cartella = mkdtempSync(join(tmpdir(), 'anteprima-'));
  try {
    try {
      execFileSync('pdftoppm', ['-png', '-scale-to-x', String(LARGHEZZA_ANTEPRIMA), '-scale-to-y', '-1', pdf, join(cartella, 'p')]);
    } catch (e) {
      if (e.code === 'ENOENT') throw new Error('Per l\'anteprima serve pdftoppm: installa poppler-utils (apt install poppler-utils, brew install poppler).');
      throw e;
    }
    const file = readdirSync(cartella).sort((a, b) => a.localeCompare(b, 'it', { numeric: true })).map(f => join(cartella, f));
    const misure = await Promise.all(file.map(f => sharp(f).metadata()));
    let alto = 0;
    const pezzi = file.map((f, i) => { const p = { input: f, left: 0, top: alto }; alto += misure[i].height; return p; });
    await sharp({ create: { width: LARGHEZZA_ANTEPRIMA, height: alto, channels: 3, background: '#ffffff' } })
      .composite(pezzi).jpeg({ quality: 80, mozjpeg: true }).toFile(uscita);
  } finally {
    rmSync(cartella, { recursive: true, force: true });
  }
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const [tipo, ingresso, uscita, ...resto] = process.argv.slice(2);
  const opzione = (nome) => { const i = resto.indexOf(nome); return i >= 0 ? resto[i + 1] : undefined; };
  if (!TIPI[tipo] || !ingresso || !uscita) {
    console.error('Uso: node scripts/filigrana.mjs foto|disegno <ingresso> <uscita.jpg>\n     node scripts/filigrana.mjs pdf <scheda.pdf> <uscita.pdf> [--pagine 1-2] [--anteprima <uscita.jpg>]');
    process.exit(1);
  }
  try {
    if (tipo === 'pdf') await filigranaPdf(ingresso, uscita, { pagine: opzione('--pagine'), anteprima: opzione('--anteprima') });
    else await filigranaImmagine(ingresso, uscita, tipo);
    console.log('Fatto:', uscita, opzione('--anteprima') || '');
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
}
