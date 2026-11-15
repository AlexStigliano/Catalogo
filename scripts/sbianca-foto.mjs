/* Sbianca lo sfondo di una foto di prodotto e la porta al formato del catalogo.

   Per le foto fatte al telefono su un foglio bianco, o prese da una pagina
   del produttore con lo sfondo grigio: il foglio non e' mai bianco davvero
   e non e' illuminato uguale dappertutto. Qui si misura lo sfondo attorno al
   pezzo, lo si porta a bianco tenendo l'ombra, e si ritaglia in 4:3 attorno
   al pezzo, a 1000x750.

     node scripts/sbianca-foto.mjs <foto> <x0,y0,x1,y1> <uscita.jpg> [margine]

   - x0,y0,x1,y1: il riquadro che contiene il pezzo, in pixel della foto
     originale (non di una sua anteprima rimpicciolita).
   - margine: quanto e' largo il ritaglio rispetto al pezzo. Senza, 1.9;
     piu' alto se il pezzo deve stare piu' piccolo nella foto. Un pezzo piu'
     alto che largo non viene comunque mai tagliato.

   Dopo va messa la filigrana: node scripts/filigrana.mjs foto ... */

import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const LARGHEZZA = 1000, ALTEZZA = 750;
const CARTA = 250;        // a quanto si porta lo sfondo misurato
const QUASI_BIANCO = 238; // da qui in su si sfuma verso il bianco pieno

/* Piano a*x + b*y + c che approssima i valori dati (minimi quadrati). */
function piano(punti) {
  let n = 0, sx = 0, sy = 0, sv = 0, sxx = 0, syy = 0, sxy = 0, sxv = 0, syv = 0;
  for (const [x, y, v] of punti) { n++; sx += x; sy += y; sv += v; sxx += x * x; syy += y * y; sxy += x * y; sxv += x * v; syv += y * v; }
  // Sistema 3x3 risolto con Cramer.
  const det3 = (m) => m[0] * (m[4] * m[8] - m[5] * m[7]) - m[1] * (m[3] * m[8] - m[5] * m[6]) + m[2] * (m[3] * m[7] - m[4] * m[6]);
  const M = [sxx, sxy, sx, sxy, syy, sy, sx, sy, n], d = det3(M);
  if (!n || Math.abs(d) < 1e-9) return { a: 0, b: 0, c: n ? sv / n : CARTA };
  return {
    a: det3([sxv, sxy, sx, syv, syy, sy, sv, sy, n]) / d,
    b: det3([sxx, sxv, sx, sxy, syv, sy, sx, sv, n]) / d,
    c: det3([sxx, sxy, sxv, sxy, syy, syv, sx, sy, sv]) / d,
  };
}

export async function sbianca(ingresso, riquadro, uscita, margine = 1.9) {
  const { data, info } = await sharp(ingresso).rotate().removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const W = info.width, H = info.height, [x0, y0, x1, y1] = riquadro;
  if (!(x0 >= 0 && y0 >= 0 && x1 <= W && y1 <= H && x1 > x0 && y1 > y0)) {
    throw new Error(`Riquadro ${riquadro.join(',')} fuori dalla foto, che misura ${W}x${H}.`);
  }
  // Lo sfondo, canale per canale: un piano sui punti fuori dal riquadro del
  // pezzo. Due passate: la seconda scarta cio' che e' molto piu' scuro del
  // piano (ombre lunghe, dita, il bordo del tavolo).
  const passo = Math.max(1, Math.round(Math.max(W, H) / 400));
  const piani = [0, 1, 2].map(canale => {
    let punti = [];
    for (let y = 0; y < H; y += passo) for (let x = 0; x < W; x += passo) {
      if (x >= x0 && x < x1 && y >= y0 && y < y1) continue;
      punti.push([x, y, data[(y * W + x) * 3 + canale]]);
    }
    let p = piano(punti);
    punti = punti.filter(([x, y, v]) => Math.abs(v - (p.a * x + p.b * y + p.c)) < 14);
    if (punti.length > 50) p = piano(punti);
    return p;
  });
  const out = Buffer.alloc(W * H * 3);
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const i = (y * W + x) * 3;
    const v = [0, 1, 2].map(c => Math.min(255, data[i + c] * CARTA / Math.max(1, piani[c].a * x + piani[c].b * y + piani[c].c)));
    // Cio' che e' quasi bianco su tutti e tre i canali diventa bianco pieno,
    // sfumando: niente alone grigio attorno al pezzo.
    const t = Math.min(1, Math.max(0, (Math.min(...v) - QUASI_BIANCO) / (CARTA - QUASI_BIANCO)));
    const s = t * t * (3 - 2 * t);
    for (let c = 0; c < 3; c++) out[i + c] = Math.round(v[c] + (255 - v[c]) * s);
  }
  // Ritaglio 4:3 centrato sul pezzo; cio' che esce dalla foto resta bianco.
  const larg = Math.max((x1 - x0) * margine, (y1 - y0) * 1.25 * LARGHEZZA / ALTEZZA), alt = larg * ALTEZZA / LARGHEZZA;
  const L = Math.round((x0 + x1) / 2 - larg / 2), T = Math.round((y0 + y1) / 2 - alt / 2);
  const R = Math.round(L + larg), B = Math.round(T + alt);
  const bordo = { left: Math.max(0, -L), top: Math.max(0, -T), right: Math.max(0, R - W), bottom: Math.max(0, B - H) };
  const dentro = { left: Math.max(0, L), top: Math.max(0, T), width: Math.min(W, R) - Math.max(0, L), height: Math.min(H, B) - Math.max(0, T) };
  const ritaglio = await sharp(out, { raw: { width: W, height: H, channels: 3 } }).extract(dentro)
    .extend({ ...bordo, background: '#ffffff' }).png().toBuffer();
  await sharp(ritaglio).resize(LARGHEZZA, ALTEZZA, { fit: 'fill' }).jpeg({ quality: 92, mozjpeg: true }).toFile(uscita);
  return { ritaglio: [L, T, R, B], foto: [W, H] };
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const [ingresso, box, uscita, margine] = process.argv.slice(2);
  const riquadro = (box || '').split(',').map(Number);
  if (!ingresso || !uscita || riquadro.length !== 4 || riquadro.some(Number.isNaN)) {
    console.error('Uso: node scripts/sbianca-foto.mjs <foto> <x0,y0,x1,y1> <uscita.jpg> [margine]');
    process.exit(1);
  }
  try {
    const r = await sbianca(ingresso, riquadro, uscita, margine ? Number(margine) : undefined);
    console.log(`Fatto: ${uscita} (foto ${r.foto.join('x')}, ritaglio ${r.ritaglio.join(',')})`);
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
}
