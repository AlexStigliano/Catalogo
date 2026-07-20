import React, { useState, useEffect, useMemo } from 'react';
import { Heart, Search } from 'lucide-react';
import './Catalogo.css';
import gocciaImg from './assets/prodotti/goccia.jpeg';

const PRODUCTS = [
  { id: 1, nome: 'Goccia', categoria: '01', categoriaNome: 'Maniglie per porte e per finestre', materiale: 'Zama / Zinc', sottocategoria: 'Maniglie per porte', immagine: gocciaImg, dimensioni: '45x45mm (ø 7mm)', fornitore: 'Generico', varianti: [
    { codice: '130247B05', finitura: 'Cromo satinato', versione: 'Patent' },
    { codice: '130247B04', finitura: 'Cromo lucido', versione: 'Patent' },
    { codice: '130247B01', finitura: 'Ottone lucido', versione: 'Patent' },
    { codice: '130247B02O', finitura: 'Ottone satinato', versione: 'Patent' },
    { codice: '130247B43', finitura: 'Bronzo', versione: 'Patent' } ] },
  { id: 2, nome: 'Quadra', categoria: '01', categoriaNome: 'Maniglie per porte e per finestre', materiale: 'Zama / Zinc', sottocategoria: 'Maniglie per porte', dimensioni: '50x127mm', fornitore: 'Generico', varianti: [
    { codice: '168201B05', finitura: 'Cromo satinato', versione: 'Patent' },
    { codice: '168201B04', finitura: 'Cromo lucido', versione: 'Patent' },
    { codice: '168201B01', finitura: 'Ottone lucido', versione: 'Patent' } ] },
  { id: 3, nome: 'Angolo', categoria: '01', categoriaNome: 'Maniglie per porte e per finestre', materiale: 'Alluminio', sottocategoria: 'Maniglie per porte', dimensioni: '144x50mm', fornitore: 'Generico', varianti: [
    { codice: '448RB0880COS', finitura: 'Oro satinato', versione: 'Patent' },
    { codice: '448RB0880CBR', finitura: 'Bronzo', versione: 'Patent' },
    { codice: '448RB0880CCS', finitura: 'Effetto cromo satinato', versione: 'Patent' },
    { codice: '448RB0880CNE', finitura: 'Nero opaco', versione: 'Patent' },
    { codice: '448RB0880CBO', finitura: 'Bianco opaco', versione: 'Patent' } ] },
  { id: 4, nome: 'Round', categoria: '01', categoriaNome: 'Maniglie per porte e per finestre', materiale: 'Alluminio', sottocategoria: 'Maniglie per porte', dimensioni: '142x50mm (ø 50mm)', fornitore: 'Generico', varianti: [
    { codice: 'A519RTX59CS', finitura: 'Cromo satinato', versione: 'Patent' },
    { codice: 'A519RTX59NE', finitura: 'Nero opaco', versione: 'Patent' },
    { codice: 'A519RTX59BO', finitura: 'Bianco opaco', versione: 'Patent' },
    { codice: 'A519RTX59OS', finitura: 'Oro satinato', versione: 'Patent' } ] },
  { id: 5, nome: 'Hèlia', categoria: '01', categoriaNome: 'Maniglie per porte e per finestre', materiale: 'Zama / Zinc', sottocategoria: 'Maniglie per porte', dimensioni: 'Standard', fornitore: 'AD-TECH', varianti: [
    { codice: '121RBQCS', finitura: 'Cromo satinato', versione: 'Patent' },
    { codice: '121RBQNE', finitura: 'Nero', versione: 'Patent' } ] },
  { id: 6, nome: 'Volta', categoria: '01', categoriaNome: 'Maniglie per porte e per finestre', materiale: 'Zama / Zinc', sottocategoria: 'Maniglie per porte', dimensioni: 'Standard', fornitore: 'AD-TECH', varianti: [
    { codice: '122RBTCS', finitura: 'Cromo satinato', versione: 'Patent' } ] },
  { id: 7, nome: 'Sirio', categoria: '01', categoriaNome: 'Maniglie per porte e per finestre', materiale: 'Zama / Zinc', sottocategoria: 'Maniglie per porte', dimensioni: 'Standard', fornitore: 'ARIENI', varianti: [
    { codice: '9051CS', finitura: 'Cromo satinato', versione: 'Patent' },
    { codice: '9051CS/CL', finitura: 'Bicolore cromo lucido / satinato', versione: 'Patent' } ] },
  { id: 8, nome: 'Trio', categoria: '01', categoriaNome: 'Maniglie per porte e per finestre', materiale: 'Zama / Zinc', sottocategoria: 'Maniglie per porte', dimensioni: 'Standard', fornitore: 'lineacoli', varianti: [
    { codice: '485RB0880CCS', finitura: 'Cromo satinato', versione: 'Patent' },
    { codice: '485RB0880CCL', finitura: 'Cromo lucido', versione: 'Patent' },
    { codice: '485RB0880CNE', finitura: 'Nero opaco', versione: 'Patent' } ] },
  { id: 9, nome: 'Alicia', categoria: '01', categoriaNome: 'Maniglie per porte e per finestre', materiale: 'Zama / Zinc', sottocategoria: 'Maniglie per porte', dimensioni: 'Standard', fornitore: 'Fimef', varianti: [
    { codice: '1220213BCS', finitura: 'Cromo satinato', versione: 'Patent' },
    { codice: '1220213BOS', finitura: 'Ottone satinato', versione: 'Patent' } ] },
  { id: 10, nome: 'Punto', categoria: '01', categoriaNome: 'Maniglie per porte e per finestre', materiale: 'Zama / Zinc', sottocategoria: 'Maniglie per porte', dimensioni: 'Standard', fornitore: 'Fimef', varianti: [
    { codice: '1205208BCS', finitura: 'Cromo satinato', versione: 'Patent' },
    { codice: '1205208BNE', finitura: 'Nero opaco', versione: 'Patent' } ] }
];

// Sfondi che simulano il metallo reale di ogni finitura
const FINISHES = {
  'Cromo satinato': 'linear-gradient(135deg,#e6e9ec,#b7bdc2 42%,#d3d8db 55%,#a7adb2)',
  'Cromo lucido': 'linear-gradient(135deg,#f6f8f9,#c3c9ce 32%,#7f878e 50%,#c9ced2 68%,#f1f3f5)',
  'Effetto cromo satinato': 'linear-gradient(135deg,#e3e6e9,#b2b8bd 45%,#cdd2d6 58%,#a4aab0)',
  'Ottone lucido': 'linear-gradient(135deg,#f7e6ac,#cfa544 34%,#8f6a20 52%,#d9b463 70%,#f2dc93)',
  'Ottone satinato': 'linear-gradient(135deg,#e7d199,#b8933f 48%,#d3b168 60%,#a9863a)',
  'Oro satinato': 'linear-gradient(135deg,#ecca77,#c39a3c 48%,#dcbb63 60%,#b78e35)',
  'Bronzo': 'linear-gradient(135deg,#9a774e,#5c3f26 52%,#7d5836 70%,#4d341f)',
  'Nero opaco': 'linear-gradient(135deg,#3d3d40,#232325 60%,#2f2f31)',
  'Nero': 'linear-gradient(135deg,#38383b,#1c1c1e 60%,#2a2a2c)',
  'Bianco opaco': 'linear-gradient(135deg,#fdfdfb,#e7e6e0 60%,#f2f1ec)',
  'Bicolore cromo lucido / satinato': 'linear-gradient(90deg,#eef1f3 0%,#c3c9ce 49%,#a7adb2 51%,#cdd2d6 100%)'
};
const finBg = (f) => FINISHES[f] || 'linear-gradient(135deg,#c8c8c8,#9a9a9a)';

const Ghost = () => (
  <svg className="ghost" viewBox="0 0 120 90" aria-hidden="true">
    <circle cx="30" cy="45" r="17" />
    <path d="M30 45 C48 45 60 40 96 41 C104 41 104 49 96 49 C60 50 48 45 30 45 Z" />
  </svg>
);

const Chip = ({ finitura, className = 'chip' }) => (
  <span className={className} style={{ background: finBg(finitura) }} title={finitura} />
);

const HeartIcon = ({ filled }) => (
  <Heart size={16} fill={filled ? 'currentColor' : 'none'} />
);

export default function Catalogo() {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('');
  const [mat, setMat] = useState('');
  const [fin, setFin] = useState('');
  const [favOnly, setFavOnly] = useState(false);
  const [favorites, setFavorites] = useState(() => {
    try {
      const s = localStorage.getItem('ferramenta_favorites');
      return s ? JSON.parse(s) : [];
    } catch { return []; }
  });
  const [expanded, setExpanded] = useState([]);

  useEffect(() => {
    localStorage.setItem('ferramenta_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const cats = useMemo(() => [...new Set(PRODUCTS.map(p => p.categoria))].sort(), []);
  const mats = useMemo(() => [...new Set(PRODUCTS.map(p => p.materiale))].sort((a, b) => a.localeCompare(b, 'it')), []);
  const fins = useMemo(() => [...new Set(PRODUCTS.flatMap(p => p.varianti.map(v => v.finitura)))].sort((a, b) => a.localeCompare(b, 'it')), []);
  const totalVar = useMemo(() => PRODUCTS.reduce((n, p) => n + p.varianti.length, 0), []);

  const filtered = PRODUCTS.filter(p => {
    const t = q.trim().toLowerCase();
    const okQ = !t || p.nome.toLowerCase().includes(t) || p.varianti.some(v => v.codice.toLowerCase().includes(t));
    const okC = !cat || p.categoria === cat;
    const okM = !mat || p.materiale === mat;
    const okF = !fin || p.varianti.some(v => v.finitura === fin);
    const okFav = !favOnly || favorites.includes(p.id);
    return okQ && okC && okM && okF && okFav;
  });

  const toggleFav = (id) =>
    setFavorites(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  const toggleExp = (id) =>
    setExpanded(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);

  const resetAll = () => { setQ(''); setCat(''); setMat(''); setFin(''); setFavOnly(false); };

  return (
    <div className="cat">
      <div className="shell">
        <header className="masthead">
          <div className="kicker">Ferramenta · Componenti per porte e finestre</div>
          <h1 className="title">Catalogo <em>Stigliano</em></h1>
          <p className="lede">
            Maniglie e componenti selezionati, ciascuno declinato nelle sue finiture — dal cromo
            spazzolato all’ottone lucido. Cerca, filtra e salva i tuoi preferiti.
          </p>
          <div className="stats">
            <div className="stat"><span className="n">{PRODUCTS.length}</span><span className="k">Prodotti</span></div>
            <div className="stat"><span className="n">{totalVar}</span><span className="k">Varianti</span></div>
            <div className="stat"><span className="n">{fins.length}</span><span className="k">Finiture</span></div>
            <div className="stat"><span className="n">{favorites.length}</span><span className="k">Preferiti</span></div>
          </div>
        </header>
      </div>

      <div className="toolbar-wrap">
        <div className="shell">
          <div className="toolbar">
            <label className="search">
              <Search size={17} />
              <input type="text" value={q} onChange={e => setQ(e.target.value)}
                placeholder="Cerca per nome o codice…" autoComplete="off" aria-label="Cerca" />
            </label>
            <div className="selects">
              <select value={cat} onChange={e => setCat(e.target.value)} aria-label="Categoria">
                <option value="">Tutte le categorie</option>
                {cats.map(c => <option key={c} value={c}>Cat. {c}</option>)}
              </select>
              <select value={mat} onChange={e => setMat(e.target.value)} aria-label="Materiale">
                <option value="">Tutti i materiali</option>
                {mats.map(m => <option key={m} value={m}>{m}</option>)}
              </select>
              <select value={fin} onChange={e => setFin(e.target.value)} aria-label="Finitura">
                <option value="">Tutte le finiture</option>
                {fins.map(f => <option key={f} value={f}>{f}</option>)}
              </select>
            </div>
            <button className={`fav-toggle${favOnly ? ' on' : ''}`} aria-pressed={favOnly}
              onClick={() => setFavOnly(v => !v)}>
              <Heart size={14} fill={favOnly ? 'currentColor' : 'none'} /> Preferiti
            </button>
            <span className="count">
              <b>{filtered.length}</b> {filtered.length === 1 ? 'prodotto' : 'prodotti'}
              {favorites.length > 0 && <> · <b>{favorites.length}</b> pref.</>}
            </span>
          </div>
        </div>
      </div>

      <div className="shell">
        <div className="gallery">
          {filtered.map((p, idx) => {
            const isFav = favorites.includes(p.id);
            const isOpen = expanded.includes(p.id);
            const ufins = [...new Set(p.varianti.map(v => v.finitura))];
            const ref = ('0' + p.id).slice(-2);
            return (
              <article className="item" key={p.id} style={{ animationDelay: `${Math.min(idx * 55, 500)}ms` }}>
                <div className="media">
                  <span className="ref">N.{ref}</span>
                  <button className={`fav${isFav ? ' on' : ''}`} aria-pressed={isFav}
                    aria-label={isFav ? 'Rimuovi dai preferiti' : 'Aggiungi ai preferiti'}
                    onClick={() => toggleFav(p.id)}>
                    <HeartIcon filled={isFav} />
                  </button>
                  {p.immagine
                    ? <img src={p.immagine} alt={p.nome} loading="lazy" />
                    : <><Ghost /><span className="soon">In arrivo</span></>}
                </div>
                <div className="info">
                  <div className="head-row">
                    <div>
                      <h2 className="name">{p.nome}</h2>
                      <p className="sub">{p.sottocategoria}</p>
                    </div>
                    <span className="mat-tag">{p.materiale}</span>
                  </div>
                  <div className="spec">
                    <div><span className="lab">Dimensioni</span><span className="val">{p.dimensioni}</span></div>
                    <div><span className="lab">Fornitore</span><span className="val">{p.fornitore}</span></div>
                  </div>
                  <div className="finishes">
                    <span className="chips">
                      {ufins.slice(0, 5).map((f, i) => <Chip key={i} finitura={f} />)}
                    </span>
                    <span className="fcount">{ufins.length} {ufins.length === 1 ? 'finitura' : 'finiture'}</span>
                  </div>
                  <button className="expand" aria-expanded={isOpen} onClick={() => toggleExp(p.id)}>
                    <span className="lbl">
                      <svg viewBox="0 0 6 10" fill="none"><path d="M1 1l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      {isOpen ? 'Nascondi varianti' : `Vedi ${p.varianti.length} varianti`}
                    </span>
                    <span className="fcount">{p.varianti.length}</span>
                  </button>
                  <div className={`variants-wrap${isOpen ? ' open' : ''}`}>
                    <div className="variants-inner">
                      <table className="variants">
                        <thead>
                          <tr><th>Codice</th><th>Finitura</th><th style={{ textAlign: 'right' }}>Vers.</th></tr>
                        </thead>
                        <tbody>
                          {p.varianti.map((v, i) => (
                            <tr key={i}>
                              <td className="code">{v.codice}</td>
                              <td><span className="fin-cell"><Chip finitura={v.finitura} />{v.finitura}</span></td>
                              <td className="ver">{v.versione}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}

          {filtered.length === 0 && (
            <div className="empty">
              <p className="big">Nessun risultato</p>
              <p>Nessun prodotto corrisponde ai filtri selezionati.</p>
              <button className="reset" onClick={resetAll}>Azzera filtri</button>
            </div>
          )}
        </div>

        <footer>
          <span>Catalogo Ferramenta <span className="brasstxt">Stigliano</span></span>
          <span>I preferiti restano salvati in questo browser</span>
        </footer>
      </div>
    </div>
  );
}
