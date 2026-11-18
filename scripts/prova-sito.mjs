/* Prova nel browser del sito costruito (cartella dist).

     npm run build && npm test

   Apre il sito con Chromium, come farebbe un cliente, e controlla che cio'
   che c'e' nei dati si veda davvero: ogni categoria con i suoi prodotti
   nell'ordine giusto, ogni pagina prodotto con le sue varianti, la ricerca
   per codice, nessuna foto rotta e nessun errore. In piu' ripete i difetti
   gia' corretti una volta (testata che non restava fissa, pagina che sborda
   sul telefono, filtri da tastiera), cosi' se tornano ce ne accorgiamo.

   Le attese vengono dai file in src/data/vetro: aggiungendo un prodotto non
   c'e' niente da aggiornare qui. Gira anche a ogni pull request
   (.github/workflows/ci.yml).

   La prima volta serve il browser:  npx playwright install chromium */

import { createServer } from 'node:http';
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, resolve, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const radice = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(radice, 'dist');
if (!existsSync(join(dist, 'vetro.html'))) {
  console.error('Manca la cartella dist: prima "npm run build".');
  process.exit(1);
}

/* ---------- I dati, per sapere che cosa aspettarsi ---------- */
const leggi = (f) => JSON.parse(readFileSync(f, 'utf8'));
const catalogo = leggi(join(radice, 'src/data/vetro/catalogo.json'));
const cartellaProdotti = join(radice, 'src/data/vetro/prodotti');
const prodotti = readdirSync(cartellaProdotti).filter(f => f.endsWith('.json')).sort()
  .flatMap(f => leggi(join(cartellaProdotti, f)));

/* ---------- Il sito, servito come su GitHub Pages (sotto /Catalogo/) ---------- */
const TIPI = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.webmanifest': 'application/manifest+json', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.pdf': 'application/pdf' };
const server = createServer((req, res) => {
  const percorso = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  const file = percorso.startsWith('/Catalogo/') ? join(dist, percorso.slice('/Catalogo/'.length) || 'index.html') : null;
  if (!file || !file.startsWith(dist) || !existsSync(file) || !statSync(file).isFile()) { res.writeHead(404).end('Non trovato'); return; }
  res.writeHead(200, { 'Content-Type': TIPI[extname(file)] || 'application/octet-stream' }).end(readFileSync(file));
});
await new Promise(ok => server.listen(0, '127.0.0.1', ok));
const BASE = `http://127.0.0.1:${server.address().port}/Catalogo/`;
const VETRO = BASE + 'vetro.html', GENERALE = BASE + 'index.html';

/* ---------- Esito ---------- */
let passate = 0;
const fallite = [];
const verifica = (ok, cosa, dettaglio = '') => {
  if (ok) { passate++; return; }
  fallite.push(cosa + (dettaglio ? ` — ${dettaglio}` : ''));
  console.log('  NO  ' + cosa + (dettaglio ? ` — ${dettaglio}` : ''));
};
const uguali = (a, b) => JSON.stringify(a) === JSON.stringify(b);

const browser = await chromium.launch();
const TELEFONO = { viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true };
const TELEFONO_PICCOLO = { viewport: { width: 360, height: 640 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true };
const COMPUTER = { viewport: { width: 1366, height: 850 } };

/* Una pagina che tiene il conto di errori JavaScript e file non trovati. */
async function apri(opzioni) {
  const contesto = await browser.newContext(opzioni);
  const p = await contesto.newPage();
  const problemi = [];
  p.on('pageerror', e => problemi.push('errore JavaScript: ' + e.message));
  p.on('console', m => { if (m.type() === 'error') problemi.push('console: ' + m.text()); });
  p.on('response', r => { if (r.status() >= 400) problemi.push(`${r.status()} ${r.url().replace(BASE, '')}`); });
  p.on('requestfailed', r => { if (!/\.pdf$/.test(r.url())) problemi.push('non caricato: ' + r.url().replace(BASE, '')); });
  const vai = async (indirizzo) => { await p.goto(indirizzo, { waitUntil: 'networkidle' }); };
  // Scorre fino in fondo, cosi' anche le foto caricate "quando servono"
  // arrivano, e conta quelle che non si sono aperte.
  const fotoRotte = async () => {
    await p.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 500) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 25)); }
      window.scrollTo(0, 0);
    });
    await p.waitForLoadState('networkidle');
    return p.$$eval('img', imgs => imgs.filter(i => i.complete && i.naturalWidth === 0).map(i => i.currentSrc || i.src));
  };
  return { p, vai, problemi, fotoRotte, chiudi: () => contesto.close() };
}

/* ---------- 1. Catalogo Vetro: indice, categorie, prodotti ---------- */
console.log(`Catalogo Vetro: ${prodotti.length} prodotti in ${catalogo.categorie.length} categorie`);
{
  const { p, vai, problemi, fotoRotte, chiudi } = await apri(COMPUTER);

  await vai(VETRO);
  verifica(await p.locator('.cover a.enter[href="#/indice"]').count() === 1, 'copertina: il tasto "Sfoglia il catalogo" e\' un link all\'indice');

  await vai(VETRO + '#/indice');
  const righe = await p.$$eval('.idx-list a.idx-row', rr => rr.map(r => [r.getAttribute('href'), r.querySelector('.idx-name').textContent, r.querySelector('.idx-meta').textContent.trim()]));
  const attese = catalogo.categorie.map(c => {
    const n = prodotti.filter(x => x.categoria === c.id).length;
    return [`#/cat/${c.id}`, c.nome, n ? `${n} ${n === 1 ? 'prodotto' : 'prodotti'}` : 'in arrivo'];
  });
  verifica(uguali(righe, attese), 'indice: categorie, link e numero di prodotti come nei dati', JSON.stringify(righe.filter((r, i) => !uguali(r, attese[i]))));

  // Ogni lista: i prodotti della (sotto)categoria, nell'ordine dei file.
  const liste = catalogo.categorie.flatMap(c => {
    const tab = catalogo.sottocategorie[c.id];
    const suoi = prodotti.filter(x => x.categoria === c.id);
    return tab ? tab.map(s => [`#/cat/${c.id}/${s.id}`, suoi.filter(x => x.sottocategoria === s.id)]) : [[`#/cat/${c.id}`, suoi]];
  });
  for (const [rotta, attesi] of liste) {
    await vai(VETRO + rotta);
    if (!attesi.length) { verifica(await p.locator('.prep').count() === 1, `${rotta}: lista vuota, avviso "in preparazione"`); continue; }
    while (await p.locator('.mostra-altri button').count()) await p.click('.mostra-altri button');
    const nomi = await p.$$eval('.gallery .card h2.name', hh => hh.map(h => h.textContent));
    verifica(uguali(nomi, attesi.map(x => x.nome)), `${rotta}: ${attesi.length} prodotti nell'ordine dei dati`, `trovati ${nomi.length}`);
    const link = await p.$$eval('.gallery .card a.detail-cta', aa => aa.map(a => a.getAttribute('href')));
    verifica(uguali(link, attesi.map(x => `#/prodotto/${x.id}`)), `${rotta}: ogni card ha il link alla pagina del prodotto`);
    const rotte = await fotoRotte();
    verifica(!rotte.length, `${rotta}: nessuna foto rotta`, rotte.join(', '));
  }

  // Ogni pagina prodotto.
  for (const x of prodotti) {
    await vai(`${VETRO}#/prodotto/${x.id}`);
    const dove = `prodotto #${x.id} ${x.nome}`;
    verifica(await p.title() === `${x.nome} · Catalogo Vetro — Ferramenta Stigliano`, `${dove}: titolo della scheda del browser`, await p.title());
    verifica(await p.locator('h1.pdp-name').textContent() === x.nome, `${dove}: nome in pagina`);
    const codici = await p.$$eval('.pdp-variants td.code', tt => tt.map(t => t.textContent));
    verifica(uguali(codici, x.varianti.map(v => v.codice)), `${dove}: tutti i codici nella tabella`, `trovati ${codici.length} su ${x.varianti.length}`);
    const rotte = await p.$$eval('img', imgs => imgs.filter(i => i.complete && i.naturalWidth === 0).map(i => i.currentSrc || i.src));
    verifica(!rotte.length, `${dove}: nessuna foto rotta`, rotte.join(', '));
  }

  // La scheda tecnica si apre nel visore, con le sue pagine, e Esc la chiude.
  const conScheda = prodotti.find(x => typeof x.scheda === 'string');
  if (conScheda) {
    await vai(`${VETRO}#/prodotto/${conScheda.id}`);
    await p.click('.pdp-docs button.scheda');
    await p.waitForSelector('.sheet-pagine img');
    await p.waitForLoadState('networkidle');
    verifica(await p.$eval('.sheet-pagine img', i => i.complete && i.naturalWidth > 0), `visore scheda tecnica (#${conScheda.id}): l'anteprima si vede`);
    verifica(await p.locator('.sheet-dl[href$=".pdf"]').count() === 1, 'visore scheda tecnica: c\'e\' il link al PDF');
    await p.keyboard.press('Escape');
    await p.waitForTimeout(200);
    verifica(await p.locator('.sheet-ov').count() === 0, 'visore scheda tecnica: Esc lo chiude');
  }

  // Ricerca dall'indice: ogni codice articolo porta al suo prodotto.
  await vai(VETRO + '#/indice');
  for (const x of prodotti) {
    const codice = x.varianti[0].codice;
    if (prodotti.some(y => y !== x && y.varianti.some(v => v.codice === codice))) continue; // "Su misura"
    await p.fill('.idx-search input', codice);
    await p.waitForFunction((c) => document.querySelector('.idx-search input').value === c && (document.querySelector('.res-row') || document.querySelector('.res-empty')), codice);
    const primo = await p.locator('.res-row .res-name').first().textContent().catch(() => '(nessun risultato)');
    verifica(primo === x.nome, `ricerca "${codice}": il primo risultato e' ${x.nome}`, `trovato ${primo}`);
  }
  await p.fill('.idx-search input', 'zzzqqq');
  await p.waitForSelector('.res-empty');
  verifica(true, 'ricerca senza risultati: compare l\'avviso');

  verifica(!problemi.length, 'Catalogo Vetro: nessun errore e nessun file mancante', [...new Set(problemi)].slice(0, 8).join(' | '));
  await chiudi();
}

/* ---------- 2. Difetti gia' corretti, su tutti e due i cataloghi ---------- */
const primaLista = catalogo.categorie.map(c => [c, prodotti.filter(x => x.categoria === c.id)]).sort((a, b) => b[1].length - a[1].length)[0][0];
for (const [nome, indirizzo, lista] of [['Catalogo Vetro', VETRO, `#/cat/${primaLista.id}`], ['Catalogo Generale', GENERALE, '#/cat/01']]) {
  console.log(nome + ': testata fissa, telefono, filtri');
  for (const [schermo, opzioni] of [['computer', COMPUTER], ['telefono', TELEFONO], ['telefono piccolo', TELEFONO_PICCOLO]]) {
    const { p, vai, problemi, chiudi } = await apri(opzioni);
    const dove = `${nome}, ${schermo}`;
    await vai(indirizzo + '#/indice');
    verifica(await p.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), `${dove}: l'indice non sborda di lato`);
    await vai(indirizzo + lista);
    verifica(await p.locator('.gallery .card').count() > 0, `${dove}: la lista ${lista} ha prodotti`);
    verifica(await p.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), `${dove}: la lista non sborda di lato`);
    // Scorrendo, testata e barra dei filtri restano in alto.
    await p.evaluate(() => window.scrollTo(0, 1500));
    await p.waitForTimeout(150);
    const m = await p.evaluate(() => {
      const t = document.querySelector('.topbar').getBoundingClientRect(), f = document.querySelector('.toolbar-wrap').getBoundingClientRect();
      return { testata: t.top, sotto: f.top - t.bottom, fissi: f.bottom, schermo: window.innerHeight, scorso: window.scrollY };
    });
    verifica(m.scorso > 1000 && Math.abs(m.testata) < 1 && Math.abs(m.sotto) < 2, `${dove}: scorrendo, testata e barra dei filtri restano fisse`, JSON.stringify(m));
    verifica(m.fissi <= m.schermo * 0.22, `${dove}: testata e barra occupano al massimo il 22% dello schermo`, `${Math.round(m.fissi)}px su ${m.schermo}`);
    // Con i filtri aperti mentre la barra e' fissa, il fondo del pannello resta raggiungibile.
    await p.click('.filter-trigger');
    await p.waitForTimeout(450);
    await p.locator('.fdrop-btn').last().click();
    await p.waitForTimeout(350);
    const fondo = await p.evaluate(() => { const i = document.querySelector('.filter-inner'); i.scrollTop = i.scrollHeight; return document.querySelector('.filter-actions').getBoundingClientRect().bottom; });
    verifica(fondo <= opzioni.viewport.height, `${dove}: il fondo del pannello filtri si raggiunge`, `${Math.round(fondo)}px su ${opzioni.viewport.height}`);
    verifica(!problemi.length, `${dove}: nessun errore`, [...new Set(problemi)].slice(0, 5).join(' | '));
    await chiudi();
  }
}

/* ---------- 3. Briciole di pane, spazio sul telefono, tema scuro ---------- */
{
  const { p, vai, chiudi } = await apri(COMPUTER);
  // Categoria: il nome, non "Categoria 04".
  await vai(`${VETRO}#/cat/${primaLista.id}`);
  verifica(await p.locator('.crumbs .crumb-now').textContent() === primaLista.nome, `briciole della categoria ${primaLista.id}: c'e' il nome della categoria`);
  // Prodotto in una categoria con le tab: la sottocategoria porta alla sua tab.
  const conTab = prodotti.find(x => (catalogo.sottocategorie[x.categoria] || []).some(s => s.id === x.sottocategoria)
    && catalogo.sottocategorie[x.categoria][0].id !== x.sottocategoria);
  if (conTab) {
    await vai(`${VETRO}#/prodotto/${conTab.id}`);
    const link = await p.$$eval('.crumbs a', aa => aa.map(a => a.getAttribute('href')));
    verifica(uguali(link, ['#/indice', `#/cat/${conTab.categoria}`, `#/cat/${conTab.categoria}/${conTab.sottocategoria}`]),
      `briciole del prodotto #${conTab.id}: indice, categoria e la sua sottocategoria`, link.join(' '));
  }
  await chiudi();
}
for (const [nome, indirizzo, lista] of [['Catalogo Vetro', VETRO, `#/cat/${primaLista.id}`], ['Catalogo Generale', GENERALE, '#/cat/01']]) {
  // Sul telefono il primo prodotto deve vedersi senza scorrere.
  const { p, vai, chiudi } = await apri(TELEFONO);
  await vai(indirizzo + lista);
  const alto = await p.$eval('.gallery .card', c => c.getBoundingClientRect().top);
  verifica(alto <= 360, `${nome}, telefono: il primo prodotto comincia entro 360px dall'alto`, `${Math.round(alto)}px`);
  await vai(indirizzo + '#/indice');
  const righe = await p.$$eval('.idx-row', rr => rr.filter(r => r.getBoundingClientRect().bottom <= window.innerHeight).length);
  verifica(righe >= 8, `${nome}, telefono: l'indice mostra almeno 8 categorie senza scorrere`, `${righe}`);
  await chiudi();
}
{
  // Tema scuro: le linee blu e il contorno delle pastiglie devono staccarsi
  // dal fondo (contrasto almeno 3:1, la soglia per gli elementi grafici).
  const { p, vai, chiudi } = await apri({ ...TELEFONO, colorScheme: 'dark' });
  const nero = prodotti.find(x => x.varianti.some(v => /^Nero/.test(v.finitura)) && x.varianti.length > 1);
  await vai(`${VETRO}#/prodotto/${nero ? nero.id : prodotti[0].id}`);
  const c = await p.evaluate(() => {
    const rgb = (s) => (s.match(/\d+(\.\d+)?/g) || []).slice(0, 3).map(Number);
    const lum = ([r, g, b]) => [r, g, b].map(v => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; }).reduce((s, v, i) => s + v * [0.2126, 0.7152, 0.0722][i], 0);
    const contrasto = (a, b) => { const [x, y] = [lum(rgb(a)), lum(rgb(b))].sort((m, n) => n - m); return (x + 0.05) / (y + 0.05); };
    const fondo = getComputedStyle(document.body).backgroundColor;
    const anello = getComputedStyle(document.querySelector('.pdp-variants .fin-cell .chip')).boxShadow;
    return {
      linea: contrasto(getComputedStyle(document.querySelector('.pdp-info .rule')).backgroundColor, fondo),
      titoli: contrasto(getComputedStyle(document.querySelector('.rel-toggle')).borderBottomColor, fondo),
      pastiglia: contrasto(anello.match(/rgba?\([^)]*\)/)[0], fondo),
    };
  });
  for (const [cosa, v] of Object.entries(c)) verifica(v >= 3, `tema scuro: ${cosa} con contrasto almeno 3:1 sul fondo`, v.toFixed(2));
  await chiudi();
}

{
  // Foto ingrandita: si apre toccando la foto, cambia con le frecce, si
  // ingrandisce col doppio clic, si chiude con Esc e con Indietro.
  const piuFoto = prodotti.find(x => (Object.values(x.immagini || {})[0] || []).length >= 2);
  const n = Object.values(piuFoto.immagini)[0].length;
  const { p, vai, problemi, chiudi } = await apri(COMPUTER);
  await vai(`${VETRO}#/prodotto/${piuFoto.id}`);
  await p.click('.media-body.zoomabile');
  await p.waitForSelector('.zoom-ov img');
  await p.waitForLoadState('networkidle');
  verifica(await p.$eval('.zoom-ov img', i => i.complete && i.naturalWidth > 0), `foto ingrandita (#${piuFoto.id}): si apre e la foto si vede`);
  verifica(await p.locator('.zoom-count').textContent() === `1 / ${n}`, 'foto ingrandita: conta le foto');
  await p.keyboard.press('ArrowRight');
  verifica(await p.locator('.zoom-count').textContent() === `2 / ${n}`, 'foto ingrandita: la freccia destra passa alla foto dopo');
  await p.dblclick('.zoom-ov img');
  await p.waitForTimeout(300);
  verifica(await p.$eval('.zoom-ov img', i => /scale\(2\.5\)/.test(i.style.transform)), 'foto ingrandita: il doppio clic ingrandisce');
  await p.keyboard.press('Escape');
  await p.waitForTimeout(200);
  verifica(await p.locator('.zoom-ov').count() === 0, 'foto ingrandita: Esc la chiude');
  verifica(await p.locator('.pdp-thumb.active').getAttribute('aria-label') === 'Foto 2', 'foto ingrandita: chiusa, la pagina resta sulla foto vista per ultima');
  await p.click('.media-body.zoomabile');
  await p.waitForSelector('.zoom-ov');
  await p.goBack();
  await p.waitForTimeout(200);
  verifica(await p.locator('.zoom-ov').count() === 0 && p.url().endsWith(`#/prodotto/${piuFoto.id}`), 'foto ingrandita: Indietro la chiude e si resta sulla pagina del prodotto');
  verifica(!problemi.length, 'foto ingrandita: nessun errore', [...new Set(problemi)].join(' | '));
  await chiudi();
}

{
  // Finitura senza foto: si vede quella di un'altra finitura, con la scritta.
  const senza = prodotti.find(x => !x.senzaFinitura && x.varianti.some(v => !(x.immagini || {})[v.finitura]));
  if (senza) {
    const fin = senza.varianti.find(v => !senza.immagini[v.finitura]).finitura;
    const { p, vai, chiudi } = await apri(COMPUTER);
    await vai(`${VETRO}#/prodotto/${senza.id}`);
    await p.click(`.pdp-finishes .fbtn[aria-label="${fin}"]`);
    await p.waitForLoadState('networkidle');
    verifica(await p.locator('.pdp-media .noimg').count() === 0 && await p.$eval('.pdp-media .media-body img', i => i.complete && i.naturalWidth > 0),
      `finitura senza foto (#${senza.id} ${fin}): si vede la foto di un'altra finitura`);
    verifica(/^foto in finitura /.test(await p.locator('.media-cap small').textContent().catch(() => '')), `finitura senza foto (#${senza.id} ${fin}): sotto c'e' "foto in finitura ..."`);
    await chiudi();
  }
  // Ogni fornitore che ha un logo lo mostra nella pagina dei suoi prodotti.
  const { p, vai, chiudi } = await apri(COMPUTER);
  for (const [forn, logo] of Object.entries(catalogo.fornitori)) {
    const x = prodotti.find(y => y.fornitore === forn);
    if (!x || !logo) continue;
    await vai(`${VETRO}#/prodotto/${x.id}`);
    verifica(await p.$eval('.forn-logo img', i => i.complete && i.naturalWidth > 0).catch(() => false), `logo di ${forn} nella pagina di #${x.id}`);
  }
  await chiudi();
}

/* ---------- 4. Catalogo Vetro: tastiera nei filtri, tabella su telefono ---------- */
{
  const { p, vai, chiudi } = await apri(COMPUTER);
  await vai(`${VETRO}#/cat/${primaLista.id}`);
  await p.click('.filter-trigger');
  await p.waitForTimeout(400);
  await p.locator('.fdrop-btn').first().focus();
  await p.keyboard.press('Enter');
  verifica(await p.evaluate(() => document.activeElement.classList.contains('fdrop-btn')), 'filtri da tastiera: aperta la tendina, il fuoco resta sul suo pulsante');
  await p.waitForTimeout(350);
  await p.locator('.fdrop-menu.open .fopt:not(.off) input').first().focus();
  await p.keyboard.press('Space');
  await p.waitForTimeout(100);
  verifica(await p.evaluate(() => document.activeElement.tagName === 'INPUT' && document.activeElement.checked), 'filtri da tastiera: dopo la spunta il fuoco resta sulla casella');
  verifica(await p.locator('.filter-badge').textContent() === '1', 'filtri: il numero dei filtri attivi compare sul pulsante');
  await chiudi();
}
{
  // Il prodotto con piu' colonne di misura: sul telefono la tabella o ci
  // sta, o scorre di lato e lo dice.
  const largo = [...prodotti].sort((a, b) => (b.assi || []).length - (a.assi || []).length)[0];
  const { p, vai, chiudi } = await apri(TELEFONO);
  await vai(`${VETRO}#/prodotto/${largo.id}`);
  const t = await p.evaluate(() => {
    const s = document.querySelector('.pdp-variants .scorri-lato'), i = s.firstElementChild;
    return { scorre: i.scrollWidth > i.clientWidth + 4, avviso: s.classList.contains('scorre'), pagina: document.documentElement.scrollWidth <= window.innerWidth };
  });
  verifica(t.pagina, `tabella varianti su telefono (#${largo.id}): la pagina non sborda`);
  verifica(t.scorre === t.avviso, `tabella varianti su telefono (#${largo.id}): se scorre di lato, c'e' l'avviso`, JSON.stringify(t));
  await chiudi();
}

await browser.close();
server.close();
console.log(fallite.length
  ? `\n${fallite.length} verifiche NON passate su ${passate + fallite.length}.`
  : `\nTutto a posto: ${passate} verifiche passate.`);
process.exit(fallite.length ? 1 : 0);
