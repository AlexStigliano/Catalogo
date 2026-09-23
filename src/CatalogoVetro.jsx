import React, { useState, useEffect, useMemo } from 'react';
import { ArrowRight, ChevronRight, ChevronLeft, ChevronDown, Download, Search, SlidersHorizontal, Heart, List, LayoutGrid, PlayCircle } from 'lucide-react';
import './Catalogo.css';
import {
  CATEGORIE_VETRO, SOTTOCATEGORIE_PER_CATEGORIA, ALTRE_SOTTOCATEGORIE_VETRO,
  PRODOTTI_VETRO, SCHEDA_IMG_VETRO, PAROLE_CHIAVE_VETRO, FINISHES_VETRO,
} from './datiVetro.js';
import logo from './assets/logo-stigliano.png';
import logoCover from './assets/logo-stigliano-cover.png';

/* Chiave dedicata (diversa da quella del Catalogo Generale) così i
   preferiti dei due cataloghi non si mescolano: gli id prodotto si
   ripetono da 1 in entrambi. Vale per tutti i prodotti, presenti e
   futuri, dato che si basa solo sull'id. */
const FAVORITI_KEY_VETRO = 'ferramenta_favorites_vetro';

const subName = (id) => (
  Object.values(SOTTOCATEGORIE_PER_CATEGORIA).flat().find(s => s.id === id) ||
  ALTRE_SOTTOCATEGORIE_VETRO.find(s => s.id === id) || {}
).nome || id;

/* Un articolo può esistere in materiali diversi a parità di finitura (es. la
   stessa vite in acciaio inox o in zama): in quel caso `materiali` elenca le
   opzioni per i filtri, mentre `materiale` resta la dicitura da mostrare. */
const materialiDi = (p) => p.materiali || (p.materiale ? [p.materiale] : []);
// La scheda (pdf e anteprima) può essere unica per il prodotto oppure diversa
// per variante (es. un distanziale con una scheda tecnica per ogni lunghezza):
// in quel caso è un oggetto { 'codice variante': valore }.
const pickScheda = (val, key) => (val && typeof val === 'object')
  ? (val[key] !== undefined ? val[key] : Object.values(val)[0])
  : val;
const openScheda = (id, key) => window.dispatchEvent(new CustomEvent('open-scheda-vetro', { detail: { id, key } }));
const catName = (id) => (CATEGORIE_VETRO.find(c => c.id === id) || {}).nome || id;

/* ---------- Ricerca in tutto il catalogo vetro ---------- */
/* Un'unica regola per la barra dell'indice e per quella dentro le categorie.
   Ogni parola cercata deve trovare corrispondenza nel prodotto, in qualsiasi
   ordine; gli accenti si ignorano ("trafilo" trova Tràfilo).
   - Nel testo una parola cercata vale se e' l'inizio di una parola del
     prodotto: "mani" trova "maniglia", ma "vite" non trova "evitare" e
     "oro" non trova "poroso".
   - Nei codici articolo basta un pezzo qualsiasi, da 3 caratteri in su,
     ignorando trattini e spazi: "109-239" trova IN109-239.
   I risultati sono in ordine di pertinenza: prima il codice esatto, poi
   il nome, le parole chiave (con fornitore, materiali e finiture), la
   sottocategoria e per ultima la descrizione. A parita', l'ordine del
   catalogo. */
const senzaAccenti = (s) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const soloLettereCifre = (s) => senzaAccenti(s).replace(/[^a-z0-9]/g, '');
// Radice italiana semplice: toglie le vocali finali (specchio/specchi,
// maniglia/maniglie) e l'h di -chi/-ghi (bianco/bianchi, lungo/lunghi).
const radice = (w) => {
  if (w.length <= 3 || !/^[a-z]+$/.test(w)) return w;
  const r = w.replace(/[aeiou]+$/, '').replace(/([cg])h$/, '$1');
  return r.length >= 3 ? r : w;
};
// Parole spezzate sugli spazi, senza la punteggiatura attaccata ai bordi.
// Chi ha punteggiatura interna (8+8, TG-200) vale intera e anche a pezzi.
// La ø resta una lettera: "ø52" non deve diventare "52".
const bordi = (w) => w.replace(/^[^a-z0-9ø]+|[^a-z0-9ø]+$/g, '');
const paroleDi = (s) => senzaAccenti(s || '').split(/\s+/).map(bordi).filter(Boolean)
  .flatMap(w => /[^a-z0-9ø]/.test(w) ? [w, ...w.split(/[^a-z0-9ø]+/).filter(Boolean)] : [w])
  .map(radice);

const INDICE_RICERCA_VETRO = new Map(PRODOTTI_VETRO.map(p => [p.id, {
  codici: [...new Set(p.varianti.map(v => soloLettereCifre(v.codice)))],
  campi: [
    { peso: 100, parole: paroleDi(p.nome) },
    { peso: 60, parole: paroleDi([PAROLE_CHIAVE_VETRO[p.id], p.fornitore, ...materialiDi(p), ...p.varianti.map(v => v.finitura)].join(' ')) },
    { peso: 40, parole: paroleDi(subName(p.sottocategoria) + ' ' + catName(p.categoria)) },
    { peso: 10, parole: paroleDi(p.descrizione) },
  ],
}]));

// Le parole cercate, ognuna pronta sia per i codici sia per il testo.
const parolePerRicerca = (testo) => senzaAccenti(testo).split(/\s+/).filter(Boolean)
  .map(t => ({ codice: soloLettereCifre(t), parola: radice(bordi(t)) }))
  .filter(t => t.codice || t.parola);

const codiceCorrisponde = (codice, t) => t.codice.length >= 3 ? codice.includes(t.codice) : codice.startsWith(t.codice);
const puntiCodice = (ind, t) => {
  if (!t.codice) return 0;
  if (ind.codici.includes(t.codice)) return 1000;
  return ind.codici.some(c => codiceCorrisponde(c, t)) ? 400 : 0;
};
// Il campo piu' importante in cui la parola compare; intera vale un po' di
// piu' che come inizio di parola.
const puntiTesto = (ind, t) => {
  if (!t.parola) return 0;
  let migliore = 0;
  for (const c of ind.campi) {
    if (c.parole.includes(t.parola)) migliore = Math.max(migliore, c.peso * 1.2);
    else if (c.parole.some(x => x.startsWith(t.parola))) migliore = Math.max(migliore, c.peso);
  }
  return migliore;
};
// Le parole cercate una dopo l'altra, come frase ("doppia azione").
const inSequenza = (lista, parole) => parole.length > 1
  && lista.some((_, i) => parole.every((w, k) => (lista[i + k] || '').startsWith(w)));

// 0 = il prodotto non corrisponde; piu' alto = piu' pertinente.
const punteggioRicerca = (p, parole) => {
  const ind = INDICE_RICERCA_VETRO.get(p.id);
  if (!ind) return 0;
  let totale = 0;
  for (const t of parole) {
    const punti = Math.max(puntiCodice(ind, t), puntiTesto(ind, t));
    if (!punti) return 0;
    totale += punti;
  }
  const frase = parole.map(t => t.parola).filter(Boolean);
  if (inSequenza(ind.campi[0].parole, frase)) totale += 200;
  else if (inSequenza(ind.campi[3].parole, frase)) totale += 30;
  return totale;
};

// Ordina per pertinenza; a parita' resta l'ordine di partenza (del catalogo).
const perPertinenza = (prodotti, parole) => prodotti
  .map((p, i) => ({ p, i, punti: punteggioRicerca(p, parole) }))
  .filter(x => x.punti > 0)
  .sort((a, b) => b.punti - a.punti || a.i - b.i)
  .map(x => x.p);

const cercaProdottiVetro = (testo) => {
  const parole = parolePerRicerca(testo);
  return parole.length ? perPertinenza(PRODOTTI_VETRO, parole) : [];
};

// I codici articolo che corrispondono alla ricerca, mostrati sotto il nome.
const codiciTrovati = (p, testo) => {
  const parole = parolePerRicerca(testo).filter(t => t.codice);
  const cod = [...new Set(p.varianti.map(v => v.codice))];
  return cod.filter(c => parole.some(t => codiceCorrisponde(soloLettereCifre(c), t)));
};

const primaImmagine = (p) => {
  const arr = Object.values(p.immagini || {})[0];
  return Array.isArray(arr) ? arr[0] : arr;
};

const finBg = (f) => FINISHES_VETRO[f] || 'linear-gradient(135deg,#c8c8c8,#9a9a9a)';
const Chip = ({ finitura }) => <span className="chip" style={{ background: finBg(finitura) }} title={finitura} />;
// Foto di prodotto: dalla build arriva { src, srcSet } con le versioni WebP
// a 640 e 1280 px, in sviluppo solo { src }. "sizes" dice al browser quanto
// sara' larga la foto sullo schermo, cosi' scarica la misura giusta.
const Foto = ({ foto, sizes, ...resto }) => (
  <img src={foto.src} srcSet={foto.srcSet} sizes={foto.srcSet ? sizes : undefined} {...resto} />
);
const Ghost = () => (
  <svg className="ghost" viewBox="0 0 120 90" aria-hidden="true">
    <circle cx="30" cy="45" r="17" />
    <path d="M30 45 C48 45 60 40 96 41 C104 41 104 49 96 49 C60 50 48 45 30 45 Z" />
  </svg>
);

/* ---------- Hash routing (indipendente dal Catalogo Generale) ---------- */
// Dopo il "?" l'indirizzo porta ricerca e filtri (es. #/cat/04/maniglioni?q=oregon):
// non cambiano la pagina, servono a ritrovarli tornando indietro.
function parseHash() {
  const h = window.location.hash.replace(/^#\/?/, '').split('?')[0];
  if (!h) return { view: 'cover' };
  if (h === 'indice') return { view: 'indice' };
  const mp = h.match(/^prodotto\/(\d+)$/);
  if (mp) return { view: 'prodotto', id: Number(mp[1]) };
  const m = h.match(/^cat\/(\d{2})(?:\/([a-z-]+))?$/);
  if (m && CATEGORIE_VETRO.some(c => c.id === m[1])) return { view: 'categoria', cat: m[1], sub: m[2] || null };
  return { view: 'cover' };
}
const leggiQuery = () => new URLSearchParams(window.location.hash.split('?')[1] || '');
// Ricerca e filtri della lista prodotti, letti dall'indirizzo. Lunghezza e
// interasse sono numeri nei dati, quindi vanno riconvertiti.
const filtriDa = (qs) => {
  const numeri = (k) => qs.getAll(k).map(Number).filter(n => !Number.isNaN(n));
  return {
    q: qs.get('q') || '',
    mat: qs.getAll('materiale'), prod: qs.getAll('produttore'), fin: qs.getAll('finitura'),
    diam: qs.getAll('diametro'), lung: numeri('lunghezza'), inter: numeri('interasse'),
    vetro: qs.getAll('vetro'), favOnly: qs.get('preferiti') === '1',
  };
};
// replaceState e non un nuovo hash: aggiorna l'indirizzo senza aggiungere un
// passo alla cronologia, altrimenti ogni lettera digitata andrebbe annullata
// con un "Indietro".
const scriviQuery = (qs) => {
  const s = qs.toString();
  const nuovo = window.location.hash.split('?')[0] + (s ? '?' + s : '');
  if (nuovo !== window.location.hash) window.history.replaceState(window.history.state, '', nuovo);
};

/* Posizione di scroll di ogni schermata, per ritrovarla con Indietro e Avanti.
   Aprendo un link invece si parte sempre dall'alto: go() lo segnala qui. */
const scrollMem = {};
let daLink = false;
const go = (path) => {
  if (window.location.hash !== '#' + path) daLink = true;
  window.location.hash = path;
};

/* ---------- Copertina ---------- */
function Cover() {
  return (
    <div className="cover">
      <div className="cover-top">
        <img className="clogo" src={logoCover} alt="Ferramenta Stigliano — dal 1869" />
        <h1 className="catgen">Catalogo Vetro</h1>
        <p className="tagline">Ferramenta e accessori per il settore del vetro. Una selezione dedicata, dal 1869.</p>
        <button className="enter" onClick={() => go('/indice')}>
          Sfoglia il catalogo <ArrowRight size={18} />
        </button>
      </div>
      <div className="cover-foot">Ferramenta <b>Stigliano</b> · Napoli · dal 1869</div>
    </div>
  );
}

/* ---------- Indice ---------- */
function Indice() {
  const count = (id) => PRODOTTI_VETRO.filter(p => p.categoria === id).length;
  const [q, setQ] = useState(() => leggiQuery().get('q') || '');
  useEffect(() => {
    const qs = new URLSearchParams();
    if (q) qs.set('q', q);
    scriviQuery(qs);
  }, [q]);
  const testo = q.trim();
  const risultati = useMemo(() => cercaProdottiVetro(testo), [testo]);

  return (
    <>
      <div className="topbar">
        <div className="shell">
          <img className="logo" src={logo} alt="Ferramenta Stigliano" onClick={() => go('/')} />
          <span className="section">Catalogo Vetro · Indice</span>
        </div>
      </div>
      <div className="shell">
        <div className="index-head">
          <h1>Categorie prodotto</h1>
          <hr className="rule" />
        </div>

        <div className="idx-search">
          <label className="search big">
            <Search size={18} />
            <input type="text" value={q} onChange={e => setQ(e.target.value)}
              placeholder="Cerca un articolo per nome, codice o finitura…"
              autoComplete="off" aria-label="Cerca in tutto il catalogo" />
            {testo && (
              <button type="button" className="search-clear" onClick={() => setQ('')}
                aria-label="Cancella la ricerca">×</button>
            )}
          </label>
        </div>

        {!testo ? (
          <div className="idx-list">
            {CATEGORIE_VETRO.map(c => {
              const n = count(c.id);
              return (
                <button className="idx-row" key={c.id} onClick={() => go(`/cat/${c.id}`)}>
                  <span className="idx-num">{c.id}</span>
                  <span className="idx-name">{c.nome}</span>
                  <span className="idx-dots" />
                  <span className="idx-meta">
                    {n > 0
                      ? <span className="idx-badge">{n} {n === 1 ? 'prodotto' : 'prodotti'}</span>
                      : <span className="idx-soon">in arrivo</span>}
                    <ChevronRight className="idx-arrow" />
                  </span>
                </button>
              );
            })}
          </div>
        ) : risultati.length > 0 ? (
          <>
            <p className="res-count">
              <b>{risultati.length}</b> {risultati.length === 1 ? 'articolo trovato' : 'articoli trovati'}
            </p>
            <div className="res-list">
              {risultati.map(p => {
                const img = primaImmagine(p);
                const codici = codiciTrovati(p, testo);
                return (
                  <button className="res-row" key={p.id} onClick={() => go(`/prodotto/${p.id}`)}>
                    <span className="res-thumb">
                      {img ? <Foto foto={img} sizes="60px" alt="" loading="lazy" /> : <span className="res-noimg">—</span>}
                    </span>
                    <span className="res-body">
                      <span className="res-name">{p.nome}</span>
                      <span className="res-meta">{subName(p.sottocategoria)}</span>
                      {codici.length > 0 && (
                        <span className="res-codes">
                          {codici.slice(0, 3).join(' · ')}
                          {codici.length > 3 && ` +${codici.length - 3}`}
                        </span>
                      )}
                    </span>
                    <ChevronRight className="res-arrow" />
                  </button>
                );
              })}
            </div>
          </>
        ) : (
          <div className="res-empty">
            <h2>Nessun articolo trovato</h2>
            <p>Nessun risultato per “{testo}”. Prova con il nome del modello, un codice o una finitura.</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

/* ---------- Pagina categoria ---------- */
function CategoryPage({ cat, subParam }) {
  const info = CATEGORIE_VETRO.find(c => c.id === cat) || CATEGORIE_VETRO[0];
  const sottocategorie = SOTTOCATEGORIE_PER_CATEGORIA[cat];
  const hasSubs = !!sottocategorie;
  const sub = hasSubs
    ? (subParam && sottocategorie.some(s => s.id === subParam) ? subParam : sottocategorie[0].id)
    : null;
  const setSub = (id) => go('/cat/' + cat + '/' + id);
  const catProducts = PRODOTTI_VETRO.filter(p => p.categoria === cat);
  const subProducts = hasSubs ? catProducts.filter(p => p.sottocategoria === sub) : catProducts;

  return (
    <>
      <div className="topbar">
        <div className="shell">
          <img className="logo" src={logo} alt="Ferramenta Stigliano" onClick={() => go('/indice')} />
          <span className="section">{info.nome}</span>
        </div>
      </div>
      <div className="shell">
        <div className="crumbs">
          <button className="crumb-link" onClick={() => go('/indice')}><ChevronLeft size={14} /> Indice</button>
          <span className="crumb-sep">/</span>
          <span className="crumb-now">Categoria {info.id}</span>
        </div>
        <div className="intro">
          <div className="num">{info.id}</div>
          <h1>{info.nome}</h1>
          <hr className="rule" />
        </div>
        {hasSubs && (
          <div className="subbar" role="tablist" aria-label="Sottocategorie">
            {sottocategorie.map(s => {
              const n = catProducts.filter(p => p.sottocategoria === s.id).length;
              return (
                <button key={s.id} className={`subchip${s.id === sub ? ' active' : ''}`}
                  role="tab" aria-selected={s.id === sub} onClick={() => setSub(s.id)}>
                  {s.nome}
                  {n > 0 && <span className="subcount">{n}</span>}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {catProducts.length === 0 ? (
        <div className="shell">
          <div className="prep">
            <span className="badge">Sezione {info.id}</span>
            <h2>Sezione in preparazione</h2>
            <p>Stiamo caricando gli articoli di questa categoria. Torna presto per sfogliarli.</p>
            <button className="back" onClick={() => go('/indice')}>Torna all’indice</button>
          </div>
        </div>
      ) : subProducts.length > 0 ? (
        <ProductCatalog
          // La chiave ricrea la lista a ogni sottocategoria: ricerca e filtri
          // ripartono da quelli dell'indirizzo, cioe' puliti aprendo una
          // sottocategoria e ritrovati tornando indietro.
          key={cat + '/' + sub} products={subProducts} />
      ) : (
        <div className="shell">
          <div className="prep">
            <span className="badge">{subName(sub)}</span>
            <h2>Sottocategoria in preparazione</h2>
            <p>Non ci sono ancora articoli in questa sottocategoria. Presto aggiungeremo nuovi prodotti.</p>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

/* ---------- Catalogo prodotti (griglia + ricerca + filtri) ---------- */
function ProductCatalog({ products }) {
  // Ricerca e filtri partono da quelli scritti nell'indirizzo, cosi' tornando
  // indietro da una scheda prodotto si ritrovano come li si era lasciati.
  const [iniziali] = useState(() => filtriDa(leggiQuery()));
  const [q, setQ] = useState(iniziali.q);
  const [mat, setMat] = useState(iniziali.mat);
  const [fin, setFin] = useState(iniziali.fin);
  const [prod, setProd] = useState(iniziali.prod);
  const [diam, setDiam] = useState(iniziali.diam);
  const [lung, setLung] = useState(iniziali.lung);
  const [inter, setInter] = useState(iniziali.inter);
  const [vetro, setVetro] = useState(iniziali.vetro);
  const [favOnly, setFavOnly] = useState(iniziali.favOnly);
  useEffect(() => {
    const qs = new URLSearchParams();
    if (q) qs.set('q', q);
    mat.forEach(v => qs.append('materiale', v));
    prod.forEach(v => qs.append('produttore', v));
    fin.forEach(v => qs.append('finitura', v));
    diam.forEach(v => qs.append('diametro', v));
    lung.forEach(v => qs.append('lunghezza', v));
    inter.forEach(v => qs.append('interasse', v));
    vetro.forEach(v => qs.append('vetro', v));
    if (favOnly) qs.set('preferiti', '1');
    scriviQuery(qs);
  }, [q, mat, fin, prod, diam, lung, inter, vetro, favOnly]);
  const [fOpen, setFOpen] = useState(false);
  const [drop, setDrop] = useState(null); // quale tendina è aperta (una alla volta)
  const [favorites, setFavorites] = useState(() => {
    try { const s = localStorage.getItem(FAVORITI_KEY_VETRO); return s ? JSON.parse(s) : []; }
    catch { return []; }
  });
  useEffect(() => {
    localStorage.setItem(FAVORITI_KEY_VETRO, JSON.stringify(favorites));
  }, [favorites]);
  const toggleFav = (id) => setFavorites(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);

  // Vista a griglia sul cellulare (1 o 2 colonne): la scelta resta ricordata.
  const [mobileView, setMobileView] = useState(() => {
    try { return localStorage.getItem('ferramenta_vetro_mobile_view') || 'list'; }
    catch { return 'list'; }
  });
  useEffect(() => {
    try { localStorage.setItem('ferramenta_vetro_mobile_view', mobileView); } catch {}
  }, [mobileView]);

  const mats = useMemo(() => [...new Set(products.flatMap(materialiDi))].sort((a, b) => a.localeCompare(b, 'it')), [products]);
  // I prodotti senza finitura (senzaFinitura: la sceglie il cliente, non la
  // dichiariamo noi) restano fuori sia dall'elenco delle finiture sia dal filtro.
  const fins = useMemo(() => [...new Set(products.filter(p => !p.senzaFinitura).flatMap(p => p.varianti.map(v => v.finitura)))].sort((a, b) => a.localeCompare(b, 'it')), [products]);
  const prods = useMemo(() => [...new Set(products.map(p => p.fornitore))].sort((a, b) => a.localeCompare(b, 'it')), [products]);
  const diams = useMemo(() => [...new Set(products.map(p => p.diametro).filter(Boolean))]
    .sort((a, b) => parseFloat(a) - parseFloat(b)), [products]);
  const lunghezze = useMemo(() => [...new Set(products.flatMap(p => p.varianti.map(v => v.lunghezza).filter(v => v != null)))]
    .sort((a, b) => a - b), [products]);
  const interassi = useMemo(() => [...new Set(products.flatMap(p => p.varianti.map(v => v.interasse).filter(v => v != null)))]
    .sort((a, b) => a - b), [products]);
  const vetri = useMemo(() => [...new Set(products.flatMap(p => p.spessoriVetro || []))]
    .sort((a, b) => a.localeCompare(b, 'it', { numeric: true })), [products]);

  // Dentro lo stesso filtro le scelte sono in OR, tra filtri diversi in AND.
  const parole = useMemo(() => parolePerRicerca(q), [q]);
  const match = (p, salta) => {
    const okQ = !parole.length || punteggioRicerca(p, parole) > 0;
    const okM = salta === 'mat' || !mat.length || materialiDi(p).some(m => mat.includes(m));
    const okF = salta === 'fin' || !fin.length || (!p.senzaFinitura && p.varianti.some(v => fin.includes(v.finitura)));
    const okP = salta === 'prod' || !prod.length || prod.includes(p.fornitore);
    const okD = salta === 'diam' || !diam.length || diam.includes(p.diametro);
    const okL = salta === 'lung' || !lung.length || p.varianti.some(v => lung.includes(v.lunghezza));
    const okI = salta === 'inter' || !inter.length || p.varianti.some(v => inter.includes(v.interasse));
    const okV = salta === 'vetro' || !vetro.length || (p.spessoriVetro || []).some(v => vetro.includes(v));
    const okFav = !favOnly || favorites.includes(p.id);
    return okQ && okM && okF && okP && okD && okL && okI && okV && okFav;
  };
  // Con una ricerca in corso i prodotti vanno in ordine di pertinenza.
  const trovati = products.filter(p => match(p, null));
  const filtered = parole.length ? perPertinenza(trovati, parole) : trovati;
  const disponibile = (campo, test) => products.some(p => match(p, campo) && test(p));
  const activeCount = (q.trim() ? 1 : 0) + mat.length + fin.length + prod.length + diam.length + lung.length + inter.length + vetro.length + (favOnly ? 1 : 0);
  const toggleVal = (set, v) => set(prev => prev.includes(v) ? prev.filter(x => x !== v) : [...prev, v]);
  const resetAll = () => { setQ(''); setMat([]); setFin([]); setProd([]); setDiam([]); setLung([]); setInter([]); setVetro([]); setFavOnly(false); };

  const Gruppo = ({ etichetta, campo, opzioni, scelte, set, test, label, tutti, plurale }) => {
    const aperto = drop === campo;
    const riass = scelte.length === 0 ? tutti
      : scelte.length === 1 ? (label ? label(scelte[0]) : scelte[0])
      : scelte.length + ' ' + plurale;
    return (
      <div className="fld">
        <span className="fld-k">{etichetta}</span>
        <button type="button" className={`fdrop-btn${aperto ? ' open' : ''}${scelte.length ? ' has' : ''}`}
          aria-expanded={aperto} onClick={() => setDrop(d => d === campo ? null : campo)}>
          <span className="fdrop-v">{riass}</span>
          <ChevronDown className="fdrop-chev" size={15} />
        </button>
        <div className={`fdrop-menu${aperto ? ' open' : ''}`}>
          <div className="fdrop-inner">
            <div className="fdrop-list">
              {opzioni.map(o => {
                const on = scelte.includes(o);
                const off = !on && !disponibile(campo, p => test(p, o));
                return (
                  <label key={o} className={`fopt${on ? ' on' : ''}${off ? ' off' : ''}`}>
                    <input type="checkbox" checked={on} disabled={off} onChange={() => toggleVal(set, o)} />
                    <span className="fbox" aria-hidden="true" />
                    <span className="ftxt">{label ? label(o) : o}</span>
                  </label>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="toolbar-wrap">
        <div className="shell">
          <div className="filterbar">
            <button className={`filter-trigger${fOpen ? ' open' : ''}`} aria-expanded={fOpen}
              onClick={() => { setFOpen(o => !o); setDrop(null); }}>
              <SlidersHorizontal size={16} />
              <span>Filtra prodotti</span>
              {activeCount > 0 && <span className="filter-badge">{activeCount}</span>}
              <ChevronDown className="fchev" size={16} />
            </button>
            <label className="search">
              <Search size={16} />
              <input type="text" value={q} onChange={e => setQ(e.target.value)}
                placeholder="Cerca per nome o codice…" autoComplete="off" aria-label="Cerca" />
            </label>
            <span className="count">
              <b>{filtered.length}</b> {filtered.length === 1 ? 'prodotto' : 'prodotti'}
            </span>
            <div className="mobile-view-toggle" role="group" aria-label="Visualizzazione">
              <button type="button" className={mobileView === 'list' ? 'active' : ''}
                aria-pressed={mobileView === 'list'} aria-label="Vista a elenco"
                onClick={() => setMobileView('list')}>
                <List size={16} />
              </button>
              <button type="button" className={mobileView === 'grid2' ? 'active' : ''}
                aria-pressed={mobileView === 'grid2'} aria-label="Vista a griglia doppia"
                onClick={() => setMobileView('grid2')}>
                <LayoutGrid size={16} />
              </button>
            </div>
          </div>

          <div className={`filter-panel${fOpen ? ' open' : ''}`}>
            <div className="filter-inner">
              <div className="filter-grid">
                <Gruppo etichetta="Materiale" campo="mat" opzioni={mats} scelte={mat} set={setMat}
                  test={(p, o) => materialiDi(p).includes(o)} tutti="Tutti i materiali" plurale="materiali" />
                <Gruppo etichetta="Produttore" campo="prod" opzioni={prods} scelte={prod} set={setProd}
                  test={(p, o) => p.fornitore === o} tutti="Tutti i produttori" plurale="produttori" />
                <Gruppo etichetta="Finitura" campo="fin" opzioni={fins} scelte={fin} set={setFin}
                  test={(p, o) => !p.senzaFinitura && p.varianti.some(v => v.finitura === o)} tutti="Tutte le finiture" plurale="finiture" />
                {diams.length > 1 && (
                  <Gruppo etichetta="Diametro" campo="diam" opzioni={diams} scelte={diam} set={setDiam}
                    test={(p, o) => p.diametro === o} tutti="Tutti i diametri" plurale="diametri" />
                )}
                {lunghezze.length > 1 && (
                  <Gruppo etichetta="Lunghezza" campo="lung" opzioni={lunghezze} scelte={lung} set={setLung}
                    test={(p, o) => p.varianti.some(v => v.lunghezza === o)} tutti="Tutte le lunghezze" plurale="lunghezze"
                    label={(o) => o + ' mm'} />
                )}
                {interassi.length > 1 && (
                  <Gruppo etichetta="Interasse" campo="inter" opzioni={interassi} scelte={inter} set={setInter}
                    test={(p, o) => p.varianti.some(v => v.interasse === o)} tutti="Tutti gli interassi" plurale="interassi"
                    label={(o) => o + ' mm'} />
                )}
                {vetri.length > 1 && (
                  <Gruppo etichetta="Spessore vetro" campo="vetro" opzioni={vetri} scelte={vetro} set={setVetro}
                    test={(p, o) => (p.spessoriVetro || []).includes(o)} tutti="Tutti gli spessori" plurale="spessori" />
                )}
              </div>
              <div className="filter-actions">
                <button className={`fav-toggle${favOnly ? ' on' : ''}`} aria-pressed={favOnly}
                  onClick={() => setFavOnly(v => !v)}>
                  <Heart size={15} fill={favOnly ? 'currentColor' : 'none'} /> Solo preferiti
                </button>
                {activeCount > 0 && <button className="filter-clear" onClick={resetAll}>Azzera filtri</button>}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="shell">
        <div className={`gallery${mobileView === 'grid2' ? ' compact-2col' : ''}`}>
          {filtered.map((p, idx) => (
            <ProductCard key={p.id} product={p} idx={idx} compatta={mobileView === 'grid2'}
              isFav={favorites.includes(p.id)} onFav={() => toggleFav(p.id)} />
          ))}

          {filtered.length === 0 && (
            <div className="empty">
              <p className="big">Nessun risultato</p>
              <p>Nessun prodotto corrisponde ai filtri selezionati.</p>
              <button className="reset" onClick={resetAll}>Azzera filtri</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

/* ---------- Scheda prodotto (card griglia) ---------- */
function ProductCard({ product: p, idx, compatta, isFav, onFav }) {
  const images = p.immagini || {};
  const ufins = [...new Set(p.varianti.map(v => v.finitura))];
  const firstWithImg = p.varianti.find(v => images[v.finitura]);
  const [selFin, setSelFin] = useState(firstWithImg ? firstWithImg.finitura : p.varianti[0].finitura);
  const [open, setOpen] = useState(false);
  const [imgIdx, setImgIdx] = useState(0);
  const gallery = images[selFin] || [];
  const selImg = gallery[imgIdx] || gallery[0];
  // Cambiando finitura si riparte dalla prima foto della nuova galleria.
  useEffect(() => { setImgIdx(0); }, [selFin]);
  const prevImg = e => { e.stopPropagation(); setImgIdx(i => (i - 1 + gallery.length) % gallery.length); };
  const nextImg = e => { e.stopPropagation(); setImgIdx(i => (i + 1) % gallery.length); };
  const touchX = React.useRef(null);
  const onTouchStart = e => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd = e => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) (dx < 0 ? nextImg : prevImg)(e);
    touchX.current = null;
  };
  // Con una sola finitura non c'e' niente da scegliere: il selettore sparisce.
  const sceltaFin = ufins.length > 1;
  // Prodotti su misura in cui la finitura la sceglie il cliente: non ne
  // dichiariamo nessuna, quindi pastiglia e colonna finitura spariscono.
  const senzaFin = !!p.senzaFinitura;
  // Varianti che differiscono per materiale (stessa finitura): serve la colonna.
  const colMat = p.varianti.some(v => v.materiale);
  // Misure a piu' assi (es. maniglioni: diametro, lunghezza, interasse): qui, nella
  // card, la tabella si limita a mostrare le colonne — la scelta della misura resta
  // nella pagina prodotto completa.
  const assi = p.assi;

  return (
    <article className="card" style={{ animationDelay: `${Math.min(idx * 45, 400)}ms` }}>
      <div className="media">
        <button className={`fav${isFav ? ' on' : ''}`} aria-pressed={isFav}
          aria-label={isFav ? 'Rimuovi dai preferiti' : 'Aggiungi ai preferiti'} onClick={onFav}>
          <Heart size={16} fill={isFav ? 'currentColor' : 'none'} />
        </button>
        <div className="media-body clickable" onClick={() => go('/prodotto/' + p.id)} role="link"
          tabIndex={0} onKeyDown={e => { if (e.key === 'Enter') go('/prodotto/' + p.id); }}
          aria-label={`Apri la scheda di ${p.nome}`}
          onTouchStart={gallery.length > 1 ? onTouchStart : undefined}
          onTouchEnd={gallery.length > 1 ? onTouchEnd : undefined}>
          {selImg ? <Foto foto={selImg} sizes={compatta ? '(max-width: 640px) 50vw, 400px' : '(max-width: 640px) 100vw, 400px'}
              alt={`${p.nome} — ${selFin}`} loading="lazy" />
            : <div className="noimg"><Ghost /><small>Immagine non disponibile</small></div>}
        </div>
        {gallery.length > 1 && (
          <>
            <button className="media-nav prev" aria-label="Foto precedente" onClick={prevImg}>
              <ChevronLeft size={18} />
            </button>
            <button className="media-nav next" aria-label="Foto successiva" onClick={nextImg}>
              <ChevronRight size={18} />
            </button>
            <div className="media-dots">
              {gallery.map((_, i) => (
                <button key={i} className={`media-dot${i === imgIdx ? ' active' : ''}`}
                  aria-label={`Foto ${i + 1}`} aria-pressed={i === imgIdx}
                  onClick={e => { e.stopPropagation(); setImgIdx(i); }} />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="cbody">
        <div className="name-row">
          <h2 className="name clickable" onClick={() => go('/prodotto/' + p.id)}>{p.nome}</h2>
        </div>
        <div className="submeta">
          <p className="sub">{subName(p.sottocategoria)}</p>
          {p.materiale && <div className="matrow"><span className="lab">Materiale</span><span className="val">{p.materiale}</span></div>}
        </div>
        {p.scheda !== undefined && (
          p.scheda
            ? <button className="scheda" onClick={() => openScheda(p.id, selFin)}><Download size={15} /> Scheda tecnica</button>
            : <button className="scheda disabled" disabled title="Scheda tecnica in arrivo"><Download size={15} /> Scheda tecnica <em>in arrivo</em></button>
        )}
        {senzaFin ? null : sceltaFin ? (
          <div className="finishes">
            <div className="fbtns">
              {ufins.map((f, i) => (
                <button key={i} className={`fbtn${f === selFin ? ' active' : ''}`}
                  onClick={() => setSelFin(f)} title={f} aria-label={f} aria-pressed={f === selFin}>
                  <Chip finitura={f} />
                </button>
              ))}
            </div>
            <span className="fhint">Scegli la finitura</span>
          </div>
        ) : (
          <div className="finishes">
            <span className="chips"><Chip finitura={selFin} /></span>
            <span className="fcount">{selFin}</span>
          </div>
        )}
        <button className="detail-cta" onClick={() => go('/prodotto/' + p.id)}>
          Scheda completa
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
        </button>
        <button className="expand" aria-expanded={open} onClick={() => setOpen(o => !o)}>
          <span>Varianti disponibili ({p.varianti.length})</span>
          <svg className="chev" viewBox="0 0 6 10" fill="none"><path d="M1 1l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <div className={`variants-wrap${open ? ' open' : ''}`}>
          <div className="variants-inner">
            <table className="variants">
              <thead><tr><th>Codice articolo</th>{!senzaFin && <th>Finitura</th>}{colMat && <th>Materiale</th>}
                {assi && assi.map(a => <th key={a.chiave} className="ver">{a.etichetta}</th>)}
              </tr></thead>
              <tbody>
                {p.varianti.map((v, i) => (
                  <tr key={i} className={`${sceltaFin ? 'vrow' : ''}${sceltaFin && v.finitura === selFin ? ' active' : ''}`}
                    onClick={sceltaFin ? () => setSelFin(v.finitura) : undefined}>
                    <td className="code">{v.codice}</td>
                    {!senzaFin && <td><span className="fin-cell"><Chip finitura={v.finitura} />{v.finitura}</span></td>}
                    {colMat && <td className="ver">{v.materiale || p.materiale}</td>}
                    {assi && assi.map(a => <td key={a.chiave} className="ver">{v[a.chiave]}{a.suffisso || ''}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </article>
  );
}

function SezioneTendina({ title, badge, aperta = false, children }) {
  const [open, setOpen] = useState(aperta);
  return (
    <section className="rel-section">
      <button type="button" className={`rel-head rel-toggle${open ? ' open' : ''}`}
        aria-expanded={open} onClick={() => setOpen(o => !o)}>
        <h2>{title}</h2>
        {badge != null && <span className="rel-badge-n">{badge}</span>}
        <ChevronDown className="rel-chev" size={18} />
      </button>
      <div className={`rel-wrap${open ? ' open' : ''}`}>
        <div className="rel-inner">{children}</div>
      </div>
    </section>
  );
}

/* Articoli collegati: quelli indispensabili per montare il pezzo
   ("essenziali") e quelli che possono servire ma non sono obbligatori
   ("facoltativi"). Entrambe le sezioni compaiono solo se il prodotto ne
   elenca almeno uno, così le schede senza collegamenti restano pulite. */
function RelatedCard({ p }) {
  const img = (p.immagini && (p.immagini[Object.keys(p.immagini)[0]] || [])[0]) || null;
  return (
    <button className="rel-card" onClick={() => go('/prodotto/' + p.id)}>
      <div className="rel-media">
        {img ? <Foto foto={img} sizes="80px" alt={p.nome} loading="lazy" /> : <div className="noimg"><Ghost /></div>}
      </div>
      <div className="rel-body">
        <span className="rel-name">{p.nome}</span>
        <span className="rel-forn">{p.varianti.map(v => v.codice).join(' · ')}</span>
      </div>
      <ChevronRight size={16} className="rel-arrow" />
    </button>
  );
}

function RelatedRow({ title, ids, nota }) {
  const items = (ids || []).map(id => PRODOTTI_VETRO.find(p => p.id === id)).filter(Boolean);
  if (!items.length) return null;
  return (
    <SezioneTendina title={title} badge={items.length}>
      {nota && <p className="rel-testo">{nota}</p>}
      <div className="rel-grid">{items.map(p => <RelatedCard key={p.id} p={p} />)}</div>
    </SezioneTendina>
  );
}

/* ---------- Pagina prodotto ---------- */
function ProductDetail({ id }) {
  const p = PRODOTTI_VETRO.find(x => x.id === id);
  const info = CATEGORIE_VETRO.find(c => c.id === (p && p.categoria)) || CATEGORIE_VETRO[0];
  const images = (p && p.immagini) || {};
  const firstWithImg = p && p.varianti.find(v => images[v.finitura]);
  const [selFin, setSelFin] = useState(firstWithImg ? firstWithImg.finitura : (p && p.varianti[0] && p.varianti[0].finitura));
  const [imgIdx, setImgIdx] = useState(0);
  useEffect(() => { setImgIdx(0); }, [selFin]);
  const [favorites, setFavorites] = useState(() => {
    try { const s = localStorage.getItem(FAVORITI_KEY_VETRO); return s ? JSON.parse(s) : []; }
    catch { return []; }
  });
  useEffect(() => {
    localStorage.setItem(FAVORITI_KEY_VETRO, JSON.stringify(favorites));
  }, [favorites]);

  /* ---- Misure a piu' assi (es. maniglioni: diametro, lunghezza, interasse) ----
     Ogni asse mostra tutte le misure della finitura scelta; dopo un clic, gli
     altri assi lasciano selezionabili solo le misure compatibili con quella. */
  const assi = p && p.assi;
  const [mis, setMis] = useState(() => {
    if (!assi || !p || !p.varianti.length) return null;
    const v0 = p.varianti[0], o = {};
    assi.forEach(a => { o[a.chiave] = v0[a.chiave]; });
    return o;
  });
  const [ultimoAsse, setUltimoAsse] = useState(null);

  const perFinitura = (v) => v.finitura === selFin;
  const opzioniAsse = (k) => [...new Set((p ? p.varianti : []).filter(perFinitura).map(v => v[k]))]
    .sort((a, b) => (typeof a === 'number' ? a - b : String(a).localeCompare(String(b), 'it', { numeric: true })));
  const misuraDisponibile = (k, val) => p.varianti.some(v =>
    perFinitura(v) && v[k] === val &&
    (!ultimoAsse || ultimoAsse === k || v[ultimoAsse] === mis[ultimoAsse]));
  const scegliMisura = (k, val) => {
    const cand = p.varianti.filter(v => perFinitura(v) && v[k] === val);
    if (!cand.length) return;
    let best = cand[0], punti = -1;
    cand.forEach(v => {
      const s = assi.reduce((acc, a) => acc + (a.chiave !== k && v[a.chiave] === mis[a.chiave] ? 1 : 0), 0);
      if (s > punti) { punti = s; best = v; }
    });
    const o = {}; assi.forEach(a => { o[a.chiave] = best[a.chiave]; });
    setMis(o); setUltimoAsse(k);
  };
  // cambiando finitura, riporta le misure su una combinazione esistente
  useEffect(() => {
    if (!assi || !mis || !p) return;
    const valida = p.varianti.some(v => perFinitura(v) && assi.every(a => v[a.chiave] === mis[a.chiave]));
    if (valida) return;
    const v0 = p.varianti.find(perFinitura);
    if (!v0) return;
    const o = {}; assi.forEach(a => { o[a.chiave] = v0[a.chiave]; });
    setMis(o); setUltimoAsse(null);
  }, [selFin]);

  if (!p) {
    return (
      <>
        <div className="topbar"><div className="shell">
          <img className="logo" src={logo} alt="Ferramenta Stigliano" onClick={() => go('/indice')} />
          <span className="section">Prodotto</span>
        </div></div>
        <div className="shell"><div className="prep">
          <span className="badge">Prodotto</span>
          <h2>Prodotto non trovato</h2>
          <p>La scheda richiesta non è disponibile.</p>
          <button className="back" onClick={() => go('/indice')}>Torna all’indice</button>
        </div></div>
        <Footer />
      </>
    );
  }

  const ufins = [...new Set(p.varianti.map(v => v.finitura))];
  const gallery = images[selFin] || [];
  const selImg = gallery[imgIdx] || gallery[0];
  const sceltaFin = ufins.length > 1;
  const senzaFin = !!p.senzaFinitura;
  const colMat = p.varianti.some(v => v.materiale);
  // Codice della variante attualmente selezionata: serve per aprire la scheda
  // giusta quando ogni misura ha la propria (es. un distanziale venduto in
  // piu' lunghezze, ciascuna con la sua scheda tecnica).
  const varianteAttiva = assi
    ? p.varianti.find(v => perFinitura(v) && mis && assi.every(a => v[a.chiave] === mis[a.chiave]))
    : p.varianti.find(perFinitura);
  const codiceAttivo = (varianteAttiva || p.varianti[0]).codice;
  const isFav = favorites.includes(p.id);
  const toggleFav = () => setFavorites(prev => prev.includes(p.id) ? prev.filter(x => x !== p.id) : [...prev, p.id]);

  return (
    <>
      <div className="topbar"><div className="shell">
        <img className="logo" src={logo} alt="Ferramenta Stigliano" onClick={() => go('/indice')} />
        <span className="section">{info.nome}</span>
      </div></div>

      <div className="shell">
        <div className="crumbs">
          <button className="crumb-link" onClick={() => go('/indice')}><ChevronLeft size={14} /> Indice</button>
          <span className="crumb-sep">/</span>
          <button className="crumb-link" onClick={() => go('/cat/' + p.categoria)}>Categoria {p.categoria}</button>
          <span className="crumb-sep">/</span>
          <span className="crumb-now">{p.nome}</span>
        </div>

        <div className="pdp">
          <div className="pdp-media">
            <div className="media">
              <button className={`fav${isFav ? ' on' : ''}`} aria-pressed={isFav}
                aria-label={isFav ? 'Rimuovi dai preferiti' : 'Aggiungi ai preferiti'} onClick={toggleFav}>
                <Heart size={17} fill={isFav ? 'currentColor' : 'none'} />
              </button>
              <div className="media-body">
                {selImg ? <Foto foto={selImg} sizes="(max-width: 760px) 100vw, 600px" alt={`${p.nome} — ${selFin}`} />
                  : <div className="noimg"><Ghost /><small>Immagine non disponibile</small></div>}
              </div>
              {!senzaFin && <div className="media-cap"><Chip finitura={selFin} /><span>{selFin}</span></div>}
            </div>
            {gallery.length > 1 && (
              <div className="pdp-thumbs">
                {gallery.map((img, i) => (
                  <button key={i} className={`pdp-thumb${i === imgIdx ? ' active' : ''}`}
                    onClick={() => setImgIdx(i)} aria-label={`Foto ${i + 1}`} aria-pressed={i === imgIdx}>
                    <Foto foto={img} sizes="64px" alt={`${p.nome} — vista ${i + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="pdp-info">
            <div className="name-row">
              <h1 className="pdp-name">{p.nome}</h1>
            </div>
            <p className="pdp-sub">{subName(p.sottocategoria)}</p>
            <hr className="rule" />
            <div className="pdp-specs">
              {p.materiale && <div className="pdp-spec"><span className="k">Materiale</span><span className="v">{p.materiale}</span></div>}
              {p.dimensioni && <div className="pdp-spec"><span className="k">Misure</span><span className="v">{p.dimensioni}</span></div>}
              <div className="pdp-spec">
                <span className="k">Fornitore</span>
                <span className="v">
                  {p.fornitoreLogo
                    ? <span className="forn-logo"><img src={p.fornitoreLogo} alt={p.fornitore} /></span>
                    : p.fornitore}
                </span>
              </div>
            </div>

            {!senzaFin && <div className="finishes pdp-finishes">
              <span className="fhint">{sceltaFin ? 'Scegli la finitura' : 'Finitura'}</span>
              <div className="fbtns">
                {sceltaFin ? ufins.map((f, i) => (
                  <button key={i} className={`fbtn${f === selFin ? ' active' : ''}`}
                    onClick={() => setSelFin(f)} title={f} aria-label={f} aria-pressed={f === selFin}>
                    <Chip finitura={f} />
                  </button>
                )) : (
                  <span className="fin-cell"><Chip finitura={selFin} />{selFin}</span>
                )}
              </div>
            </div>}

            {assi && mis && assi.map(a => (
              <div className="finishes pdp-finishes" key={a.chiave}>
                <span className="fhint">{a.etichetta}</span>
                <div className="fbtns">
                  {opzioniAsse(a.chiave).map(val => {
                    const on = mis[a.chiave] === val;
                    const off = !on && !misuraDisponibile(a.chiave, val);
                    return (
                      <button key={String(val)} className={`vbtn${on ? ' active' : ''}${off ? ' off' : ''}`}
                        aria-pressed={on} onClick={() => scegliMisura(a.chiave, val)}
                        title={off ? 'Non abbinabile alla misura scelta: clicca per partire da questa' : undefined}>
                        {val}{a.suffisso || ''}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

            <div className="pdp-docs">
              {/* Niente scheda tecnica (undefined) per gli articoli che non ne hanno una,
                  come le chiavi ergonomiche: qui il tasto non compare proprio. */}
              {p.scheda !== undefined && (
                p.scheda
                  ? <button className="scheda" onClick={() => openScheda(p.id, codiceAttivo)}><Download size={15} /> Scheda tecnica</button>
                  : <button className="scheda disabled" disabled title="Scheda tecnica in arrivo"><Download size={15} /> Scheda tecnica <em>in arrivo</em></button>
              )}
              {/* Il rapporto di prova esiste solo per gli articoli certificati:
                  dove manca del tutto non mostriamo nulla. */}
              {p.rapporto !== undefined && (
                p.rapporto
                  ? <a className="scheda" href={p.rapporto} target="_blank" rel="noopener">
                      <Download size={15} /> Rapporto di prova
                    </a>
                  : <button className="scheda disabled" disabled title="Rapporto di prova in arrivo">
                      <Download size={15} /> Rapporto di prova <em>in arrivo</em>
                    </button>
              )}
              {/* Video tutorial di montaggio: presente solo per gli articoli che
                  ne hanno uno. Puo' essere un solo link oppure piu' video con
                  etichetta, quando il montaggio cambia da versione a versione. */}
              {p.video && (Array.isArray(p.video) ? p.video : [{ url: p.video }]).map((v, i) => (
                <a className="scheda" key={i} href={v.url} target="_blank" rel="noopener">
                  <PlayCircle size={15} /> {v.etichetta ? `Video montaggio · ${v.etichetta}` : 'Video tutorial montaggio'}
                </a>
              ))}
              {/* Istruzioni di montaggio in PDF: un documento a parte dalla scheda
                  tecnica, presente solo per gli articoli che ce l'hanno. */}
              {p.istruzioni && (
                <a className="scheda" href={p.istruzioni} target="_blank" rel="noopener">
                  <Download size={15} /> Istruzioni di montaggio
                </a>
              )}
            </div>

            <div className="pdp-variants">
              <h3>Varianti disponibili ({p.varianti.length})</h3>
              <div className="variants-scroll">
              <table className="variants">
                <thead><tr><th>Codice articolo</th>{!senzaFin && <th>Finitura</th>}{colMat && <th>Materiale</th>}
                  {assi && assi.map(a => <th key={a.chiave} className="ver">{a.etichetta}</th>)}
                </tr></thead>
                <tbody>
                  {p.varianti.map((v, i) => {
                    const active = assi
                      ? (v.finitura === selFin && mis && assi.every(a => v[a.chiave] === mis[a.chiave]))
                      : sceltaFin && v.finitura === selFin;
                    const scegliRiga = () => {
                      if (assi) {
                        setSelFin(v.finitura);
                        const o = {}; assi.forEach(a => { o[a.chiave] = v[a.chiave]; });
                        setMis(o); setUltimoAsse(null);
                      } else if (sceltaFin) {
                        setSelFin(v.finitura);
                      }
                    };
                    return (
                    <tr key={i} className={`${(sceltaFin || assi) ? 'vrow' : ''}${active ? ' active' : ''}`}
                      onClick={(sceltaFin || assi) ? scegliRiga : undefined}>
                      <td className="code">{v.codice}</td>
                      {!senzaFin && <td><span className="fin-cell"><Chip finitura={v.finitura} />{v.finitura}</span></td>}
                      {colMat && <td className="ver">{v.materiale || p.materiale}</td>}
                      {assi && assi.map(a => <td key={a.chiave} className="ver">{v[a.chiave]}{a.suffisso || ''}</td>)}
                    </tr>
                    );
                  })}
                </tbody>
              </table>
              </div>
            </div>
          </div>
        </div>

        {p.descrizione && (
          <SezioneTendina title="Descrizione" aperta>
            <p className="rel-testo">{p.descrizione}</p>
          </SezioneTendina>
        )}
        {p.caratteristiche && p.caratteristiche.length > 0 && (
          <SezioneTendina title="Caratteristiche">
            <dl className="carat-list">
              {p.caratteristiche.map((c, i) => (
                <div className="carat-item" key={i}>
                  <dt className="carat-title">{c.titolo}</dt>
                  <dd className="carat-text">{c.testo}</dd>
                </div>
              ))}
            </dl>
          </SezioneTendina>
        )}
        <RelatedRow title="Articoli essenziali" ids={p.essenziali}
          nota="Servono per completare il montaggio di questo articolo e si ordinano a parte." />
        <RelatedRow title="Articoli facoltativi" ids={p.facoltativi}
          nota="Non sono obbligatori: si aggiungono solo se servono all'installazione." />
      </div>
      <Footer />
    </>
  );
}

/* Visualizzatore scheda tecnica in pagina (immagine a schermo intero) */
function SchedaViewer() {
  const [item, setItem] = useState(null);
  // Chiusura da ✕, clic fuori o Esc: si toglie il passo aggiunto in apertura
  // e la chiusura vera arriva con popstate. Se quel passo non c'e', si chiude
  // e basta.
  const chiudiVisore = () => {
    if (window.history.state && window.history.state.schedaAperta) window.history.back();
    else { setItem(null); document.body.style.overflow = ''; }
  };
  useEffect(() => {
    const chiudi = () => { setItem(null); document.body.style.overflow = ''; };
    // Dopo un ricaricamento col visore aperto lo stato di cronologia resta,
    // ma il visore no: lo si azzera per non far chiudere niente a vuoto.
    if (window.history.state && window.history.state.schedaAperta) window.history.replaceState(null, '');
    const onOpen = (e) => {
      const { id, key } = e.detail || {};
      const p = PRODOTTI_VETRO.find(x => x.id === id);
      const src = pickScheda(SCHEDA_IMG_VETRO[id], key);
      if (!p || !src) return;
      // Prodotti con una scheda per variante (es. il distanziale, una per
      // lunghezza): titolo e nome del file dicono quale si sta guardando,
      // altrimenti le schede scaricate sono tutte uguali e non si distinguono.
      const perVariante = p.scheda && typeof p.scheda === 'object' && p.scheda[key] !== undefined;
      setItem({ src, title: p.nome, ver: perVariante ? key : null, pdf: pickScheda(p.scheda, key) });
      document.body.style.overflow = 'hidden';
      // Un passo in cronologia con lo stesso indirizzo: il tasto Indietro del
      // telefono chiude il visore invece di cambiare pagina.
      window.history.pushState({ schedaAperta: true }, '');
    };
    const onPop = () => chiudi();
    const onKey = (e) => { if (e.key === 'Escape') chiudiVisore(); };
    window.addEventListener('open-scheda-vetro', onOpen);
    window.addEventListener('popstate', onPop);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('open-scheda-vetro', onOpen);
      window.removeEventListener('popstate', onPop);
      window.removeEventListener('keydown', onKey);
    };
  }, []);
  if (!item) return null;
  const close = chiudiVisore;
  return (
    <div className="sheet-ov" onClick={close}>
      <div className="sheet-bar" onClick={e => e.stopPropagation()}>
        <span className="sheet-title">Scheda tecnica · {item.title}{item.ver ? ' · ' + item.ver : ''}</span>
        <span className="sheet-actions">
          {/* Niente attributo download: così il PDF si apre nel visualizzatore
              del browser (su iPhone a tutta pagina, con salva e condividi a
              portata di mano) invece di finire dritto fra i file scaricati. */}
          {item.pdf && <a className="sheet-dl" href={item.pdf} target="_blank" rel="noopener">Scarica PDF</a>}
          <button className="sheet-x" onClick={close} aria-label="Chiudi">✕</button>
        </span>
      </div>
      <div className="sheet-scroll" onClick={e => e.stopPropagation()}>
        <img src={item.src} alt={`Scheda tecnica ${item.title}`} />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div className="shell">
        <span>Catalogo Vetro Ferramenta <b>Stigliano</b> · <span className="est">dal 1869</span></span>
      </div>
    </footer>
  );
}

export default function CatalogoVetro() {
  const [route, setRoute] = useState(parseHash());

  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
    const onHash = (e) => {
      // Qui la pagina e' ancora quella che si sta lasciando: se ne salva la
      // posizione con l'indirizzo completo, filtri compresi.
      scrollMem[new URL(e.oldURL).hash] = window.scrollY;
      const salvato = daLink ? undefined : scrollMem[window.location.hash];
      daLink = false;
      setRoute(parseHash());
      if (salvato != null) {
        // Due frame: il primo monta la nuova pagina, il secondo la impagina.
        requestAnimationFrame(() => requestAnimationFrame(() => window.scrollTo(0, salvato)));
      } else {
        window.scrollTo(0, 0);
      }
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  return (
    <div className="cat">
      {route.view === 'cover' && <Cover />}
      {route.view === 'indice' && <Indice />}
      {route.view === 'categoria' && <CategoryPage cat={route.cat} subParam={route.sub} />}
      {route.view === 'prodotto' && <ProductDetail key={route.id} id={route.id} />}
      <SchedaViewer />
    </div>
  );
}
