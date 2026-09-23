# Catalogo Ferramenta Stigliano

Cataloghi online di Ferramenta Stigliano, pubblicati con GitHub Pages:

- **Catalogo Vetro** (`vetro.html`): ferramenta e accessori per il vetro. È
  il catalogo di riferimento, quello su cui si lavora oggi.
- **Catalogo Generale** (`index.html`): il primo catalogo, per ora fermo.

Sito pubblicato: <https://alexstigliano.github.io/Catalogo/vetro.html>

## Come è fatto

Un'applicazione React costruita con Vite, senza server: la build produce
file statici che GitHub Pages pubblica così come sono.

```
vetro.html, index.html        le due pagine d'ingresso
src/CatalogoVetro.jsx         interfaccia del Catalogo Vetro
src/data/vetro/               dati del Catalogo Vetro (JSON) e LEGGIMI.md
src/assets/vetro/             foto, schede tecniche e loghi del Catalogo Vetro
src/Catalogo.jsx              Catalogo Generale: interfaccia e dati insieme
src/Catalogo.css              stile, comune ai due cataloghi
scripts/controlla-dati.mjs    controllo dei dati, prima di ogni build
scripts/vite-plugin-dati-vetro.mjs   porta i dati JSON nel sito, converte le foto
public/                       icone, manifest, immagine di anteprima dei link
```

## Lavorare in locale

Serve Node.js 22.

```
npm install        la prima volta
npm run dev        sito in sviluppo: http://localhost:5173/vetro.html
npm run check      solo il controllo dei dati
npm run build      controllo dei dati + sito pronto in dist/
```

In sviluppo la pagina si aggiorna da sola a ogni modifica, anche dei file
JSON.

## Aggiungere un prodotto al Catalogo Vetro

La guida completa, con tutti i campi, è in
[`src/data/vetro/LEGGIMI.md`](src/data/vetro/LEGGIMI.md). In breve:

1. Metti le foto (JPG, alla risoluzione migliore che hai) in
   `src/assets/vetro/prodotti/`. Se c'è una scheda tecnica, il PDF va in
   `src/assets/vetro/` e la sua anteprima (JPG) in `src/assets/vetro/schede/`.
2. Apri il file della categoria in `src/data/vetro/prodotti/` (per esempio
   `09-sistemi-di-fissaggio.json`) e aggiungi il prodotto nel punto in cui
   deve comparire: l'ordine nel file è l'ordine nel catalogo.
3. Dagli un `id` nuovo, mai usato: il più alto esistente più uno. L'id
   finisce negli indirizzi e nei preferiti dei clienti, quindi non si
   cambia e non si riusa.
4. `npm run check`: gli **errori** (un file che non esiste, un campo scritto
   male, un collegamento a un prodotto inesistente) fermano la build; gli
   **avvisi** vengono solo elencati.
5. `npm run dev` per vederlo, poi pubblica (sotto).

Se il prodotto porta una misura nuova (per esempio la larghezza di un
nastro), va deciso se aggiungerla ai filtri: l'elenco è in
`src/data/vetro/catalogo.json`, alla voce `filtri`.

Il Catalogo Generale ha ancora i dati dentro `src/Catalogo.jsx`: lì un
prodotto si aggiunge nell'elenco dei prodotti del file, importando a mano
foto e PDF.

## Pubblicare

Il sito si pubblica **solo da `main`**
(`.github/workflows/deploy-pages.yml`): a ogni push su `main` GitHub
ricostruisce il sito e lo mette online in un paio di minuti.

Le modifiche si fanno su un branch di lavoro e arrivano in `main` con una
pull request. Su ogni pull request gira la CI (`.github/workflows/ci.yml`),
che esegue `npm run build`, quindi anche il controllo dei dati: se è rossa,
qualcosa va corretto prima di unire.
