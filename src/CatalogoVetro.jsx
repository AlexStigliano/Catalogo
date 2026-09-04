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
import ra462Foto from './assets/vetro/prodotti/ra462-foto.jpg';
import ra462Render from './assets/vetro/prodotti/ra462-render.jpg';
import ra462QuoteFronte from './assets/vetro/prodotti/ra462-quote-fronte.jpg';
import ra462QuoteLato from './assets/vetro/prodotti/ra462-quote-lato.jpg';
import schRa462 from './assets/vetro/schede/ra462-scheda.jpg';
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
import airhandleArgentoRender from './assets/vetro/prodotti/airhandle-argento-render.jpg';
import airhandleArgentoVetro from './assets/vetro/prodotti/airhandle-argento-vetro.jpg';
import airhandleNeroRender from './assets/vetro/prodotti/airhandle-nero-render.jpg';
import airhandleNeroVetro from './assets/vetro/prodotti/airhandle-nero-vetro.jpg';
import schAirhandle from './assets/vetro/schede/airhandle-scheda.jpg';
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
import parisNeroOpaco from './assets/vetro/prodotti/paris-nero-opaco.jpg';
import schParisNero from './assets/vetro/schede/paris-nero-scheda.jpg';
import incontroHcsSbaFoto from './assets/vetro/prodotti/incontro-hcs-sba-foto.jpg';
import incontroHcsSbaQuote from './assets/vetro/prodotti/incontro-hcs-sba-quote.jpg';
import gfsLogo from './assets/vetro/gfs-logo.png';
import e07CromoLucido from './assets/vetro/prodotti/e07-cromo-lucido.jpg';
import e07Quote from './assets/vetro/prodotti/e07-quote.jpg';
import e07LavorazioneVetro from './assets/vetro/prodotti/e07-lavorazione-vetro.jpg';
import ternoLogo from './assets/vetro/terno-scorrevoli-logo.png';
import magic2VetroArgento from './assets/vetro/prodotti/magic2-vetro-argento.jpg';
import magic2VetroAmbienteUfficio from './assets/vetro/prodotti/magic2-vetro-ambiente-ufficio.jpg';
import magic2VetroAmbienteBoutique from './assets/vetro/prodotti/magic2-vetro-ambiente-boutique.jpg';
import magic2FrameNeroAperta from './assets/vetro/prodotti/magic2-frame-nero-aperta.jpg';
import magic2FrameNeroChiusa from './assets/vetro/prodotti/magic2-frame-nero-chiusa.jpg';
import magic2FrameNero from './assets/vetro/prodotti/magic2-frame-nero.jpg';
import schMagic2Frame from './assets/vetro/schede/magic2-frame-scheda.jpg';
import universalAmbienteSoggiorno from './assets/vetro/prodotti/universal-ambiente-soggiorno.jpg';
import universalAmbienteCabina from './assets/vetro/prodotti/universal-ambiente-cabina.jpg';
import universalDettaglio from './assets/vetro/prodotti/universal-dettaglio.jpg';
import schUniversal from './assets/vetro/schede/universal-scheda.jpg';
import solovetroAmbienteUfficio from './assets/vetro/prodotti/solovetro-ambiente-ufficio.jpg';
import solovetroDettaglio from './assets/vetro/prodotti/solovetro-dettaglio.jpg';
import solovetroEsploso from './assets/vetro/prodotti/solovetro-esploso.jpg';
import schSolovetro from './assets/vetro/schede/solovetro-scheda.jpg';
import solovetroLightAmbienteCucina from './assets/vetro/prodotti/solovetro-light-ambiente-cucina.jpg';
import solovetroLightDettaglio from './assets/vetro/prodotti/solovetro-light-dettaglio.jpg';
import solovetroLightEsploso from './assets/vetro/prodotti/solovetro-light-esploso.jpg';
import schSolovetroLight from './assets/vetro/schede/solovetro-light-scheda.jpg';
import vetro40AmbientePorteLegno from './assets/vetro/prodotti/vetro40-ambiente-porte-legno.jpg';
import vetro40Dettaglio from './assets/vetro/prodotti/vetro40-dettaglio.jpg';
import vetro40Esploso from './assets/vetro/prodotti/vetro40-esploso.jpg';
import schVetro40 from './assets/vetro/schede/vetro40-scheda.jpg';
import vetro40dragAmbienteUfficio from './assets/vetro/prodotti/vetro40drag-ambiente-ufficio.jpg';
import vetro40dragDettaglio from './assets/vetro/prodotti/vetro40drag-dettaglio.jpg';
import vetro40dragEsploso from './assets/vetro/prodotti/vetro40drag-esploso.jpg';
import schVetro40drag from './assets/vetro/schede/vetro40drag-scheda.jpg';
import vetrofissoAmbienteUfficio from './assets/vetro/prodotti/vetrofisso-ambiente-ufficio.jpg';
import vetrofissoDettaglio from './assets/vetro/prodotti/vetrofisso-dettaglio.jpg';
import vetrofissoEsploso from './assets/vetro/prodotti/vetrofisso-esploso.jpg';
import schVetrofisso from './assets/vetro/schede/vetrofisso-scheda.jpg';
import gridAmbienteCabina from './assets/vetro/prodotti/grid-ambiente-cabina-armadio.jpg';
import gridPortaUniversal from './assets/vetro/prodotti/grid-porta-universal.jpg';
import gridComponenti from './assets/vetro/prodotti/grid-componenti.jpg';
import schGrid from './assets/vetro/schede/grid-scheda.jpg';
import clearAmbienteBagno from './assets/vetro/prodotti/clear-ambiente-bagno.jpg';
import clearDettaglio from './assets/vetro/prodotti/clear-dettaglio.jpg';
import clearEsploso from './assets/vetro/prodotti/clear-esploso.jpg';
import schClear from './assets/vetro/schede/clear-scheda.jpg';
import trafiloLogo from './assets/vetro/trafilo-logo.png';
import guarnizionePalloncinoQuote from './assets/vetro/prodotti/guarnizione-palloncino-quote.jpg';
import guarnizioneDoppiaPinnaQuote from './assets/vetro/prodotti/guarnizione-doppia-pinna-quote.jpg';
// Un'unica tavola per tutta la serie 400: la condividono tutti gli articoli.
import schTrafilo400 from './assets/vetro/schede/trafilo-serie-400-scheda.jpg';
import fimet3904 from './assets/vetro/prodotti/fimet-3904.jpg';
import schFimet3904 from './assets/vetro/schede/fimet-3904-scheda.jpg';
import fimet3921 from './assets/vetro/prodotti/fimet-3921.jpg';
import schFimet3921 from './assets/vetro/schede/fimet-3921-scheda.jpg';
import fimetManiglioneArgento from './assets/vetro/prodotti/fimet-maniglione-argento.jpg';
import fimetManiglioneNero from './assets/vetro/prodotti/fimet-maniglione-nero.jpg';
import schFimetManiglione from './assets/vetro/schede/fimet-maniglione-adesivo-scheda.jpg';
import fimet3931Argento from './assets/vetro/prodotti/fimet-3931-argento.jpg';
import fimet3931Nero from './assets/vetro/prodotti/fimet-3931-nero.jpg';
import schFimet3931 from './assets/vetro/schede/fimet-3931-scheda.jpg';
import fimet3932Argento from './assets/vetro/prodotti/fimet-3932-argento.jpg';
import fimet3932Nero from './assets/vetro/prodotti/fimet-3932-nero.jpg';
import schFimet3932 from './assets/vetro/schede/fimet-3932-scheda.jpg';
import fimet3933Argento from './assets/vetro/prodotti/fimet-3933-argento.jpg';
import fimet3933Nero from './assets/vetro/prodotti/fimet-3933-nero.jpg';
import schFimet3933 from './assets/vetro/schede/fimet-3933-scheda.jpg';
import fimetBrasileInox from './assets/vetro/prodotti/fimet-brasile-852-inox.jpg';
import fimetBrasileNero from './assets/vetro/prodotti/fimet-brasile-852-nero.jpg';
import schFimetBrasile from './assets/vetro/schede/fimet-brasile-852-scheda.jpg';
import fimetEquadorInoxSatinato from './assets/vetro/prodotti/fimet-equador-850-inox-satinato.jpg';
import fimetEquadorInoxLucido from './assets/vetro/prodotti/fimet-equador-850-inox-lucido.jpg';
import fimetEquadorNero from './assets/vetro/prodotti/fimet-equador-850-nero.jpg';
import schFimetEquador from './assets/vetro/schede/fimet-equador-850-scheda.jpg';
/* Kit di fissaggio per maniglioni: non esiste una scheda tecnica del singolo
   articolo, solo la tavola del catalogo Fimet "Schede tecniche maniglioni" da
   cui abbiamo ritagliato il disegno con le quote (vedi "immagini", non
   "scheda"). La tavola intera e' una striscia molto larga e alla dimensione a
   cui la galleria la mostra le quote non si leggono: dopo la vista d'insieme
   mettiamo quindi i dettagli, ritagliati dalla stessa tavola. */
import fimetFiss03 from './assets/vetro/prodotti/fimet-fiss-03-quote.jpg';
import fimetFiss03Fori from './assets/vetro/prodotti/fimet-fiss-03-fori.jpg';
import fimetFiss03Componenti from './assets/vetro/prodotti/fimet-fiss-03-componenti.jpg';
import fimetFiss03Montaggio from './assets/vetro/prodotti/fimet-fiss-03-montaggio.jpg';
import fimetFiss05m6 from './assets/vetro/prodotti/fimet-fiss-05m6-quote.jpg';
import fimetFiss05m6Foro from './assets/vetro/prodotti/fimet-fiss-05m6-foro.jpg';
import fimetFiss05m6Vite from './assets/vetro/prodotti/fimet-fiss-05m6-vite.jpg';
import fimetFiss05m6Montaggio from './assets/vetro/prodotti/fimet-fiss-05m6-montaggio.jpg';
import fimetFiss06 from './assets/vetro/prodotti/fimet-fiss-06-quote.jpg';
import fimetFiss06Componenti from './assets/vetro/prodotti/fimet-fiss-06-componenti.jpg';
import fimetFiss06Montaggio from './assets/vetro/prodotti/fimet-fiss-06-montaggio.jpg';
import fimetFiss07 from './assets/vetro/prodotti/fimet-fiss-07-quote.jpg';
import fimetFiss07Componenti from './assets/vetro/prodotti/fimet-fiss-07-componenti.jpg';
import fimetFiss07Montaggio from './assets/vetro/prodotti/fimet-fiss-07-montaggio.jpg';
import schMagic2Vetro from './assets/vetro/schede/magic2-vetro-scheda.jpg';

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
    id: 74, categoria: '01', sottocategoria: 'morsetti',
    nome: 'Supporto a pinza RA 462',
    descrizione: 'Supporto a pinza per vetro stratificato o pannello in alluminio estruso, corpo 70mm. Completo di n. 2 viti T.C. M6x14 e n. 2 viti T.S.C. M5x16 in acciaio inox, con guarnizione in giprene nero per spessore vetro 8-8,76mm. Per spessori 10-10,76mm si abbina all’accessorio RA 768; per il montaggio con le pinze in verticale si usa l’innesto RA 481. Esiste anche nella versione a pinza ridotta da 50mm, RA 892. Prodotto da Compas in alluminio, finitura argento.',
    materiale: 'Alluminio',
    spessoriVetro: ['8', '8.76'],
    dimensioni: 'Corpo 70×60mm · profondità 29mm · interasse viti 35mm · spessore vetro 8-8,76mm',
    fornitore: 'Compas', fornitoreLogo: compasLogo,
    scheda: schedaUrl('ra462-scheda-tecnica.pdf'),
    immagini: {
      'Argento': [ra462Foto, ra462Render, ra462QuoteFronte, ra462QuoteLato],
    },
    varianti: [
      { codice: 'RA 462', finitura: 'Argento' },
    ],
  },
  {
    id: 55, categoria: '04', sottocategoria: 'maniglie-battenti',
    nome: 'HCS Paris con chiave e nottolino',
    descrizione: 'Maniglia con serratura integrata HCS (Hoppe Compact System) per porte battenti in cristallo e pareti divisorie, spessore porta 8-10mm: un sistema compatto che unisce l’azionamento della porta alla funzione della serratura, con cilindro/chiave e chiusura con nottolino girevole. Adattatore in alluminio con sottocostruzione in resina, corpo interno in alluminio pressofuso, canotto in alluminio con filetto, scrocco in resina rinforzata con fibra di vetro (silenzioso). Contropiastra non inclusa. Richiede una preparazione del pannello. Prodotta da HOPPE in Germania, disponibile in 2 finiture: alluminio aspetto argento opaco e resina nero intenso opaco.',
    materiale: 'Alluminio o resina',
    materiali: ['Alluminio', 'Resina'],
    dimensioni: 'Rosetta Ø62mm · larghezza 190mm · spessore porta 8-10mm',
    fornitore: 'HOPPE', fornitoreLogo: hoppeLogo,
    scheda: {
      '2574008': schedaUrl('paris-scheda-tecnica.pdf'),
      '783748': schedaUrl('paris-nero-scheda-tecnica.pdf'),
    },
    immagini: {
      'Alluminio argento opaco': [parisArgentoOpaco],
      'Nero opaco': [parisNeroOpaco],
    },
    varianti: [
      { codice: '2574008', finitura: 'Alluminio argento opaco', materiale: 'Alluminio' },
      { codice: '783748', finitura: 'Nero opaco', materiale: 'Resina' },
    ],
    essenziali: [56],
  },
  {
    id: 56, categoria: '04', sottocategoria: 'maniglie-battenti',
    nome: 'Incontro HCS-SB-A',
    // Niente scheda tecnica: non disponibile, solo la pagina di catalogo da cui
    // abbiamo ricavato foto e quote (vedi "immagini" sotto, non "scheda").
    descrizione: 'Contropiastra (incontro) del sistema HCS in acciaio inox, per porte complanari, fissaggio con viti multiuso. Si abbina alla maniglia con serratura HCS Paris. Prodotta da HOPPE.',
    materiale: 'Acciaio inox',
    dimensioni: '70×38,5mm',
    fornitore: 'HOPPE', fornitoreLogo: hoppeLogo,
    immagini: {
      'Acciaio inox': [incontroHcsSbaFoto, incontroHcsSbaQuote],
    },
    varianti: [
      { codice: '658206', finitura: 'Acciaio inox' },
    ],
  },
  {
    id: 69, categoria: '04', sottocategoria: 'maniglie-battenti',
    nome: 'Maniglia con serratura AirHandle L13',
    // Della gamma AirDoor trattiamo solo la funzione L13 e solo la versione
    // per porte in vetro: i codici delle altre funzioni (L11 passaggio, L12
    // bagno) e della versione per porte in legno non sono elencati qui.
    descrizione: 'Maniglia con serratura integrata per porte a battente in vetro, funzione L13: all’esterno si chiude a chiave, all’interno c’è un pomolo girevole per la modalità privacy. Fa parte della linea AirDoor e condivide design, forme e finiture con la cerniera AirHinge, così tutta la porta resta coordinata. Adatta a vetri da 8 a 12mm, si fissa con tiranti sfruttando le lavorazioni già presenti nel vetro. Sistema anti-panico integrato: dall’interno la leva sblocca sempre la serratura. Cilindro a lamelle con testa piatta e chiave coordinata alla finitura. Prodotta da Meroni in alluminio 100% riciclabile, disponibile in cromo opaco e nero opaco, sia nella versione a spingere che in quella a tirare.',
    materiale: 'Alluminio',
    spessoriVetro: ['8', '10', '12'],
    dimensioni: 'Spessore vetro 8-12mm · albero 8mm ad espansione · rosetta quadra',
    fornitore: 'Meroni', fornitoreLogo: meroniLogo,
    scheda: schedaUrl('airhandle-scheda-tecnica.pdf'),
    istruzioni: schedaUrl('airhandle-istruzioni.pdf'),
    // Un video per verso di apertura: il montaggio dello scrocco cambia.
    video: [
      { etichetta: 'a spingere', url: 'https://youtube.com/shorts/WTF9-g-a4ww' },
      { etichetta: 'a tirare', url: 'https://youtube.com/shorts/weY1w8maktk' },
    ],
    caratteristiche: [
      { titolo: 'Serratura integrata nella maniglia', testo: 'Il cilindro è dentro la maniglia stessa: non serve una serratura separata nel vetro, l’ingombro sulla porta resta minimo.' },
      { titolo: 'Chiave fuori, privacy dentro', testo: 'La funzione L13 chiude a chiave dall’esterno e ha un pomolo girevole all’interno per la modalità privacy: pensata per ingressi e uffici.' },
      { titolo: 'Sistema anti-panico', testo: 'Abbassando la leva della maniglia interna la serratura si sblocca sempre in automatico, anche quando è chiusa a chiave.' },
      { titolo: 'A spingere o a tirare', testo: 'Due versioni a seconda del verso di apertura della porta: cambia il lato su cui va montato lo scrocco per il vetro.' },
      { titolo: 'Abbinabile alla cerniera AirHinge', testo: 'Maniglia e cerniera sono della stessa linea AirDoor: stesso design essenziale, stesse finiture, stesso impatto visivo ridotto.' },
      { titolo: 'Chiave in tinta', testo: 'Cilindro a lamelle con testa piatta e chiave coordinata alla finitura della maniglia.' },
      { titolo: 'Alluminio riciclabile', testo: 'Realizzata interamente in alluminio 100% riciclabile.' },
    ],
    assi: [
      { chiave: 'apertura', etichetta: 'Verso di apertura' },
    ],
    immagini: {
      // Prima le foto sulla porta in vetro, che e' la versione che trattiamo;
      // poi il render con la cerniera AirHinge accanto.
      'Cromo opaco': [airhandleArgentoVetro, airhandleArgentoRender],
      'Nero opaco': [airhandleNeroVetro, airhandleNeroRender],
    },
    varianti: [
      { codice: 'L13NAGL', finitura: 'Cromo opaco', apertura: 'A spingere' },
      { codice: 'L13NAGT', finitura: 'Cromo opaco', apertura: 'A tirare' },
      { codice: 'L13NEGL', finitura: 'Nero opaco', apertura: 'A spingere' },
      { codice: 'L13NEGT', finitura: 'Nero opaco', apertura: 'A tirare' },
    ],
    // La cerniera AirHinge non serve per montare la maniglia: è l'articolo
    // della stessa linea AirDoor con cui si abbina esteticamente.
    facoltativi: [46],
  },
  {
    id: 57, categoria: '04', sottocategoria: 'maniglie-scorrevoli',
    nome: 'Maniglia a scomparsa per porta scorrevole',
    // Niente scheda tecnica: non disponibile, solo la pagina di catalogo da cui
    // abbiamo ricavato foto e quote (vedi "immagini" sotto, non "scheda").
    descrizione: 'Maniglia a scomparsa per porta scorrevole in vetro, a incasso interno muro, in ottone. Adatta a spessori vetro 8-10mm. Prodotta da GFS, disponibile in 5 finiture: cromo lucido, cromo opaco, simil inox, oro lucido e nero opaco.',
    materiale: 'Ottone',
    dimensioni: 'Piastra 70×100mm · profondità 18mm · spessore vetro 8-10mm · lavorazione vetro 58×73mm',
    fornitore: 'GFS', fornitoreLogo: gfsLogo,
    immagini: {
      'Cromo lucido': [e07CromoLucido, e07Quote, e07LavorazioneVetro],
      'Cromo opaco': [e07CromoLucido, e07Quote, e07LavorazioneVetro],
      'Simil inox': [e07CromoLucido, e07Quote, e07LavorazioneVetro],
      'Oro lucido': [e07CromoLucido, e07Quote, e07LavorazioneVetro],
      'Nero opaco': [e07CromoLucido, e07Quote, e07LavorazioneVetro],
    },
    varianti: [
      { codice: 'E07M02715', finitura: 'Cromo lucido' },
      { codice: 'E07M02716', finitura: 'Cromo opaco' },
      { codice: 'E07M02720', finitura: 'Simil inox' },
      { codice: 'E07M02713', finitura: 'Oro lucido' },
      { codice: 'E07M027NE', finitura: 'Nero opaco' },
    ],
  },
  {
    id: 58, categoria: '02',
    nome: 'Magic2 Vetro',
    descrizione: 'Sistema scorrevole a scomparsa esterno muro per porte in vetro, pluribrevettato e 100% Made in Italy: lo scorrevole invisibile originale. Fermi ammortizzati ad aria con oltre 50mm di frenatura e sistema brevettato di regolazione micrometrica. Il sistema si fissa tramite borchie o fascia a vista ed è adatto a vetri monolitici o stratificati. Kit completo disponibile in due lunghezze, per porte fino a 80kg. Prodotto da Terno Scorrevoli in alluminio e acciaio, disponibile in 2 finiture: argento spazzolato e nero spazzolato.',
    materiale: 'Alluminio e acciaio',
    spessoriVetro: ['8', '10'],
    dimensioni: 'Kit 1100 o 1800mm · peso porta max 80kg · spessore vetro 8-10mm · luce inferiore 10mm',
    fornitore: 'Terno Scorrevoli', fornitoreLogo: ternoLogo,
    scheda: schedaUrl('magic2-vetro-scheda-tecnica.pdf'),
    istruzioni: schedaUrl('magic2-vetro-istruzioni-montaggio.pdf'),
    caratteristiche: [
      { titolo: 'Oltre 50mm di frenatura', testo: 'Fermi ammortizzati brevettati che garantiscono oltre 50mm di frenatura, mantenendo gli stessi ingombri della porta.' },
      { titolo: 'Fermi con posizione regolabile', testo: 'Indipendenti dal distanziale: si possono spostare, se necessario, per regolare la posizione della porta.' },
      { titolo: 'Ruote distanziali', testo: 'Posizionate alle estremità della porta, la proteggono da contatti con la parete in caso di muri con superfici irregolari.' },
      { titolo: 'Sistema brevettato di regolazione', testo: 'Regolazione dell’altezza della porta dal pavimento e regolazione micrometrica di distanza e parallelismo dalla parete, per compensare eventuali irregolarità del muro. Tutte le regolazioni si effettuano dall’alto, senza sganciare la porta.' },
      { titolo: 'Sistema di antisganciamento', testo: 'Due elementi rotanti con leve di sicurezza ben visibili, per l’antisganciamento della porta senza bisogno di utensili.' },
      { titolo: 'Guida inferiore silenziosa', testo: 'Rinforzata in zama, resistente e versatile, scorre in un profilo che riduce al minimo il rumore.' },
      { titolo: 'Ruote inferiori brevettate', testo: 'Molleggio brevettato, diametro, cuscinetti e perni in acciaio maggiorati, rivestimento in gomma raddoppiato: più forza e scorrevolezza, senza lasciare tracce sulle superfici e senza deformarsi nel tempo.' },
    ],
    assi: [
      { chiave: 'lunghezza', etichetta: 'Lunghezza kit', suffisso: ' mm' },
      { chiave: 'spessoreVetro', etichetta: 'Spessore vetro', suffisso: ' mm' },
    ],
    immagini: {
      'Argento spazzolato': [magic2VetroAmbienteUfficio, magic2VetroAmbienteBoutique, magic2VetroArgento],
      'Nero spazzolato': [magic2VetroAmbienteUfficio, magic2VetroAmbienteBoutique, magic2VetroArgento],
    },
    varianti: [
      { codice: 'K.0041.1.02', finitura: 'Argento spazzolato', lunghezza: 1100, spessoreVetro: 8 },
      { codice: 'K.0041.2.02', finitura: 'Argento spazzolato', lunghezza: 1100, spessoreVetro: 10 },
      { codice: 'K.0042.1.02', finitura: 'Argento spazzolato', lunghezza: 1800, spessoreVetro: 8 },
      { codice: 'K.0042.2.02', finitura: 'Argento spazzolato', lunghezza: 1800, spessoreVetro: 10 },
      { codice: 'K.0041.1.15', finitura: 'Nero spazzolato', lunghezza: 1100, spessoreVetro: 8 },
      { codice: 'K.0041.2.15', finitura: 'Nero spazzolato', lunghezza: 1100, spessoreVetro: 10 },
      { codice: 'K.0042.1.15', finitura: 'Nero spazzolato', lunghezza: 1800, spessoreVetro: 8 },
      { codice: 'K.0042.2.15', finitura: 'Nero spazzolato', lunghezza: 1800, spessoreVetro: 10 },
    ],
  },
  {
    id: 59, categoria: '02',
    nome: 'Magic2 Frame',
    descrizione: 'Sistema scorrevole a scomparsa esterno muro con telaio in alluminio Universal, pluribrevettato e 100% Made in Italy: nessun binario, fermo o carrello visibile. Il telaio è adatto a pareti in mattoni pieni, forati, cemento e cartongesso (con ancoraggi specifici), e ospita vetri monolitici o stratificati con spessore da 5 a 8,5mm. Fermi ammortizzati Fluid con doppie molle di ritorno per una frenata fluida e silenziosa. Prodotto da Terno Scorrevoli in alluminio e acciaio.',
    materiale: 'Alluminio e acciaio',
    spessoriVetro: ['5', '8.5'],
    dimensioni: 'Kit 1500×3000mm · peso porta max 80kg · spessore vetro 5-8,5mm · luce inferiore 10mm',
    fornitore: 'Terno Scorrevoli', fornitoreLogo: ternoLogo,
    scheda: schedaUrl('magic2-frame-scheda-tecnica.pdf'),
    istruzioni: schedaUrl('magic2-frame-istruzioni-montaggio.pdf'),
    caratteristiche: [
      { titolo: 'Ruote inferiori brevettate', testo: 'Scaricano completamente il peso della porta sul pavimento senza lasciare segni, anche dopo anni di utilizzo. Un paraurti integrato assorbe le irregolarità del pavimento, come le fughe delle piastrelle.' },
      { titolo: 'Fermi ammortizzati Fluid', testo: 'L’ultima generazione di ammortizzatori a chiusura rallentata di Terno Scorrevoli, con doppie molle di ritorno, per una frenata sempre fluida e silenziosa.' },
      { titolo: 'Sistema di antisganciamento', testo: 'La guida superiore integra due elementi rotanti con leve di sicurezza ben visibili, per rimuovere la porta dopo l’installazione senza bisogno di utensili.' },
      { titolo: 'Design essenziale e resistente', testo: 'Profili tubolari, giunti metallici e guarnizione biestrusa: il peso del vetro è sostenuto da montanti e traverse, dimezzando la pressione. I profili si tagliano a misura senza forature o fresature aggiuntive.' },
      { titolo: 'Adatto a diverse pareti', testo: 'Mattoni pieni, mattoni forati, cemento e cartongesso, purché vengano usati gli ancoraggi specifici e l’installazione sia eseguita con cura.' },
      { titolo: 'Certificato fino a 100.000 cicli', testo: 'Prestazioni testate nei laboratori Terno Scorrevoli (T-Lab) fino a 100.000 cicli di apertura della porta.' },
      { titolo: 'Soluzioni per pavimenti in moquette', testo: 'Un profilo in alluminio e adesivo dedicato adatta il sistema anche ai pavimenti in moquette, garantendo la migliore scorrevolezza possibile.' },
    ],
    immagini: {
      'Nero spazzolato': [magic2FrameNeroAperta, magic2FrameNeroChiusa, magic2FrameNero],
    },
    varianti: [
      { codice: 'K.0461.1.3.15', finitura: 'Nero spazzolato' },
    ],
  },
  {
    id: 60, categoria: '02',
    nome: 'Universal',
    // Sistema molto modulare (telaio + binario Eclettica o Evolution + ante
    // scorrevoli/fisse in vetro, legno o alluminio, in tante combinazioni):
    // teniamo a magazzino un solo kit, scheda tecnica e brochure servono a
    // mostrare il prodotto. Per configurazioni diverse si valuta caso per
    // caso in base alle esigenze del cliente.
    descrizione: 'Telaio in alluminio Universal per porte scorrevoli e pareti, in vetro, legno o alluminio: profili tubolari, giunti metallici e guarnizione biestrusa per la massima resistenza. Si abbina ai sistemi di scorrimento Eclettica Fluid ed Evolution Fluid, con installazione a parete, soffitto o controsoffitto. Un sistema molto versatile, che consente numerose configurazioni — anta singola, abbinata a elementi fissi, ante doppie — e diverse finiture: la combinazione esatta di telaio, binario, ante e accessori va valutata caso per caso in base alle tue esigenze. Contattaci per individuare gli articoli giusti per la tua porta: qui trovi la scheda tecnica completa e il kit che teniamo pronto a magazzino. Prodotto da Terno Scorrevoli in alluminio e acciaio.',
    materiale: 'Alluminio e acciaio',
    spessoriVetro: ['5', '8.5'],
    dimensioni: 'Porta fino a 1500×3000mm (max) · peso max 80kg · vetro 5-8,5mm',
    fornitore: 'Terno Scorrevoli', fornitoreLogo: ternoLogo,
    scheda: schedaUrl('universal-scheda-tecnica.pdf'),
    caratteristiche: [
      { titolo: 'Design essenziale e resistente', testo: 'Profili tubolari, giunti metallici e guarnizione biestrusa: il peso del vetro è sostenuto da montanti e traverse, dimezzando la pressione.' },
      { titolo: 'Flessibilità nei materiali', testo: 'Permette di realizzare porte in vetro con telaio in alluminio e di integrarle con porte in legno a tutto spessore, per configurazioni miste.' },
      { titolo: 'Configurazioni multiple', testo: 'Dall’anta singola scorrevole, alla porta abbinata a due o tre elementi fissi, alle ante doppie. Le configurazioni con più ante non hanno movimento sincronizzato.' },
      { titolo: 'Si abbina a Eclettica ed Evolution', testo: 'Con Eclettica Fluid la porta si installa a parete, soffitto o controsoffitto con la copertura allineata alla maniglia. Con Evolution Fluid la porta si inserisce tra le due coperture, a scomparsa completa.' },
      { titolo: 'Tante finiture disponibili', testo: 'Argento spazzolato, nero spazzolato, nichel spazzolato, grigio metallizzato e grafite.' },
      { titolo: 'Un sistema su misura', testo: 'Vista la varietà di combinazioni possibili tra telaio, binario, ante e accessori, scegliamo insieme gli articoli giusti in base alle tue esigenze: contattaci per la tua porta.' },
    ],
    immagini: {
      'Nero spazzolato': [universalAmbienteSoggiorno, universalAmbienteCabina, universalDettaglio],
    },
    varianti: [
      { codice: 'K.0421.2.3.15', finitura: 'Nero spazzolato' },
    ],
  },
  {
    id: 75, categoria: '02',
    nome: 'Solo Vetro',
    descrizione: 'Sistema di scorrevoli invisibili per porte interamente in vetro: le pinze di scorrimento sono completamente nascoste all\'interno del profilo binario in alluminio, per una resa estetica pulita e senza elementi a vista sul vetro. Adatto a vetri monolitici o stratificati, con spessore 8-8,7, 10-10,7 o 12-12,7mm. Disponibile in configurazione standard ad anta singola oppure Sync, con apertura simultanea sincronizzata per porte a due ante. Fissaggio a parete o a soffitto, portata 80kg per anta, completo di n. 2 fermi ammortizzati per ogni kit. Prodotto da Terno Scorrevoli in alluminio, in 2 finiture: argento anodizzato e argento spazzolato anodizzato.',
    materiale: 'Alluminio',
    spessoriVetro: ['8', '8.7', '10', '10.7', '12', '12.7'],
    dimensioni: 'Portata 80kg per anta · spessore vetro 8-8,7 / 10-10,7 / 12-12,7mm · fissaggio a parete o soffitto',
    fornitore: 'Terno Scorrevoli', fornitoreLogo: ternoLogo,
    scheda: schedaUrl('solovetro-scheda-tecnica.pdf'),
    istruzioni: schedaUrl('solovetro-istruzioni-montaggio.pdf'),
    caratteristiche: [
      { titolo: 'Pinze completamente invisibili', testo: 'Le pinze di scorrimento sono integrate e nascoste all\'interno del profilo binario in alluminio, per una porta in vetro senza elementi di scorrimento a vista.' },
      { titolo: 'Apertura singola o Sync sincronizzata', testo: 'Il sistema prevede la configurazione per anta singola oppure, con la versione Sync, per due ante con apertura simultanea e movimento sincronizzato.' },
      { titolo: 'Adatto a vetri monolitici e stratificati', testo: 'Compatibile con spessori vetro 8-8,7mm, 10-10,7mm e 12-12,7mm, sia monolitici che stratificati.' },
      { titolo: 'Fermi ammortizzati inclusi', testo: 'Ogni kit è completo di n. 2 fermi ammortizzati per una chiusura frenata e silenziosa.' },
      { titolo: 'Fissaggio a parete o a soffitto', testo: 'Il profilo binario si installa sia a parete che a soffitto, in base alle esigenze dell\'ambiente.' },
      { titolo: 'Due finiture disponibili', testo: 'Argento anodizzato e argento spazzolato anodizzato.' },
    ],
    immagini: {
      'Argento': [solovetroAmbienteUfficio, solovetroDettaglio, solovetroEsploso],
    },
    varianti: [
      { codice: 'K.0272.5', finitura: 'Argento' },
    ],
  },
  {
    id: 76, categoria: '02',
    nome: 'Solo Vetro Light',
    descrizione: 'Sistema di scorrevoli invisibili per porte interamente in vetro, dedicato ai controsoffitti in cartongesso: le pinze di scorrimento sono completamente nascoste all\'interno del profilo binario in alluminio, integrabile a filo del controsoffitto. Adatto a vetri monolitici o stratificati, con spessore 8-8,7, 10-10,7 o 12-12,7mm, in configurazione porta singola, singola con fisso, doppia o doppia con fisso. Sistema di antisganciamento e portata 80kg per anta, completo di n. 2 fermi ammortizzati per ogni kit. Fissaggio a soffitto pieno, a soffitto vuoto (controsoffitto) o a parete. Prodotto da Terno Scorrevoli in alluminio, finitura argento anodizzato.',
    materiale: 'Alluminio',
    spessoriVetro: ['8', '8.7', '10', '10.7', '12', '12.7'],
    dimensioni: 'Portata 80kg per anta · spessore vetro 8-8,7 / 10-10,7 / 12-12,7mm · fissaggio a soffitto (pieno o vuoto) o a parete',
    fornitore: 'Terno Scorrevoli', fornitoreLogo: ternoLogo,
    scheda: schedaUrl('solovetro-light-scheda-tecnica.pdf'),
    istruzioni: schedaUrl('solovetro-light-istruzioni-montaggio.pdf'),
    caratteristiche: [
      { titolo: 'Pinze completamente invisibili', testo: 'Le pinze di scorrimento sono integrate e nascoste all\'interno del profilo binario in alluminio, a filo del controsoffitto in cartongesso.' },
      { titolo: 'Dedicato ai controsoffitti', testo: 'Pensato per l\'installazione su pareti e controsoffitti in cartongesso, con fissaggio a soffitto pieno, a soffitto vuoto o a parete.' },
      { titolo: 'Sistema di antisganciamento', testo: 'Un sistema dedicato impedisce lo sganciamento accidentale dei carrelli dal binario durante lo scorrimento.' },
      { titolo: 'Configurazioni multiple', testo: 'Porta singola, porta singola con elemento fisso, porta doppia e porta doppia con elemento fisso.' },
      { titolo: 'Adatto a vetri monolitici e stratificati', testo: 'Compatibile con spessori vetro 8-8,7mm, 10-10,7mm e 12-12,7mm, sia monolitici che stratificati.' },
      { titolo: 'Fermi ammortizzati inclusi', testo: 'Ogni kit è completo di n. 2 fermi ammortizzati per una chiusura frenata e silenziosa.' },
    ],
    immagini: {
      'Argento': [solovetroLightAmbienteCucina, solovetroLightDettaglio, solovetroLightEsploso],
    },
    varianti: [
      { codice: 'K.0281.5', finitura: 'Argento' },
    ],
  },
  {
    id: 77, categoria: '02',
    nome: 'Vetro 40',
    // Sistema brevettato configurabile su moltissimi assi (lunghezza binario,
    // tipo di pinza, fermi Fluid, spessore vetro, finitura, kit con/senza
    // copertura...): troppe combinazioni per un codice fisso a catalogo,
    // quindi niente varianti con SKU reali (richiesta esplicita del cliente).
    // Descrizione, immagini e scheda tecnica completa bastano a presentare
    // il prodotto; la configurazione esatta si valuta caso per caso.
    descrizione: 'Sistema di scorrevoli brevettato per ante in vetro senza forature: la pinza alta 40mm serra il bordo del vetro senza bisogno di praticare fori sulla lastra. Disponibile con pinza standard (Clamp 200) o con pinza lunga per ante più ampie, ed è configurabile con fermi ammortizzati Fluid opzionali (portata 80kg con corsa 70mm, oppure 120kg con corsa 50mm). Adatto a vetri monolitici o stratificati, con spessore 8-8,7, 10-10,7 o 12-12,7mm. Il binario in alluminio è disponibile in diverse lunghezze standard (da 600 a 1500mm), con o senza copertura, ed è estendibile con appositi kit per controtelai. Prodotto da Terno Scorrevoli in alluminio, finitura argento spazzolato anodizzato. Il sistema è molto modulare: la combinazione esatta di binario, pinza, fermi e accessori va valutata caso per caso in base alle tue esigenze — contattaci per individuare gli articoli giusti per la tua porta.',
    materiale: 'Alluminio',
    spessoriVetro: ['8', '8.7', '10', '10.7', '12', '12.7'],
    dimensioni: 'Pinza alta 40mm senza forature vetro · portata 80-120kg per anta secondo pinza e fermi · spessore vetro 8-8,7 / 10-10,7 / 12-12,7mm · binario da 600 a 1500mm',
    fornitore: 'Terno Scorrevoli', fornitoreLogo: ternoLogo,
    scheda: schedaUrl('vetro40-scheda-tecnica.pdf'),
    istruzioni: schedaUrl('vetro40-istruzioni-montaggio.pdf'),
    caratteristiche: [
      { titolo: 'Nessuna foratura sul vetro', testo: 'La pinza brevettata, alta 40mm, serra il bordo della lastra senza bisogno di praticare fori: l\'anta resta un vetro pulito e integro.' },
      { titolo: 'Due tipi di pinza', testo: 'Pinza standard Clamp 200 oppure pinza lunga (Long Clamp), per ante più ampie o più pesanti.' },
      { titolo: 'Fermi ammortizzati Fluid opzionali', testo: 'Portata 80kg con corsa 70mm, oppure 120kg con corsa 50mm, su cuscinetti a sfera, per una chiusura frenata e silenziosa.' },
      { titolo: 'Blocco di sicurezza', testo: 'Il sistema di aggancio del carrello include un blocco di sicurezza che impedisce lo sganciamento accidentale dell\'anta dal binario.' },
      { titolo: 'Binario configurabile', testo: 'Lunghezze standard da 600 a 1500mm, con o senza copertura, estendibile con kit dedicati per l\'installazione su controtelai.' },
      { titolo: 'Adatto a vetri monolitici e stratificati', testo: 'Compatibile con spessori vetro 8-8,7mm, 10-10,7mm e 12-12,7mm.' },
      { titolo: 'Un sistema su misura', testo: 'Vista la varietà di combinazioni possibili tra binario, pinza, fermi e accessori, scegliamo insieme gli articoli giusti in base alle tue esigenze: contattaci per la tua porta.' },
    ],
    immagini: {
      'Argento spazzolato': [vetro40AmbientePorteLegno, vetro40Dettaglio, vetro40Esploso],
    },
    varianti: [
      { codice: 'Su misura', finitura: 'Argento spazzolato' },
    ],
  },
  {
    id: 78, categoria: '02',
    nome: 'Vetro 40 Drag',
    // Come Vetro 40: troppe combinazioni possibili (configurazione a piu' ante,
    // spessore vetro, finitura) per un codice fisso a catalogo, quindi niente
    // varianti con SKU reali (richiesta esplicita del cliente).
    descrizione: 'Sistema di scorrevoli brevettato per porte in vetro a trascinamento manuale, con pinza ad altezza ridotta (solo 40mm) senza forature sulla lastra. La pinza è a tutta lunghezza e può essere tagliata a misura in cantiere. Il sistema integra i carrelli con tecnologia Fluid, per un movimento estremamente morbido in apertura e chiusura, ed è disponibile in configurazioni a più ante (fino a 4 ante, combinabili nelle configurazioni F-A-B-C). Adatto a vetri monolitici o stratificati, con spessore 8-8,7 o 10-10,7mm. Prodotto da Terno Scorrevoli in alluminio, finitura argento spazzolato anodizzato. Il sistema è molto modulare: la combinazione esatta di binario, pinza e configurazione ante va valutata caso per caso in base alle tue esigenze — contattaci per individuare gli articoli giusti per la tua porta.',
    materiale: 'Alluminio',
    spessoriVetro: ['8', '8.7', '10', '10.7'],
    dimensioni: 'Pinza alta 40mm senza forature vetro, tagliabile a misura · portata 80kg per anta · spessore vetro 8-8,7 / 10-10,7mm',
    fornitore: 'Terno Scorrevoli', fornitoreLogo: ternoLogo,
    scheda: schedaUrl('vetro40drag-scheda-tecnica.pdf'),
    istruzioni: schedaUrl('vetro40drag-istruzioni-montaggio.pdf'),
    caratteristiche: [
      { titolo: 'Nessuna foratura sul vetro', testo: 'La pinza brevettata, alta 40mm, serra il bordo della lastra senza bisogno di praticare fori.' },
      { titolo: 'Pinza tagliabile a misura', testo: 'La pinza a tutta lunghezza si taglia a misura direttamente in cantiere, in base alla larghezza dell\'anta.' },
      { titolo: 'Carrelli con tecnologia Fluid', testo: 'Il movimento risulta estremamente morbido, sia in apertura che in chiusura, su cuscinetti a sfera.' },
      { titolo: 'Porte a trascinamento a più ante', testo: 'Configurazioni combinabili fino a 4 ante (F-A-B-C), per porte a trascinamento manuale con più elementi scorrevoli.' },
      { titolo: 'Adatto a vetri monolitici e stratificati', testo: 'Compatibile con spessori vetro 8-8,7mm e 10-10,7mm.' },
      { titolo: 'Un sistema su misura', testo: 'Vista la varietà di combinazioni possibili tra binario, pinza e configurazione ante, scegliamo insieme gli articoli giusti in base alle tue esigenze: contattaci per la tua porta.' },
    ],
    immagini: {
      'Argento spazzolato': [vetro40dragAmbienteUfficio, vetro40dragDettaglio, vetro40dragEsploso],
    },
    varianti: [
      { codice: 'Su misura', finitura: 'Argento spazzolato' },
    ],
  },
  {
    id: 80, categoria: '05',
    nome: 'Grid',
    // Sistema completamente su misura: non esiste un kit a catalogo, gli
    // articoli vengono definiti da Terno sul progetto del cliente. Niente
    // codici nelle varianti (richiesta esplicita del cliente).
    descrizione: 'Sistema modulare di profili in alluminio per realizzare pareti e partizioni attrezzate: cabine armadio, uffici, spazi retail e zone giorno, con altezza fino a 3 metri. La struttura è composta da pali cremagliera, ai quali si agganciano mensole, ripiani, aste appendiabiti, porta pantaloni, porta scarpe, porta cravatte e cassettiere lungo tutta l\'altezza, e da tratte con pannellatura in vetro o in legno, con angoli a L e a T per chiudere l\'ambiente su più lati. Nella stessa struttura si integrano la porta a battente Pivot, con apertura fino a 180°, e la porta scorrevole Universal. Il modulo standard attrezzabile è da 900mm, ma le tratte sono di misura variabile. È inoltre un sistema aperto: oltre ai moduli a catalogo se ne possono realizzare di propri, rispettando le specifiche costruttive dei manuali tecnici. Attenzione: Grid non è un kit a catalogo — il sistema, cioè l\'elenco degli articoli necessari, viene sviluppato su richiesta a partire dai disegni del cliente. Inviaci il progetto o le misure del tuo ambiente e prepariamo insieme la configurazione. Prodotto da Terno Scorrevoli in alluminio.',
    materiale: 'Alluminio',
    dimensioni: 'Altezza fino a 3 metri · modulo standard attrezzabile 900mm · tratte di misura variabile · pannellatura in vetro o legno · partenze a muro, angoli a L e a T, pali cremagliera e pali terminali',
    fornitore: 'Terno Scorrevoli', fornitoreLogo: ternoLogo,
    scheda: schedaUrl('grid-scheda-tecnica.pdf'),
    istruzioni: schedaUrl('grid-istruzioni-montaggio.pdf'),
    caratteristiche: [
      { titolo: 'Sviluppato sui tuoi disegni', testo: 'Grid non è un kit a catalogo: gli articoli necessari vengono definiti caso per caso, su richiesta, a partire dai disegni o dalle misure dell\'ambiente. Anche la finitura si sceglie in fase di progetto, tra quelle disponibili. Contattaci con il tuo progetto e prepariamo insieme la configurazione.' },
      { titolo: 'Parete attrezzabile', testo: 'I pali cremagliera permettono di agganciare mensole, ripiani, aste appendiabiti, porta pantaloni, porta scarpe, porta cravatte e cassettiere lungo tutta l\'altezza, e di riposizionarli anche in un secondo momento.' },
      { titolo: 'Composizione modulare', testo: 'Partenze a muro, tratte fisse, angoli a L e a T, pali di giunzione accessoriabili e pali terminali: la parete si chiude su più lati seguendo la pianta dell\'ambiente, fino a 3 metri di altezza.' },
      { titolo: 'Pannellature in vetro o in legno', testo: 'La struttura in alluminio si abbina a pannellature in vetro o in legno, a seconda delle esigenze del progetto: con il vetro l\'ambiente resta luminoso e si sfrutta più a lungo la luce naturale.' },
      { titolo: 'Porte integrate nella struttura', testo: 'La stessa struttura ospita la porta a battente Pivot, con cerniera ad asse decentrato e apertura fino a 180°, e la porta scorrevole Universal, senza bisogno di telai aggiuntivi.' },
      { titolo: 'Un sistema aperto', testo: 'Oltre ai moduli già a catalogo, progettisti e costruttori possono realizzare moduli propri rispettando le specifiche costruttive dei manuali tecnici.' },
    ],
    // La finitura non la dichiariamo: il sistema ne prevede diverse e la
    // sceglie il cliente insieme al resto della configurazione. La chiave
    // 'Unica' serve solo a tenere insieme la galleria, non viene mai mostrata.
    senzaFinitura: true,
    immagini: {
      'Unica': [gridAmbienteCabina, gridPortaUniversal, gridComponenti],
    },
    varianti: [
      { codice: 'Su misura', finitura: 'Unica' },
    ],
  },
  {
    id: 79, categoria: '05',
    nome: 'Vetro Fisso',
    // Sistema di profili componibili con moltissime combinazioni (altezza
    // profilo, spessore vetro, tipo di giunzione): troppe combinazioni per
    // un codice fisso a catalogo, quindi niente varianti con SKU reali
    // (richiesta esplicita del cliente).
    descrizione: 'Sistema di profili e accessori in alluminio per la realizzazione di vetrate fisse e vani fissi, per pareti e partizioni in vetro. Disponibile in due altezze di profilo (27mm e 30mm), per vetri con spessore da 8-8,7 a 12-12,7mm. Comprende anche una linea di profili con adesivo per la giunzione diretta vetro su vetro, senza telaio in alluminio a vista: giunti lineari, a T e ad angolo, per spessori vetro da 10 a 12,7mm. Prodotto da Terno Scorrevoli in alluminio, finitura argento anodizzato. Il sistema è molto modulare: la combinazione esatta di profili e giunzioni va valutata caso per caso in base alla tua vetrata — contattaci per individuare gli articoli giusti per il tuo progetto.',
    materiale: 'Alluminio',
    spessoriVetro: ['8', '8.7', '10', '10.7', '12', '12.7'],
    dimensioni: 'Profili fissavetro altezza 27 o 30mm · profili adesivi per vetro 10-12,7mm · spessore vetro 8-8,7 / 10-10,7 / 12-12,7mm',
    fornitore: 'Terno Scorrevoli', fornitoreLogo: ternoLogo,
    scheda: schedaUrl('vetrofisso-scheda-tecnica.pdf'),
    caratteristiche: [
      { titolo: 'Due altezze di profilo', testo: 'Profili fissavetro disponibili in altezza 27mm o 30mm, per vetri con spessore da 8-8,7 a 12-12,7mm.' },
      { titolo: 'Giunzioni vetro su vetro', testo: 'Profili con adesivo per unire i pannelli direttamente vetro su vetro, senza telaio in alluminio a vista: giunti lineari, a T e ad angolo.' },
      { titolo: 'Adatto a vetrate e compartimentazioni', testo: 'Pensato per realizzare pareti fisse in vetro e vani fissi in ambienti ufficio e open space.' },
      { titolo: 'Un sistema su misura', testo: 'Vista la varietà di combinazioni possibili tra profili, altezze e giunzioni, scegliamo insieme gli articoli giusti in base alla tua vetrata: contattaci per il tuo progetto.' },
    ],
    immagini: {
      'Argento': [vetrofissoAmbienteUfficio, vetrofissoDettaglio, vetrofissoEsploso],
    },
    varianti: [
      { codice: 'Su misura', finitura: 'Argento' },
    ],
  },
  {
    id: 81, categoria: '06',
    nome: 'Clear',
    // Il catalogo Terno prevede anche il binario da 3000mm e vende il binario
    // a parte (blister B.0412/B.0413): noi lo trattiamo come un kit unico con
    // il binario da 2000mm, che e' l'unica versione che teniamo, nelle due
    // finiture che ci ha confermato il cliente (brill .07 e nero .15).
    descrizione: 'Sistema scorrevole studiato appositamente per i box doccia, con cuscinetti in acciaio inox che lo rendono estremamente resistente all\'umidità e all\'uso quotidiano. È un sistema molto versatile: permette la posa in nicchia (configurazione parete-parete), la posa in luce (vetro-vetro) e la posa ad angolo (parete-vetro). Adatto a vetri con spessore 8-8,7 o 10-10,7mm, con portata 40kg e larghezza anta fino a 1000mm. Lo forniamo come kit unico completo di binario da 2000mm, in 2 finiture: alluminio lucido (brill) e nero. Prodotto da Terno Scorrevoli in alluminio con cuscinetti in acciaio inox.',
    materiale: 'Alluminio e acciaio inox',
    spessoriVetro: ['8', '8.7', '10', '10.7'],
    dimensioni: 'Binario 2000mm · portata 40kg per anta · larghezza anta max 1000mm · spessore vetro 8-8,7 / 10-10,7mm',
    fornitore: 'Terno Scorrevoli', fornitoreLogo: ternoLogo,
    scheda: schedaUrl('clear-scheda-tecnica.pdf'),
    istruzioni: schedaUrl('clear-istruzioni-montaggio.pdf'),
    video: 'https://www.youtube.com/watch?v=9GCIVxI6tkI',
    caratteristiche: [
      { titolo: 'Nato per il box doccia', testo: 'I cuscinetti sono realizzati in acciaio inox: il sistema regge l\'umidità e l\'uso quotidiano del bagno senza perdere scorrevolezza.' },
      { titolo: 'Tre configurazioni di posa', testo: 'Posa in nicchia (parete-parete), posa in luce (vetro-vetro) e posa ad angolo (parete-vetro), con lo stesso kit.' },
      { titolo: 'Kit completo di binario', testo: 'Lo forniamo già completo del binario da 2000mm: un solo articolo, senza dover ordinare il binario a parte.' },
      { titolo: 'Adatto a due spessori di vetro', testo: 'Compatibile con vetri da 8-8,7mm e da 10-10,7mm, con i profili di tenuta dedicati per ciascuno spessore.' },
      { titolo: 'Portata 40kg', testo: 'Ogni anta può pesare fino a 40kg, con larghezza massima 1000mm.' },
      { titolo: 'Video tutorial di montaggio', testo: 'Oltre alle istruzioni in PDF trovi il video ufficiale Terno Scorrevoli che mostra passo passo il montaggio del sistema.' },
    ],
    immagini: {
      'Alluminio lucido': [clearAmbienteBagno, clearDettaglio, clearEsploso],
      'Nero spazzolato': [clearAmbienteBagno, clearDettaglio, clearEsploso],
    },
    varianti: [
      { codice: 'K.0411.4.07', finitura: 'Alluminio lucido' },
      { codice: 'K.0411.4.15', finitura: 'Nero spazzolato' },
    ],
  },
  {
    id: 82, categoria: '06',
    nome: 'Guarnizione a palloncino',
    // Tavola della serie "400" di Tràfilo: la stessa pagina presenta gli art.
    // 401-408. Noi teniamo solo il 401, trasparente, in aste da 2500mm, che
    // internamente e' l'art. 401.2500.
    descrizione: 'Guarnizione a palloncino per box doccia, in PVC coestruso: il profilo si innesta a scatto sul bordo del vetro e il palloncino tondo sotto fa da battuta e tenuta contro il piatto doccia o l\'anta a fianco. Adatta a vetro da 6 a 8 mm di spessore. Profilo alto 13mm, palloncino Ø6,5mm. La forniamo trasparente, in aste da 2500mm da tagliare a misura. Prodotta da Tràfilo, serie 400.',
    materiale: 'PVC coestruso',
    spessoriVetro: ['6', '8'],
    dimensioni: 'Asta da 2500mm · profilo alto 13mm · palloncino Ø6,5mm · spessore vetro 6-8mm',
    fornitore: 'Tràfilo', fornitoreLogo: trafiloLogo,
    scheda: schedaUrl('trafilo-serie-400-scheda-tecnica.pdf'),
    immagini: {
      'Trasparente': [guarnizionePalloncinoQuote],
    },
    varianti: [
      { codice: '401.2500', finitura: 'Trasparente' },
    ],
  },
  {
    id: 83, categoria: '06',
    nome: 'Guarnizione doppia pinna',
    // Art. 402 della stessa tavola serie "400": per noi art. 402.2500.
    descrizione: 'Guarnizione a doppia pinna per box doccia, in PVC coestruso: il profilo si innesta a scatto sul bordo del vetro e sotto porta due pinne, una diritta da 12mm e una inclinata da 10mm, che fanno tenuta contro il piatto doccia o l\'anta a fianco. Adatta a vetro da 6 a 8 mm di spessore. Profilo alto 13mm. La forniamo trasparente, in aste da 2500mm da tagliare a misura. Prodotta da Tràfilo, serie 400.',
    materiale: 'PVC coestruso',
    spessoriVetro: ['6', '8'],
    dimensioni: 'Asta da 2500mm · profilo alto 13mm · pinne da 12 e 10mm · spessore vetro 6-8mm',
    fornitore: 'Tràfilo', fornitoreLogo: trafiloLogo,
    scheda: schedaUrl('trafilo-serie-400-scheda-tecnica.pdf'),
    immagini: {
      'Trasparente': [guarnizioneDoppiaPinnaQuote],
    },
    varianti: [
      { codice: '402.2500', finitura: 'Trasparente' },
    ],
  },
  {
    id: 61, categoria: '04', sottocategoria: 'maniglie-scorrevoli',
    nome: 'Maniglia ad incasso tonda per porta scorrevole',
    // Non esiste una scheda tecnica del singolo articolo: la scheda allegata
    // e' stata ricostruita da noi con le misure ricavate dal catalogo Fimet
    // "Accessori per vetro" (sezione vetro), su richiesta del cliente.
    descrizione: 'Maniglia a incasso tonda per porta scorrevole in vetro, in acciaio inox, finitura satinata. Foro nel vetro Ø40mm. Prodotta da Fimet.',
    materiale: 'Acciaio inox',
    dimensioni: 'Ø59mm · profondità 32mm · foro vetro Ø40mm',
    fornitore: 'Fimet', fornitoreLogo: fimetLogo,
    scheda: schedaUrl('fimet-3904-scheda-tecnica.pdf'),
    immagini: {
      'Acciaio inox satinato': [fimet3904],
    },
    varianti: [
      { codice: '3904', finitura: 'Acciaio inox satinato' },
    ],
  },
  {
    id: 62, categoria: '04', sottocategoria: 'maniglie-scorrevoli',
    nome: 'Maniglia ad incasso quadra per porta scorrevole',
    // Non esiste una scheda tecnica del singolo articolo: la scheda allegata
    // e' stata ricostruita da noi con le misure ricavate dal catalogo Fimet
    // "Accessori per vetro" (sezione vetro), su richiesta del cliente.
    descrizione: 'Maniglia a incasso quadra per porta scorrevole in vetro, in acciaio inox, finitura satinata. Foro nel vetro Ø18mm. Prodotta da Fimet.',
    materiale: 'Acciaio inox',
    dimensioni: '52×52mm · profondità 30mm · foro vetro Ø18mm',
    fornitore: 'Fimet', fornitoreLogo: fimetLogo,
    scheda: schedaUrl('fimet-3921-scheda-tecnica.pdf'),
    immagini: {
      'Acciaio inox satinato': [fimet3921],
    },
    varianti: [
      { codice: '3921', finitura: 'Acciaio inox satinato' },
    ],
  },
  {
    id: 63, categoria: '04', sottocategoria: 'maniglioni',
    nome: 'Coppia maniglioni adesivi per porte in vetro',
    // Non esiste una scheda tecnica del singolo articolo: la scheda allegata
    // e' stata ricostruita da noi con le misure ricavate dal catalogo Fimet
    // "Accessori per vetro" (sezione vetro), su richiesta del cliente.
    descrizione: 'Coppia di maniglioni per porte in vetro in alluminio, ad applicazione adesiva: si fissano direttamente sul vetro con biadesivo 3M, senza dover forare la lastra. Montaggio rapido, profilo quadro 11×18mm. Disponibili in due lunghezze e nelle finiture argento e nero opaco. Prodotti da Fimet.',
    materiale: 'Alluminio',
    dimensioni: 'Sezione 11×18mm · lunghezze 300mm e 700mm',
    fornitore: 'Fimet', fornitoreLogo: fimetLogo,
    scheda: schedaUrl('fimet-maniglione-adesivo-scheda-tecnica.pdf'),
    assi: [
      { chiave: 'lunghezza', etichetta: 'Lunghezza', suffisso: ' mm' },
    ],
    immagini: {
      'Argento': [fimetManiglioneArgento],
      'Nero opaco': [fimetManiglioneNero],
    },
    varianti: [
      { codice: '805300128', finitura: 'Argento', lunghezza: 300 },
      { codice: '805700128', finitura: 'Argento', lunghezza: 700 },
      { codice: '805300NO', finitura: 'Nero opaco', lunghezza: 300 },
      { codice: '805700NO', finitura: 'Nero opaco', lunghezza: 700 },
    ],
  },
  {
    id: 64, categoria: '04', sottocategoria: 'maniglie-scorrevoli',
    nome: 'Nicchia adesiva quadra per porta scorrevole',
    // Non esiste una scheda tecnica del singolo articolo: la scheda allegata
    // e' stata ricostruita da noi con le misure ricavate dal catalogo Fimet
    // "Accessori per vetro" (sezione vetro), su richiesta del cliente.
    descrizione: 'Nicchia a incasso quadra per porta scorrevole in vetro, in alluminio, ad applicazione adesiva: si fissa direttamente sul vetro con biadesivo 3M, senza dover forare la lastra. Montaggio rapido. Disponibile in finitura argento e nero opaco. Prodotta da Fimet.',
    materiale: 'Alluminio',
    dimensioni: '58×58mm · altezza 9mm',
    fornitore: 'Fimet', fornitoreLogo: fimetLogo,
    scheda: schedaUrl('fimet-3931-scheda-tecnica.pdf'),
    immagini: {
      'Argento': [fimet3931Argento],
      'Nero opaco': [fimet3931Nero],
    },
    varianti: [
      { codice: '3931', finitura: 'Argento' },
      { codice: '3931NO', finitura: 'Nero opaco' },
    ],
  },
  {
    id: 65, categoria: '04', sottocategoria: 'maniglie-scorrevoli',
    nome: 'Nicchia adesiva rettangolare per porta scorrevole',
    // Non esiste una scheda tecnica del singolo articolo: la scheda allegata
    // e' stata ricostruita da noi con le misure ricavate dal catalogo Fimet
    // "Accessori per vetro" (sezione vetro), su richiesta del cliente.
    descrizione: 'Nicchia a incasso rettangolare per porta scorrevole in vetro, in alluminio, ad applicazione adesiva: si fissa direttamente sul vetro con biadesivo 3M, senza dover forare la lastra. Montaggio rapido. Disponibile in finitura argento e nero opaco. Prodotta da Fimet.',
    materiale: 'Alluminio',
    dimensioni: '58×115mm · altezza 9mm',
    fornitore: 'Fimet', fornitoreLogo: fimetLogo,
    scheda: schedaUrl('fimet-3932-scheda-tecnica.pdf'),
    immagini: {
      'Argento': [fimet3932Argento],
      'Nero opaco': [fimet3932Nero],
    },
    varianti: [
      { codice: '3932', finitura: 'Argento' },
      { codice: '3932NO', finitura: 'Nero opaco' },
    ],
  },
  {
    id: 66, categoria: '04', sottocategoria: 'maniglie-scorrevoli',
    nome: 'Nicchia adesiva tonda per porta scorrevole',
    // Non esiste una scheda tecnica del singolo articolo: la scheda allegata
    // e' stata ricostruita da noi con le misure ricavate dal catalogo Fimet
    // "Accessori per vetro" (sezione vetro), su richiesta del cliente.
    descrizione: 'Nicchia a incasso tonda per porta scorrevole in vetro, in alluminio, ad applicazione adesiva: si fissa direttamente sul vetro con biadesivo 3M, senza dover forare la lastra. Montaggio rapido. Disponibile in finitura argento, nero opaco e bianco opaco. Prodotta da Fimet.',
    materiale: 'Alluminio',
    dimensioni: 'Ø60mm · altezza 10mm',
    fornitore: 'Fimet', fornitoreLogo: fimetLogo,
    scheda: schedaUrl('fimet-3933-scheda-tecnica.pdf'),
    immagini: {
      'Argento': [fimet3933Argento],
      'Nero opaco': [fimet3933Nero],
    },
    varianti: [
      { codice: '3933', finitura: 'Argento' },
      { codice: '3933NO', finitura: 'Nero opaco' },
      { codice: '3933BO', finitura: 'Bianco opaco' },
    ],
  },
  {
    id: 67, categoria: '04', sottocategoria: 'maniglioni',
    nome: 'Brasile 852',
    descrizione: 'Maniglione a doppia barra parallela per porte in vetro, sezione quadra 25×38mm, in acciaio inox AISI304. Foro nel vetro Ø16mm, perno con uscita 28mm, per lastre di spessore 8/12mm. Fornito completo di pozzetto a molla 60×22mm. Disponibile nelle finiture inox satinato (F60) e nero opaco RAL9005 (FNO). Prodotto da Fimet.',
    materiale: 'Acciaio inox AISI304',
    dimensioni: 'Sezione 25×38mm · lunghezza 1250mm · interasse 1000mm · foro vetro Ø16mm',
    fornitore: 'Fimet', fornitoreLogo: fimetLogo,
    scheda: schedaUrl('fimet-brasile-852-scheda-tecnica.pdf'),
    immagini: {
      'Acciaio inox satinato': [fimetBrasileInox],
      'Nero opaco': [fimetBrasileNero],
    },
    varianti: [
      { codice: '852.2538.1250.1000.60', finitura: 'Acciaio inox satinato' },
      { codice: '852.2538.1250.1000.NO', finitura: 'Nero opaco' },
    ],
  },
  {
    id: 68, categoria: '04', sottocategoria: 'maniglioni',
    nome: 'Equador 850',
    descrizione: 'Maniglione a doppia barra parallela con serratura a chiave integrata, per porte in vetro, profilo tondo Ø35mm, in acciaio inox AISI304. Foro nel vetro Ø16mm, perno con uscita 28mm, per lastre di spessore 8/12mm. Fornito completo di pozzetto a molla 60×22mm. Disponibile nelle finiture inox satinato (F60), inox lucido (F61) e nero opaco RAL9005 (FNO). Prodotto da Fimet.',
    materiale: 'Acciaio inox AISI304',
    dimensioni: 'Ø35mm · lunghezza 1250mm · interasse 1000mm · foro vetro Ø16mm',
    fornitore: 'Fimet', fornitoreLogo: fimetLogo,
    scheda: schedaUrl('fimet-equador-850-scheda-tecnica.pdf'),
    immagini: {
      'Acciaio inox satinato': [fimetEquadorInoxSatinato],
      'Inox lucido': [fimetEquadorInoxLucido],
      'Nero opaco': [fimetEquadorNero],
    },
    varianti: [
      { codice: '850.35.1250.1000.60', finitura: 'Acciaio inox satinato' },
      { codice: '850.35.1250.1000.61', finitura: 'Inox lucido' },
      { codice: '850.35.1250.1000.NO', finitura: 'Nero opaco' },
    ],
  },
  /* I quattro kit di fissaggio qui sotto vengono dalla tavola "Accessori di
     montaggio" del catalogo Fimet. Tutte le quote sono quelle del disegno, che
     e' allegato per intero nella galleria; materiale e finitura invece la
     tavola non li riporta e ce li ha confermati il cliente: acciaio inox
     satinato, come i maniglioni a cui i kit si abbinano. */
  {
    id: 70, categoria: '04', sottocategoria: 'maniglioni',
    nome: 'Kit fissaggio passante FISS 03',
    descrizione: 'Kit di fissaggio passante per maniglione singolo, per porte in legno, alluminio e vetro. La barra filettata attraversa l’anta da parte a parte e si avvita nel supporto del maniglione. Foro nell’anta Ø9mm su legno e alluminio, Ø13mm sul vetro: sulle porte in vetro si montano le bussole Ø12 H10 con foro 8,2mm, che isolano la barra dalla lastra. Il kit comprende le barre filettate M8×110 e M8×30, le molle, le bussole e i distanziali tondi Ø28mm da 8mm di spessore. In acciaio inox satinato, come i maniglioni a cui si abbina. Prodotto da Fimet.',
    materiale: 'Acciaio inox',
    dimensioni: 'Foro legno e alluminio Ø9mm · foro vetro Ø13mm · bussole Ø12 H10 con foro 8,2mm · barre filettate M8×110 e M8×30 · distanziali Ø28mm spessore 8mm',
    fornitore: 'Fimet', fornitoreLogo: fimetLogo,
    immagini: {
      'Acciaio inox satinato': [fimetFiss03, fimetFiss03Fori, fimetFiss03Componenti, fimetFiss03Montaggio],
    },
    varianti: [
      { codice: 'FISS 03', finitura: 'Acciaio inox satinato' },
    ],
  },
  {
    id: 71, categoria: '04', sottocategoria: 'maniglioni',
    nome: 'Kit fissaggio singolo M6 FISS 05M6',
    descrizione: 'Kit di fissaggio singolo M6 per maniglioni su porte in vetro. La vite a testa tonda passa nel foro della lastra e si avvita nel supporto del maniglione. Foro nel vetro Ø13mm, con bussole Ø12 H10 e foro 8,2mm a protezione della lastra. Vite con testa Ø20mm da 3mm di spessore e gambo filettato M6 lungo 26mm. In acciaio inox satinato, come i maniglioni a cui si abbina. Prodotto da Fimet.',
    materiale: 'Acciaio inox',
    dimensioni: 'Foro vetro Ø13mm · bussole Ø12 H10 con foro 8,2mm · vite testa Ø20mm spessore 3mm · filetto M6 lunghezza 26mm',
    fornitore: 'Fimet', fornitoreLogo: fimetLogo,
    immagini: {
      'Acciaio inox satinato': [fimetFiss05m6, fimetFiss05m6Foro, fimetFiss05m6Vite, fimetFiss05m6Montaggio],
    },
    varianti: [
      { codice: 'FISS 05M6', finitura: 'Acciaio inox satinato' },
    ],
  },
  {
    id: 72, categoria: '04', sottocategoria: 'maniglioni',
    nome: 'Kit fissaggio con rosetta tonda FISS 06',
    descrizione: 'Kit di fissaggio singolo con rosetta tonda e piastrina, per maniglioni con supporto tondo diritto. La piastrina si fissa con viti sull’anta e porta il perno filettato M8 su cui si avvita il supporto del maniglione; la rosetta tonda Ø50mm copre poi il fissaggio a montaggio finito. Perno M8 con sporgenza 26mm. Nel disegno di montaggio l’applicazione è su porta in legno. In acciaio inox satinato, come i maniglioni a cui si abbina. Prodotto da Fimet.',
    materiale: 'Acciaio inox',
    dimensioni: 'Rosetta tonda Ø50mm · perno filettato M8 · sporgenza 26mm',
    fornitore: 'Fimet', fornitoreLogo: fimetLogo,
    immagini: {
      'Acciaio inox satinato': [fimetFiss06, fimetFiss06Componenti, fimetFiss06Montaggio],
    },
    varianti: [
      { codice: 'FISS 06', finitura: 'Acciaio inox satinato' },
    ],
  },
  {
    id: 73, categoria: '04', sottocategoria: 'maniglioni',
    nome: 'Kit fissaggio con rosetta quadra FISS 07',
    descrizione: 'Kit di fissaggio singolo con rosetta quadra e piastrina, per maniglioni con supporto quadro diritto. La piastrina si fissa con viti sull’anta e porta il perno filettato M8 su cui si avvita il supporto del maniglione; la rosetta quadra 50×50mm copre poi il fissaggio a montaggio finito. Perno M8 con sporgenza 26mm. Nel disegno di montaggio l’applicazione è su porta in legno. In acciaio inox satinato, come i maniglioni a cui si abbina. Prodotto da Fimet.',
    materiale: 'Acciaio inox',
    dimensioni: 'Rosetta quadra 50×50mm · perno filettato M8 · sporgenza 26mm',
    fornitore: 'Fimet', fornitoreLogo: fimetLogo,
    immagini: {
      'Acciaio inox satinato': [fimetFiss07, fimetFiss07Componenti, fimetFiss07Montaggio],
    },
    varianti: [
      { codice: 'FISS 07', finitura: 'Acciaio inox satinato' },
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
    // Stessa linea AirDoor: la maniglia con cui la cerniera si abbina.
    facoltativi: [69],
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
  74: schRa462,
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
  55: { '2574008': schParis, '783748': schParisNero },
  48: schMorsettoM022,
  49: schMorsettoM012,
  50: schMorsettoM032042,
  51: schMorsettoM042042,
  52: schMorsettoM062042,
  43: schFs880,
  44: schFs890,
  45: schGaha1st,
  46: schAirhinge, 69: schAirhandle,
  58: schMagic2Vetro,
  59: schMagic2Frame,
  60: schUniversal,
  75: schSolovetro,
  76: schSolovetroLight,
  77: schVetro40,
  78: schVetro40drag,
  79: schVetrofisso,
  80: schGrid,
  81: schClear,
  82: schTrafilo400,
  83: schTrafilo400,
  61: schFimet3904,
  62: schFimet3921,
  63: schFimetManiglione,
  64: schFimet3931,
  65: schFimet3932,
  66: schFimet3933,
  67: schFimetBrasile,
  68: schFimetEquador,
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
  // Alluminio anodizzato lucido: la finitura che Terno chiama "Brill" (suffisso 07).
  'Alluminio lucido': 'linear-gradient(135deg,#fbfcfd,#d2d7da 30%,#8b9298 50%,#dadee0 68%,#fafbfc)',
  // PVC trasparente: appena velato, con il riflesso del vetro.
  'Trasparente': 'linear-gradient(135deg,#ffffff,#eef5f6 34%,#d9e7e9 55%,#f2f8f9 76%,#ffffff)',
  'Oro lucido': 'linear-gradient(135deg,#ffe9a3,#e6b83f 30%,#a9791d 50%,#e9c05a 68%,#ffefb0)',
  'Simil inox': 'linear-gradient(135deg,#f6f8f9,#c3c9ce 32%,#7f878e 50%,#c9ced2 68%,#f1f3f5)',
  'Argento spazzolato': 'linear-gradient(135deg,#e6e9ec,#b7bdc2 42%,#d3d8db 55%,#a7adb2)',
  'Nero spazzolato': 'linear-gradient(135deg,#3d3d40,#232325 60%,#2f2f31)',
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
  // I prodotti senza finitura (senzaFinitura: la sceglie il cliente, non la
  // dichiariamo noi) restano fuori sia dall'elenco delle finiture sia dal filtro.
  const fins = useMemo(() => [...new Set(products.filter(p => !p.senzaFinitura).flatMap(p => p.varianti.map(v => v.finitura)))].sort((a, b) => a.localeCompare(b, 'it')), [products]);
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
    const okF = salta === 'fin' || !fin.length || (!p.senzaFinitura && p.varianti.some(v => fin.includes(v.finitura)));
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
                  test={(p, o) => !p.senzaFinitura && p.varianti.some(v => v.finitura === o)} tutti="Tutte le finiture" plurale="finiture" />
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
  // Prodotti su misura in cui la finitura la sceglie il cliente: non ne
  // dichiariamo nessuna, quindi pastiglia e colonna finitura spariscono.
  const senzaFin = !!p.senzaFinitura;
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
        {senzaFin ? null : sceltaFin ? (
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
              <thead><tr><th>Codice articolo</th>{!senzaFin && <th>Finitura</th>}{colMat && <th>Materiale</th>}
                {assi && assi.map(a => <th key={a.chiave} className="ver">{a.etichetta}</th>)}
              </tr></thead>
              <tbody>
                {p.varianti.map((v, i) => (
                  <tr key={i} className={`${sceltaFin ? 'vrow' : ''}${sceltaFin && v.finitura === selFin ? ' active' : ''}`}
                    onClick={sceltaFin ? () => setSelFin(v.finitura) : undefined}>
                    <td className="code">{v.codice}</td>
                    {!senzaFin && <td><span className="fin-cell"><Chip finitura={v.finitura} />{v.finitura}</span></td>}
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
  const senzaFin = !!p.senzaFinitura;
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
              {!senzaFin && <div className="media-cap"><Chip finitura={selFin} /><span>{selFin}</span></div>}
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

            {!senzaFin && <div className="finishes pdp-finishes">
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
            </div>}

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
              {/* Video tutorial di montaggio: presente solo per gli articoli che
                  ne hanno uno. Puo' essere un solo link oppure piu' video con
                  etichetta, quando il montaggio cambia da versione a versione. */}
              {p.video && (Array.isArray(p.video) ? p.video : [{ url: p.video }]).map((v, i) => (
                <a className="scheda" key={i} href={v.url} target="_blank" rel="noopener">
                  <PlayCircle size={15} /> {v.etichetta ? `Video montaggio · ${v.etichetta}` : 'Video tutorial montaggio'}
                </a>
              ))}
              {/* Istruzioni di montaggio in PDF: un documento a parte dalla scheda
                  tecnica, presente solo per gli articoli che ce l'hanno. */}
              {p.istruzioni && (
                <a className="scheda" href={p.istruzioni} target="_blank" rel="noopener">
                  <Download size={15} /> Istruzioni di montaggio
                </a>
              )}
            </div>

            <div className="pdp-variants">
              <h3>Varianti disponibili ({p.varianti.length})</h3>
              <div className="variants-scroll">
              <table className="variants">
                <thead><tr><th>Codice articolo</th>{!senzaFin && <th>Finitura</th>}{colMat && <th>Materiale</th>}
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
                      {!senzaFin && <td><span className="fin-cell"><Chip finitura={v.finitura} />{v.finitura}</span></td>}
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
        </div>

        {p.descrizione && (
          <SezioneTendina title="Descrizione" aperta>
            <p className="rel-testo">{p.descrizione}</p>
          </SezioneTendina>
        )}
        {p.caratteristiche && p.caratteristiche.length > 0 && (
          <SezioneTendina title="Caratteristiche">
            <dl className="carat-list">
              {p.caratteristiche.map((c, i) => (
                <div className="carat-item" key={i}>
                  <dt className="carat-title">{c.titolo}</dt>
                  <dd className="carat-text">{c.testo}</dd>
                </div>
              ))}
            </dl>
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
      // Prodotti con una scheda per variante (es. il distanziale, una per
      // lunghezza): titolo e nome del file dicono quale si sta guardando,
      // altrimenti le schede scaricate sono tutte uguali e non si distinguono.
      const perVariante = p.scheda && typeof p.scheda === 'object' && p.scheda[key] !== undefined;
      setItem({ src, title: p.nome, ver: perVariante ? key : null, pdf: pickScheda(p.scheda, key) });
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
        <span className="sheet-title">Scheda tecnica · {item.title}{item.ver ? ' · ' + item.ver : ''}</span>
        <span className="sheet-actions">
          {item.pdf && <a className="sheet-dl" href={item.pdf} download={`scheda-tecnica-${item.title}${item.ver ? '-' + item.ver : ''}.pdf`} target="_blank" rel="noopener">Scarica PDF</a>}
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
