# Dati del Catalogo Vetro

Qui dentro ci sono tutti i dati del Catalogo Vetro. L'interfaccia
(`src/CatalogoVetro.jsx`) non contiene prodotti: li legge da questi file.

```
src/data/vetro/
  catalogo.json          categorie, sottocategorie, fornitori, finiture
  prodotti/
    01-parapetti-e-pensiline.json
    02-soluzioni-per-porte-scorrevoli.json
    ...                  un file per categoria, con i suoi prodotti
src/assets/vetro/        schede tecniche, istruzioni, rapporti, loghi (PDF e PNG)
  prodotti/              foto dei prodotti
  schede/                anteprime delle schede tecniche (JPG)
```

Prima di ogni build parte `npm run check` (`scripts/controlla-dati.mjs`),
che controlla i dati. Gli **errori** fermano la build, quindi anche la
pubblicazione: un file che non esiste, un collegamento a un prodotto che
non c'è, un campo scritto male. Gli **avvisi** vengono solo elencati: una
finitura senza foto, un fornitore senza logo. Lo si può lanciare anche da
solo, dopo ogni modifica.

I file sono JSON: virgolette doppie, niente virgola dopo l'ultimo elemento,
niente commenti. Per le spiegazioni c'è il campo `note` (vedi sotto).


## Aggiungere un prodotto

1. Metti le foto in `src/assets/vetro/prodotti/`. Se c'è una scheda
   tecnica, metti il PDF in `src/assets/vetro/` e la sua anteprima (JPG) in
   `src/assets/vetro/schede/`.
2. Apri il file della categoria in `prodotti/` e aggiungi il prodotto nel
   punto in cui deve comparire: **l'ordine nel file è l'ordine nel
   catalogo**, dentro ogni sottocategoria.
3. Dagli un `id` nuovo, mai usato prima: il più alto esistente più uno.
   L'id finisce nell'indirizzo della pagina (`#/prodotto/118`) e nei
   preferiti dei clienti, quindi non si cambia e non si riusa.
4. `npm run check`, poi `npm run dev` per vederlo.

Un prodotto minimo:

```json
{
  "id": 119,
  "categoria": "09",
  "sottocategoria": "tasselli",
  "nome": "Nome del prodotto",
  "descrizione": "Testo della pagina prodotto.",
  "materiale": "Nylon",
  "fornitore": "fischer",
  "scheda": "nome-scheda-tecnica.pdf",
  "anteprimaScheda": "schede/nome-scheda.jpg",
  "immagini": {
    "Grigio e rosso": ["prodotti/nome-foto.jpg", "prodotti/nome-foto-2.jpg"]
  },
  "varianti": [
    { "codice": "123456", "finitura": "Grigio e rosso" }
  ]
}
```


## I campi di un prodotto

I nomi di file sono sempre **relativi a `src/assets/vetro`**:
`"prodotti/foto.jpg"`, `"schede/anteprima.jpg"`, `"scheda.pdf"`. Con
`"../"` si risale alla cartella comune `src/assets` (lo usano i loghi Fimet
e HOPPE, condivisi con il Catalogo Generale).

Un campo che non è in questo elenco è un errore: quasi sempre è un nome
scritto male, che l'interfaccia ignorerebbe senza dire niente.

| Campo | Cosa contiene |
|---|---|
| `id` | Numero unico del prodotto. Vedi sopra: non si cambia. |
| `categoria` | Id della categoria (`"01"`...`"10"`), come in `catalogo.json`. Il prodotto va nel file di quella categoria. |
| `sottocategoria` | Id della sottocategoria. Nelle categorie con le tab deve essere una delle tab (vedi `sottocategorie` più sotto). |
| `nome` | Nome del prodotto. |
| `note` | Appunti per chi modifica i dati, una riga per elemento (`""` fa una riga vuota). **Non finiscono sul sito**: la build li toglie. |
| `descrizione` | Testo della pagina prodotto. Conta anche per la ricerca. |
| `paroleChiave` | Parole che un cliente potrebbe cercare e che né il nome né la descrizione contengono: termini generici ("distanziatore") o il nome commerciale del produttore, per gli articoli che da noi si chiamano in un altro modo. Servono solo alla ricerca, non si vedono. |
| `materiale` | Materiale, mostrato nella scheda e usato nel filtro "Materiale". |
| `materiali` | Al posto di `materiale`, quando sono più d'uno: `["Alluminio", "Resina"]`. Il prodotto compare sotto ciascuno nel filtro. |
| `diametro` | Per il filtro "Diametro" degli attacchi puntuali: `"Ø52mm"`. |
| `dimensioni` | Il riquadro "Misure" della pagina prodotto, testo libero. |
| `spessoriVetro` | Per il filtro "Spessore vetro": `["8+8", "10+10"]`. |
| `fornitore` | Nome del fornitore, esattamente come in `catalogo.json` → `fornitori`: il logo arriva da lì. |
| `scheda` | PDF della scheda tecnica. `null` = tasto "Scheda tecnica *in arrivo*", spento. Se il campo manca, il tasto non compare. |
| `anteprimaScheda` | Immagine della scheda mostrata nel visore quando si preme "Scheda tecnica". Obbligatoria se c'è `scheda`. |
| `istruzioni` | PDF delle istruzioni di montaggio. |
| `rapporto` | PDF del rapporto di prova, per gli articoli certificati. `null` = tasto "*in arrivo*". |
| `video` | Link al video di montaggio, oppure più video con etichetta: `[{ "etichetta": "a spingere", "url": "https://..." }]`. |
| `immagini` | Foto per finitura: `{ "Nero opaco": ["prodotti/a.jpg", "prodotti/b.jpg"] }`. Nell'elenco dei prodotti si vede la prima foto della prima finitura. Per ogni finitura delle varianti ci vuole una voce, altrimenti si vede "Immagine non disponibile". |
| `caratteristiche` | Riquadri della pagina prodotto: `[{ "titolo": "...", "testo": "..." }]`. |
| `varianti` | Gli articoli veri, uno per codice: `{ "codice": "...", "finitura": "..." }` più le misure (vedi `assi`). Il codice non si può ripetere in prodotti diversi. |
| `assi` | Le misure che distinguono le varianti, con i selettori e le colonne della tabella: `[{ "chiave": "lunghezza", "etichetta": "Lunghezza", "suffisso": " mm" }]`. Ogni variante deve avere un valore per ogni `chiave`. |
| `essenziali` | Id dei prodotti indispensabili per montare questo. |
| `facoltativi` | Id dei prodotti che possono servire ma non sono obbligatori. Di solito il collegamento va messo in tutti e due i prodotti: se manca il ritorno, il controllo lo segnala. |
| `senzaFinitura` | `true` per i prodotti di cui non dichiariamo una finitura (la sceglie il cliente): restano fuori dal filtro "Finitura". |

### Una scheda tecnica per variante

Quando ogni variante ha la sua scheda (il distanziale, una per lunghezza),
`scheda` e `anteprimaScheda` diventano oggetti con il **codice della
variante** come chiave:

```json
"scheda": { "IN109-239": "distanziale-5mm-scheda-tecnica.pdf", "IN109-240": "distanziale-10mm-scheda-tecnica.pdf" },
"anteprimaScheda": { "IN109-239": "schede/distanziale-5mm-scheda.jpg", "IN109-240": "schede/distanziale-10mm-scheda.jpg" }
```

Il visore apre quella della variante scelta e ne mette il codice nel titolo,
così le schede scaricate si distinguono. Funziona solo per la scheda
tecnica: `istruzioni` e `rapporto` sono sempre un file solo.

### Codici segnaposto

I sistemi su misura (Vetro 40, Grid...) non hanno un codice fisso: nella
variante si scrive `"codice": "Su misura"`. È ammesso, ma il controllo lo
segnala come avviso.


## catalogo.json

- **`categorie`**: le dieci categorie, nell'ordine dell'indice. Quelle
  senza prodotti mostrano "in preparazione".
- **`sottocategorie`**: le tab di ogni categoria, nell'ordine in cui
  compaiono. Le categorie che non sono qui non hanno tab.
- **`altreSottocategorie`**: etichette di sottocategoria per le categorie
  senza tab: niente tab, solo il testo sotto il nome del prodotto. Stesso
  formato: `{ "id": "...", "nome": "..." }`.
- **`fornitori`**: nome → logo. `null` se il logo non c'è ancora (avviso).
- **`finiture`**: nome → colore della pastiglia (un colore CSS, di solito
  un `linear-gradient`). Il nome deve essere identico a quello usato in
  `finitura` e in `immagini`.
- **`noteFiniture`**: appunti su una finitura, come le `note` dei
  prodotti. Non finiscono sul sito.


## Come arrivano al sito

Li legge il plugin `scripts/vite-plugin-dati-vetro.mjs`, sia in sviluppo sia
nella build: trasforma i nomi dei file negli indirizzi pubblicati e toglie
le note. Poi `src/datiVetro.js` li passa all'interfaccia. In sviluppo
(`npm run dev`) la pagina si aggiorna da sola quando si salva un JSON.
