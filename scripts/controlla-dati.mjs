/* Controllo dei dati del Catalogo Vetro, lanciato prima di ogni build.

   Legge i file JSON di src/data/vetro (catalogo.json e i prodotti, un file
   per categoria) e verifica che i dati stiano in piedi. Il formato dei file
   e' spiegato in src/data/vetro/LEGGIMI.md.

   - ERRORI: cose che rompono davvero il catalogo (un prodotto che sparisce,
     un collegamento che punta nel vuoto, una foto che non esiste, un campo
     scritto male che verrebbe ignorato). Bloccano la build, quindi anche la
     pubblicazione.
   - AVVISI: dati incompleti ma che non rompono la pagina (una finitura
     senza foto, un fornitore senza logo). Vengono elencati e basta.

   Uso: npm run check */

import { readFile, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, posix } from 'node:path';

const radice = join(dirname(fileURLToPath(import.meta.url)), '..');
const cartellaDati = join(radice, 'src/data/vetro');
const cartellaProdotti = join(cartellaDati, 'prodotti');
const cartellaFile = 'src/assets/vetro';

// Campi ammessi in un prodotto. Un campo che non e' qui e' quasi sempre un
// errore di battitura ("descrizone", "facoltativo"): l'interfaccia lo
// ignorerebbe senza dire niente, quindi si ferma la build.
const CAMPI_PRODOTTO = new Set([
  'id', 'categoria', 'sottocategoria', 'nome', 'note', 'descrizione', 'paroleChiave',
  'materiale', 'materiali', 'diametro', 'dimensioni', 'spessoriVetro', 'fornitore',
  'scheda', 'anteprimaScheda', 'istruzioni', 'rapporto', 'video', 'immagini',
  'caratteristiche', 'assi', 'varianti', 'essenziali', 'facoltativi', 'senzaFinitura',
]);
const CAMPI_CATALOGO = ['categorie', 'sottocategorie', 'altreSottocategorie', 'filtri', 'fornitori', 'finiture', 'noteFiniture'];
const CAMPI_FILTRO = ['chiave', 'etichetta', 'tutti', 'plurale', 'suffisso'];

// Diciture usate al posto del codice articolo per i sistemi su misura:
// ammesse, ma segnalate perche' per un gestionale non sono codici.
const SEGNAPOSTO = new Set(['su misura']);
const eSegnaposto = (codice) => SEGNAPOSTO.has(String(codice).trim().toLowerCase());

async function leggiJson(file) {
  const testo = await readFile(file, 'utf8');
  try {
    return JSON.parse(testo);
  } catch (e) {
    console.log(`ERRORE: ${posix.relative(radice, file)} non e' un JSON valido.\n  ${e.message}`);
    process.exit(1);
  }
}

async function caricaDati() {
  const catalogo = await leggiJson(join(cartellaDati, 'catalogo.json'));
  const file = (await readdir(cartellaProdotti)).filter(f => f.endsWith('.json')).sort();
  const perFile = [];
  for (const f of file) perFile.push({ file: f, prodotti: await leggiJson(join(cartellaProdotti, f)) });
  return { catalogo, perFile };
}

// Tutti i file sotto src/assets/vetro, per trovare quelli che nessuno usa.
async function fileInCartella(cartella, prefisso = '') {
  const voci = await readdir(join(radice, cartella), { withFileTypes: true });
  const out = [];
  for (const v of voci) {
    if (v.isDirectory()) out.push(...await fileInCartella(join(cartella, v.name), prefisso + v.name + '/'));
    else if (!v.name.startsWith('.')) out.push(prefisso + v.name);
  }
  return out;
}

async function controlla({ catalogo, perFile }) {
  const errori = [];
  const avvisi = [];
  const nome = (p) => `#${p.id} ${p.nome || '(senza nome)'}`;

  for (const c of CAMPI_CATALOGO) if (!(c in catalogo)) errori.push(['catalogo.json incompleto', `manca "${c}"`]);
  for (const c of Object.keys(catalogo)) if (!CAMPI_CATALOGO.includes(c)) errori.push(['campo sconosciuto in catalogo.json', `"${c}"`]);
  const categorie = catalogo.categorie || [];
  const sottocategorie = catalogo.sottocategorie || {};
  const fornitori = catalogo.fornitori || {};
  const finiture = catalogo.finiture || {};

  // Ogni nome di file, con chi lo usa: serve sia per i file mancanti sia
  // per quelli presenti nella cartella ma non usati da nessuno.
  const usati = new Set();
  const file = (nomeFile, dove) => {
    if (typeof nomeFile !== 'string' || !nomeFile) { errori.push(['nome di file non valido', `${dove}: ${JSON.stringify(nomeFile)}`]); return; }
    const percorso = posix.normalize(posix.join(cartellaFile, nomeFile));
    if (!existsSync(join(radice, percorso))) errori.push(['file inesistente', `${dove}: "${nomeFile}" (cercato in ${percorso})`]);
    usati.add(percorso);
  };
  // Un campo file e' un nome solo oppure un oggetto { variante: nome }.
  const campoFile = (v, dove) => {
    if (v && typeof v === 'object') for (const [k, n] of Object.entries(v)) file(n, `${dove} (${k})`);
    else file(v, dove);
  };

  for (const [f, logo] of Object.entries(fornitori)) {
    if (logo) file(logo, `logo di ${f}`);
    else avvisi.push(['fornitore senza logo', f]);
  }

  const P = perFile.flatMap(x => x.prodotti.map(p => ({ ...p, _file: x.file })));
  const perId = new Map();
  for (const p of P) {
    if (perId.has(p.id)) errori.push(['id ripetuto', `#${p.id} usato da "${perId.get(p.id).nome}" e da "${p.nome}"`]);
    perId.set(p.id, p);
  }

  const codici = new Map();
  const fornitoriUsati = new Set();
  for (const p of P) {
    if (!Number.isInteger(p.id)) errori.push(['id non numerico', `${nome(p)}: ${JSON.stringify(p.id)}`]);
    for (const c of Object.keys(p)) {
      if (c !== '_file' && !CAMPI_PRODOTTO.has(c)) errori.push(['campo sconosciuto', `${nome(p)}: "${c}"`]);
    }
    if (!p.nome) errori.push(['prodotto senza nome', nome(p)]);

    // Categoria e sottocategoria: se non tornano, il prodotto non compare in
    // nessun elenco e si raggiunge solo conoscendone l'indirizzo.
    const cat = categorie.find(c => c.id === p.categoria);
    if (!cat) errori.push(['categoria inesistente', `${nome(p)}: "${p.categoria}"`]);
    else if (!p._file.startsWith(p.categoria + '-')) errori.push(['prodotto nel file di un\'altra categoria', `${nome(p)}: categoria ${p.categoria}, ma sta in ${p._file}`]);
    const tab = sottocategorie[p.categoria];
    if (tab && !tab.some(s => s.id === p.sottocategoria)) {
      errori.push(['sottocategoria fuori dalle tab della categoria', `${nome(p)}: "${p.sottocategoria}" in categoria ${p.categoria}`]);
    }

    if (p.fornitore) {
      fornitoriUsati.add(p.fornitore);
      if (!(p.fornitore in fornitori)) errori.push(['fornitore non elencato in catalogo.json', `${nome(p)}: "${p.fornitore}"`]);
    }

    // null in scheda e rapporto vuol dire "in arrivo": il tasto c'e', spento.
    for (const campo of ['scheda', 'anteprimaScheda', 'istruzioni', 'rapporto']) {
      if (p[campo] === null && (campo === 'scheda' || campo === 'rapporto')) continue;
      if (p[campo] !== undefined) campoFile(p[campo], `${nome(p)}, ${campo}`);
    }
    for (const [fin, nomi] of Object.entries(p.immagini || {})) {
      if (!Array.isArray(nomi)) { errori.push(['immagini: serve una lista di file', `${nome(p)}: "${fin}"`]); continue; }
      for (const n of nomi) file(n, `${nome(p)}, foto "${fin}"`);
    }

    // Il pulsante "Scheda tecnica" e' attivo quando c'e' il PDF, ma il visore
    // mostra l'anteprima: senza anteprima il clic non fa nulla.
    if (p.scheda && !p.anteprimaScheda) errori.push(['scheda tecnica senza anteprima', nome(p)]);
    if (p.anteprimaScheda && !p.scheda) avvisi.push(['anteprima senza scheda tecnica, non si vede da nessuna parte', nome(p)]);

    if (!Array.isArray(p.varianti) || p.varianti.length === 0) {
      errori.push(['prodotto senza varianti', nome(p)]);
      continue;
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

    const finitureProdotto = [...new Set(p.varianti.map(v => v.finitura))];
    const chiaviFoto = Object.keys(p.immagini || {});
    if (!p.senzaFinitura) {
      for (const f of finitureProdotto) {
        if (!finiture[f]) avvisi.push(['finitura senza colore, mostra una pastiglia grigia', `${nome(p)}: "${f}"`]);
        if (!chiaviFoto.includes(f)) avvisi.push(['finitura senza foto, mostra "Immagine non disponibile"', `${nome(p)}: "${f}"`]);
      }
      for (const k of chiaviFoto) {
        if (!finitureProdotto.includes(k)) avvisi.push(['foto di una finitura che nessuna variante usa', `${nome(p)}: "${k}"`]);
      }
    }
    if (!p.descrizione) avvisi.push(['prodotto senza descrizione', nome(p)]);
  }

  for (const p of P) {
    for (const rif of p.facoltativi || []) {
      const q = perId.get(rif);
      if (q && !(q.facoltativi || []).includes(p.id) && !(q.essenziali || []).includes(p.id)) {
        avvisi.push(['collegamento a senso unico', `#${p.id} ${p.nome} rimanda a #${q.id} ${q.nome}, ma non viceversa`]);
      }
    }
  }
  const finitureUsate = new Set(P.flatMap(p => (p.varianti || []).map(v => v.finitura)));
  for (const f of Object.keys(finiture)) {
    if (!finitureUsate.has(f)) avvisi.push(['colore di finitura definito ma mai usato', `"${f}"`]);
  }
  for (const f of Object.keys(catalogo.noteFiniture || {})) {
    if (!(f in finiture)) errori.push(['nota per una finitura che non esiste', `"${f}"`]);
  }
  for (const f of Object.keys(fornitori)) {
    if (!fornitoriUsati.has(f)) avvisi.push(['fornitore elencato ma senza prodotti', f]);
  }

  // Filtri di misura: ognuno legge un campo del prodotto o delle varianti.
  const chiaviFiltri = new Set();
  for (const f of catalogo.filtri || []) {
    const dove = `filtro ${JSON.stringify(f.chiave || f.etichetta || f)}`;
    for (const c of Object.keys(f)) if (!CAMPI_FILTRO.includes(c)) errori.push(['campo sconosciuto in un filtro', `${dove}: "${c}"`]);
    for (const c of ['chiave', 'etichetta', 'tutti', 'plurale']) {
      if (typeof f[c] !== 'string' || !f[c]) errori.push(['filtro incompleto', `${dove}: manca "${c}"`]);
    }
    if (chiaviFiltri.has(f.chiave)) errori.push(['filtro ripetuto', dove]);
    chiaviFiltri.add(f.chiave);
    if (f.chiave && !P.some(p => p[f.chiave] != null || (p.varianti || []).some(v => v[f.chiave] != null))) {
      avvisi.push(['filtro che nessun prodotto usa, non compare mai', dove]);
    }
  }

  // Un file dimenticato nella cartella non rompe niente, ma finisce comunque
  // nella pubblicazione: meglio saperlo.
  for (const f of await fileInCartella(cartellaFile)) {
    if (!usati.has(posix.join(cartellaFile, f))) avvisi.push(['file non usato da nessun prodotto', `${cartellaFile}/${f}`]);
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

const { errori, avvisi, prodotti, codici } = await controlla(await caricaDati());
console.log(`Controllo dati del Catalogo Vetro: ${prodotti} prodotti, ${codici} codici articolo.`);
if (avvisi.length) stampa('Avvisi, non bloccano la build', avvisi);
if (errori.length) {
  stampa('ERRORI, la build si ferma', errori);
  process.exit(1);
}
console.log('\nNessun errore.');
