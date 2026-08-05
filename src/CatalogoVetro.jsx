import React, { useState, useEffect, useMemo } from 'react';
import { ArrowRight, ChevronRight, ChevronLeft, ChevronDown, Download, Search, SlidersHorizontal, Heart, List, LayoutGrid, PlayCircle } from 'lucide-react';
import './Catalogo.css';
import logo from './assets/logo-stigliano.png';
import logoCover from './assets/logo-stigliano-cover.png';
import fermavetroInox from './assets/vetro/prodotti/fermavetro-regolabile-inox-satinato.jpg';
import fermavetroNero from './assets/vetro/prodotti/fermavetro-regolabile-nero-opaco.jpg';
import fermavetroOro from './assets/vetro/prodotti/fermavetro-regolabile-oro.jpg';
import fermavetroEsploso from './assets/vetro/prodotti/fermavetro-regolabile-esploso.jpg';
import fermavetroSchedaImg from './assets/vetro/schede/fermavetro-regolabile-scheda.jpg';
import asolaInox from './assets/vetro/prodotti/fermavetro-asola-inox-satinato.jpg';
import asolaInoxFrontale from './assets/vetro/prodotti/fermavetro-asola-inox-satinato-frontale.jpg';
import asolaInoxVista2 from './assets/vetro/prodotti/fermavetro-asola-inox-satinato-vista2.jpg';
import asolaOro from './assets/vetro/prodotti/fermavetro-asola-oro.jpg';
import asolaNero from './assets/vetro/prodotti/fermavetro-asola-nero-opaco.jpg';
import asolaSchedaImg from './assets/vetro/schede/fermavetro-asola-scheda.jpg';
import fermavetro30SchedaImg from './assets/vetro/schede/fermavetro-30-scheda.jpg';
import fermavetro30Inox from './assets/vetro/prodotti/fermavetro-30-inox-satinato.jpg';
import fermavetro30Esploso from './assets/vetro/prodotti/fermavetro-30-esploso.jpg';
import fermavetro30Vista2 from './assets/vetro/prodotti/fermavetro-30-vista2.jpg';
import fermavetro30Frontale from './assets/vetro/prodotti/fermavetro-30-frontale.jpg';
import inoxdesignLogo from './assets/vetro/inoxdesign-logo.png';
import fissaggioInox from './assets/vetro/prodotti/fissaggio-puntuale-inox-satinato.jpg';
import fissaggioInoxFrontale from './assets/vetro/prodotti/fissaggio-puntuale-inox-satinato-frontale.jpg';
import fissaggioInoxVista2 from './assets/vetro/prodotti/fissaggio-puntuale-inox-satinato-vista2.jpg';
import fissaggioEsploso from './assets/vetro/prodotti/fissaggio-puntuale-esploso.jpg';
import fissaggioSchedaImg from './assets/vetro/schede/fissaggio-puntuale-scheda.jpg';
import fissaggioNero from './assets/vetro/prodotti/fissaggio-puntuale-nero-opaco.jpg';
import fissaggioNeroVista2 from './assets/vetro/prodotti/fissaggio-puntuale-nero-opaco-vista2.jpg';
import fermavetro230SchedaImg from './assets/vetro/schede/fermavetro-230-scheda.jpg';
import fermavetro230Inox from './assets/vetro/prodotti/fermavetro-230-inox-satinato.jpg';
import fermavetro230Vista2 from './assets/vetro/prodotti/fermavetro-230-vista2.jpg';
import fermavetro230Frontale from './assets/vetro/prodotti/fermavetro-230-frontale.jpg';
import fermavetro220SchedaImg from './assets/vetro/schede/fermavetro-220-scheda.jpg';
import fermavetro220Inox from './assets/vetro/prodotti/fermavetro-220-inox-satinato.jpg';
import fermavetro220Esploso from './assets/vetro/prodotti/fermavetro-220-esploso.jpg';
import fermavetro220Vista2 from './assets/vetro/prodotti/fermavetro-220-vista2.jpg';
import fimetLogo from './assets/fimet-logo.png';
import arizonaInox from './assets/vetro/prodotti/arizona-inox-satinato.jpg';
import arizonaNero from './assets/vetro/prodotti/arizona-nero-opaco.jpg';
import arizonaPvd from './assets/vetro/prodotti/arizona-pvd-giallo-lucido.jpg';
import schArizona from './assets/vetro/schede/arizona-scheda.jpg';
import arizonaInclinatoInox from './assets/vetro/prodotti/arizona-inclinato-inox-satinato.jpg';
import schArizonaInclinato from './assets/vetro/schede/arizona-inclinato-scheda.jpg';
import arkansasQInox from './assets/vetro/prodotti/arkansas-q-inox-satinato.jpg';
import schArkansasQ from './assets/vetro/schede/arkansas-q-scheda.jpg';
import californiaInox from './assets/vetro/prodotti/california-inox-satinato.jpg';
import schCalifornia from './assets/vetro/schede/california-scheda.jpg';
import coloradoInox from './assets/vetro/prodotti/colorado-inox-satinato.jpg';
import coloradoNero from './assets/vetro/prodotti/colorado-nero-opaco.jpg';
import schColorado from './assets/vetro/schede/colorado-scheda.jpg';
import georgiaQInox from './assets/vetro/prodotti/georgia-q-inox-satinato.jpg';
import georgiaQNero from './assets/vetro/prodotti/georgia-q-nero-opaco.jpg';
import georgiaQPvd from './assets/vetro/prodotti/georgia-q-pvd-lucido.jpg';
import schGeorgiaQ from './assets/vetro/schede/georgia-q-scheda.jpg';
import cubaBicolore from './assets/vetro/prodotti/cuba-bicolore-inox.jpg';
import schCuba from './assets/vetro/schede/cuba-scheda.jpg';
import minnesotaInox from './assets/vetro/prodotti/minnesota-inox-satinato.jpg';
import schMinnesota from './assets/vetro/schede/minnesota-scheda.jpg';
import nevadaInox from './assets/vetro/prodotti/nevada-inox-satinato.jpg';
import schNevada from './assets/vetro/schede/nevada-scheda.jpg';
import nevadaQInox from './assets/vetro/prodotti/nevada-q-inox-satinato.jpg';
import nevadaQNero from './assets/vetro/prodotti/nevada-q-nero-opaco.jpg';
import schNevadaQ from './assets/vetro/schede/nevada-q-scheda.jpg';
import oregonInox from './assets/vetro/prodotti/oregon-inox-satinato.jpg';
import schOregon from './assets/vetro/schede/oregon-scheda.jpg';
import texasInox from './assets/vetro/prodotti/texas-inox-satinato.jpg';
import texasNero from './assets/vetro/prodotti/texas-nero-opaco.jpg';
import schTexas from './assets/vetro/schede/texas-scheda.jpg';
import compasLogo from './assets/vetro/compas-logo.svg';
import tg1000Render from './assets/vetro/prodotti/tg1000-render.jpg';
import tg1000Sezione from './assets/vetro/prodotti/tg1000-sezione.jpg';
import tg1000Ambiente from './assets/vetro/prodotti/tg1000-ambiente.jpg';
import schTg1000 from './assets/vetro/schede/tg1000-scheda.jpg';
import tg1004Tappo from './assets/vetro/prodotti/tg1004-tappo.jpg';
import schTg1004 from './assets/vetro/schede/tg1004-scheda.jpg';
import tg409Chiave from './assets/vetro/prodotti/tg409-chiave.jpg';
import tg409Uso from './assets/vetro/prodotti/tg409-uso.jpg';
import tg311Render from './assets/vetro/prodotti/tg311-render.jpg';
import tg311Sezione from './assets/vetro/prodotti/tg311-sezione.jpg';
import tg311Foto from './assets/vetro/prodotti/tg311-foto.jpg';
import tgs500Foto from './assets/vetro/prodotti/tgs500-foto.jpg';
import tgs500Sezione from './assets/vetro/prodotti/tgs500-sezione.jpg';
import tgs500Quote from './assets/vetro/prodotti/tgs500-quote.jpg';
import tgs500Fori from './assets/vetro/prodotti/tgs500-fori.jpg';
import schTgs500 from './assets/vetro/schede/tgs500-scheda.jpg';
import tgs502Tappo from './assets/vetro/prodotti/tgs502-tappo.jpg';
import schTgs502 from './assets/vetro/schede/tgs502-scheda.jpg';
import schDist5 from './assets/vetro/schede/distanziale-052-5mm-scheda.jpg';
import schDist10 from './assets/vetro/schede/distanziale-052-10mm-scheda.jpg';
import schDist20 from './assets/vetro/schede/distanziale-052-20mm-scheda.jpg';
import schDist30 from './assets/vetro/schede/distanziale-052-30mm-scheda.jpg';
import schDist40 from './assets/vetro/schede/distanziale-052-40mm-scheda.jpg';
import schDist50 from './assets/vetro/schede/distanziale-052-50mm-scheda.jpg';
import schTenditore1000 from './assets/vetro/schede/tenditore-010-1000mm-scheda.jpg';
import schTenditore830 from './assets/vetro/schede/tenditore-010-830mm-scheda.jpg';
import schTenditore910 from './assets/vetro/schede/tenditore-010-910mm-scheda.jpg';
import schTenditore1150 from './assets/vetro/schede/tenditore-010-1150mm-scheda.jpg';
import schTenditore1300 from './assets/vetro/schede/tenditore-010-1300mm-scheda.jpg';
import fissaggioMuro100Vista1 from './assets/vetro/prodotti/fissaggio-muro-100-vista1.jpg';
import fissaggioMuro100Vista2 from './assets/vetro/prodotti/fissaggio-muro-100-vista2.jpg';
import fissaggioMuro100Esploso from './assets/vetro/prodotti/fissaggio-muro-100-esploso.jpg';
import schFissaggioMuro100 from './assets/vetro/schede/fissaggio-muro-100-scheda.jpg';
import schLamieraU from './assets/vetro/schede/lamiera-u-1676-3000-scheda.jpg';
import lamieraURender from './assets/vetro/prodotti/lamiera-u-1676-3000-render.jpg';
import lamieraUSezione from './assets/vetro/prodotti/lamiera-u-1676-3000-sezione.jpg';
import schMorsettoM032 from './assets/vetro/schede/morsetto-m032-scheda.jpg';
import morsettoM032Vista1 from './assets/vetro/prodotti/morsetto-m032-vista1.jpg';
import morsettoM032Vista2 from './assets/vetro/prodotti/morsetto-m032-vista2.jpg';
import morsettoM032Sezione from './assets/vetro/prodotti/morsetto-m032-sezione.jpg';
import morsettoM032Esploso from './assets/vetro/prodotti/morsetto-m032-esploso.jpg';
import morsettoM032NeroVista1 from './assets/vetro/prodotti/morsetto-m032-nero-vista1.jpg';
import morsettoM032NeroVista2 from './assets/vetro/prodotti/morsetto-m032-nero-vista2.jpg';
import morsettoM032NeroSezione from './assets/vetro/prodotti/morsetto-m032-nero-sezione.jpg';
import morsettoM032NeroEsploso from './assets/vetro/prodotti/morsetto-m032-nero-esploso.jpg';
import schMorsettoM042 from './assets/vetro/schede/morsetto-m042-scheda.jpg';
import morsettoM042Vista1 from './assets/vetro/prodotti/morsetto-m042-vista1.jpg';
import morsettoM042Vista2 from './assets/vetro/prodotti/morsetto-m042-vista2.jpg';
import morsettoM042Sezione from './assets/vetro/prodotti/morsetto-m042-sezione.jpg';
import morsettoM042Esploso from './assets/vetro/prodotti/morsetto-m042-esploso.jpg';
import morsettoM042NeroVista1 from './assets/vetro/prodotti/morsetto-m042-nero-vista1.jpg';
import morsettoM042NeroVista2 from './assets/vetro/prodotti/morsetto-m042-nero-vista2.jpg';
import morsettoM042NeroSezione from './assets/vetro/prodotti/morsetto-m042-nero-sezione.jpg';
import morsettoM042NeroEsploso from './assets/vetro/prodotti/morsetto-m042-nero-esploso.jpg';
import schSupportoTondoIn610 from './assets/vetro/schede/supporto-tondo-pavimento-in610-scheda.jpg';
import supportoTondoIn610Vista1 from './assets/vetro/prodotti/supporto-tondo-pavimento-in610-vista1.jpg';
import supportoTondoIn610Vista2 from './assets/vetro/prodotti/supporto-tondo-pavimento-in610-vista2.jpg';
import supportoTondoIn610Esploso from './assets/vetro/prodotti/supporto-tondo-pavimento-in610-esploso.jpg';
import schSupportoQuadroIn610 from './assets/vetro/schede/supporto-quadro-pavimento-in610-scheda.jpg';
import supportoQuadroIn610Vista1 from './assets/vetro/prodotti/supporto-quadro-pavimento-in610-vista1.jpg';
import supportoQuadroIn610Vista2 from './assets/vetro/prodotti/supporto-quadro-pavimento-in610-vista2.jpg';
import supportoQuadroIn610Esploso from './assets/vetro/prodotti/supporto-quadro-pavimento-in610-esploso.jpg';
import schSupportoTondoIn610015 from './assets/vetro/schede/supporto-tondo-pavimento-in610-015-scheda.jpg';
import supportoTondoIn610015SatVista1 from './assets/vetro/prodotti/supporto-tondo-pavimento-in610-015-sat-vista1.jpg';
import supportoTondoIn610015SatVista2 from './assets/vetro/prodotti/supporto-tondo-pavimento-in610-015-sat-vista2.jpg';
import supportoTondoIn610015SatEsploso from './assets/vetro/prodotti/supporto-tondo-pavimento-in610-015-sat-esploso.jpg';
import supportoTondoIn610015LucVista1 from './assets/vetro/prodotti/supporto-tondo-pavimento-in610-015-luc-vista1.jpg';
import supportoTondoIn610015LucVista2 from './assets/vetro/prodotti/supporto-tondo-pavimento-in610-015-luc-vista2.jpg';
import supportoTondoIn610015LucEsploso from './assets/vetro/prodotti/supporto-tondo-pavimento-in610-015-luc-esploso.jpg';
import schSupportoQuadroIn610020 from './assets/vetro/schede/supporto-quadro-pavimento-in610-020-scheda.jpg';
import schMorsettoM032042 from './assets/vetro/schede/morsetto-m032-042-scheda.jpg';
import schMorsettoM042042 from './assets/vetro/schede/morsetto-m042-042-scheda.jpg';
import schMorsettoM062042 from './assets/vetro/schede/morsetto-m062-042-scheda.jpg';
import morsettoM062042Vista1 from './assets/vetro/prodotti/morsetto-m062-042-vista1.jpg';
import morsettoM062042Vista2 from './assets/vetro/prodotti/morsetto-m062-042-vista2.jpg';
import morsettoM062042Sezione from './assets/vetro/prodotti/morsetto-m062-042-sezione.jpg';
import morsettoM062042Esploso from './assets/vetro/prodotti/morsetto-m062-042-esploso.jpg';
import morsettoM042042Vista1 from './assets/vetro/prodotti/morsetto-m042-042-vista1.jpg';
import morsettoM042042Vista2 from './assets/vetro/prodotti/morsetto-m042-042-vista2.jpg';
import morsettoM042042Sezione from './assets/vetro/prodotti/morsetto-m042-042-sezione.jpg';
import morsettoM042042Esploso from './assets/vetro/prodotti/morsetto-m042-042-esploso.jpg';
import morsettoM032042Vista1 from './assets/vetro/prodotti/morsetto-m032-042-vista1.jpg';
import morsettoM032042Vista2 from './assets/vetro/prodotti/morsetto-m032-042-vista2.jpg';
import morsettoM032042Sezione from './assets/vetro/prodotti/morsetto-m032-042-sezione.jpg';
import morsettoM032042Esploso from './assets/vetro/prodotti/morsetto-m032-042-esploso.jpg';
import schMorsettoM012 from './assets/vetro/schede/morsetto-m012-scheda.jpg';
import morsettoM012Vista1 from './assets/vetro/prodotti/morsetto-m012-vista1.jpg';
import morsettoM012Vista2 from './assets/vetro/prodotti/morsetto-m012-vista2.jpg';
import morsettoM012Sezione from './assets/vetro/prodotti/morsetto-m012-sezione.jpg';
import morsettoM012Esploso from './assets/vetro/prodotti/morsetto-m012-esploso.jpg';
import schMorsettoM022 from './assets/vetro/schede/morsetto-m022-scheda.jpg';
import morsettoM022Vista1 from './assets/vetro/prodotti/morsetto-m022-vista1.jpg';
import morsettoM022Vista2 from './assets/vetro/prodotti/morsetto-m022-vista2.jpg';
import morsettoM022Sezione from './assets/vetro/prodotti/morsetto-m022-sezione.jpg';
import morsettoM022Esploso from './assets/vetro/prodotti/morsetto-m022-esploso.jpg';
import schMorsettoM062 from './assets/vetro/schede/morsetto-m062-scheda.jpg';
import schMorsettoM092 from './assets/vetro/schede/morsetto-m092-scheda.jpg';
import morsettoM092Vista1 from './assets/vetro/prodotti/morsetto-m092-vista1.jpg';
import morsettoM092Vista2 from './assets/vetro/prodotti/morsetto-m092-vista2.jpg';
import morsettoM092Sezione from './assets/vetro/prodotti/morsetto-m092-sezione.jpg';
import morsettoM092Esploso from './assets/vetro/prodotti/morsetto-m092-esploso.jpg';
import schFs880 from './assets/vetro/schede/fs880-scheda.jpg';
import fs880Render from './assets/vetro/prodotti/fs880-render.jpg';
import fs880Ambiente from './assets/vetro/prodotti/fs880-ambiente.jpg';
import fs880NeroRender from './assets/vetro/prodotti/fs880-nero-render.jpg';
import meroniLogo from './assets/vetro/meroni-logo.png';
import schFs890 from './assets/vetro/schede/fs890-scheda.jpg';
import fs890Render from './assets/vetro/prodotti/fs890-render.jpg';
import fs890Ambiente from './assets/vetro/prodotti/fs890-ambiente.jpg';
import schGaha1st from './assets/vetro/schede/gaha1st-scheda.jpg';
import gaha1stRender from './assets/vetro/prodotti/gaha1st-render.jpg';
import gaha1stAmbiente from './assets/vetro/prodotti/gaha1st-ambiente.jpg';
import gaha1stNeroRender from './assets/vetro/prodotti/gaha1st-nero-render.jpg';
import schAirhinge from './assets/vetro/schede/airhinge-scheda.jpg';
import airhingeNeroRender from './assets/vetro/prodotti/airhinge-nero-render.jpg';
import airhingeNeroAmbiente from './assets/vetro/prodotti/airhinge-nero-ambiente.jpg';
import airhingeArgentoAmbiente from './assets/vetro/prodotti/airhinge-argento-ambiente.jpg';
import airhingeArgentoRender from './assets/vetro/prodotti/airhinge-argento-render.jpg';
import morsettoM062Vista1 from './assets/vetro/prodotti/morsetto-m062-vista1.jpg';
import morsettoM062Vista2 from './assets/vetro/prodotti/morsetto-m062-vista2.jpg';
import morsettoM062Sezione from './assets/vetro/prodotti/morsetto-m062-sezione.jpg';
import morsettoM062Esploso from './assets/vetro/prodotti/morsetto-m062-esploso.jpg';
import supportoQuadroIn610020SatVista1 from './assets/vetro/prodotti/supporto-quadro-pavimento-in610-020-sat-vista1.jpg';
import supportoQuadroIn610020SatVista2 from './assets/vetro/prodotti/supporto-quadro-pavimento-in610-020-sat-vista2.jpg';
import supportoQuadroIn610020SatEsploso from './assets/vetro/prodotti/supporto-quadro-pavimento-in610-020-sat-esploso.jpg';
import supportoQuadroIn610020LucVista1 from './assets/vetro/prodotti/supporto-quadro-pavimento-in610-020-luc-vista1.jpg';
import supportoQuadroIn610020LucVista2 from './assets/vetro/prodotti/supporto-quadro-pavimento-in610-020-luc-vista2.jpg';
import supportoQuadroIn610020LucEsploso from './assets/vetro/prodotti/supporto-quadro-pavimento-in610-020-luc-esploso.jpg';
import tenditoreVista1 from './assets/vetro/prodotti/tenditore-010-vista1.jpg';
import tenditoreVista2 from './assets/vetro/prodotti/tenditore-010-vista2.jpg';
import tenditoreEsploso from './assets/vetro/prodotti/tenditore-010-esploso.jpg';
import tenditoreAmbiente from './assets/vetro/prodotti/tenditore-010-ambiente.jpg';
import tenditoreSchema from './assets/vetro/prodotti/tenditore-010-schema-dimensioni.jpg';
import distanzialeVista1 from './assets/vetro/prodotti/distanziale-052-vista1.jpg';
import distanzialeVista2 from './assets/vetro/prodotti/distanziale-052-vista2.jpg';
import distanzialeVista3 from './assets/vetro/prodotti/distanziale-052-vista3.jpg';
import tg203Profilo from './assets/vetro/prodotti/tg203-profilo.jpg';
import schTg203 from './assets/vetro/schede/tg203-scheda.jpg';
import tg205Tappo from './assets/vetro/prodotti/tg205-tappo.jpg';
import schTg205 from './assets/vetro/schede/tg205-scheda.jpg';
import tgs50Render from './assets/vetro/prodotti/tgs50-render.jpg';
import tgs50Sezione from './assets/vetro/prodotti/tgs50-sezione.jpg';
import tgs50Quote from './assets/vetro/prodotti/tgs50-quote.jpg';
import schTgs50 from './assets/vetro/schede/tgs50-scheda.jpg';
import tgs52Tappo from './assets/vetro/prodotti/tgs52-tappo.jpg';
import schTgs52 from './assets/vetro/schede/tgs52-scheda.jpg';
import tgs53Chiave from './assets/vetro/prodotti/tgs53-chiave.jpg';
import tg200Render from './assets/vetro/prodotti/tg200-render.jpg';
import tg200Sezione from './assets/vetro/prodotti/tg200-sezione.jpg';
import tg200Fori from './assets/vetro/prodotti/tg200-fori.jpg';
import schTg200 from './assets/vetro/schede/tg200-scheda.jpg';
import tg202Tappo from './assets/vetro/prodotti/tg202-tappo.jpg';
import tg202Quote from './assets/vetro/prodotti/tg202-quote.jpg';
import schTg202 from './assets/vetro/schede/tg202-scheda.jpg';
import dallagoLogo from './assets/vetro/dallago-logo.png';
import morsettoPiccoloCromoLucido from './assets/vetro/prodotti/morsetto-piccolo-cromo-lucido.jpg';
import schMorsettoPiccolo from './assets/vetro/schede/morsetto-piccolo-scheda.jpg';
import morsettoGrandeCromoLucido from './assets/vetro/prodotti/morsetto-grande-cromo-lucido.jpg';
import schMorsettoGrande from './assets/vetro/schede/morsetto-grande-scheda.jpg';
import hoppeLogo from './assets/hoppe-logo.png';
import parisArgentoOpaco from './assets/vetro/prodotti/paris-argento-opaco.jpg';
import schParis from './assets/vetro/schede/paris-scheda.jpg';

/* Le schede tecniche in PDF sono la parte più pesante del catalogo: invece di
   impacchettarle nel sito (che gonfierebbe il pacchetto pubblicato), restano
   solo su GitHub e vengono scaricate al volo da lì quando serve — per questo
   ci vuole una connessione, ma il sito pubblicato resta leggero.
   NB: quando questo branch verrà unito a main, cambiare REPO_BRANCH in 'main'. */
const REPO_BRANCH = 'claude/catalogo-vetro-copertina-p5608g';
const schedaUrl = (file) => `https://raw.githubusercontent.com/AlexStigliano/Catalogo/${REPO_BRANCH}/src/assets/vetro/${file}`;

/* Chiave dedicata (diversa da quella del Catalogo Generale) così i
   preferiti dei due cataloghi non si mescolano: gli id prodotto si
   ripetono da 1 in entrambi. Vale per tutti i prodotti, presenti e
   futuri, dato che si basa solo sull'id. */
const FAVORITI_KEY_VETRO = 'ferramenta_favorites_vetro';

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

// Sottocategorie con tab, per categoria. Le categorie assenti da questa
// mappa non mostrano tab (vedi ALTRE_SOTTOCATEGORIE_VETRO più sotto).
const SOTTOCATEGORIE_PER_CATEGORIA = {
  '01': [
    { id: 'balaustre', nome: 'Profili per balaustre' },
    { id: 'puntuali', nome: 'Attacchi puntuali' },
    { id: 'pensiline', nome: 'Pensiline' },
    { id: 'morsetti', nome: 'Morsetti' },
    { id: 'fermavetri', nome: 'Fermavetri' },
  ],
  '03': [
    { id: 'chiudiporta', nome: 'Chiudiporta' },
    { id: 'cerniere', nome: 'Cerniere' },
    { id: 'serrature', nome: 'Serrature' },
  ],
  '04': [
    { id: 'maniglie-scorrevoli', nome: 'Maniglie per porte scorrevoli' },
    { id: 'maniglie-battenti', nome: 'Maniglie per porte battenti' },
    { id: 'maniglioni', nome: 'Maniglioni' },
  ],
};
// Etichette di sottocategoria fuori dalle categorie con tab (niente tab:
// solo il testo mostrato sotto il nome prodotto).
const ALTRE_SOTTOCATEGORIE_VETRO = [];
const subName = (id) => (
  Object.values(SOTTOCATEGORIE_PER_CATEGORIA).flat().find(s => s.id === id) ||
  ALTRE_SOTTOCATEGORIE_VETRO.find(s => s.id === id) || {}
).nome || id;

const PRODOTTI_VETRO = [
  {
    id: 1, categoria: '01', sottocategoria: 'puntuali',
    nome: 'Vite fermavetro regolabile Ø52mm',
    descrizione: 'Attacco puntuale a vite per vetro Ø52mm con supporto regolabile in profondità, attacco diritto. Adatto a spessori vetro da 8 a 30mm, con lunghezza totale regolabile da 35 a 55mm (vite M10x130). Foro in vetro Ø25mm. Prodotto da Inoxdesign in acciaio inox AISI 304. Disponibile in 3 finiture: inox satinato, nero opaco e oro.',
    materiale: 'Acciaio inox AISI 304',
    diametro: 'Ø52mm',
    dimensioni: 'Disco Ø52mm · vite M10x130 · spessore vetro 8-30mm · foro Ø25mm',
    fornitore: 'Inoxdesign', fornitoreLogo: inoxdesignLogo,
    scheda: schedaUrl('fermavetro-regolabile-scheda-tecnica.pdf'),
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
    nome: 'Vite fermavetro regolabile con asola Ø52mm',
    descrizione: 'Attacco puntuale a vite per vetro Ø52mm con asola e supporto regolabile in profondità, attacco diritto. Adatto a spessori vetro da 8 a 30mm, con lunghezza totale regolabile da 36 a 45mm (vite M5). Foro in vetro Ø25mm. Prodotto da Inoxdesign in acciaio inox AISI 304. Disponibile in 3 finiture: inox satinato, nero opaco e oro.',
    materiale: 'Acciaio inox AISI 304',
    diametro: 'Ø52mm',
    dimensioni: 'Disco Ø52mm · asola 20,5×10,5mm · vite M5 · spessore vetro 8-30mm · foro Ø25mm',
    fornitore: 'Inoxdesign', fornitoreLogo: inoxdesignLogo,
    scheda: schedaUrl('fermavetro-asola-scheda-tecnica.pdf'),
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
  {
    id: 5, categoria: '01', sottocategoria: 'puntuali',
    nome: 'Vite fermavetro Ø52mm',
    descrizione: 'Attacco puntuale a vite per vetro Ø52mm con supporto regolabile in profondità e calotta Ø18mm, attacco diritto. Adatto a spessori vetro da 8 a 30mm (vite M10x40). Foro in vetro Ø25mm. Prodotto da Inoxdesign in acciaio inox AISI 304.',
    materiale: 'Acciaio inox AISI 304',
    diametro: 'Ø52mm',
    dimensioni: 'Disco Ø52mm · calotta Ø18mm · vite M10x40 · spessore vetro 8-30mm · foro Ø25mm',
    fornitore: 'Inoxdesign', fornitoreLogo: inoxdesignLogo,
    scheda: schedaUrl('fermavetro-230-scheda-tecnica.pdf'),
    immagini: {
      'Inox satinato': [fermavetro230Inox, fermavetro230Vista2, fermavetro230Frontale],
    },
    varianti: [
      { codice: 'IN109-230', finitura: 'Inox satinato' },
    ],
  },
  {
    id: 3, categoria: '01', sottocategoria: 'puntuali',
    nome: 'Vite fermavetro Ø30mm',
    descrizione: 'Attacco puntuale a vite per vetro con attacco diritto. Adatto a spessori vetro da 6 a 14mm (vite M8x45). Foro in vetro Ø15mm. Prodotto da Inoxdesign, disponibile in due versioni con la stessa finitura inox satinato: in acciaio inox AISI 304 oppure in zama.',
    materiale: 'Acciaio inox AISI 304 o zama',
    materiali: ['Acciaio inox AISI 304', 'Zama'],
    diametro: 'Ø30mm',
    dimensioni: 'Disco Ø30mm · testa Ø13mm · altezza 15mm · vite M8x45 · spessore vetro 6-14mm · foro Ø15mm',
    fornitore: 'Inoxdesign', fornitoreLogo: inoxdesignLogo,
    scheda: schedaUrl('fermavetro-30-scheda-tecnica.pdf'),
    immagini: {
      'Inox satinato': [fermavetro30Inox, fermavetro30Esploso, fermavetro30Vista2, fermavetro30Frontale],
    },
    varianti: [
      { codice: 'IN109-010', finitura: 'Inox satinato', materiale: 'Acciaio inox AISI 304' },
      { codice: 'IN109-010-0F', finitura: 'Inox satinato', materiale: 'Zama' },
    ],
  },
  {
    id: 4, categoria: '01', sottocategoria: 'puntuali',
    nome: 'Fissaggio puntuale Ø30mm',
    descrizione: 'Fissaggio puntuale con filetto fisso M8x45 per vetro, testa Ø30mm. Foro in vetro Ø15mm. Prodotto da Inoxdesign in acciaio inox AISI 304. Disponibile in 2 finiture: inox satinato e nero opaco.',
    materiale: 'Acciaio inox AISI 304',
    diametro: 'Ø30mm',
    dimensioni: 'Testa Ø30mm · calotta Ø13mm · altezza 6,3mm · filetto M8x45 fisso · foro Ø15mm',
    fornitore: 'Inoxdesign', fornitoreLogo: inoxdesignLogo,
    scheda: schedaUrl('fissaggio-puntuale-scheda-tecnica.pdf'),
    immagini: {
      'Inox satinato': [fissaggioInox, fissaggioEsploso, fissaggioInoxVista2, fissaggioInoxFrontale],
      'Nero opaco': [fissaggioNero, fissaggioNeroVista2],
    },
    varianti: [
      { codice: 'IN109-792', finitura: 'Inox satinato' },
      { codice: 'IN109-792-NE', finitura: 'Nero opaco' },
    ],
  },
  {
    id: 6, categoria: '01', sottocategoria: 'puntuali',
    nome: 'Calotta fermavetro Ø52mm',
    descrizione: 'Calotta superiore per attacco puntuale, Ø52mm, con gommine e filetto interno M10, altezza 11mm. Foro in vetro Ø25mm. Prodotto da Inoxdesign in acciaio inox AISI 304.',
    materiale: 'Acciaio inox AISI 304',
    diametro: 'Ø52mm',
    dimensioni: 'Calotta Ø52mm · altezza 11mm · filetto M10 · foro Ø25mm',
    fornitore: 'Inoxdesign', fornitoreLogo: inoxdesignLogo,
    scheda: schedaUrl('fermavetro-220-scheda-tecnica.pdf'),
    immagini: {
      'Inox satinato': [fermavetro220Inox, fermavetro220Esploso, fermavetro220Vista2],
    },
    varianti: [
      { codice: 'IN109-220', finitura: 'Inox satinato' },
    ],
  },
  {
    id: 32, categoria: '01', sottocategoria: 'puntuali',
    nome: 'Distanziale per vite fermavetro Ø52mm',
    descrizione: 'Distanziale a rondella per attacchi puntuali a vite Ø52mm, da inserire fra vetro e supporto per ottenere l’interspazio desiderato. Foro centrale Ø10,5mm per vite M10. Prodotto da Inoxdesign in acciaio inox AISI 304, finitura inox satinato. Disponibile nelle lunghezze 5, 10, 20, 30, 40 e 50mm.',
    materiale: 'Acciaio inox AISI 304',
    diametro: 'Ø52mm',
    dimensioni: 'Disco Ø52mm · foro Ø10,5mm',
    fornitore: 'Inoxdesign', fornitoreLogo: inoxdesignLogo,
    scheda: {
      'IN109-239': schedaUrl('distanziale-052-5mm-scheda-tecnica.pdf'),
      'IN109-240': schedaUrl('distanziale-052-10mm-scheda-tecnica.pdf'),
      'IN109-241': schedaUrl('distanziale-052-20mm-scheda-tecnica.pdf'),
      'IN109-242': schedaUrl('distanziale-052-30mm-scheda-tecnica.pdf'),
      'IN109-243': schedaUrl('distanziale-052-40mm-scheda-tecnica.pdf'),
      'IN109-244': schedaUrl('distanziale-052-50mm-scheda-tecnica.pdf'),
    },
    assi: [
      { chiave: 'lunghezza', etichetta: 'Lunghezza', suffisso: ' mm' },
    ],
    immagini: {
      'Inox satinato': [distanzialeVista1, distanzialeVista2, distanzialeVista3],
    },
    varianti: [
      { codice: 'IN109-239', finitura: 'Inox satinato', lunghezza: 5 },
      { codice: 'IN109-240', finitura: 'Inox satinato', lunghezza: 10 },
      { codice: 'IN109-241', finitura: 'Inox satinato', lunghezza: 20 },
      { codice: 'IN109-242', finitura: 'Inox satinato', lunghezza: 30 },
      { codice: 'IN109-243', finitura: 'Inox satinato', lunghezza: 40 },
      { codice: 'IN109-244', finitura: 'Inox satinato', lunghezza: 50 },
    ],
  },
  {
    id: 7, categoria: '04', sottocategoria: 'maniglioni',
    nome: 'Arizona',
    descrizione: 'Maniglione tubolare per porte in acciaio inox AISI 304, con supporti diritti e profilo tondo. Le finiture sono protette da una verniciatura a polvere certificata resistente ai raggi UV, quindi regge bene anche sulle porte esposte. Viene fornito con il kit di fissaggio completo: bussole, guarnizioni, grani, viti autofilettanti e tronconi filettati. Fimet progetta e produce in Italia, a Casto in provincia di Brescia. Puoi scegliere la misura indifferentemente per lunghezza totale o per interasse: selezionando una delle due, restano disponibili solo le combinazioni compatibili.',
    materiale: 'Acciaio inox AISI 304',
    fornitore: 'Fimet', fornitoreLogo: fimetLogo,
    scheda: schedaUrl('arizona-scheda-tecnica.pdf'),
    assi: [
      { chiave: 'diametro', etichetta: 'Diametro', suffisso: ' mm' },
      { chiave: 'lunghezza', etichetta: 'Lunghezza totale', suffisso: ' mm' },
      { chiave: 'interasse', etichetta: 'Interasse', suffisso: ' mm' },
    ],
    immagini: {
      'Acciaio inox satinato': [arizonaInox],
      'Nero opaco': [arizonaNero],
      'PVD lucido': [arizonaPvd],
    },
    varianti: [
      { codice: '800.20.500.300.60', finitura: 'Acciaio inox satinato', diametro: 20, lunghezza: 500, interasse: 300 },
      { codice: '800.25.500.300.60', finitura: 'Acciaio inox satinato', diametro: 25, lunghezza: 500, interasse: 300 },
      { codice: '800.25.700.500.60', finitura: 'Acciaio inox satinato', diametro: 25, lunghezza: 700, interasse: 500 },
      { codice: '800.30.800.600.60', finitura: 'Acciaio inox satinato', diametro: 30, lunghezza: 800, interasse: 600 },
      { codice: '800.30.1000.700.60', finitura: 'Acciaio inox satinato', diametro: 30, lunghezza: 1000, interasse: 700 },
      { codice: '800.30.1200.900.60', finitura: 'Acciaio inox satinato', diametro: 30, lunghezza: 1200, interasse: 900 },
      { codice: '800.30.1500.1300.60', finitura: 'Acciaio inox satinato', diametro: 30, lunghezza: 1500, interasse: 1300 },
      { codice: '800.25.500.300.NO', finitura: 'Nero opaco', diametro: 25, lunghezza: 500, interasse: 300 },
      { codice: '800.25.500.300.18', finitura: 'PVD lucido', diametro: 25, lunghezza: 500, interasse: 300 },
    ],
  },
  {
    id: 8, categoria: '04', sottocategoria: 'maniglioni',
    nome: 'Arizona Inclinato',
    descrizione: 'Maniglione tubolare per porte in acciaio inox AISI 304, con supporti inclinati e profilo tondo: rispetto alla versione a supporti diritti, l’impugnatura risulta piu’ ergonomica in fase di apertura. Le finiture sono protette da una verniciatura a polvere certificata resistente ai raggi UV, quindi regge bene anche sulle porte esposte. Viene fornito con il kit di fissaggio completo: bussole, guarnizioni, grani, viti autofilettanti e tronconi filettati. Fimet progetta e produce in Italia, a Casto in provincia di Brescia. Puoi scegliere la misura indifferentemente per lunghezza totale o per interasse: selezionando una delle due, restano disponibili solo le combinazioni compatibili.',
    materiale: 'Acciaio inox AISI 304',
    fornitore: 'Fimet', fornitoreLogo: fimetLogo,
    scheda: schedaUrl('arizona-inclinato-scheda-tecnica.pdf'),
    assi: [
      { chiave: 'diametro', etichetta: 'Diametro', suffisso: ' mm' },
      { chiave: 'lunghezza', etichetta: 'Lunghezza totale', suffisso: ' mm' },
      { chiave: 'interasse', etichetta: 'Interasse', suffisso: ' mm' },
    ],
    immagini: {
      'Acciaio inox satinato': [arizonaInclinatoInox],
    },
    varianti: [
      { codice: '810.25.500.300.60', finitura: 'Acciaio inox satinato', diametro: 25, lunghezza: 500, interasse: 300 },
      { codice: '810.30.800.600.60', finitura: 'Acciaio inox satinato', diametro: 30, lunghezza: 800, interasse: 600 },
      { codice: '810.30.1200.900.60', finitura: 'Acciaio inox satinato', diametro: 30, lunghezza: 1200, interasse: 900 },
    ],
  },
  {
    id: 9, categoria: '04', sottocategoria: 'maniglioni',
    nome: 'Arkansas Q',
    descrizione: 'Maniglione ad arco in acciaio inox AISI 304, profilo tondo Ø32 mm. La finitura è protetta da una verniciatura a polvere certificata resistente ai raggi UV, quindi regge bene anche sulle porte esposte. Viene fornito con il kit di fissaggio completo: bussole, guarnizioni, grani, viti autofilettanti e tronconi filettati. Fimet progetta e produce in Italia, a Casto in provincia di Brescia.',
    materiale: 'Acciaio inox AISI 304',
    dimensioni: 'Ø32mm · 382×350mm',
    fornitore: 'Fimet', fornitoreLogo: fimetLogo,
    scheda: schedaUrl('arkansas-q-scheda-tecnica.pdf'),
    assi: [
      { chiave: 'lunghezza', etichetta: 'Lunghezza totale', suffisso: ' mm' },
      { chiave: 'interasse', etichetta: 'Interasse', suffisso: ' mm' },
    ],
    immagini: {
      'Acciaio inox satinato': [arkansasQInox],
    },
    varianti: [
      { codice: '816.32.382.350.60', finitura: 'Acciaio inox satinato', lunghezza: 382, interasse: 350 },
    ],
  },
  {
    id: 10, categoria: '04', sottocategoria: 'maniglioni',
    nome: 'California',
    descrizione: 'Maniglione ad arco in acciaio inox AISI 304, profilo tondo Ø32 mm, con una curva ampia che dona slancio alla porta. La finitura è protetta da una verniciatura a polvere certificata resistente ai raggi UV, quindi regge bene anche sulle porte esposte. Viene fornito con il kit di fissaggio completo: bussole, guarnizioni, grani, viti autofilettanti e tronconi filettati. Fimet progetta e produce in Italia, a Casto in provincia di Brescia.',
    materiale: 'Acciaio inox AISI 304',
    dimensioni: 'Ø32mm · 575×500mm',
    fornitore: 'Fimet', fornitoreLogo: fimetLogo,
    scheda: schedaUrl('california-scheda-tecnica.pdf'),
    assi: [
      { chiave: 'lunghezza', etichetta: 'Lunghezza totale', suffisso: ' mm' },
      { chiave: 'interasse', etichetta: 'Interasse', suffisso: ' mm' },
    ],
    immagini: {
      'Acciaio inox satinato': [californiaInox],
    },
    varianti: [
      { codice: '817.32.575.500.60', finitura: 'Acciaio inox satinato', lunghezza: 575, interasse: 500 },
    ],
  },
  {
    id: 11, categoria: '04', sottocategoria: 'maniglioni',
    nome: 'Colorado',
    descrizione: 'Maniglione tubolare per porte in acciaio inox AISI 304, con supporti diritti e profilo quadro 40×10 mm. Le finiture sono protette da una verniciatura a polvere certificata resistente ai raggi UV, quindi regge bene anche sulle porte esposte. Viene fornito con il kit di fissaggio completo: bussole, guarnizioni, grani, viti autofilettanti e tronconi filettati. Fimet progetta e produce in Italia, a Casto in provincia di Brescia. Puoi scegliere la misura indifferentemente per lunghezza totale o per interasse: selezionando una delle due, restano disponibili solo le combinazioni compatibili.',
    materiale: 'Acciaio inox AISI 304',
    fornitore: 'Fimet', fornitoreLogo: fimetLogo,
    scheda: schedaUrl('colorado-scheda-tecnica.pdf'),
    assi: [
      { chiave: 'lunghezza', etichetta: 'Lunghezza totale', suffisso: ' mm' },
      { chiave: 'interasse', etichetta: 'Interasse', suffisso: ' mm' },
    ],
    immagini: {
      'Acciaio inox satinato': [coloradoInox],
      'Nero opaco': [coloradoNero],
    },
    varianti: [
      { codice: '841S.500.300.60', finitura: 'Acciaio inox satinato', lunghezza: 500, interasse: 300 },
      { codice: '841S.800.600.60', finitura: 'Acciaio inox satinato', lunghezza: 800, interasse: 600 },
      { codice: '841S.1000.800.60', finitura: 'Acciaio inox satinato', lunghezza: 1000, interasse: 800 },
      { codice: '841S.1200.900.60', finitura: 'Acciaio inox satinato', lunghezza: 1200, interasse: 900 },
      { codice: '841S.500.300.NO', finitura: 'Nero opaco', lunghezza: 500, interasse: 300 },
      { codice: '841S.800.600.NO', finitura: 'Nero opaco', lunghezza: 800, interasse: 600 },
    ],
  },
  {
    id: 12, categoria: '04', sottocategoria: 'maniglioni',
    nome: 'Georgia Q',
    descrizione: 'Maniglione tubolare per porte in acciaio inox AISI 304, con supporti diritti e profilo quadro: 20×20 mm nelle misure più corte, 25×25 mm in quelle più lunghe. Le finiture sono protette da una verniciatura a polvere certificata resistente ai raggi UV, quindi regge bene anche sulle porte esposte. Viene fornito con il kit di fissaggio completo: bussole, guarnizioni, grani, viti autofilettanti e tronconi filettati. Fimet progetta e produce in Italia, a Casto in provincia di Brescia. Puoi scegliere la misura indifferentemente per lunghezza totale o per interasse: selezionando una delle due, restano disponibili solo le combinazioni compatibili.',
    materiale: 'Acciaio inox AISI 304',
    fornitore: 'Fimet', fornitoreLogo: fimetLogo,
    scheda: schedaUrl('georgia-q-scheda-tecnica.pdf'),
    assi: [
      { chiave: 'diametro', etichetta: 'Profilo', suffisso: ' mm' },
      { chiave: 'lunghezza', etichetta: 'Lunghezza totale', suffisso: ' mm' },
      { chiave: 'interasse', etichetta: 'Interasse', suffisso: ' mm' },
    ],
    immagini: {
      'Acciaio inox satinato': [georgiaQInox],
      'Nero opaco': [georgiaQNero],
      'PVD lucido': [georgiaQPvd],
    },
    varianti: [
      { codice: '802K.20.220.200.60', finitura: 'Acciaio inox satinato', diametro: 20, lunghezza: 220, interasse: 200 },
      { codice: '802K.20.320.300.60', finitura: 'Acciaio inox satinato', diametro: 20, lunghezza: 320, interasse: 300 },
      { codice: '802K.25.625.600.60', finitura: 'Acciaio inox satinato', diametro: 25, lunghezza: 625, interasse: 600 },
      { codice: '802K.25.925.900.60', finitura: 'Acciaio inox satinato', diametro: 25, lunghezza: 925, interasse: 900 },
      { codice: '802K.20.220.200.61', finitura: 'Inox lucido', diametro: 20, lunghezza: 220, interasse: 200 },
      { codice: '802K.20.320.300.61', finitura: 'Inox lucido', diametro: 20, lunghezza: 320, interasse: 300 },
      { codice: '802K.25.925.900.61', finitura: 'Inox lucido', diametro: 25, lunghezza: 925, interasse: 900 },
      { codice: '802K.20.220.200.NO', finitura: 'Nero opaco', diametro: 20, lunghezza: 220, interasse: 200 },
      { codice: '802K.20.320.300.NO', finitura: 'Nero opaco', diametro: 20, lunghezza: 320, interasse: 300 },
      { codice: '802K.25.625.600.NO', finitura: 'Nero opaco', diametro: 25, lunghezza: 625, interasse: 600 },
      { codice: '802K.20.320.300.18', finitura: 'PVD lucido', diametro: 20, lunghezza: 320, interasse: 300 },
    ],
  },
  {
    id: 13, categoria: '04', sottocategoria: 'maniglioni',
    nome: 'Cuba',
    descrizione: 'Maniglione ad arco in acciaio inox AISI 304, profilo tondo Ø25 mm, con una riga centrale a contrasto tra satinato e lucido. La finitura è protetta da una verniciatura a polvere certificata resistente ai raggi UV, quindi regge bene anche sulle porte esposte. Viene fornito con il kit di fissaggio completo: bussole, guarnizioni, grani, viti autofilettanti e tronconi filettati. Fimet progetta e produce in Italia, a Casto in provincia di Brescia.',
    materiale: 'Acciaio inox AISI 304',
    fornitore: 'Fimet', fornitoreLogo: fimetLogo,
    scheda: schedaUrl('cuba-scheda-tecnica.pdf'),
    assi: [
      { chiave: 'lunghezza', etichetta: 'Lunghezza totale', suffisso: ' mm' },
      { chiave: 'interasse', etichetta: 'Interasse', suffisso: ' mm' },
    ],
    immagini: {
      'Bicolore inox satinato / lucido': [cubaBicolore],
    },
    varianti: [
      { codice: '849L.25.450.350.63', finitura: 'Bicolore inox satinato / lucido', lunghezza: 450, interasse: 350 },
    ],
  },
  {
    id: 14, categoria: '04', sottocategoria: 'maniglioni',
    nome: 'Minnesota',
    descrizione: 'Maniglione tubolare per porte in acciaio inox AISI 304, con supporti diritti e profilo tondo. La finitura è protetta da una verniciatura a polvere certificata resistente ai raggi UV, quindi regge bene anche sulle porte esposte. Viene fornito con il kit di fissaggio completo: bussole, guarnizioni, grani, viti autofilettanti e tronconi filettati. Fimet progetta e produce in Italia, a Casto in provincia di Brescia. Puoi scegliere la misura indifferentemente per lunghezza totale o per interasse: selezionando una delle due, restano disponibili solo le combinazioni compatibili.',
    materiale: 'Acciaio inox AISI 304',
    fornitore: 'Fimet', fornitoreLogo: fimetLogo,
    scheda: schedaUrl('minnesota-scheda-tecnica.pdf'),
    assi: [
      { chiave: 'diametro', etichetta: 'Diametro', suffisso: ' mm' },
      { chiave: 'lunghezza', etichetta: 'Lunghezza totale', suffisso: ' mm' },
      { chiave: 'interasse', etichetta: 'Interasse', suffisso: ' mm' },
    ],
    immagini: {
      'Acciaio inox satinato': [minnesotaInox],
    },
    varianti: [
      { codice: '839.25.275.250.60', finitura: 'Acciaio inox satinato', diametro: 25, lunghezza: 275, interasse: 250 },
      { codice: '839.32.382.350.60', finitura: 'Acciaio inox satinato', diametro: 32, lunghezza: 382, interasse: 350 },
    ],
  },
  {
    id: 15, categoria: '04', sottocategoria: 'maniglioni',
    nome: 'Nevada',
    descrizione: 'Maniglione con supporti a squadra e profilo tondo Ø32 mm, in acciaio inox AISI 304. La finitura è protetta da una verniciatura a polvere certificata resistente ai raggi UV, quindi regge bene anche sulle porte esposte. Viene fornito con il kit di fissaggio completo: bussole, guarnizioni, grani, viti autofilettanti e tronconi filettati. Fimet progetta e produce in Italia, a Casto in provincia di Brescia.',
    materiale: 'Acciaio inox AISI 304',
    fornitore: 'Fimet', fornitoreLogo: fimetLogo,
    scheda: schedaUrl('nevada-scheda-tecnica.pdf'),
    assi: [
      { chiave: 'lunghezza', etichetta: 'Lunghezza totale', suffisso: ' mm' },
      { chiave: 'interasse', etichetta: 'Interasse', suffisso: ' mm' },
    ],
    immagini: {
      'Acciaio inox satinato': [nevadaInox],
    },
    varianti: [
      { codice: '838.32.382.350.60', finitura: 'Acciaio inox satinato', lunghezza: 382, interasse: 350 },
    ],
  },
  {
    id: 16, categoria: '04', sottocategoria: 'maniglioni',
    nome: 'Nevada Q',
    descrizione: 'Maniglione con supporti a squadra e profilo quadro 25×25 mm, in acciaio inox AISI 304. La finitura è protetta da una verniciatura a polvere certificata resistente ai raggi UV, quindi regge bene anche sulle porte esposte. Viene fornito con il kit di fissaggio completo: bussole, guarnizioni, grani, viti autofilettanti e tronconi filettati. Fimet progetta e produce in Italia, a Casto in provincia di Brescia.',
    materiale: 'Acciaio inox AISI 304',
    fornitore: 'Fimet', fornitoreLogo: fimetLogo,
    scheda: schedaUrl('nevada-q-scheda-tecnica.pdf'),
    assi: [
      { chiave: 'lunghezza', etichetta: 'Lunghezza totale', suffisso: ' mm' },
      { chiave: 'interasse', etichetta: 'Interasse', suffisso: ' mm' },
    ],
    immagini: {
      'Acciaio inox satinato': [nevadaQInox],
      'Nero opaco': [nevadaQNero],
    },
    varianti: [
      { codice: '838Q.25.375.350.60', finitura: 'Acciaio inox satinato', lunghezza: 375, interasse: 350 },
      { codice: '838Q.25.375.350.NO', finitura: 'Nero opaco', lunghezza: 375, interasse: 350 },
    ],
  },
  {
    id: 17, categoria: '04', sottocategoria: 'maniglioni',
    nome: 'Oregon',
    descrizione: 'Maniglione tubolare per porte in acciaio inox AISI 304, con supporti inclinati e profilo quadro 40×10 mm: rispetto alla versione a supporti diritti, l’impugnatura risulta piu’ ergonomica in fase di apertura. Le finiture sono protette da una verniciatura a polvere certificata resistente ai raggi UV, quindi regge bene anche sulle porte esposte. Viene fornito con il kit di fissaggio completo: bussole, guarnizioni, grani, viti autofilettanti e tronconi filettati. Fimet progetta e produce in Italia, a Casto in provincia di Brescia. Puoi scegliere la misura indifferentemente per lunghezza totale o per interasse: selezionando una delle due, restano disponibili solo le combinazioni compatibili.',
    materiale: 'Acciaio inox AISI 304',
    fornitore: 'Fimet', fornitoreLogo: fimetLogo,
    scheda: schedaUrl('oregon-scheda-tecnica.pdf'),
    assi: [
      { chiave: 'lunghezza', etichetta: 'Lunghezza totale', suffisso: ' mm' },
      { chiave: 'interasse', etichetta: 'Interasse', suffisso: ' mm' },
    ],
    immagini: {
      'Acciaio inox satinato': [oregonInox],
    },
    varianti: [
      { codice: '841Z.500.300.60', finitura: 'Acciaio inox satinato', lunghezza: 500, interasse: 300 },
      { codice: '841Z.600.400.60', finitura: 'Acciaio inox satinato', lunghezza: 600, interasse: 400 },
      { codice: '841Z.800.600.60', finitura: 'Acciaio inox satinato', lunghezza: 800, interasse: 600 },
      { codice: '841Z.500.300.NO', finitura: 'Nero opaco', lunghezza: 500, interasse: 300 },
      { codice: '841Z.800.600.NO', finitura: 'Nero opaco', lunghezza: 800, interasse: 600 },
    ],
  },
  {
    id: 18, categoria: '04', sottocategoria: 'maniglioni',
    nome: 'Texas',
    descrizione: 'Maniglione tubolare per porte in acciaio inox AISI 304, con supporti diritti e profilo quadro: 25×25 mm nella maggior parte delle misure, 30×30 mm in quella più lunga. Le finiture sono protette da una verniciatura a polvere certificata resistente ai raggi UV, quindi regge bene anche sulle porte esposte. Viene fornito con il kit di fissaggio completo: bussole, guarnizioni, grani, viti autofilettanti e tronconi filettati. Fimet progetta e produce in Italia, a Casto in provincia di Brescia. Puoi scegliere la misura indifferentemente per lunghezza totale o per interasse: selezionando una delle due, restano disponibili solo le combinazioni compatibili.',
    materiale: 'Acciaio inox AISI 304',
    fornitore: 'Fimet', fornitoreLogo: fimetLogo,
    scheda: schedaUrl('texas-scheda-tecnica.pdf'),
    assi: [
      { chiave: 'diametro', etichetta: 'Profilo', suffisso: ' mm' },
      { chiave: 'lunghezza', etichetta: 'Lunghezza totale', suffisso: ' mm' },
      { chiave: 'interasse', etichetta: 'Interasse', suffisso: ' mm' },
    ],
    immagini: {
      'Acciaio inox satinato': [texasInox],
      'Nero opaco': [texasNero],
    },
    varianti: [
      { codice: '831.25.500.300.60', finitura: 'Acciaio inox satinato', diametro: 25, lunghezza: 500, interasse: 300 },
      { codice: '831.25.600.400.60', finitura: 'Acciaio inox satinato', diametro: 25, lunghezza: 600, interasse: 400 },
      { codice: '831.25.700.500.60', finitura: 'Acciaio inox satinato', diametro: 25, lunghezza: 700, interasse: 500 },
      { codice: '831.25.800.600.60', finitura: 'Acciaio inox satinato', diametro: 25, lunghezza: 800, interasse: 600 },
      { codice: '831.25.1000.800.60', finitura: 'Acciaio inox satinato', diametro: 25, lunghezza: 1000, interasse: 800 },
      { codice: '831.25.1200.1000.60', finitura: 'Acciaio inox satinato', diametro: 25, lunghezza: 1200, interasse: 1000 },
      { codice: '831.30.1500.1300.60', finitura: 'Acciaio inox satinato', diametro: 30, lunghezza: 1500, interasse: 1300 },
      { codice: '831.25.500.300.NO', finitura: 'Nero opaco', diametro: 25, lunghezza: 500, interasse: 300 },
      { codice: '831.25.800.600.NO', finitura: 'Nero opaco', diametro: 25, lunghezza: 800, interasse: 600 },
      { codice: '831.25.1000.700.NO', finitura: 'Nero opaco', diametro: 25, lunghezza: 1000, interasse: 700 },
      { codice: '831.25.1200.1000.NO', finitura: 'Nero opaco', diametro: 25, lunghezza: 1200, interasse: 1000 },
      { codice: '831.25.1500.1300.NO', finitura: 'Nero opaco', diametro: 25, lunghezza: 1500, interasse: 1300 },
      { codice: '831.25.500.300.61', finitura: 'Inox lucido', diametro: 25, lunghezza: 500, interasse: 300 },
      { codice: '831.25.500.300.BO', finitura: 'Bianco opaco', diametro: 25, lunghezza: 500, interasse: 300 },
      { codice: '831.25.500.300.02O', finitura: 'Oro satinato', diametro: 25, lunghezza: 500, interasse: 300 },
    ],
  },
  {
    id: 26, categoria: '01', sottocategoria: 'balaustre',
    nome: 'Profilo balaustra 8+8',
    descrizione: 'Supporto di fissaggio a pavimento in barra intera per parapetti in vetro, serie Total Glass TG 200R. Soluzione a pavimento e sopramuretto, con profilo di chiusura a scatto che copre il fissaggio a posa finita. Adatto a vetri stratificati e temperati da 17,52 mm (8+1.52+8). Sezione 73×118 mm, con fori asolati 13×16 mm già predisposti a interasse 250 mm: 12 fori nella barra da 3000 mm (TG 200R), 24 fori in quella da 6000 mm (TG 201R). I profili vengono forniti completi di guarnizioni e accessori per il montaggio. In fase di posa la barra filettata non deve sporgere più di 18 mm dal filo pavimentazione, altrimenti interferisce con i profili da inserire nel supporto. Disponibile in alluminio finitura argento.',
    materiale: 'Alluminio',
    spessoriVetro: ['8+8'],
    dimensioni: 'Sezione 73×118 mm · fori asolati 13×16 mm · interasse 250 mm · vetro 17,52 mm (8+1.52+8) · sporgenza max barra filettata 18 mm',
    fornitore: 'Compas', fornitoreLogo: compasLogo,
    scheda: schedaUrl('tg-200-scheda-tecnica.pdf'),
    // Rapporto di prova Istituto Giordano n. 351022: documento di terzi,
    // pubblicato come ci e' stato consegnato, senza la nostra filigrana.
    rapporto: schedaUrl('tg-200-rapporto-di-prova.pdf'),
    assi: [
      { chiave: 'lunghezza', etichetta: 'Lunghezza barra', suffisso: ' mm' },
    ],
    immagini: {
      'Argento': [tg200Render, tg200Sezione, tg200Fori],
    },
    varianti: [
      { codice: 'TG 200R', finitura: 'Argento', lunghezza: 3000 },
      { codice: 'TG 201R', finitura: 'Argento', lunghezza: 6000 },
    ],
    essenziali: [27],
    facoltativi: [21, 28, 29],
  },
  {
    id: 27, categoria: '01', sottocategoria: 'balaustre',
    nome: 'Tappo laterale TG 202',
    descrizione: 'Tappo di chiusura laterale per i profili balaustra TG 200R e TG 201R, completo di viti. Se lo spazio laterale è poco e a fine posa non si riesce ad avvitarlo, va montato prima di fissare la barra, dopo aver inserito mezzaluna, guarnizione e piattelli. In alluminio finitura argento.',
    materiale: 'Alluminio',
    dimensioni: 'Altezza 118 mm · larghezza 73 mm',
    fornitore: 'Compas', fornitoreLogo: compasLogo,
    scheda: schedaUrl('tg-200-scheda-tecnica.pdf'),
    immagini: {
      'Argento': [tg202Tappo, tg202Quote],
    },
    varianti: [
      { codice: 'TG 202', finitura: 'Argento' },
    ],
    facoltativi: [21],
  },
  {
    id: 21, categoria: '01', sottocategoria: 'balaustre',
    nome: 'Profilo scarico acque TG 203 / TG 204',
    descrizione: 'Profilo di scarico acque da abbinare ai supporti a pavimento della serie Total Glass: si posa sotto il supporto e aggiunge 15 mm alla quota totale. Compatibile sia con i profili TG 200R / TG 201R sia con i TG 1000 / TG 1001. Le barre arrivano già forate e predisposte per il fissaggio, con fori Ø14 mm a interasse 250 mm: 12 fori nella barra da 3000 mm (TG 203), 24 fori in quella da 6000 mm (TG 204). In alluminio finitura argento.',
    materiale: 'Alluminio',
    dimensioni: 'Altezza 15 mm · fori Ø14 mm · interasse 250 mm · 12 fori nella barra da 3000 mm, 24 in quella da 6000 mm',
    fornitore: 'Compas', fornitoreLogo: compasLogo,
    scheda: schedaUrl('tg-1000-scheda-tecnica.pdf'),
    assi: [
      { chiave: 'lunghezza', etichetta: 'Lunghezza barra', suffisso: ' mm' },
    ],
    immagini: {
      'Argento': [tg203Profilo],
    },
    varianti: [
      { codice: 'TG 203', finitura: 'Argento', lunghezza: 3000 },
      { codice: 'TG 204', finitura: 'Argento', lunghezza: 6000 },
    ],
    essenziali: [22],
  },
  {
    id: 22, categoria: '01', sottocategoria: 'balaustre',
    nome: 'Tappo per profilo scarico acque TG 205',
    descrizione: 'Tappo di chiusura per i profili scarico acque TG 203 e TG 204, completo di viti. Va montato prima della posa del profilo scarico acque. In alluminio finitura argento.',
    materiale: 'Alluminio',
    fornitore: 'Compas', fornitoreLogo: compasLogo,
    scheda: schedaUrl('tg-1000-scheda-tecnica.pdf'),
    immagini: {
      'Argento': [tg205Tappo],
    },
    varianti: [
      { codice: 'TG 205', finitura: 'Argento' },
    ],
  },
  {
    id: 19, categoria: '01', sottocategoria: 'balaustre',
    nome: 'Profilo balaustra muretto 8+8',
    descrizione: 'Supporto di fissaggio a pavimento in barra intera per parapetti in vetro, serie Total Glass. Adatto a vetri stratificati e temperati da 17,52 mm (8+1.52+8). Sezione 73×82 mm, con fori asolati 13×16 mm già predisposti a interasse 250 mm: 12 fori nella barra da 3000 mm (TG 1000), 24 fori in quella da 6000 mm (TG 1001). I profili vengono forniti completi di guarnizioni e accessori per il montaggio. In fase di posa la barra filettata non deve sporgere più di 18 mm dal filo pavimentazione, altrimenti interferisce con i profili da inserire nel supporto. Disponibile in alluminio finitura argento.',
    materiale: 'Alluminio',
    spessoriVetro: ['8+8'],
    dimensioni: 'Sezione 73×82 mm · fori asolati 13×16 mm · interasse 250 mm · vetro 17,52 mm (8+1.52+8) · sporgenza max barra filettata 18 mm',
    fornitore: 'Compas', fornitoreLogo: compasLogo,
    scheda: schedaUrl('tg-1000-scheda-tecnica.pdf'),
    // Rapporto di prova Istituto Giordano n. 376073: documento di terzi,
    // pubblicato come ci e' stato consegnato, senza la nostra filigrana.
    rapporto: schedaUrl('tg-1000-rapporto-di-prova.pdf'),
    assi: [
      { chiave: 'lunghezza', etichetta: 'Lunghezza barra', suffisso: ' mm' },
    ],
    immagini: {
      'Argento': [tg1000Render, tg1000Sezione, tg1000Ambiente],
    },
    varianti: [
      { codice: 'TG 1000', finitura: 'Argento', lunghezza: 3000 },
      { codice: 'TG 1001', finitura: 'Argento', lunghezza: 6000 },
    ],
    essenziali: [20],
    facoltativi: [21, 28, 29],
  },
  {
    id: 20, categoria: '01', sottocategoria: 'balaustre',
    nome: 'Tappo laterale TG 1004',
    descrizione: 'Tappo di chiusura laterale per i supporti a pavimento della serie Total Glass. Va montato a fine posa per chiudere le testate della barra, completo di viti. In alluminio finitura argento.',
    materiale: 'Alluminio',
    fornitore: 'Compas', fornitoreLogo: compasLogo,
    scheda: schedaUrl('tg-1000-scheda-tecnica.pdf'),
    immagini: {
      'Argento': [tg1004Tappo],
    },
    varianti: [
      { codice: 'TG 1004', finitura: 'Argento' },
    ],
    facoltativi: [21],
  },
  {
    id: 28, categoria: '01', sottocategoria: 'balaustre',
    nome: 'Chiave ergonomica TG 409',
    descrizione: 'Chiave sagomata per stringere comodamente i piattelli esagonali di serraggio del vetro. Compatibile con tutti i supporti Total Glass ad eccezione delle serie TG 300 e TG 600.',
    fornitore: 'Compas', fornitoreLogo: compasLogo,
    // Non è una scheda tecnica vera e propria: solo le immagini del prodotto.
    immagini: {
      'Argento': [tg409Chiave, tg409Uso],
    },
    varianti: [
      { codice: 'TG 409', finitura: 'Argento' },
    ],
  },
  {
    id: 23, categoria: '01', sottocategoria: 'balaustre',
    nome: 'Profilo balaustra muretto 6+6',
    descrizione: 'Supporto di fissaggio a pavimento in barra intera per parapetti in vetro, serie Total Glass Speedy TGS 50. Linea super compatta pensata per il fissaggio sopra muretto, dove la muratura esistente è già alta e il parapetto in vetro resta entro i 500 mm di altezza. Adatto a vetri stratificati e temperati da 6+1.52+6 mm (va bene anche il 5+1.52+5). Sezione 58×76 mm, con fori asolati 8,5×12 mm già predisposti a interasse 250 mm: 12 fori nella barra da 3000 mm (TGS 50), 24 fori in quella da 6000 mm (TGS 51). Profilo progettato per ancorante M8; la barra filettata non deve sporgere più di 12 mm. I profili vengono forniti completi di guarnizioni e accessori per il montaggio. Disponibile in alluminio finitura argento.',
    materiale: 'Alluminio',
    spessoriVetro: ['6+6', '5+5'],
    dimensioni: 'Sezione 58×76 mm · fori asolati 8,5×12 mm · interasse 250 mm · vetro 6+1.52+6 mm (va bene anche 5+1.52+5) · ancorante M8 · sporgenza max barra filettata 12 mm · altezza max parapetto 500 mm',
    fornitore: 'Compas', fornitoreLogo: compasLogo,
    scheda: schedaUrl('tgs-50-scheda-tecnica.pdf'),
    assi: [
      { chiave: 'lunghezza', etichetta: 'Lunghezza barra', suffisso: ' mm' },
    ],
    immagini: {
      'Argento': [tgs50Render, tgs50Sezione, tgs50Quote],
    },
    varianti: [
      { codice: 'TGS 50', finitura: 'Argento', lunghezza: 3000 },
      { codice: 'TGS 51', finitura: 'Argento', lunghezza: 6000 },
    ],
    essenziali: [24],
    facoltativi: [25, 29],
  },
  {
    id: 24, categoria: '01', sottocategoria: 'balaustre',
    nome: 'Tappo laterale TGS 52',
    descrizione: 'Tappo di chiusura laterale per i profili balaustra sopra muretto della serie Total Glass Speedy TGS 50. Va montato a fine posa per chiudere le testate della barra, completo di viti. In alluminio finitura argento.',
    materiale: 'Alluminio',
    fornitore: 'Compas', fornitoreLogo: compasLogo,
    scheda: schedaUrl('tgs-50-scheda-tecnica.pdf'),
    immagini: {
      'Argento': [tgs52Tappo],
    },
    varianti: [
      { codice: 'TGS 52', finitura: 'Argento' },
    ],
    facoltativi: [25],
  },
  {
    id: 25, categoria: '01', sottocategoria: 'balaustre',
    nome: 'Chiave ergonomica TGS 53',
    descrizione: 'Chiave sagomata per stringere comodamente i piattelli di serraggio del vetro nei profili balaustra della serie Total Glass Speedy TGS 50. La forma piegata permette di lavorare anche con il vetro già in posizione. Attenzione: i piattelli vanno serrati moderatamente.',
    fornitore: 'Compas', fornitoreLogo: compasLogo,
    // Non è una scheda tecnica vera e propria: solo le immagini del prodotto.
    immagini: {
      'Argento': [tgs53Chiave],
    },
    varianti: [
      { codice: 'TGS 53', finitura: 'Argento' },
    ],
  },
  {
    id: 29, categoria: '01', sottocategoria: 'balaustre',
    nome: 'Profilo portaled TG 311',
    descrizione: 'Piastrina per striscia LED, da inserire nel profilo di chiusura del parapetto per illuminare il bordo del vetro. Compatibile con tutti i profili balaustra Total Glass. Disponibile solo in barra da 3 m.',
    dimensioni: 'Lunghezza barra 3 m',
    fornitore: 'Compas', fornitoreLogo: compasLogo,
    // Non è una scheda tecnica vera e propria: solo le immagini del prodotto.
    immagini: {
      'Argento': [tg311Render, tg311Sezione, tg311Foto],
    },
    varianti: [
      { codice: 'TG 311', finitura: 'Argento' },
    ],
  },
  {
    id: 30, categoria: '01', sottocategoria: 'pensiline',
    nome: 'Profilo pensilina 10+10',
    descrizione: 'Profilo a muro per pensiline in vetro, serie Total Glass Speedy TGS 500. Solo per vetro stratificato e temperato 10+1.52+10, testato al carico neve e vento di zona alpina (165 kg/m²). Dotato di perni di sicurezza per la ritenuta del vetro e predisposto per l’illuminazione LED. Sezione 125×104 mm, con inclinazione di 1,5° che fa defluire l’acqua piovana e guarnizione impermeabilizzante contro le infiltrazioni fra muro e supporto. Fori Ø14 mm per il fissaggio a muro a interasse 250 mm: 12 fori nella barra da 3000 mm (TGS 500), 24 fori in quella da 6000 mm (TGS 501). Si fissa con barre filettate M12, lasciandole sporgere al massimo 22 mm. Disponibile in alluminio finitura argento.',
    materiale: 'Alluminio',
    spessoriVetro: ['10+10'],
    dimensioni: 'Sezione 125×104 mm · fori Ø14 mm · interasse 250 mm · vetro 10+1.52+10 mm · barra filettata M12, sporgenza max 22 mm · inclinazione 1,5° · sbalzo vetro max 1500 mm',
    fornitore: 'Compas', fornitoreLogo: compasLogo,
    scheda: schedaUrl('tgs-500-scheda-tecnica.pdf'),
    // Rapporto di prova Istituto Giordano n. 358697: documento di terzi,
    // pubblicato come ci e' stato consegnato, senza la nostra filigrana.
    rapporto: schedaUrl('tgs-500-rapporto-di-prova.pdf'),
    assi: [
      { chiave: 'lunghezza', etichetta: 'Lunghezza barra', suffisso: ' mm' },
    ],
    immagini: {
      'Argento': [tgs500Foto, tgs500Sezione, tgs500Quote, tgs500Fori],
    },
    varianti: [
      { codice: 'TGS 500', finitura: 'Argento', lunghezza: 3000 },
      { codice: 'TGS 501', finitura: 'Argento', lunghezza: 6000 },
    ],
    essenziali: [31],
  },
  {
    id: 31, categoria: '01', sottocategoria: 'pensiline',
    nome: 'Tappo per pensilina TGS 502',
    descrizione: 'Tappo di chiusura laterale per i profili pensilina della serie Total Glass Speedy TGS 500, completo di guarnizione in gomma anti infiltrazione e viti. In alluminio finitura argento.',
    materiale: 'Alluminio',
    fornitore: 'Compas', fornitoreLogo: compasLogo,
    scheda: schedaUrl('tgs-500-scheda-tecnica.pdf'),
    immagini: {
      'Argento': [tgs502Tappo],
    },
    varianti: [
      { codice: 'TGS 502', finitura: 'Argento' },
    ],
  },
  {
    id: 33, categoria: '01', sottocategoria: 'pensiline',
    nome: 'Tenditore a barra tonda Ø10mm per pensilina',
    descrizione: 'Tenditore regolabile con barra tonda Ø10mm, per il sostegno di pensiline in vetro. Attacco a muro con piastra Ø100mm (interasse fori 74mm, fori Ø13mm) snodabile, attacco al vetro con calotta Ø52mm regolabile per spessori vetro da 12 a 24mm. Foro in vetro Ø25mm. Viene fornito completo di attacco a muro e attacco a vetro. Disponibile in acciaio inox AISI 304, finitura inox satinato; su richiesta è disponibile anche in AISI 316 satinato.',
    materiale: 'Acciaio inox AISI 304',
    dimensioni: 'Tondino Ø10mm · piastra a muro Ø100mm · calotta vetro Ø52mm · spessore vetro 12-24mm · foro vetro Ø25mm',
    fornitore: 'Inoxdesign', fornitoreLogo: inoxdesignLogo,
    scheda: {
      'IN112-108': schedaUrl('tenditore-010-830mm-scheda-tecnica.pdf'),
      'IN112-109': schedaUrl('tenditore-010-910mm-scheda-tecnica.pdf'),
      'IN112-110': schedaUrl('tenditore-010-1000mm-scheda-tecnica.pdf'),
      'IN112-111': schedaUrl('tenditore-010-1150mm-scheda-tecnica.pdf'),
      'IN112-112': schedaUrl('tenditore-010-1300mm-scheda-tecnica.pdf'),
    },
    assi: [
      { chiave: 'lunghezza', etichetta: 'Lunghezza', suffisso: ' mm' },
    ],
    immagini: {
      'Inox satinato': [tenditoreVista1, tenditoreVista2, tenditoreEsploso, tenditoreAmbiente, tenditoreSchema],
    },
    varianti: [
      { codice: 'IN112-108', finitura: 'Inox satinato', lunghezza: 830 },
      { codice: 'IN112-109', finitura: 'Inox satinato', lunghezza: 910 },
      { codice: 'IN112-110', finitura: 'Inox satinato', lunghezza: 1000 },
      { codice: 'IN112-111', finitura: 'Inox satinato', lunghezza: 1150 },
      { codice: 'IN112-112', finitura: 'Inox satinato', lunghezza: 1300 },
    ],
    facoltativi: [34, 35],
  },
  {
    id: 34, categoria: '01', sottocategoria: 'pensiline',
    nome: 'Fissaggio a muro Ø100mm per pensilina',
    descrizione: 'Attacco a muro snodabile per tenditori di pensiline in vetro, piastra Ø100mm con foro Ø22mm per l’innesto della barra e regolazione per spessori vetro da 12 a 24mm. Foro in vetro Ø25mm. Disponibile in acciaio inox AISI 304, finitura inox satinato; su richiesta è disponibile anche in AISI 316 satinato.',
    materiale: 'Acciaio inox AISI 304',
    dimensioni: 'Piastra Ø100mm (interasse fori 74mm, fori Ø13mm) · innesto barra Ø22mm · spessore vetro 12-24mm · foro vetro Ø25mm',
    fornitore: 'Inoxdesign', fornitoreLogo: inoxdesignLogo,
    scheda: schedaUrl('fissaggio-muro-100-scheda-tecnica.pdf'),
    immagini: {
      'Inox satinato': [fissaggioMuro100Vista1, fissaggioMuro100Vista2, fissaggioMuro100Esploso],
    },
    varianti: [
      { codice: 'IN112-120', finitura: 'Inox satinato' },
    ],
  },
  {
    id: 35, categoria: '01', sottocategoria: 'pensiline',
    nome: 'Lamiera piegata a U per vetro 16.76-17.52mm',
    descrizione: 'Profilo a U in lamiera piegata, per il contenimento del bordo del vetro nelle pensiline sostenute da tiranti. Adatto a vetri stratificati e temperati di spessore 16,76-17,52mm. Disponibile in barra da 3000mm, in acciaio inox AISI 304, finitura satinata.',
    materiale: 'Acciaio inox AISI 304',
    spessoriVetro: ['16.76', '17.52'],
    dimensioni: 'Sezione 21×20mm · spessore lamiera 1,50mm · larghezza gola 18mm · lunghezza barra 3000mm',
    fornitore: 'Inoxdesign', fornitoreLogo: inoxdesignLogo,
    scheda: schedaUrl('lamiera-u-1676-3000-scheda-tecnica.pdf'),
    immagini: {
      'Inox satinato': [lamieraURender, lamieraUSezione],
    },
    varianti: [
      { codice: 'IN600-233', finitura: 'Inox satinato', lunghezza: 3000 },
    ],
  },
  {
    id: 49, categoria: '01', sottocategoria: 'morsetti',
    nome: 'Morsetto per vetro mod. 01 con attacco diritto',
    descrizione: 'Morsetto per vetro con attacco diritto, fissaggio a vite M8. Disponibile per spessori vetro 8, 8,76, 10 e 10,76mm; su ordinazione è disponibile anche per altri spessori di vetro. Prodotto da Inoxdesign in acciaio inox AISI 304, finitura inox satinato; disponibile anche in zama, finitura inox satinato. Su ordinazione è disponibile anche in altre finiture.',
    materiale: 'Acciaio inox AISI 304 o zama',
    materiali: ['Acciaio inox AISI 304', 'Zama'],
    spessoriVetro: ['8', '8.76', '10', '10.76'],
    dimensioni: 'Corpo 45×45mm · profondità 27mm · vite M8',
    fornitore: 'Inoxdesign', fornitoreLogo: inoxdesignLogo,
    scheda: schedaUrl('morsetto-m012-scheda-tecnica.pdf'),
    assi: [
      { chiave: 'spessoreVetro', etichetta: 'Spessore vetro', suffisso: ' mm' },
    ],
    immagini: {
      'Inox satinato': [morsettoM012Vista1, morsettoM012Vista2, morsettoM012Sezione, morsettoM012Esploso],
      'Finitura inox satinato': [morsettoM012Vista1, morsettoM012Vista2, morsettoM012Sezione, morsettoM012Esploso],
    },
    varianti: [
      { codice: 'M012-0800', finitura: 'Inox satinato', materiale: 'Acciaio inox AISI 304', spessoreVetro: 8 },
      { codice: 'M012-0876', finitura: 'Inox satinato', materiale: 'Acciaio inox AISI 304', spessoreVetro: 8.76 },
      { codice: 'M012-1000', finitura: 'Inox satinato', materiale: 'Acciaio inox AISI 304', spessoreVetro: 10 },
      { codice: 'M012-1076', finitura: 'Inox satinato', materiale: 'Acciaio inox AISI 304', spessoreVetro: 10.76 },
      { codice: 'M01F-0800', finitura: 'Finitura inox satinato', materiale: 'Zama', spessoreVetro: 8 },
      { codice: 'M01F-0876', finitura: 'Finitura inox satinato', materiale: 'Zama', spessoreVetro: 8.76 },
      { codice: 'M01F-1000', finitura: 'Finitura inox satinato', materiale: 'Zama', spessoreVetro: 10 },
      { codice: 'M01F-1076', finitura: 'Finitura inox satinato', materiale: 'Zama', spessoreVetro: 10.76 },
    ],
  },
  {
    id: 48, categoria: '01', sottocategoria: 'morsetti',
    nome: 'Morsetto per vetro mod. 02 con attacco diritto',
    descrizione: 'Morsetto per vetro con attacco diritto, fissaggio a vite M8. Disponibile per spessori vetro 8, 8,76, 10 e 10,76mm; su ordinazione è disponibile anche per altri spessori di vetro. Prodotto da Inoxdesign in acciaio inox AISI 304, finitura inox satinato.',
    materiale: 'Acciaio inox AISI 304',
    spessoriVetro: ['8', '8.76', '10', '10.76'],
    dimensioni: 'Corpo 63×48mm · profondità 28mm · vite M8',
    fornitore: 'Inoxdesign', fornitoreLogo: inoxdesignLogo,
    scheda: schedaUrl('morsetto-m022-scheda-tecnica.pdf'),
    assi: [
      { chiave: 'spessoreVetro', etichetta: 'Spessore vetro', suffisso: ' mm' },
    ],
    immagini: {
      'Inox satinato': [morsettoM022Vista1, morsettoM022Vista2, morsettoM022Sezione, morsettoM022Esploso],
    },
    varianti: [
      { codice: 'M022-0800', finitura: 'Inox satinato', spessoreVetro: 8 },
      { codice: 'M022-0876', finitura: 'Inox satinato', spessoreVetro: 8.76 },
      { codice: 'M022-1000', finitura: 'Inox satinato', spessoreVetro: 10 },
      { codice: 'M022-1076', finitura: 'Inox satinato', spessoreVetro: 10.76 },
    ],
  },
  {
    id: 36, categoria: '01', sottocategoria: 'morsetti',
    nome: 'Morsetto per vetro mod. 03 con attacco diritto',
    descrizione: 'Morsetto per vetro con attacco diritto, fissaggio a vite M8. Disponibile per spessori vetro 8, 8,76, 10 e 10,76mm; su ordinazione è disponibile anche per altri spessori di vetro. Prodotto da Inoxdesign in acciaio inox AISI 304, nelle finiture inox satinato e nero opaco; disponibile anche in zama, finitura inox satinato. Su ordinazione è disponibile anche in altre finiture.',
    // La "finitura inox satinato" dello zama e' un aspetto cromato diverso
    // dall'inox satinato vero: finitura separata, non da confondere col colore.
    materiale: 'Acciaio inox AISI 304 o zama',
    materiali: ['Acciaio inox AISI 304', 'Zama'],
    spessoriVetro: ['8', '8.76', '10', '10.76'],
    dimensioni: 'Corpo 45×45mm · profondità 26mm · vite M8',
    fornitore: 'Inoxdesign', fornitoreLogo: inoxdesignLogo,
    scheda: schedaUrl('morsetto-m032-scheda-tecnica.pdf'),
    assi: [
      { chiave: 'spessoreVetro', etichetta: 'Spessore vetro', suffisso: ' mm' },
    ],
    immagini: {
      'Inox satinato': [morsettoM032Vista1, morsettoM032Vista2, morsettoM032Sezione, morsettoM032Esploso],
      'Finitura inox satinato': [morsettoM032Vista1, morsettoM032Vista2, morsettoM032Sezione, morsettoM032Esploso],
      'Nero opaco': [morsettoM032NeroVista1, morsettoM032NeroVista2, morsettoM032NeroSezione, morsettoM032NeroEsploso],
    },
    varianti: [
      { codice: 'M032-0800', finitura: 'Inox satinato', materiale: 'Acciaio inox AISI 304', spessoreVetro: 8 },
      { codice: 'M032-0876', finitura: 'Inox satinato', materiale: 'Acciaio inox AISI 304', spessoreVetro: 8.76 },
      { codice: 'M032-1000', finitura: 'Inox satinato', materiale: 'Acciaio inox AISI 304', spessoreVetro: 10 },
      { codice: 'M032-1076', finitura: 'Inox satinato', materiale: 'Acciaio inox AISI 304', spessoreVetro: 10.76 },
      { codice: 'M032-NE-0800', finitura: 'Nero opaco', materiale: 'Acciaio inox AISI 304', spessoreVetro: 8 },
      { codice: 'M032-NE-0876', finitura: 'Nero opaco', materiale: 'Acciaio inox AISI 304', spessoreVetro: 8.76 },
      { codice: 'M032-NE-1000', finitura: 'Nero opaco', materiale: 'Acciaio inox AISI 304', spessoreVetro: 10 },
      { codice: 'M032-NE-1076', finitura: 'Nero opaco', materiale: 'Acciaio inox AISI 304', spessoreVetro: 10.76 },
      { codice: 'M03F-0800', finitura: 'Finitura inox satinato', materiale: 'Zama', spessoreVetro: 8 },
      { codice: 'M03F-0876', finitura: 'Finitura inox satinato', materiale: 'Zama', spessoreVetro: 8.76 },
      { codice: 'M03F-1000', finitura: 'Finitura inox satinato', materiale: 'Zama', spessoreVetro: 10 },
      { codice: 'M03F-1076', finitura: 'Finitura inox satinato', materiale: 'Zama', spessoreVetro: 10.76 },
    ],
  },
  {
    id: 50, categoria: '01', sottocategoria: 'morsetti',
    nome: 'Morsetto per vetro mod. 03 con attacco per tubo Ø42,4mm',
    descrizione: 'Morsetto per vetro con attacco per tubo Ø42,4mm, fissaggio a vite M8. Disponibile per spessori vetro 8, 8,76, 10 e 10,76mm; su ordinazione è disponibile anche per altri spessori di vetro. Prodotto da Inoxdesign in acciaio inox AISI 304, finitura inox satinato.',
    materiale: 'Acciaio inox AISI 304',
    spessoriVetro: ['8', '8.76', '10', '10.76'],
    dimensioni: 'Corpo 45×45mm · profondità 26mm · attacco tubo Ø42,4mm · vite M8',
    fornitore: 'Inoxdesign', fornitoreLogo: inoxdesignLogo,
    scheda: schedaUrl('morsetto-m032-042-scheda-tecnica.pdf'),
    assi: [
      { chiave: 'spessoreVetro', etichetta: 'Spessore vetro', suffisso: ' mm' },
    ],
    immagini: {
      'Inox satinato': [morsettoM032042Vista1, morsettoM032042Vista2, morsettoM032042Sezione, morsettoM032042Esploso],
    },
    varianti: [
      { codice: 'M032-042-0800', finitura: 'Inox satinato', spessoreVetro: 8 },
      { codice: 'M032-042-0876', finitura: 'Inox satinato', spessoreVetro: 8.76 },
      { codice: 'M032-042-1000', finitura: 'Inox satinato', spessoreVetro: 10 },
      { codice: 'M032-042-1076', finitura: 'Inox satinato', spessoreVetro: 10.76 },
    ],
  },
  {
    id: 37, categoria: '01', sottocategoria: 'morsetti',
    nome: 'Morsetto per vetro mod. 04 con attacco diritto',
    descrizione: 'Morsetto per vetro con attacco diritto, fissaggio a vite M8. Disponibile per spessori vetro 13,52 e 17,52mm; su ordinazione è disponibile anche per altri spessori di vetro. Prodotto da Inoxdesign in acciaio inox AISI 304, nelle finiture inox satinato e nero opaco; disponibile anche in zama, finitura inox satinato. Su ordinazione è disponibile anche in altre finiture.',
    materiale: 'Acciaio inox AISI 304 o zama',
    materiali: ['Acciaio inox AISI 304', 'Zama'],
    spessoriVetro: ['13.52', '17.52'],
    dimensioni: 'Corpo 65×37,5mm · profondità 55mm · vite M8',
    fornitore: 'Inoxdesign', fornitoreLogo: inoxdesignLogo,
    scheda: schedaUrl('morsetto-m042-scheda-tecnica.pdf'),
    assi: [
      { chiave: 'spessoreVetro', etichetta: 'Spessore vetro', suffisso: ' mm' },
    ],
    immagini: {
      'Inox satinato': [morsettoM042Vista1, morsettoM042Vista2, morsettoM042Sezione, morsettoM042Esploso],
      'Finitura inox satinato': [morsettoM042Vista1, morsettoM042Vista2, morsettoM042Sezione, morsettoM042Esploso],
      'Nero opaco': [morsettoM042NeroVista1, morsettoM042NeroVista2, morsettoM042NeroSezione, morsettoM042NeroEsploso],
    },
    varianti: [
      { codice: 'M042-1352', finitura: 'Inox satinato', materiale: 'Acciaio inox AISI 304', spessoreVetro: 13.52 },
      { codice: 'M042-1752', finitura: 'Inox satinato', materiale: 'Acciaio inox AISI 304', spessoreVetro: 17.52 },
      { codice: 'M042-NE-1352', finitura: 'Nero opaco', materiale: 'Acciaio inox AISI 304', spessoreVetro: 13.52 },
      { codice: 'M042-NE-1752', finitura: 'Nero opaco', materiale: 'Acciaio inox AISI 304', spessoreVetro: 17.52 },
      { codice: 'M04F-1352', finitura: 'Finitura inox satinato', materiale: 'Zama', spessoreVetro: 13.52 },
      { codice: 'M04F-1752', finitura: 'Finitura inox satinato', materiale: 'Zama', spessoreVetro: 17.52 },
    ],
  },
  {
    id: 51, categoria: '01', sottocategoria: 'morsetti',
    nome: 'Morsetto per vetro mod. 04 con attacco per tubo Ø42,4mm',
    descrizione: 'Morsetto per vetro con attacco per tubo Ø42,4mm, fissaggio a vite M8. Disponibile per spessori vetro 13,52 e 17,52mm; su ordinazione è disponibile anche per altri spessori di vetro. Prodotto da Inoxdesign in acciaio inox AISI 304, finitura inox satinato.',
    materiale: 'Acciaio inox AISI 304',
    spessoriVetro: ['13.52', '17.52'],
    dimensioni: 'Corpo 65×37,5mm · profondità 55mm · attacco tubo Ø42,4mm · vite M8',
    fornitore: 'Inoxdesign', fornitoreLogo: inoxdesignLogo,
    scheda: schedaUrl('morsetto-m042-042-scheda-tecnica.pdf'),
    assi: [
      { chiave: 'spessoreVetro', etichetta: 'Spessore vetro', suffisso: ' mm' },
    ],
    immagini: {
      'Inox satinato': [morsettoM042042Vista1, morsettoM042042Vista2, morsettoM042042Sezione, morsettoM042042Esploso],
    },
    varianti: [
      { codice: 'M042-042-1352', finitura: 'Inox satinato', spessoreVetro: 13.52 },
      { codice: 'M042-042-1752', finitura: 'Inox satinato', spessoreVetro: 17.52 },
    ],
  },
  {
    id: 38, categoria: '01', sottocategoria: 'fermavetri',
    nome: 'Supporto tondo a pavimento vetro 12-12,76mm',
    descrizione: 'Supporto puntuale tondo a pavimento per vetro, con rosetta di copertura, per pannelli divisori. Adatto a spessori vetro da 12 a 12,76mm. Prodotto da Inoxdesign in acciaio inox AISI 316, finitura lucida.',
    materiale: 'Acciaio inox AISI 316',
    spessoriVetro: ['12', '12.76'],
    dimensioni: 'Altezza 160mm · base Ø100mm, altezza base 60,5mm · palo Ø50mm · fori base Ø7mm per viti Ø13mm',
    fornitore: 'Inoxdesign', fornitoreLogo: inoxdesignLogo,
    scheda: schedaUrl('supporto-tondo-pavimento-in610-scheda-tecnica.pdf'),
    immagini: {
      'Inox lucido': [supportoTondoIn610Vista1, supportoTondoIn610Vista2, supportoTondoIn610Esploso],
    },
    varianti: [
      { codice: 'IN610-005-04-L', finitura: 'Inox lucido' },
    ],
  },
  {
    id: 39, categoria: '01', sottocategoria: 'fermavetri',
    nome: 'Supporto quadro a pavimento vetro 12-12,76mm',
    descrizione: 'Supporto puntuale quadro a pavimento per vetro, con rosetta di copertura, per pannelli divisori. Adatto a spessori vetro da 12 a 12,76mm. Prodotto da Inoxdesign in acciaio inox AISI 316, finitura lucida.',
    materiale: 'Acciaio inox AISI 316',
    spessoriVetro: ['12', '12.76'],
    dimensioni: 'Altezza 64,7mm · palo 48,2×48,2mm · base 104×104mm (piastra 100×100mm) · fori Ø7mm per viti Ø14mm, interasse diagonale 76,5mm',
    fornitore: 'Inoxdesign', fornitoreLogo: inoxdesignLogo,
    scheda: schedaUrl('supporto-quadro-pavimento-in610-scheda-tecnica.pdf'),
    immagini: {
      'Inox lucido': [supportoQuadroIn610Vista1, supportoQuadroIn610Vista2, supportoQuadroIn610Esploso],
    },
    varianti: [
      { codice: 'IN610-010-04-L', finitura: 'Inox lucido' },
    ],
  },
  {
    id: 40, categoria: '01', sottocategoria: 'fermavetri',
    nome: 'Supporto tondo a pavimento vetro 16,76-17,52mm',
    descrizione: 'Supporto puntuale tondo a pavimento per vetro, con rosetta di copertura, per pannelli divisori. Adatto a spessori vetro da 16,76 a 17,52mm. Foro in vetro Ø15mm. Prodotto da Inoxdesign in acciaio inox AISI 316, disponibile nelle finiture satinato e lucido.',
    materiale: 'Acciaio inox AISI 316',
    spessoriVetro: ['16.76', '17.52'],
    dimensioni: 'Altezza 180mm · palo Ø44,4mm · base Ø105mm · foro vetro Ø15mm · vite M8',
    fornitore: 'Inoxdesign', fornitoreLogo: inoxdesignLogo,
    scheda: schedaUrl('supporto-tondo-pavimento-in610-015-scheda-tecnica.pdf'),
    immagini: {
      'Inox satinato': [supportoTondoIn610015SatVista1, supportoTondoIn610015SatVista2, supportoTondoIn610015SatEsploso],
      'Inox lucido': [supportoTondoIn610015LucVista1, supportoTondoIn610015LucVista2, supportoTondoIn610015LucEsploso],
    },
    varianti: [
      { codice: 'IN610-015-04', finitura: 'Inox satinato' },
      { codice: 'IN610-015-04-L', finitura: 'Inox lucido' },
    ],
  },
  {
    id: 41, categoria: '01', sottocategoria: 'fermavetri',
    nome: 'Supporto quadro a pavimento vetro 16,76-17,52mm',
    descrizione: 'Supporto puntuale quadro a pavimento per vetro, con rosetta di copertura, per pannelli divisori. Adatto a spessori vetro da 16,76 a 17,52mm. Foro in vetro Ø15mm. Prodotto da Inoxdesign in acciaio inox AISI 316, disponibile nelle finiture satinato e lucido.',
    materiale: 'Acciaio inox AISI 316',
    spessoriVetro: ['16.76', '17.52'],
    dimensioni: 'Altezza 180mm · palo 48,5×48,5mm · base 108×108mm (piastra 100×100mm) · foro vetro Ø15mm · vite M8',
    fornitore: 'Inoxdesign', fornitoreLogo: inoxdesignLogo,
    scheda: schedaUrl('supporto-quadro-pavimento-in610-020-scheda-tecnica.pdf'),
    immagini: {
      'Inox satinato': [supportoQuadroIn610020SatVista1, supportoQuadroIn610020SatVista2, supportoQuadroIn610020SatEsploso],
      'Inox lucido': [supportoQuadroIn610020LucVista1, supportoQuadroIn610020LucVista2, supportoQuadroIn610020LucEsploso],
    },
    varianti: [
      { codice: 'IN610-020-04', finitura: 'Inox satinato' },
      { codice: 'IN610-020-04-L', finitura: 'Inox lucido' },
    ],
  },
  {
    id: 42, categoria: '01', sottocategoria: 'morsetti',
    nome: 'Morsetto per vetro mod. 06 con attacco diritto',
    descrizione: 'Morsetto per vetro con attacco diritto, fissaggio a vite M8. Disponibile per spessori vetro 8,76, 10,76 e 12,76mm; su ordinazione è disponibile anche per altri spessori di vetro. Prodotto da Inoxdesign in acciaio inox AISI 304, finitura inox satinato.',
    materiale: 'Acciaio inox AISI 304',
    spessoriVetro: ['8.76', '10.76', '12.76'],
    dimensioni: 'Corpo 52×52mm · profondità 32,5mm · vite M8',
    fornitore: 'Inoxdesign', fornitoreLogo: inoxdesignLogo,
    scheda: schedaUrl('morsetto-m062-scheda-tecnica.pdf'),
    assi: [
      { chiave: 'spessoreVetro', etichetta: 'Spessore vetro', suffisso: ' mm' },
    ],
    immagini: {
      'Inox satinato': [morsettoM062Vista1, morsettoM062Vista2, morsettoM062Sezione, morsettoM062Esploso],
    },
    varianti: [
      { codice: 'M062-0876', finitura: 'Inox satinato', spessoreVetro: 8.76 },
      { codice: 'M062-1076', finitura: 'Inox satinato', spessoreVetro: 10.76 },
      { codice: 'M062-1276', finitura: 'Inox satinato', spessoreVetro: 12.76 },
    ],
  },
  {
    id: 52, categoria: '01', sottocategoria: 'morsetti',
    nome: 'Morsetto per vetro mod. 06 con attacco per tubo Ø42,4mm',
    descrizione: 'Morsetto per vetro con attacco per tubo Ø42,4mm, fissaggio a vite M8. Disponibile per spessori vetro 8,76, 10,76 e 12,76mm; su ordinazione è disponibile anche per altri spessori di vetro. Prodotto da Inoxdesign in acciaio inox AISI 304, finitura inox satinato.',
    materiale: 'Acciaio inox AISI 304',
    spessoriVetro: ['8.76', '10.76', '12.76'],
    dimensioni: 'Corpo 52×52mm · profondità 32,5mm · attacco tubo Ø42,4mm · vite M8',
    fornitore: 'Inoxdesign', fornitoreLogo: inoxdesignLogo,
    scheda: schedaUrl('morsetto-m062-042-scheda-tecnica.pdf'),
    assi: [
      { chiave: 'spessoreVetro', etichetta: 'Spessore vetro', suffisso: ' mm' },
    ],
    immagini: {
      'Inox satinato': [morsettoM062042Vista1, morsettoM062042Vista2, morsettoM062042Sezione, morsettoM062042Esploso],
    },
    varianti: [
      { codice: 'M062-042-0876', finitura: 'Inox satinato', spessoreVetro: 8.76 },
      { codice: 'M062-042-1076', finitura: 'Inox satinato', spessoreVetro: 10.76 },
      { codice: 'M062-042-1276', finitura: 'Inox satinato', spessoreVetro: 12.76 },
    ],
  },
  {
    id: 47, categoria: '01', sottocategoria: 'morsetti',
    nome: 'Morsetto per vetro mod. 09 con attacco diritto',
    descrizione: 'Morsetto per vetro con attacco diritto, fissaggio a vite M8. Disponibile per spessori vetro 20,76 e 21,52mm; su ordinazione è disponibile anche per altri spessori di vetro. Prodotto da Inoxdesign in acciaio inox AISI 304, finitura inox satinato.',
    materiale: 'Acciaio inox AISI 304',
    spessoriVetro: ['20.76', '21.52'],
    dimensioni: 'Corpo 70×60mm · profondità 44,5mm · vite M8',
    fornitore: 'Inoxdesign', fornitoreLogo: inoxdesignLogo,
    scheda: schedaUrl('morsetto-m092-scheda-tecnica.pdf'),
    assi: [
      { chiave: 'spessoreVetro', etichetta: 'Spessore vetro', suffisso: ' mm' },
    ],
    immagini: {
      'Inox satinato': [morsettoM092Vista1, morsettoM092Vista2, morsettoM092Sezione, morsettoM092Esploso],
    },
    varianti: [
      { codice: 'M092-2076', finitura: 'Inox satinato', spessoreVetro: 20.76 },
      { codice: 'M092-2152', finitura: 'Inox satinato', spessoreVetro: 21.52 },
    ],
  },
  {
    id: 53, categoria: '01', sottocategoria: 'morsetti',
    nome: 'Morsetto piccolo per vetro',
    // Spessore vetro compatibile ancora da confermare: aggiungerlo agli
    // "assi" (come negli altri morsetti) quando arriva il dato.
    descrizione: 'Morsetto piccolo per vetro, corpo 50×30mm e spessore 23mm. Completo di n° 4 guarnizioni in PVC. Prodotto da Torneria Dal Lago in zama, disponibile in 2 finiture: cromo lucido e nichel satinato.',
    materiale: 'Zama',
    dimensioni: 'Corpo 50×30mm · spessore 23mm',
    fornitore: 'Torneria Dal Lago', fornitoreLogo: dallagoLogo,
    scheda: schedaUrl('morsetto-piccolo-scheda-tecnica.pdf'),
    immagini: {
      'Cromo lucido': [morsettoPiccoloCromoLucido],
    },
    varianti: [
      { codice: 'STIGLIMOP/CRL', finitura: 'Cromo lucido' },
      { codice: 'STIGLIMOP/NIKSAT', finitura: 'Nichel satinato' },
    ],
  },
  {
    id: 54, categoria: '01', sottocategoria: 'morsetti',
    nome: 'Morsetto grande per vetro',
    // Spessore vetro compatibile ancora da confermare: aggiungerlo agli
    // "assi" (come negli altri morsetti) quando arriva il dato.
    descrizione: 'Morsetto grande per vetro, corpo 70×35mm e spessore 20mm. Completo di n° 4 guarnizioni in PVC. Prodotto da Torneria Dal Lago in zama, disponibile in 3 finiture: cromo lucido, cromo perla e nichel satinato.',
    materiale: 'Zama',
    dimensioni: 'Corpo 70×35mm · spessore 20mm',
    fornitore: 'Torneria Dal Lago', fornitoreLogo: dallagoLogo,
    scheda: schedaUrl('morsetto-grande-scheda-tecnica.pdf'),
    immagini: {
      'Cromo lucido': [morsettoGrandeCromoLucido],
    },
    varianti: [
      { codice: 'STIGLIMORS/CRL', finitura: 'Cromo lucido' },
      { codice: 'STIGLIMORS/CRPERL', finitura: 'Cromo perla' },
      { codice: 'STIGLIMORS/NIKSAT', finitura: 'Nichel satinato' },
    ],
  },
  {
    id: 55, categoria: '04', sottocategoria: 'maniglie-battenti',
    nome: 'HCS Paris con chiave e nottolino',
    descrizione: 'Maniglia con serratura integrata HCS (Hoppe Compact System) per porte battenti in cristallo e pareti divisorie, spessore porta 8-10mm: un sistema compatto che unisce l’azionamento della porta alla funzione della serratura, con cilindro/chiave e chiusura con nottolino girevole. Adattatore in alluminio con sottocostruzione in resina, corpo interno in alluminio pressofuso, canotto in alluminio con filetto, scrocco in resina rinforzata con fibra di vetro (silenzioso). Contropiastra non inclusa. Richiede una preparazione del pannello. Prodotta da HOPPE in Germania, finitura alluminio aspetto argento opaco.',
    materiale: 'Alluminio',
    dimensioni: 'Rosetta Ø62mm · larghezza 190mm · spessore porta 8-10mm',
    fornitore: 'HOPPE', fornitoreLogo: hoppeLogo,
    scheda: schedaUrl('paris-scheda-tecnica.pdf'),
    immagini: {
      'Alluminio argento opaco': [parisArgentoOpaco],
    },
    varianti: [
      { codice: '2574008', finitura: 'Alluminio argento opaco' },
    ],
  },
  {
    id: 43, categoria: '03', sottocategoria: 'chiudiporta',
    nome: 'Cerniera chiudiporta a pavimento FS880',
    descrizione: 'Chiudiporta idraulico a pavimento per porte in vetro, con sistema di chiusura integrato nella cerniera bassa: stesse funzionalità dei chiudiporta a pavimento tradizionali, ma senza incassi nel pavimento né cassette da cementare. Conforme alla normativa EN 1154, forza fissa EN3. Velocità di chiusura e colpo finale regolabili, angolo di apertura max 150°, fermo porta a 90° (disponibile su richiesta anche senza fermo). Fornito completo di cerniera per alto (DAHG880) e perno per cerniera (DAPF880).',
    materiale: 'Acciaio',
    dimensioni: 'Larghezza massima porta 850-950mm · spessore vetro 8-13mm · cerniera (carter incluso) 186,5×71×40mm',
    fornitore: 'Meroni', fornitoreLogo: meroniLogo,
    scheda: schedaUrl('fs880-scheda-tecnica.pdf'),
    video: 'https://youtu.be/jVCjKIqBfeU?si=wtYLNMNyjwC0wejw',
    immagini: {
      'Acciaio satinato': [fs880Render, fs880Ambiente],
      'Nero opaco': [fs880NeroRender],
    },
    varianti: [
      { codice: 'DAFS880AS', finitura: 'Acciaio satinato' },
      { codice: 'DAFS880NE', finitura: 'Nero opaco' },
    ],
  },
  {
    id: 44, categoria: '03', sottocategoria: 'chiudiporta',
    nome: 'Cerniera chiudiporta a pavimento FS890',
    descrizione: 'Versione maggiorata del chiudiporta FS880: chiudiporta idraulico a pavimento per porte in vetro, con sistema di chiusura integrato nella cerniera bassa, senza incassi nel pavimento né cassette da cementare. Conforme alla normativa EN 1154, forza fissa EN5. Velocità di chiusura e colpo finale regolabili, angolo di apertura max 150°, fermo porta a 90° (disponibile su richiesta anche senza fermo). Fornito completo di cerniera per alto (DAHG890) e perno per cerniera (DAPF880).',
    materiale: 'Acciaio',
    dimensioni: 'Larghezza massima porta 1100-1250mm · spessore vetro 10-15mm · cerniera (carter incluso) 197,5×80×45mm',
    fornitore: 'Meroni', fornitoreLogo: meroniLogo,
    scheda: schedaUrl('fs890-scheda-tecnica.pdf'),
    immagini: {
      'Acciaio satinato': [fs890Render, fs890Ambiente],
    },
    varianti: [
      { codice: 'DAFS890AS', finitura: 'Acciaio satinato' },
    ],
  },
  {
    id: 45, categoria: '03', sottocategoria: 'cerniere',
    nome: 'Cerniera a braccio per porta in vetro Gliss',
    descrizione: 'Cerniera a muro per porte in vetro a battente, rotazione 180°, design abbinabile alla gamma di pomoli e maniglie Gliss. Adatta a vetri da 8 a 12mm, larghezza porta max 90cm. Con porta fino a 50kg servono 2 cerniere, da 50 a 70kg ne servono 3. Regolazione finale di montaggio con bussole eccentriche da 3mm, per stipiti da 30 a 46mm. Distanza perno-vetro 22,5mm. Prodotto da Meroni in alluminio, disponibile nelle finiture cromo opaco e nero.',
    materiale: 'Alluminio',
    dimensioni: 'Spessore vetro 8-12mm · larghezza porta max 90cm · peso porta: 2 cerniere fino a 50kg, 3 cerniere da 50 a 70kg · stipiti 30-46mm · distanza perno-vetro 22,5mm',
    fornitore: 'Meroni', fornitoreLogo: meroniLogo,
    scheda: schedaUrl('gaha1st-scheda-tecnica.pdf'),
    immagini: {
      'Cromo opaco': [gaha1stRender, gaha1stAmbiente],
      'Nero opaco': [gaha1stNeroRender],
    },
    varianti: [
      { codice: 'GAHA1ST6D', finitura: 'Cromo opaco' },
      { codice: 'GAHA1STNE', finitura: 'Nero opaco' },
    ],
  },
  {
    id: 46, categoria: '03', sottocategoria: 'cerniere',
    nome: 'Cerniera a braccio per porta in vetro AirHinge',
    descrizione: 'Cerniera a muro per porte in vetro a battente, design abbinabile alla maniglia AirHandle. Adatta a vetri da 8 a 12mm, larghezza porta max 90cm. Con porta fino a 50kg servono 2 cerniere, da 50 a 70kg ne servono 3. Prodotto da Meroni in alluminio, disponibile nelle finiture cromo opaco e nero.',
    materiale: 'Alluminio',
    dimensioni: 'Spessore vetro 8-12mm · larghezza porta max 90cm · peso porta: 2 cerniere fino a 50kg, 3 cerniere da 50 a 70kg · stipiti 30-42mm',
    fornitore: 'Meroni', fornitoreLogo: meroniLogo,
    scheda: schedaUrl('airhinge-scheda-tecnica.pdf'),
    immagini: {
      'Cromo opaco': [airhingeArgentoRender, airhingeArgentoAmbiente],
      'Nero opaco': [airhingeNeroRender, airhingeNeroAmbiente],
    },
    varianti: [
      { codice: 'GAHA2ST6D', finitura: 'Cromo opaco' },
      { codice: 'GAHA2STNE', finitura: 'Nero opaco' },
    ],
  },
];
const SCHEDA_IMG_VETRO = {
  1: fermavetroSchedaImg, 2: asolaSchedaImg, 3: fermavetro30SchedaImg, 4: fissaggioSchedaImg, 5: fermavetro230SchedaImg, 6: fermavetro220SchedaImg,
  7: schArizona, 8: schArizonaInclinato, 9: schArkansasQ, 10: schCalifornia, 11: schColorado, 12: schGeorgiaQ,
  13: schCuba, 14: schMinnesota, 15: schNevada, 16: schNevadaQ, 17: schOregon, 18: schTexas,
  19: schTg1000, 20: schTg1004, 21: schTg203, 22: schTg205,
  23: schTgs50, 24: schTgs52,
  26: schTg200, 27: schTg202, 30: schTgs500, 31: schTgs502,
  32: { 'IN109-239': schDist5, 'IN109-240': schDist10, 'IN109-241': schDist20, 'IN109-242': schDist30, 'IN109-243': schDist40, 'IN109-244': schDist50 },
  33: { 'IN112-108': schTenditore830, 'IN112-109': schTenditore910, 'IN112-110': schTenditore1000, 'IN112-111': schTenditore1150, 'IN112-112': schTenditore1300 },
  34: schFissaggioMuro100,
  35: schLamieraU,
  36: schMorsettoM032,
  37: schMorsettoM042,
  38: schSupportoTondoIn610,
  39: schSupportoQuadroIn610,
  40: schSupportoTondoIn610015,
  41: schSupportoQuadroIn610020,
  42: schMorsettoM062,
  47: schMorsettoM092,
  53: schMorsettoPiccolo,
  54: schMorsettoGrande,
  55: schParis,
  48: schMorsettoM022,
  49: schMorsettoM012,
  50: schMorsettoM032042,
  51: schMorsettoM042042,
  52: schMorsettoM062042,
  43: schFs880,
  44: schFs890,
  45: schGaha1st,
  46: schAirhinge,
};

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
const senzaAccenti = (s) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const radice = (w) => (w.length > 3 && /[aeiou]$/.test(w)) ? w.slice(0, -1) : w;
const normalizzaTesto = (s) => senzaAccenti(s).split(/\s+/).filter(Boolean).map(radice).join(' ');

/* Termini generici che un cliente potrebbe usare al posto del nome tecnico
   del prodotto, e che nemmeno la descrizione riporta. */
const PAROLE_CHIAVE_VETRO = {
  1: 'distanziatore',
  2: 'distanziatore',
  3: 'distanziatore',
  4: 'distanziatore',
  5: 'distanziatore',
  6: 'distanziatore',
};

const INDICE_RICERCA_VETRO = PRODOTTI_VETRO.map(p => ({
  p,
  testo: normalizzaTesto([
    p.nome, p.fornitore, subName(p.sottocategoria), catName(p.categoria),
    ...materialiDi(p),
    p.descrizione || '', PAROLE_CHIAVE_VETRO[p.id] || '',
    ...p.varianti.map(v => v.codice),
    ...p.varianti.map(v => v.finitura)
  ].join(' '))
}));

const cercaProdottiVetro = (testo) => {
  const parole = senzaAccenti(testo).split(/\s+/).filter(Boolean).map(radice);
  if (!parole.length) return [];
  return INDICE_RICERCA_VETRO
    .filter(({ testo: hay }) => parole.every(w => hay.includes(w)))
    .map(({ p }) => p);
};

const codiciTrovati = (p, testo) => {
  const parole = senzaAccenti(testo).split(/\s+/).filter(Boolean);
  const cod = [...new Set(p.varianti.map(v => v.codice))];
  return cod.filter(c => parole.some(w => senzaAccenti(c).includes(w)));
};

const primaImmagine = (p) => {
  const arr = Object.values(p.immagini || {})[0];
  return Array.isArray(arr) ? arr[0] : arr;
};

const FINISHES_VETRO = {
  'Inox satinato': 'linear-gradient(135deg,#e6e9ec,#b7bdc2 42%,#d3d8db 55%,#a7adb2)',
  'Nero opaco': 'linear-gradient(135deg,#3d3d40,#232325 60%,#2f2f31)',
  'Oro': 'linear-gradient(135deg,#ffe9a3,#e6b83f 30%,#a9791d 50%,#e9c05a 68%,#ffefb0)',
  'Acciaio inox satinato': 'linear-gradient(135deg,#dfe2e5,#aeb4b9 45%,#c9ced2 58%,#9ea4a9)',
  'Inox lucido': 'linear-gradient(135deg,#f6f8f9,#c3c9ce 32%,#7f878e 50%,#c9ced2 68%,#f1f3f5)',
  'PVD lucido': 'linear-gradient(135deg,#ffe9a3,#e6b83f 30%,#a9791d 50%,#e9c05a 68%,#ffefb0)',
  'Bianco opaco': 'linear-gradient(135deg,#fdfdfb,#e7e6e0 60%,#f2f1ec)',
  'Oro satinato': 'linear-gradient(135deg,#ecca77,#c39a3c 48%,#dcbb63 60%,#b78e35)',
  'Bicolore inox satinato / lucido': 'linear-gradient(90deg,#dfe2e5 0%,#aeb4b9 49%,#7f878e 51%,#f1f3f5 100%)',
  'Argento': 'linear-gradient(135deg,#f0f2f3,#c4c9cd 40%,#dfe3e6 56%,#b0b6bb)',
  'Finitura inox satinato': 'linear-gradient(135deg,#eef1f2,#c9cfd3 38%,#f3f5f6 52%,#a8afb4 70%,#e2e6e8)',
  'Acciaio satinato': 'linear-gradient(135deg,#e9edf0,#b9c1c6 40%,#dde2e5 54%,#9aa2a7 72%,#e6eaed)',
  'Cromo opaco': 'linear-gradient(135deg,#e3e6e8,#a9afb4 42%,#cfd4d7 56%,#8d949a 74%,#dfe3e5)',
  'Cromo lucido': 'linear-gradient(135deg,#ffffff,#c9ced2 30%,#6f777e 50%,#d4d8db 68%,#ffffff)',
  'Cromo perla': 'linear-gradient(135deg,#f7f5f2,#dcd9d4 40%,#eeece8 55%,#c9c6c0 72%,#f5f3f0)',
  'Nichel satinato': 'linear-gradient(135deg,#e8e2d6,#b9b0a0 42%,#d6cfc1 55%,#a39a89 74%,#e3ddd0)',
  'Alluminio argento opaco': 'linear-gradient(135deg,#dcdedf,#aab0b3 42%,#c7cbcd 55%,#94999c 74%,#d7d9da)',
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
  const m = h.match(/^cat\/(\d{2})(?:\/([a-z-]+))?$/);
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
  const [q, setQ] = useState('');
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
                      {img ? <img src={img} alt="" loading="lazy" /> : <span className="res-noimg">—</span>}
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
        <ProductCatalog products={subProducts} />
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
  const [q, setQ] = useState('');
  const [mat, setMat] = useState([]);
  const [fin, setFin] = useState([]);
  const [prod, setProd] = useState([]);
  const [diam, setDiam] = useState([]);
  const [lung, setLung] = useState([]);
  const [inter, setInter] = useState([]);
  const [vetro, setVetro] = useState([]);
  const [favOnly, setFavOnly] = useState(false);
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
  const fins = useMemo(() => [...new Set(products.flatMap(p => p.varianti.map(v => v.finitura)))].sort((a, b) => a.localeCompare(b, 'it')), [products]);
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
  const match = (p, salta) => {
    const t = q.trim().toLowerCase();
    const okQ = !t || p.nome.toLowerCase().includes(t) || p.varianti.some(v => v.codice.toLowerCase().includes(t));
    const okM = salta === 'mat' || !mat.length || materialiDi(p).some(m => mat.includes(m));
    const okF = salta === 'fin' || !fin.length || p.varianti.some(v => fin.includes(v.finitura));
    const okP = salta === 'prod' || !prod.length || prod.includes(p.fornitore);
    const okD = salta === 'diam' || !diam.length || diam.includes(p.diametro);
    const okL = salta === 'lung' || !lung.length || p.varianti.some(v => lung.includes(v.lunghezza));
    const okI = salta === 'inter' || !inter.length || p.varianti.some(v => inter.includes(v.interasse));
    const okV = salta === 'vetro' || !vetro.length || (p.spessoriVetro || []).some(v => vetro.includes(v));
    const okFav = !favOnly || favorites.includes(p.id);
    return okQ && okM && okF && okP && okD && okL && okI && okV && okFav;
  };
  const filtered = products.filter(p => match(p, null));
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
                  test={(p, o) => p.varianti.some(v => v.finitura === o)} tutti="Tutte le finiture" plurale="finiture" />
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
            <ProductCard key={p.id} product={p} idx={idx}
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
function ProductCard({ product: p, idx, isFav, onFav }) {
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
          {selImg ? <img src={selImg} alt={`${p.nome} — ${selFin}`} loading="lazy" />
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
        {sceltaFin ? (
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
              <thead><tr><th>Codice articolo</th><th>Finitura</th>{colMat && <th>Materiale</th>}
                {assi && assi.map(a => <th key={a.chiave} className="ver">{a.etichetta}</th>)}
              </tr></thead>
              <tbody>
                {p.varianti.map((v, i) => (
                  <tr key={i} className={`${sceltaFin ? 'vrow' : ''}${sceltaFin && v.finitura === selFin ? ' active' : ''}`}
                    onClick={sceltaFin ? () => setSelFin(v.finitura) : undefined}>
                    <td className="code">{v.codice}</td>
                    <td><span className="fin-cell"><Chip finitura={v.finitura} />{v.finitura}</span></td>
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
        {img ? <img src={img} alt={p.nome} loading="lazy" /> : <div className="noimg"><Ghost /></div>}
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
    .sort((a, b) => (typeof a === 'number' ? a - b : String(a).localeCompare(String(b))));
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

            <div className="finishes pdp-finishes">
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
            </div>

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
              {/* Video tutorial di montaggio: presente solo per gli articoli che ne hanno uno. */}
              {p.video && (
                <a className="scheda" href={p.video} target="_blank" rel="noopener">
                  <PlayCircle size={15} /> Video tutorial montaggio
                </a>
              )}
            </div>

            <div className="pdp-variants">
              <h3>Varianti disponibili ({p.varianti.length})</h3>
              <table className="variants">
                <thead><tr><th>Codice articolo</th><th>Finitura</th>{colMat && <th>Materiale</th>}
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
                      <td><span className="fin-cell"><Chip finitura={v.finitura} />{v.finitura}</span></td>
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

        {p.descrizione && (
          <SezioneTendina title="Descrizione" aperta>
            <p className="rel-testo">{p.descrizione}</p>
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
  useEffect(() => {
    const onOpen = (e) => {
      const { id, key } = e.detail || {};
      const p = PRODOTTI_VETRO.find(x => x.id === id);
      const src = pickScheda(SCHEDA_IMG_VETRO[id], key);
      if (!p || !src) return;
      setItem({ src, title: p.nome, pdf: pickScheda(p.scheda, key) });
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
