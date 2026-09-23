/* Dati del Catalogo Vetro.

   I prodotti stanno nei file JSON di src/data/vetro/prodotti, uno per
   categoria; categorie, sottocategorie, fornitori e finiture in
   src/data/vetro/catalogo.json. Li legge il plugin di Vite in
   scripts/vite-plugin-dati-vetro.mjs, che trasforma i nomi di foto e PDF
   negli indirizzi veri della build e lascia fuori le note: qui i dati
   vengono solo rimessi nella forma che l'interfaccia usa da sempre.

   Come si aggiunge un prodotto: src/data/vetro/LEGGIMI.md. */

import { catalogo, prodotti } from 'virtual:dati-vetro';

export const CATEGORIE_VETRO = catalogo.categorie;
export const SOTTOCATEGORIE_PER_CATEGORIA = catalogo.sottocategorie;
export const ALTRE_SOTTOCATEGORIE_VETRO = catalogo.altreSottocategorie;
export const FINISHES_VETRO = catalogo.finiture;
// I filtri di misura della lista prodotti, nell'ordine in cui compaiono.
export const FILTRI_VETRO = catalogo.filtri;

// Il logo arriva dall'elenco dei fornitori, non dal singolo prodotto.
export const PRODOTTI_VETRO = prodotti.map(({ paroleChiave, anteprimaScheda, ...p }) => {
  const logo = catalogo.fornitori[p.fornitore];
  return logo ? { ...p, fornitoreLogo: logo } : p;
});

export const SCHEDA_IMG_VETRO = Object.fromEntries(
  prodotti.filter(p => p.anteprimaScheda).map(p => [p.id, p.anteprimaScheda]),
);
export const PAROLE_CHIAVE_VETRO = Object.fromEntries(
  prodotti.filter(p => p.paroleChiave).map(p => [p.id, p.paroleChiave]),
);
