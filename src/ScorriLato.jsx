import React, { useEffect, useRef, useState } from 'react';

/* Contenitore per una tabella che su schermi stretti puo' scorrere di lato
   (le varianti con piu' misure). Finche' restano colonne nascoste a destra
   il bordo sfuma, e se la tabella non ci sta tutta compare l'avviso sotto:
   senza, niente fa capire che c'e' altro da vedere. Lo usano tutti e due i
   cataloghi; l'aspetto e' in Catalogo.css (.scorri-lato). */
export default function ScorriLato({ className, children }) {
  const ref = useRef(null);
  const [stato, setStato] = useState({ scorre: false, altro: false });
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const aggiorna = () => {
      const nascosto = el.scrollWidth - el.clientWidth;
      const nuovo = { scorre: nascosto > 4, altro: nascosto - el.scrollLeft > 4 };
      setStato(s => (s.scorre === nuovo.scorre && s.altro === nuovo.altro ? s : nuovo));
    };
    aggiorna();
    el.addEventListener('scroll', aggiorna, { passive: true });
    // La tabella puo' arrivare dopo (nelle card si crea alla prima apertura)
    // e cambia larghezza ruotando il telefono.
    const dimensioni = new ResizeObserver(aggiorna);
    dimensioni.observe(el);
    const contenuto = new MutationObserver(aggiorna);
    contenuto.observe(el, { childList: true });
    return () => {
      el.removeEventListener('scroll', aggiorna);
      dimensioni.disconnect();
      contenuto.disconnect();
    };
  }, []);
  return (
    <div className={`scorri-lato${stato.scorre ? ' scorre' : ''}${stato.altro ? ' altro' : ''}`}>
      <div ref={ref} className={className}>{children}</div>
    </div>
  );
}
