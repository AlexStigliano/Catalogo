import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';
import './Catalogo.css';
import logo from './assets/logo-stigliano.png';
import logoCover from './assets/logo-stigliano-cover.png';

/* Catalogo Vetro: progetto a sé, con la stessa identità visiva del
   Catalogo Generale (Catalogo.css) ma dati e routing propri. Le
   categorie non hanno ancora prodotti: ogni sezione mostra un
   placeholder "in preparazione" finché non verranno caricati gli articoli. */
const CATEGORIE_VETRO = [
  { id: '01', nome: 'Parapetti e pensiline' },
  { id: '02', nome: 'Soluzioni per porte scorrevoli' },
  { id: '03', nome: 'Soluzioni per porte battenti' },
  { id: '04', nome: 'Maniglie e maniglioni' },
  { id: '05', nome: 'Soluzioni per pareti e partizioni' },
  { id: '06', nome: 'Soluzioni per cabine doccia' },
  { id: '07', nome: 'Soluzioni per vetrine' },
  { id: '08', nome: "Complementi d'arredo" },
  { id: '09', nome: 'Sistemi di fissaggio' },
  { id: '10', nome: 'Accessori e utensili' },
];

// Sottocategorie della categoria 01 (Parapetti e pensiline)
const SOTTOCATEGORIE_VETRO = [
  { id: 'balaustre', nome: 'Profili per balaustre' },
  { id: 'puntuali', nome: 'Attacchi puntuali' },
  { id: 'pensiline', nome: 'Profili per pensiline' },
  { id: 'tiranti', nome: 'Tiranti per pensiline' },
  { id: 'morsetti', nome: 'Morsetti' },
  { id: 'fermavetri', nome: 'Fermavetri' },
];

/* ---------- Hash routing (indipendente dal Catalogo Generale) ---------- */
function parseHash() {
  const h = window.location.hash.replace(/^#\/?/, '');
  if (!h) return { view: 'cover' };
  if (h === 'indice') return { view: 'indice' };
  const m = h.match(/^cat\/(\d{2})(?:\/([a-z]+))?$/);
  if (m && CATEGORIE_VETRO.some(c => c.id === m[1])) return { view: 'categoria', cat: m[1], sub: m[2] || null };
  return { view: 'cover' };
}
const go = (path) => { window.location.hash = path; };

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
        <div className="idx-list">
          {CATEGORIE_VETRO.map(c => (
            <button className="idx-row" key={c.id} onClick={() => go(`/cat/${c.id}`)}>
              <span className="idx-num">{c.id}</span>
              <span className="idx-name">{c.nome}</span>
              <span className="idx-dots" />
              <span className="idx-meta">
                <span className="idx-soon">in arrivo</span>
                <ChevronRight className="idx-arrow" />
              </span>
            </button>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

/* ---------- Pagina categoria ---------- */
function CategoryPage({ cat, subParam }) {
  const info = CATEGORIE_VETRO.find(c => c.id === cat) || CATEGORIE_VETRO[0];
  const hasSubs = cat === '01';
  const sub = hasSubs
    ? (subParam && SOTTOCATEGORIE_VETRO.some(s => s.id === subParam) ? subParam : SOTTOCATEGORIE_VETRO[0].id)
    : null;
  const setSub = (id) => go('/cat/' + cat + '/' + id);
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
            {SOTTOCATEGORIE_VETRO.map(s => (
              <button key={s.id} className={`subchip${s.id === sub ? ' active' : ''}`}
                role="tab" aria-selected={s.id === sub} onClick={() => setSub(s.id)}>
                {s.nome}
              </button>
            ))}
          </div>
        )}
        <div className="prep">
          <span className="badge">Sezione {info.id}</span>
          <h2>Sezione in preparazione</h2>
          <p>Stiamo caricando gli articoli di questa categoria. Torna presto per sfogliarli.</p>
          <button className="back" onClick={() => go('/indice')}>Torna all’indice</button>
        </div>
      </div>
      <Footer />
    </>
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
    const onHash = () => { setRoute(parseHash()); window.scrollTo(0, 0); };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  return (
    <div className="cat">
      {route.view === 'cover' && <Cover />}
      {route.view === 'indice' && <Indice />}
      {route.view === 'categoria' && <CategoryPage cat={route.cat} subParam={route.sub} />}
    </div>
  );
}
