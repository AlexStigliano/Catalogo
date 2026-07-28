import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronRight, ChevronLeft, ChevronDown, Download } from 'lucide-react';
import './Catalogo.css';
import logo from './assets/logo-stigliano.png';
import logoCover from './assets/logo-stigliano-cover.png';
import fermavetroInox from './assets/vetro/prodotti/fermavetro-regolabile-inox-satinato.jpg';
import fermavetroNero from './assets/vetro/prodotti/fermavetro-regolabile-nero-opaco.jpg';
import fermavetroOro from './assets/vetro/prodotti/fermavetro-regolabile-oro.jpg';
import fermavetroEsploso from './assets/vetro/prodotti/fermavetro-regolabile-esploso.jpg';
import fermavetroScheda from './assets/vetro/fermavetro-regolabile-scheda-tecnica.pdf';
import fermavetroSchedaImg from './assets/vetro/schede/fermavetro-regolabile-scheda.jpg';
import asolaInox from './assets/vetro/prodotti/fermavetro-asola-inox-satinato.jpg';
import asolaInoxFrontale from './assets/vetro/prodotti/fermavetro-asola-inox-satinato-frontale.jpg';
import asolaInoxVista2 from './assets/vetro/prodotti/fermavetro-asola-inox-satinato-vista2.jpg';
import asolaOro from './assets/vetro/prodotti/fermavetro-asola-oro.jpg';
import asolaNero from './assets/vetro/prodotti/fermavetro-asola-nero-opaco.jpg';
import asolaScheda from './assets/vetro/fermavetro-asola-scheda-tecnica.pdf';
import asolaSchedaImg from './assets/vetro/schede/fermavetro-asola-scheda.jpg';

/* Catalogo Vetro: progetto a sé, con la stessa identità visiva del
   Catalogo Generale (Catalogo.css) ma dati e routing propri. Le
   categorie senza prodotti mostrano un placeholder "in preparazione"
   finché non verranno caricati gli articoli. */
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
const subName = (id) => (SOTTOCATEGORIE_VETRO.find(s => s.id === id) || {}).nome || id;

const PRODOTTI_VETRO = [
  {
    id: 1, categoria: '01', sottocategoria: 'puntuali',
    nome: 'Vite fermavetro regolabile',
    descrizione: 'Attacco puntuale a vite per vetro con supporto regolabile in profondità, attacco diritto. Adatto a spessori vetro da 8 a 30mm, con lunghezza totale regolabile da 35 a 55mm (vite M10x130). Foro in vetro Ø25mm. Prodotto da Inoxdesign in acciaio inox AISI 304. Disponibile in 3 finiture: inox satinato, nero opaco e oro.',
    materiale: 'Acciaio inox AISI 304',
    dimensioni: 'Disco Ø52mm · vite M10x130 · spessore vetro 8-30mm · foro Ø25mm',
    fornitore: 'Inoxdesign',
    scheda: fermavetroScheda,
    immagini: {
      'Inox satinato': [fermavetroInox, fermavetroEsploso],
      'Nero opaco': [fermavetroNero],
      'Oro': [fermavetroOro],
    },
    varianti: [
      { codice: 'IN109-250', finitura: 'Inox satinato' },
      { codice: 'IN109-250-NE', finitura: 'Nero opaco' },
      { codice: 'IN109-250-OL', finitura: 'Oro' },
    ],
  },
  {
    id: 2, categoria: '01', sottocategoria: 'puntuali',
    nome: 'Vite fermavetro regolabile con asola',
    descrizione: 'Attacco puntuale a vite per vetro con asola e supporto regolabile in profondità, attacco diritto. Adatto a spessori vetro da 8 a 30mm, con lunghezza totale regolabile da 36 a 45mm (vite M5). Foro in vetro Ø25mm. Prodotto da Inoxdesign in acciaio inox AISI 304. Disponibile in 3 finiture: inox satinato, nero opaco e oro.',
    materiale: 'Acciaio inox AISI 304',
    dimensioni: 'Disco Ø52mm · asola 20,5×10,5mm · vite M5 · spessore vetro 8-30mm · foro Ø25mm',
    fornitore: 'Inoxdesign',
    scheda: asolaScheda,
    immagini: {
      'Inox satinato': [asolaInox, asolaInoxVista2, asolaInoxFrontale],
      'Nero opaco': [asolaNero],
      'Oro': [asolaOro],
    },
    varianti: [
      { codice: 'IN109-255', finitura: 'Inox satinato' },
      { codice: 'IN109-255-NE', finitura: 'Nero opaco' },
      { codice: 'IN109-255-OL', finitura: 'Oro' },
    ],
  },
];
const SCHEDA_IMG_VETRO = { 1: fermavetroSchedaImg, 2: asolaSchedaImg };
const openScheda = (id) => window.dispatchEvent(new CustomEvent('open-scheda-vetro', { detail: { id } }));

const FINISHES_VETRO = {
  'Inox satinato': 'linear-gradient(135deg,#e6e9ec,#b7bdc2 42%,#d3d8db 55%,#a7adb2)',
  'Nero opaco': 'linear-gradient(135deg,#3d3d40,#232325 60%,#2f2f31)',
  'Oro': 'linear-gradient(135deg,#ffe9a3,#e6b83f 30%,#a9791d 50%,#e9c05a 68%,#ffefb0)',
};
const finBg = (f) => FINISHES_VETRO[f] || 'linear-gradient(135deg,#c8c8c8,#9a9a9a)';
const Chip = ({ finitura }) => <span className="chip" style={{ background: finBg(finitura) }} title={finitura} />;
const Ghost = () => (
  <svg className="ghost" viewBox="0 0 120 90" aria-hidden="true">
    <circle cx="30" cy="45" r="17" />
    <path d="M30 45 C48 45 60 40 96 41 C104 41 104 49 96 49 C60 50 48 45 30 45 Z" />
  </svg>
);

/* ---------- Hash routing (indipendente dal Catalogo Generale) ---------- */
function parseHash() {
  const h = window.location.hash.replace(/^#\/?/, '');
  if (!h) return { view: 'cover' };
  if (h === 'indice') return { view: 'indice' };
  const mp = h.match(/^prodotto\/(\d+)$/);
  if (mp) return { view: 'prodotto', id: Number(mp[1]) };
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
  const count = (id) => PRODOTTI_VETRO.filter(p => p.categoria === id).length;
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
            {SOTTOCATEGORIE_VETRO.map(s => {
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
        <div className="shell">
          <div className="gallery">
            {subProducts.map((p, idx) => <ProductCard key={p.id} product={p} idx={idx} />)}
          </div>
        </div>
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

/* ---------- Scheda prodotto (card griglia) ---------- */
function ProductCard({ product: p, idx }) {
  const images = p.immagini || {};
  const ufins = [...new Set(p.varianti.map(v => v.finitura))];
  const firstWithImg = p.varianti.find(v => images[v.finitura]);
  const [selFin, setSelFin] = useState(firstWithImg ? firstWithImg.finitura : p.varianti[0].finitura);
  const [open, setOpen] = useState(false);
  const hasImages = Object.keys(images).length > 0;
  const selImg = (images[selFin] || [])[0];

  return (
    <article className="card" style={{ animationDelay: `${Math.min(idx * 45, 400)}ms` }}>
      <div className="media">
        <span className="cat-tag">{p.categoria}</span>
        <div className="media-body clickable" onClick={() => go('/prodotto/' + p.id)} role="link"
          tabIndex={0} onKeyDown={e => { if (e.key === 'Enter') go('/prodotto/' + p.id); }}
          aria-label={`Apri la scheda di ${p.nome}`}>
          {selImg ? <img src={selImg} alt={`${p.nome} — ${selFin}`} loading="lazy" />
            : <div className="noimg"><Ghost /><small>Immagine non disponibile</small></div>}
        </div>
        {hasImages && <div className="media-cap"><Chip finitura={selFin} /><span>{selFin}</span></div>}
      </div>
      <div className="cbody">
        <div className="name-row">
          <h2 className="name clickable" onClick={() => go('/prodotto/' + p.id)}>{p.nome}</h2>
          <span className="forn-text">{p.fornitore}</span>
        </div>
        <div className="submeta">
          <p className="sub">{subName(p.sottocategoria)}</p>
          <div className="matrow"><span className="lab">Materiale</span><span className="val">{p.materiale}</span></div>
        </div>
        {p.scheda
          ? <button className="scheda" onClick={() => openScheda(p.id)}><Download size={15} /> Scheda tecnica</button>
          : <button className="scheda disabled" disabled title="Scheda tecnica in arrivo"><Download size={15} /> Scheda tecnica <em>in arrivo</em></button>}
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
              <thead><tr><th>Codice articolo</th><th>Finitura</th></tr></thead>
              <tbody>
                {p.varianti.map((v, i) => (
                  <tr key={i} className={`vrow${v.finitura === selFin ? ' active' : ''}`}
                    onClick={() => setSelFin(v.finitura)}>
                    <td className="code">{v.codice}</td>
                    <td><span className="fin-cell"><Chip finitura={v.finitura} />{v.finitura}</span></td>
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

function SezioneTendina({ title, aperta = false, children }) {
  const [open, setOpen] = useState(aperta);
  return (
    <section className="rel-section">
      <button type="button" className={`rel-head rel-toggle${open ? ' open' : ''}`}
        aria-expanded={open} onClick={() => setOpen(o => !o)}>
        <h2>{title}</h2>
        <ChevronDown className="rel-chev" size={18} />
      </button>
      <div className={`rel-wrap${open ? ' open' : ''}`}>
        <div className="rel-inner">{children}</div>
      </div>
    </section>
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
              <div className="media-body">
                {selImg ? <img src={selImg} alt={`${p.nome} — ${selFin}`} />
                  : <div className="noimg"><Ghost /><small>Immagine non disponibile</small></div>}
              </div>
              <div className="media-cap"><Chip finitura={selFin} /><span>{selFin}</span></div>
            </div>
            {gallery.length > 1 && (
              <div className="pdp-thumbs">
                {gallery.map((img, i) => (
                  <button key={i} className={`pdp-thumb${i === imgIdx ? ' active' : ''}`}
                    onClick={() => setImgIdx(i)} aria-label={`Foto ${i + 1}`} aria-pressed={i === imgIdx}>
                    <img src={img} alt={`${p.nome} — vista ${i + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="pdp-info">
            <div className="name-row">
              <h1 className="pdp-name">{p.nome}</h1>
              <span className="forn-text">{p.fornitore}</span>
            </div>
            <p className="pdp-sub">{subName(p.sottocategoria)}</p>
            <hr className="rule" />
            <div className="pdp-specs">
              <div className="pdp-spec"><span className="k">Materiale</span><span className="v">{p.materiale}</span></div>
              <div className="pdp-spec"><span className="k">Misure</span><span className="v">{p.dimensioni}</span></div>
              <div className="pdp-spec"><span className="k">Fornitore</span><span className="v">{p.fornitore}</span></div>
            </div>

            <div className="finishes pdp-finishes">
              <span className="fhint">Scegli la finitura</span>
              <div className="fbtns">
                {ufins.map((f, i) => (
                  <button key={i} className={`fbtn${f === selFin ? ' active' : ''}`}
                    onClick={() => setSelFin(f)} title={f} aria-label={f} aria-pressed={f === selFin}>
                    <Chip finitura={f} />
                  </button>
                ))}
              </div>
            </div>

            {p.scheda
              ? <button className="scheda" onClick={() => openScheda(p.id)}><Download size={15} /> Scheda tecnica</button>
              : <button className="scheda disabled" disabled title="Scheda tecnica in arrivo"><Download size={15} /> Scheda tecnica <em>in arrivo</em></button>}

            <div className="pdp-variants">
              <h3>Varianti disponibili ({p.varianti.length})</h3>
              <table className="variants">
                <thead><tr><th>Codice articolo</th><th>Finitura</th></tr></thead>
                <tbody>
                  {p.varianti.map((v, i) => (
                    <tr key={i} className={`vrow${v.finitura === selFin ? ' active' : ''}`}
                      onClick={() => setSelFin(v.finitura)}>
                      <td className="code">{v.codice}</td>
                      <td><span className="fin-cell"><Chip finitura={v.finitura} />{v.finitura}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {p.descrizione && (
          <SezioneTendina title="Descrizione" aperta>
            <p className="rel-testo">{p.descrizione}</p>
          </SezioneTendina>
        )}
      </div>
      <Footer />
    </>
  );
}

/* Visualizzatore scheda tecnica in pagina (immagine a schermo intero) */
function SchedaViewer() {
  const [item, setItem] = useState(null);
  useEffect(() => {
    const onOpen = (e) => {
      const { id } = e.detail || {};
      const p = PRODOTTI_VETRO.find(x => x.id === id);
      const src = SCHEDA_IMG_VETRO[id];
      if (!p || !src) return;
      setItem({ src, title: p.nome, pdf: p.scheda });
      document.body.style.overflow = 'hidden';
    };
    const onKey = (e) => { if (e.key === 'Escape') { setItem(null); document.body.style.overflow = ''; } };
    window.addEventListener('open-scheda-vetro', onOpen);
    window.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('open-scheda-vetro', onOpen); window.removeEventListener('keydown', onKey); };
  }, []);
  if (!item) return null;
  const close = () => { setItem(null); document.body.style.overflow = ''; };
  return (
    <div className="sheet-ov" onClick={close}>
      <div className="sheet-bar" onClick={e => e.stopPropagation()}>
        <span className="sheet-title">Scheda tecnica · {item.title}</span>
        <span className="sheet-actions">
          {item.pdf && <a className="sheet-dl" href={item.pdf} download={`scheda-tecnica-${item.title}.pdf`} target="_blank" rel="noopener">Scarica PDF</a>}
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
    const onHash = () => { setRoute(parseHash()); window.scrollTo(0, 0); };
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
