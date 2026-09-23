/* Controllo dei dati del Catalogo Vetro, lanciato prima di ogni build.

   I prodotti vivono dentro src/CatalogoVetro.jsx: lo script ne compila in
   memoria una copia (le immagini e i PDF diventano semplici nomi di file,
   il sorgente non viene toccato) e verifica che i dati stiano in piedi.

   - ERRORI: cose che rompono davvero il catalogo (un prodotto che sparisce,
     un collegamento che punta nel vuoto, un pulsante che non apre niente).
     Bloccano la build, quindi anche la pubblicazione.
   - AVVISI: dati incompleti ma che non rompono la pagina (una finitura
     senza foto, un fornitore senza logo). Vengono elencati e basta.

   Uso: npm run check */

import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const radice = join(dirname(fileURLToPath(import.meta.url)), '..');
const cartellaSrc = join(radice, 'src');

// esbuild arriva insieme a Vite: lo prendiamo da lì invece di aggiungere
// una dipendenza, cosi' la versione resta sempre quella usata dalla build.
const require = createRequire(import.meta.url);
const esbuild = createRequire(require.resolve('vite/package.json'))('esbuild');

async function caricaDati() {
  const sorgente = await readFile(join(cartellaSrc, 'CatalogoVetro.jsx'), 'utf8');
  const daEsportare = [
    'PRODOTTI_VETRO', 'SCHEDA_IMG_VETRO', 'FINISHES_VETRO', 'PAROLE_CHIAVE_VETRO',
    'SOTTOCATEGORIE_PER_CATEGORIA', 'CATEGORIE_VETRO',
  ];
  const risultato = await esbuild.build({
    stdin: {
      contents: `${sorgente}\nexport { ${daEsportare.join(', ')} };\n`,
      resolveDir: cartellaSrc,
      sourcefile: 'CatalogoVetro.jsx',
      loader: 'jsx',
    },
    bundle: true,
    write: false,
    format: 'esm',
    platform: 'node',
    logLevel: 'silent',
    plugins: [{
      name: 'file-come-nomi',
      setup(b) {
        b.onResolve({ filter: /\.(jpe?g|png|webp|svg|pdf|css)$/ }, a => ({ path: a.path, namespace: 'asset' }));
        b.onLoad({ filter: /.*/, namespace: 'asset' }, a => ({ contents: `export default ${JSON.stringify(a.path)};`, loader: 'js' }));
      },
    }],
  });
  const codice = risultato.outputFiles[0].text;
  return import(`data:text/javascript;base64,${Buffer.from(codice).toString('base64')}`);
}

// Diciture usate al posto del codice articolo per i sistemi su misura:
// ammesse, ma segnalate perche' per un gestionale non sono codici.
const SEGNAPOSTO = new Set(['su misura']);
const eSegnaposto = (codice) => SEGNAPOSTO.has(String(codice).trim().toLowerCase());

function controlla(D) {
  const errori = [];
  const avvisi = [];
  const P = D.PRODOTTI_VETRO;
  const nome = (p) => `#${p.id} ${p.nome || '(senza nome)'}`;
  const perId = new Map();

  for (const p of P) {
    if (perId.has(p.id)) errori.push(['id ripetuto', `#${p.id} usato da "${perId.get(p.id).nome}" e da "${p.nome}"`]);
    perId.set(p.id, p);
  }

  const codici = new Map();
  for (const p of P) {
    if (!p.nome) errori.push(['prodotto senza nome', nome(p)]);
    if (!Array.isArray(p.varianti) || p.varianti.length === 0) {
      errori.push(['prodotto senza varianti', nome(p)]);
      continue;
    }

    // Categoria e sottocategoria: se non tornano, il prodotto non compare in
    // nessun elenco e si raggiunge solo conoscendone l'indirizzo.
    if (!D.CATEGORIE_VETRO.some(c => c.id === p.categoria)) {
      errori.push(['categoria inesistente', `${nome(p)}: "${p.categoria}"`]);
    }
    const tab = D.SOTTOCATEGORIE_PER_CATEGORIA[p.categoria];
    if (tab && !tab.some(s => s.id === p.sottocategoria)) {
      errori.push(['sottocategoria fuori dalle tab della categoria', `${nome(p)}: "${p.sottocategoria}" in categoria ${p.categoria}`]);
    }

    for (const v of p.varianti) {
      if (!v.codice) { errori.push(['variante senza codice', nome(p)]); continue; }
      if (eSegnaposto(v.codice)) { avvisi.push(['codice segnaposto, non un codice articolo', `${nome(p)}: "${v.codice}"`]); continue; }
      const gia = codici.get(v.codice);
      if (gia !== undefined && gia !== p.id) errori.push(['codice articolo ripetuto', `${v.codice} in #${gia} e in #${p.id}`]);
      codici.set(v.codice, p.id);
    }

    // Misure a piu' assi: ogni variante deve avere un valore per ogni asse,
    // altrimenti tabella e selettori mostrano buchi.
    for (const a of p.assi || []) {
      const mancanti = p.varianti.filter(v => v[a.chiave] === undefined).map(v => v.codice);
      if (mancanti.length) errori.push(['misura mancante nelle varianti', `${nome(p)}: "${a.chiave}" manca in ${mancanti.join(', ')}`]);
    }

    for (const campo of ['essenziali', 'facoltativi']) {
      for (const rif of p[campo] || []) {
        if (rif === p.id) errori.push(['collegamento a se stesso', `${nome(p)} in ${campo}`]);
        else if (!perId.has(rif)) errori.push(['collegamento a un prodotto inesistente', `${nome(p)}: ${campo} punta a #${rif}`]);
      }
    }

    // Il pulsante "Scheda tecnica" e' attivo quando c'e' il PDF, ma il visore
    // mostra l'anteprima: senza anteprima il clic non fa nulla.
    if (p.scheda && !D.SCHEDA_IMG_VETRO[p.id]) errori.push(['scheda tecnica senza anteprima', nome(p)]);

    const finiture = [...new Set(p.varianti.map(v => v.finitura))];
    const chiaviFoto = Object.keys(p.immagini || {});
    if (!p.senzaFinitura) {
      for (const f of finiture) {
        if (!D.FINISHES_VETRO[f]) avvisi.push(['finitura senza colore, mostra una pastiglia grigia', `${nome(p)}: "${f}"`]);
        if (!chiaviFoto.includes(f)) avvisi.push(['finitura senza foto, mostra "Immagine non disponibile"', `${nome(p)}: "${f}"`]);
      }
      for (const k of chiaviFoto) {
        if (!finiture.includes(k)) avvisi.push(['foto di una finitura che nessuna variante usa', `${nome(p)}: "${k}"`]);
      }
    }
    if (p.fornitore && !p.fornitoreLogo) avvisi.push(['fornitore senza logo', `${nome(p)}: ${p.fornitore}`]);
    if (!p.descrizione) avvisi.push(['prodotto senza descrizione', nome(p)]);
  }

  for (const id of Object.keys(D.SCHEDA_IMG_VETRO)) {
    if (!perId.has(Number(id))) errori.push(['anteprima scheda per un prodotto inesistente', `#${id}`]);
  }
  for (const id of Object.keys(D.PAROLE_CHIAVE_VETRO)) {
    if (!perId.has(Number(id))) errori.push(['parole chiave per un prodotto inesistente', `#${id}`]);
  }

  for (const p of P) {
    for (const rif of p.facoltativi || []) {
      const q = perId.get(rif);
      if (q && !(q.facoltativi || []).includes(p.id) && !(q.essenziali || []).includes(p.id)) {
        avvisi.push(['collegamento a senso unico', `#${p.id} ${p.nome} rimanda a #${q.id} ${q.nome}, ma non viceversa`]);
      }
    }
  }
  const usate = new Set(P.flatMap(p => (p.varianti || []).map(v => v.finitura)));
  for (const f of Object.keys(D.FINISHES_VETRO)) {
    if (!usate.has(f)) avvisi.push(['colore di finitura definito ma mai usato', `"${f}"`]);
  }

  return { errori, avvisi, prodotti: P.length, codici: codici.size };
}

function stampa(titolo, voci) {
  const gruppi = new Map();
  for (const [tipo, dettaglio] of voci) {
    if (!gruppi.has(tipo)) gruppi.set(tipo, []);
    gruppi.get(tipo).push(dettaglio);
  }
  console.log(`\n${titolo}: ${voci.length}`);
  for (const [tipo, dettagli] of gruppi) {
    console.log(`  ${tipo} (${dettagli.length})`);
    for (const d of dettagli) console.log(`    - ${d}`);
  }
}

const dati = await caricaDati();
const { errori, avvisi, prodotti, codici } = controlla(dati);
console.log(`Controllo dati del Catalogo Vetro: ${prodotti} prodotti, ${codici} codici articolo.`);
if (avvisi.length) stampa('Avvisi, non bloccano la build', avvisi);
if (errori.length) {
  stampa('ERRORI, la build si ferma', errori);
  process.exit(1);
}
console.log('\nNessun errore.');
