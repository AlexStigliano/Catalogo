import React from 'react';
import './CatalogoVetro.css';
import logoCover from './assets/logo-stigliano-cover.png';

/* Copertina del Catalogo Vetro: stessa struttura della copertina del
   Catalogo Generale (vedi Cover in Catalogo.jsx), ma progetto a sé —
   il catalogo vetro non ha ancora un indice prodotti, quindi il CTA
   resta disabilitato finché non viene costruito. */
export default function CatalogoVetro() {
  return (
    <div className="cat">
      <div className="cover">
        <div className="cover-top">
          <img className="clogo" src={logoCover} alt="Ferramenta Stigliano — dal 1869" />
          <h1 className="catgen">Catalogo Vetro</h1>
          <p className="tagline">Ferramenta e accessori per il settore del vetro. Una selezione dedicata, dal 1869.</p>
          <button className="enter" disabled>Prossimamente</button>
        </div>
        <div className="cover-foot">Ferramenta <b>Stigliano</b> · Napoli · dal 1869</div>
      </div>
    </div>
  );
}
