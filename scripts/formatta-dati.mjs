/* Formato dei file dei prodotti del Catalogo Vetro (src/data/vetro/prodotti).

   Un campo per riga, con i valori corti su una riga sola (una variante, le
   foto di una finitura) e quelli lunghi una voce per riga, cosi' i file
   restano leggibili e nelle modifiche si vede bene che cosa e' cambiato.

     node scripts/formatta-dati.mjs            controlla tutti i file
     node scripts/formatta-dati.mjs --scrivi   li riscrive nel formato giusto
     node scripts/formatta-dati.mjs file.json  solo quel file

   Chi aggiunge prodotti da uno script puo' usare formatta():
     import { formatta } from './formatta-dati.mjs';
     writeFileSync(file, formatta(prodotti)); */

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const j = JSON.stringify;
// Su una riga: { "codice": "A1", "finitura": "Nero" } oppure ["a.jpg", "b.jpg"].
const inRiga = (v) => {
  if (Array.isArray(v)) return '[' + v.map(inRiga).join(', ') + ']';
  if (v && typeof v === 'object') {
    const voci = Object.entries(v).map(([k, x]) => `${j(k)}: ${inRiga(x)}`);
    return voci.length ? '{ ' + voci.join(', ') + ' }' : '{}';
  }
  return j(v);
};
// Un valore annidato resta su una riga finche' non supera questa lunghezza;
// oltre, va una voce per riga.
const MASSIMO_IN_RIGA = 112;
const righe = (voci, rientro, apre, chiude) => voci.length
  ? `${apre}\n${voci.map(r => rientro + '  ' + r).join(',\n')}\n${rientro}${chiude}`
  : apre + chiude;
const valore = (v, rientro, espanso = false) => {
  if (v === null || typeof v !== 'object') return j(v);
  const corto = inRiga(v);
  if (!espanso && corto.length <= MASSIMO_IN_RIGA) return corto;
  const dentro = rientro + '  ';
  return Array.isArray(v)
    ? righe(v.map(x => valore(x, dentro)), rientro, '[', ']')
    : righe(Object.entries(v).map(([k, x]) => `${j(k)}: ${valore(x, dentro)}`), rientro, '{', '}');
};

// Sempre una voce per riga, anche se corti: le note di piu' righe, le foto
// per finitura e le liste di oggetti (varianti, assi, caratteristiche, video).
const sempreEspanso = (chiave, v) => (chiave === 'note' && v.length > 1) || chiave === 'immagini'
  || (Array.isArray(v) && v.some(x => x && typeof x === 'object'));

export function formatta(prodotti) {
  const blocchi = prodotti.map(p =>
    righe(Object.entries(p).map(([k, v]) => `${j(k)}: ${valore(v, '    ', sempreEspanso(k, v))}`), '  ', '{', '}'));
  return `[\n${blocchi.map(b => '  ' + b).join(',\n')}\n]\n`;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const cartella = join(dirname(fileURLToPath(import.meta.url)), '../src/data/vetro/prodotti');
  const scrivi = process.argv.includes('--scrivi');
  const scelti = process.argv.slice(2).filter(a => !a.startsWith('--'));
  const file = scelti.length ? scelti : readdirSync(cartella).filter(f => f.endsWith('.json')).sort().map(f => join(cartella, f));
  let diversi = 0;
  for (const f of file) {
    const testo = readFileSync(f, 'utf8');
    const giusto = formatta(JSON.parse(testo));
    if (testo === giusto) continue;
    diversi++;
    if (scrivi) writeFileSync(f, giusto);
    console.log(`${scrivi ? 'Riscritto' : 'Da formattare'}: ${f}`);
  }
  if (!diversi) console.log(`Formato a posto: ${file.length} file.`);
  else if (!scrivi) { console.log('Per sistemarli: node scripts/formatta-dati.mjs --scrivi'); process.exit(1); }
}
