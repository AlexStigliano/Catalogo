import React, { useState, useEffect, useMemo } from 'react';
import { Heart, Search, ArrowRight, ChevronRight, ChevronLeft, ChevronDown, Download, SlidersHorizontal } from 'lucide-react';
import './Catalogo.css';
import logo from './assets/logo-stigliano.png';
import logoCover from './assets/logo-stigliano-cover.png';
import fimetLogo from './assets/fimet-logo.png';
import italineaLogo from './assets/italinea-logo.svg';
import formeLogo from './assets/forme-logo.svg';
import adtechLogo from './assets/adtech-logo.png';
import arieniLogo from './assets/arieni-logo.svg';
import sirioCromoSat from './assets/prodotti/sirio-cromo-satinato.jpg';
import sirioBicolore from './assets/prodotti/sirio-bicolore.jpg';
import lineacaliLogo from './assets/lineacali-logo.svg';
import trioCromoSat from './assets/prodotti/trio-cromo-satinato.jpg';
import trioCromoLuc from './assets/prodotti/trio-cromo-lucido.jpg';
import trioNeroOpaco from './assets/prodotti/trio-nero-opaco.jpg';
import aliciaCromoSat from './assets/prodotti/alicia-cromo-satinato.jpg';
import aliciaOttoneSat from './assets/prodotti/alicia-ottone-satinato.jpg';
import puntoCromoSat from './assets/prodotti/punto-cromo-satinato.jpg';
import puntoNeroOpaco from './assets/prodotti/punto-nero-opaco.jpg';
import gocciaCromoSat from './assets/prodotti/goccia-cromo-satinato.jpg';
import gocciaCromoLuc from './assets/prodotti/goccia-cromo-lucido.jpg';
import gocciaOttoneLuc from './assets/prodotti/goccia-ottone-lucido.jpg';
import quadraCromoSat from './assets/prodotti/quadra-cromo-satinato.jpg';
import quadraCromoLuc from './assets/prodotti/quadra-cromo-lucido.jpg';
import angoloOroSat from './assets/prodotti/angolo-oro-satinato.jpg';
import angoloBronzo from './assets/prodotti/angolo-bronzo.jpg';
import angoloEffCromoSat from './assets/prodotti/angolo-effetto-cromo-satinato.jpg';
import angoloNeroOpaco from './assets/prodotti/angolo-nero-opaco.jpg';
import angoloBiancoOpaco from './assets/prodotti/angolo-bianco-opaco.jpg';
import roundCromoSat from './assets/prodotti/round-cromo-satinato.jpg';
import roundNeroOpaco from './assets/prodotti/round-nero-opaco.jpg';
import roundBiancoOpaco from './assets/prodotti/round-bianco-opaco.jpg';
import heliaCromoSat from './assets/prodotti/helia-cromo-satinato.jpg';
import heliaNero from './assets/prodotti/helia-nero.jpg';
import voltaCromoSat from './assets/prodotti/volta-cromo-satinato.jpg';
import colomboLogo from './assets/colombo-logo.png';
import robotCromoSat from './assets/prodotti/robot-cromo-satinato.jpg';
import robotOroLuc from './assets/prodotti/robot-oro-lucido.jpg';
import robotScheda from './assets/robot-scheda-tecnica.pdf';
import robotreCromoSat from './assets/prodotti/robotre-cromo-satinato.jpg';
import robotreScheda from './assets/robotre-scheda-tecnica.pdf';
import roboqCromoSat from './assets/prodotti/roboquattro-cromo-satinato.jpg';
import roboqOroLuc from './assets/prodotti/roboquattro-oro-lucido.jpg';
import roboqOroSat from './assets/prodotti/roboquattro-oro-satinato.jpg';
import roboqScheda from './assets/roboquattro-scheda-tecnica.pdf';
import roboqsCromoSat from './assets/prodotti/roboquattros-cromo-satinato.jpg';
import roboqsScheda from './assets/roboquattros-scheda-tecnica.pdf';
import robo5sCromoSat from './assets/prodotti/robocinques-cromo-satinato.jpg';
import robo5sNeroOpaco from './assets/prodotti/robocinques-nero-opaco.jpg';
import robo5sGrafiteMat from './assets/prodotti/robocinques-grafite-mat.jpg';
import robo5sScheda from './assets/robocinques-scheda-tecnica.pdf';
import robot6CromoSat from './assets/prodotti/robot6-cromo-satinato.jpg';
import robot6NeroOpaco from './assets/prodotti/robot6-nero-opaco.jpg';
import robot6sCromoSat from './assets/prodotti/robot6s-cromo-satinato.jpg';
import robot6sNeroOpaco from './assets/prodotti/robot6s-nero-opaco.jpg';
import robot6Scheda from './assets/robot6-scheda-tecnica.pdf';
import robot6sScheda from './assets/robot6s-scheda-tecnica.pdf';
import peterOroLuc from './assets/prodotti/peter-oro-lucido.jpg';
import peterScheda from './assets/peter-scheda-tecnica.pdf';
import amalfiOroLuc from './assets/prodotti/amalfi-oro-lucido.jpg';
import amalfiScheda from './assets/amalfi-scheda-tecnica.pdf';
import flexaCromoSat from './assets/prodotti/flexa-cromo-satinato.jpg';
import flexaOroLuc from './assets/prodotti/flexa-oro-lucido.jpg';
import flexaScheda from './assets/flexa-scheda-tecnica.pdf';
import pegasoOroLuc from './assets/prodotti/pegaso-oro-lucido.jpg';
import pegasoScheda from './assets/pegaso-scheda-tecnica.pdf';
import easyScheda from './assets/easy-scheda-tecnica.pdf';
import easyQuadroCsCon from './assets/prodotti/easy-quadro-cromo-satinato-con.jpg';
import easyQuadroCsSenza from './assets/prodotti/easy-quadro-cromo-satinato-senza.jpg';
import easyQuadroOlCon from './assets/prodotti/easy-quadro-oro-lucido-con.jpg';
import easyQuadroOlSenza from './assets/prodotti/easy-quadro-oro-lucido-senza.jpg';
import easyQuadroNoCon from './assets/prodotti/easy-quadro-nero-opaco-con.jpg';
import easyQuadroNoSenza from './assets/prodotti/easy-quadro-nero-opaco-senza.jpg';
import easyQuadroBoCon from './assets/prodotti/easy-quadro-bianco-opaco-con.jpg';
import easyQuadroBoSenza from './assets/prodotti/easy-quadro-bianco-opaco-senza.jpg';
import easyCiecoCs from './assets/prodotti/easy-quadro-cieco-cromo-satinato.jpg';
import easyCiecoOl from './assets/prodotti/easy-quadro-cieco-oro-lucido.jpg';
import easyCiecoNo from './assets/prodotti/easy-quadro-cieco-nero-opaco.jpg';
import easyCiecoBo from './assets/prodotti/easy-quadro-cieco-bianco-opaco.jpg';
import easyCiecoScheda from './assets/easy-quadro-cieco-scheda-tecnica.pdf';
import tondoCiecoCs from './assets/prodotti/easy-tondo-cieco-cromo-satinato.jpg';
import tondoCiecoOl from './assets/prodotti/easy-tondo-cieco-oro-lucido.jpg';
import tondoCiecoNo from './assets/prodotti/easy-tondo-cieco-nero-opaco.jpg';
import tondoCiecoBo from './assets/prodotti/easy-tondo-cieco-bianco-opaco.jpg';
import tondoCiecoScheda from './assets/easy-tondo-cieco-scheda-tecnica.pdf';
import qChiaveCsCon from './assets/prodotti/easy-quadro-chiave-cromo-satinato-con.jpg';
import qChiaveCsSenza from './assets/prodotti/easy-quadro-chiave-cromo-satinato-senza.jpg';
import qChiaveOlCon from './assets/prodotti/easy-quadro-chiave-oro-lucido-con.jpg';
import qChiaveOlSenza from './assets/prodotti/easy-quadro-chiave-oro-lucido-senza.jpg';
import qChiaveNoCon from './assets/prodotti/easy-quadro-chiave-nero-opaco-con.jpg';
import qChiaveNoSenza from './assets/prodotti/easy-quadro-chiave-nero-opaco-senza.jpg';
import qChiaveBoCon from './assets/prodotti/easy-quadro-chiave-bianco-opaco-con.jpg';
import qChiaveBoSenza from './assets/prodotti/easy-quadro-chiave-bianco-opaco-senza.jpg';
import qChiaveScheda from './assets/easy-quadro-chiave-scheda-tecnica.pdf';
import tChiaveCsCon from './assets/prodotti/easy-tondo-chiave-cromo-satinato-con.jpg';
import tChiaveCsSenza from './assets/prodotti/easy-tondo-chiave-cromo-satinato-senza.jpg';
import tChiaveOlCon from './assets/prodotti/easy-tondo-chiave-oro-lucido-con.jpg';
import tChiaveOlSenza from './assets/prodotti/easy-tondo-chiave-oro-lucido-senza.jpg';
import tChiaveNoCon from './assets/prodotti/easy-tondo-chiave-nero-opaco-con.jpg';
import tChiaveNoSenza from './assets/prodotti/easy-tondo-chiave-nero-opaco-senza.jpg';
import tChiaveBoCon from './assets/prodotti/easy-tondo-chiave-bianco-opaco-con.jpg';
import tChiaveBoSenza from './assets/prodotti/easy-tondo-chiave-bianco-opaco-senza.jpg';
import tChiaveScheda from './assets/easy-tondo-chiave-scheda-tecnica.pdf';
import qYaleCsCon from './assets/prodotti/easy-quadro-yale-cromo-satinato-con.jpg';
import qYaleCsSenza from './assets/prodotti/easy-quadro-yale-cromo-satinato-senza.jpg';
import qYaleScheda from './assets/easy-quadro-yale-scheda-tecnica.pdf';
import tYaleCsCon from './assets/prodotti/easy-tondo-yale-cromo-satinato-con.jpg';
import tYaleCsSenza from './assets/prodotti/easy-tondo-yale-cromo-satinato-senza.jpg';
import tYaleOlCon from './assets/prodotti/easy-tondo-yale-oro-lucido-con.jpg';
import tYaleOlSenza from './assets/prodotti/easy-tondo-yale-oro-lucido-senza.jpg';
import tYaleScheda from './assets/easy-tondo-yale-scheda-tecnica.pdf';
import hoppeLogo from './assets/hoppe-logo.png';
import badenPatent from './assets/prodotti/baden-patent.jpg';
import badenPatentScheda from './assets/baden-patent-scheda-tecnica.pdf';
import badenYale from './assets/prodotti/baden-yale.jpg';
import badenYaleScheda from './assets/baden-yale-scheda-tecnica.pdf';
import badenWc from './assets/prodotti/baden-wc.jpg';
import badenWcScheda from './assets/baden-wc-scheda-tecnica.pdf';
import badenWcSeg from './assets/prodotti/baden-wc-segnalatore.jpg';
import badenWcSegScheda from './assets/baden-wc-segnalatore-scheda-tecnica.pdf';
import arizonaInox from './assets/prodotti/arizona-inox-satinato.jpg';
import arizonaNero from './assets/prodotti/arizona-nero-opaco.jpg';
import arizonaScheda from './assets/arizona-scheda-tecnica.pdf';
import arizonaPvd from './assets/prodotti/arizona-pvd-giallo-lucido.jpg';
import easyTondoCsCon from './assets/prodotti/easy-tondo-cromo-satinato-con.jpg';
import easyTondoCsSenza from './assets/prodotti/easy-tondo-cromo-satinato-senza.jpg';
import easyTondoOlCon from './assets/prodotti/easy-tondo-oro-lucido-con.jpg';
import easyTondoOlSenza from './assets/prodotti/easy-tondo-oro-lucido-senza.jpg';
import easyTondoNoCon from './assets/prodotti/easy-tondo-nero-opaco-con.jpg';
import easyTondoNoSenza from './assets/prodotti/easy-tondo-nero-opaco-senza.jpg';
import easyTondoBoCon from './assets/prodotti/easy-tondo-bianco-opaco-con.jpg';
import easyTondoBoSenza from './assets/prodotti/easy-tondo-bianco-opaco-senza.jpg';
import easyTondoScheda from './assets/easy-tondo-scheda-tecnica.pdf';
import veraBiancoOpaco from './assets/prodotti/vera-bianco-opaco.jpg';
import veraNeroOpaco from './assets/prodotti/vera-nero-opaco.jpg';
import veraScheda from './assets/vera-scheda-tecnica.pdf';
import schRobot from './assets/schede/robot-scheda.jpg';
import schRobotre from './assets/schede/robotre-scheda.jpg';
import schRoboq from './assets/schede/roboquattro-scheda.jpg';
import schRoboqs from './assets/schede/roboquattros-scheda.jpg';
import schRobo5s from './assets/schede/robocinques-scheda.jpg';
import schRobot6 from './assets/schede/robot6-scheda.jpg';
import schRobot6s from './assets/schede/robot6s-scheda.jpg';
import schPeter from './assets/schede/peter-scheda.jpg';
import schAmalfi from './assets/schede/amalfi-scheda.jpg';
import schFlexa from './assets/schede/flexa-scheda.jpg';
import schPegaso from './assets/schede/pegaso-scheda.jpg';
import schEasyQuadro from './assets/schede/easy-quadro-scheda.jpg';
import schEasyTondo from './assets/schede/easy-tondo-scheda.jpg';
import schVera from './assets/schede/vera-scheda.jpg';
import schEasyCieco from './assets/schede/easy-quadro-cieco-scheda.jpg';
import schTondoCieco from './assets/schede/easy-tondo-cieco-scheda.jpg';
import schQChiave from './assets/schede/easy-quadro-chiave-scheda.jpg';
import schTChiave from './assets/schede/easy-tondo-chiave-scheda.jpg';
import schQYale from './assets/schede/easy-quadro-yale-scheda.jpg';
import schTYale from './assets/schede/easy-tondo-yale-scheda.jpg';
import schBadenPatent from './assets/schede/baden-patent-scheda.jpg';
import schBadenYale from './assets/schede/baden-yale-scheda.jpg';
import schBadenWc from './assets/schede/baden-wc-scheda.jpg';
import schBadenWcSeg from './assets/schede/baden-wc-segnalatore-scheda.jpg';
import schArizona from './assets/schede/arizona-scheda.jpg';

/* Anteprima immagine della scheda tecnica (per la visualizzazione in pagina, a prova di mobile) */
const SCHEDA_IMG = {
  11: schRobot, 12: schRobotre, 13: schRoboq, 14: schRoboqs, 15: schRobo5s,
  16: schRobot6, 17: schRobot6s, 18: schPeter, 19: schAmalfi, 20: schFlexa,
  21: schPegaso, 22: schEasyQuadro, 23: schEasyTondo, 24: schVera, 25: schEasyCieco, 26: schTondoCieco, 27: schQChiave, 28: schTChiave, 29: schQYale, 30: schTYale,
  31: {
    'Patent': schBadenPatent,
    'Yale': schBadenYale,
    'WC senza segnalatore': schBadenWc,
    'WC con segnalatore': schBadenWcSeg
  },
  32: schArizona
};
// La scheda (pdf e anteprima) puo' essere unica per il prodotto oppure diversa
// per versione: in quel caso e' un oggetto { 'Versione': valore }.
const pickScheda = (val, ver) => (val && typeof val === 'object')
  ? (val[ver] !== undefined ? val[ver] : Object.values(val)[0])
  : val;
const openScheda = (id, ver) => window.dispatchEvent(new CustomEvent('open-scheda', { detail: { id, ver } }));

const CATEGORIES = [
  { id: '01', nome: 'Maniglie per porte e per finestre', attiva: true },
  { id: '02', nome: 'Maniglie e pomoli per mobili' },
  { id: '03', nome: 'Ferramenta per mobili e cucine' },
  { id: '04', nome: 'Complementi per arredamento' },
  { id: '05', nome: 'Ferramenta per porte' },
  { id: '06', nome: 'Ferramenta per finestre' },
  { id: '07', nome: 'Sistemi di fissaggio e posa' },
  { id: '08', nome: 'Utensili, antinfortunistica' },
  { id: '09', nome: 'Zanzariere oscuranti pensiline' },
  { id: '10', nome: 'Colori e vernici' }
];

// Sottocategorie della categoria 01
const SOTTOCATEGORIE = [
  { id: 'battenti', nome: 'Maniglie per porte battenti' },
  { id: 'scorrevoli', nome: 'Maniglie per porte scorrevoli' },
  { id: 'maniglioni', nome: 'Maniglioni per porte' },
  { id: 'pomoli', nome: 'Pomoli per porte' },
  { id: 'finestre', nome: 'Maniglie per finestre' },
  { id: 'speciali', nome: 'Maniglie speciali per porte e finestre' },
  { id: 'accessori', nome: 'Accessori e ricambi' }
];
const subName = (id) => (SOTTOCATEGORIE.find(s => s.id === id) || {}).nome || id;

const PRODUCTS = [
  { id: 1, categoria: '01', nome: 'Goccia', descrizione: 'Maniglia per porte interne battenti in zama, con rosetta tonda. Misure: 45x45mm (ø 7mm). Fimet progetta e produce in Italia, a Casto in provincia di Brescia. Disponibile in 5 finiture: cromo satinato, cromo lucido, ottone lucido, oro satinato e bronzo. Si coordina con Kit Easy Tondo, Kit Easy Tondo Cieco, Kit Easy Tondo Chiave e Kit Easy Tondo Yale per le porte scorrevoli.', materiale: 'Zama / Zinc', sottocategoria: 'battenti', dimensioni: '45x45mm (ø 7mm)', fornitore: 'Fimet', fornitoreLogo: fimetLogo,
    immagini: {
      'Cromo satinato': gocciaCromoSat,
      'Cromo lucido': gocciaCromoLuc,
      'Ottone lucido': gocciaOttoneLuc
    }, varianti: [
    { codice: '130247B05', finitura: 'Cromo satinato', versione: 'Patent' },
    { codice: '130247B04', finitura: 'Cromo lucido', versione: 'Patent' },
    { codice: '130247B01', finitura: 'Ottone lucido', versione: 'Patent' },
    { codice: '130247B02O', finitura: 'Oro satinato', versione: 'Patent' },
    { codice: '130247B43', finitura: 'Bronzo', versione: 'Patent' } ] },
  { id: 2, categoria: '01', nome: 'Quadra', descrizione: 'Maniglia per porte interne battenti in zama, con rosetta quadra. Misure: 50x127mm. Fimet progetta e produce in Italia, a Casto in provincia di Brescia. Disponibile in 3 finiture: cromo satinato, cromo lucido e ottone lucido. Si coordina con Kit Easy Quadro, Kit Easy Quadro Cieco, Kit Easy Quadro Chiave e Kit Easy Quadro Yale per le porte scorrevoli.', materiale: 'Zama / Zinc', sottocategoria: 'battenti', dimensioni: '50x127mm', fornitore: 'Fimet', fornitoreLogo: fimetLogo,
    immagini: {
      'Cromo satinato': quadraCromoSat,
      'Cromo lucido': quadraCromoLuc
    }, varianti: [
    { codice: '168201B05', finitura: 'Cromo satinato', versione: 'Patent' },
    { codice: '168201B04', finitura: 'Cromo lucido', versione: 'Patent' },
    { codice: '168201B01', finitura: 'Ottone lucido', versione: 'Patent' } ] },
  { id: 3, categoria: '01', nome: 'Angolo', descrizione: 'Maniglia per porte interne battenti in alluminio, con rosetta quadra. Misure: 144x50mm. Disponibile in 5 finiture: oro satinato, bronzo, effetto cromo satinato, nero opaco e bianco opaco.', materiale: 'Alluminio', sottocategoria: 'battenti', dimensioni: '144x50mm', fornitore: 'Ital Linea', fornitoreLogo: italineaLogo,
    immagini: {
      'Oro satinato': angoloOroSat,
      'Bronzo': angoloBronzo,
      'Effetto cromo satinato': angoloEffCromoSat,
      'Nero opaco': angoloNeroOpaco,
      'Bianco opaco': angoloBiancoOpaco
    }, varianti: [
    { codice: '448RB0880COS', finitura: 'Oro satinato', versione: 'Patent' },
    { codice: '448RB0880CBR', finitura: 'Bronzo', versione: 'Patent' },
    { codice: '448RB0880CCS', finitura: 'Effetto cromo satinato', versione: 'Patent' },
    { codice: '448RB0880CNE', finitura: 'Nero opaco', versione: 'Patent' },
    { codice: '448RB0880CBO', finitura: 'Bianco opaco', versione: 'Patent' } ] },
  { id: 4, categoria: '01', nome: 'Round', descrizione: 'Maniglia per porte interne battenti in alluminio, con rosetta tonda. Misure: 142x50mm (ø 50mm). Disponibile in 4 finiture: cromo satinato, nero opaco, bianco opaco e oro satinato.', materiale: 'Alluminio', sottocategoria: 'battenti', dimensioni: '142x50mm (ø 50mm)', fornitore: 'Forme', fornitoreLogo: formeLogo,
    immagini: {
      'Cromo satinato': roundCromoSat,
      'Nero opaco': roundNeroOpaco,
      'Bianco opaco': roundBiancoOpaco
    }, varianti: [
    { codice: 'A519RTX59CS', finitura: 'Cromo satinato', versione: 'Patent' },
    { codice: 'A519RTX59NE', finitura: 'Nero opaco', versione: 'Patent' },
    { codice: 'A519RTX59BO', finitura: 'Bianco opaco', versione: 'Patent' },
    { codice: 'A519RTX59OS', finitura: 'Oro satinato', versione: 'Patent' } ] },
  { id: 5, categoria: '01', nome: 'Hèlia', descrizione: 'Maniglia per porte interne battenti in zama, con rosetta quadra. Disponibile in 2 finiture: cromo satinato e nero opaco. Si coordina con Kit Easy Quadro, Kit Easy Quadro Cieco, Kit Easy Quadro Chiave e Kit Easy Quadro Yale per le porte scorrevoli.', materiale: 'Zama / Zinc', sottocategoria: 'battenti', dimensioni: 'Standard', fornitore: 'AD-TECH', fornitoreLogo: adtechLogo,
    immagini: {
      'Cromo satinato': heliaCromoSat,
      'Nero opaco': heliaNero
    }, varianti: [
    { codice: '121RBQCS', finitura: 'Cromo satinato', versione: 'Patent' },
    { codice: '121RBQNE', finitura: 'Nero opaco', versione: 'Patent' } ] },
  { id: 6, categoria: '01', nome: 'Volta', descrizione: 'Maniglia per porte interne battenti in zama, con rosetta tonda. Disponibile nella finitura cromo satinato. Si coordina con Kit Easy Tondo, Kit Easy Tondo Cieco, Kit Easy Tondo Chiave e Kit Easy Tondo Yale per le porte scorrevoli.', materiale: 'Zama / Zinc', sottocategoria: 'battenti', dimensioni: 'Standard', fornitore: 'AD-TECH', fornitoreLogo: adtechLogo,
    immagini: {
      'Cromo satinato': voltaCromoSat
    }, varianti: [
    { codice: '122RBTCS', finitura: 'Cromo satinato', versione: 'Patent' } ] },
  { id: 7, categoria: '01', nome: 'Sirio', descrizione: 'Maniglia per porte interne battenti in zama, con rosetta quadra. Arieni realizza le sue maniglie interamente in Italia, a Sabbio Chiese (Brescia), dal 1997. Disponibile in 2 finiture: cromo satinato e bicolore cromo lucido / satinato. Si coordina con Kit Easy Quadro, Kit Easy Quadro Cieco, Kit Easy Quadro Chiave e Kit Easy Quadro Yale per le porte scorrevoli.', materiale: 'Zama / Zinc', sottocategoria: 'battenti', dimensioni: 'Standard', fornitore: 'Arieni', fornitoreLogo: arieniLogo,
    immagini: {
      'Cromo satinato': sirioCromoSat,
      'Bicolore cromo lucido / satinato': sirioBicolore
    }, varianti: [
    { codice: '9051CS', finitura: 'Cromo satinato', versione: 'Patent' },
    { codice: '9051CS/CL', finitura: 'Bicolore cromo lucido / satinato', versione: 'Patent' } ] },
  { id: 8, categoria: '01', nome: 'Trio', descrizione: 'Maniglia per porte interne battenti in zama, con rosetta quadra. Linea Calì produce interamente in Italia, a Vobarno (Brescia), dal 1986; la gamma è collaudata con oltre 100.000 cicli di prova, raggiungendo la Classe 4. Disponibile in 3 finiture: cromo satinato, cromo lucido e nero opaco. Si coordina con Kit Easy Quadro, Kit Easy Quadro Cieco, Kit Easy Quadro Chiave e Kit Easy Quadro Yale per le porte scorrevoli.', materiale: 'Zama / Zinc', sottocategoria: 'battenti', dimensioni: 'Standard', fornitore: 'Linea Calì', fornitoreLogo: lineacaliLogo,
    immagini: {
      'Cromo satinato': trioCromoSat,
      'Cromo lucido': trioCromoLuc,
      'Nero opaco': trioNeroOpaco
    }, varianti: [
    { codice: '485RB0880CCS', finitura: 'Cromo satinato', versione: 'Patent' },
    { codice: '485RB0880CCL', finitura: 'Cromo lucido', versione: 'Patent' },
    { codice: '485RB0880CNE', finitura: 'Nero opaco', versione: 'Patent' } ] },
  { id: 9, categoria: '01', nome: 'Alicia', descrizione: 'Maniglia per porte interne battenti in zama, con rosetta quadra. Fimet progetta e produce in Italia, a Casto in provincia di Brescia. Disponibile in 2 finiture: cromo satinato e oro satinato. Si coordina con Kit Easy Quadro, Kit Easy Quadro Cieco, Kit Easy Quadro Chiave e Kit Easy Quadro Yale per le porte scorrevoli.', materiale: 'Zama / Zinc', sottocategoria: 'battenti', dimensioni: 'Standard', fornitore: 'Fimet', fornitoreLogo: fimetLogo,
    immagini: {
      'Cromo satinato': aliciaCromoSat,
      'Oro satinato': aliciaOttoneSat
    }, varianti: [
    { codice: '1220213BCS', finitura: 'Cromo satinato', versione: 'Patent' },
    { codice: '1220213BOS', finitura: 'Oro satinato', versione: 'Patent' } ] },
  { id: 10, categoria: '01', nome: 'Punto', descrizione: 'Maniglia per porte interne battenti in zama, con rosetta tonda. Fimet progetta e produce in Italia, a Casto in provincia di Brescia. Disponibile in 2 finiture: cromo satinato e nero opaco. Si coordina con Kit Easy Tondo, Kit Easy Tondo Cieco, Kit Easy Tondo Chiave e Kit Easy Tondo Yale per le porte scorrevoli.', materiale: 'Zama / Zinc', sottocategoria: 'battenti', dimensioni: 'Standard', fornitore: 'Fimet', fornitoreLogo: fimetLogo,
    immagini: {
      'Cromo satinato': puntoCromoSat,
      'Nero opaco': puntoNeroOpaco
    }, varianti: [
    { codice: '1205208BCS', finitura: 'Cromo satinato', versione: 'Patent' },
    { codice: '1205208BNE', finitura: 'Nero opaco', versione: 'Patent' } ] },
  { id: 11, categoria: '01', nome: 'Robot', descrizione: 'Maniglia per porte interne battenti in Chromall®, con rosetta tonda Ø50. Appartiene alla collezione Contemporanee di Colombo Design. Il costruttore garantisce le finiture per 10 anni, 30 anni per l’oro lucido. Disponibile in 2 finiture: cromo satinato e oro lucido.', materiale: 'Chromall®', sottocategoria: 'battenti', dimensioni: 'Rosetta Ø50', fornitore: 'Colombo Design', fornitoreLogo: colomboLogo, scheda: robotScheda,
    immagini: {
      'Cromo satinato': robotCromoSat,
      'Oro lucido': robotOroLuc
    }, varianti: [
    { codice: 'CD41 cromat', finitura: 'Cromo satinato', versione: 'Patent' },
    { codice: 'CD41 oroplus', finitura: 'Oro lucido', versione: 'Patent' } ] },
  { id: 12, categoria: '01', nome: 'Robotre', descrizione: 'Maniglia per porte interne battenti in Chromall®, con rosetta tonda Ø50. Appartiene alla collezione Contemporanee di Colombo Design. Il costruttore garantisce le finiture per 10 anni. Disponibile nella finitura cromo satinato.', materiale: 'Chromall®', sottocategoria: 'battenti', dimensioni: 'Rosetta Ø50', fornitore: 'Colombo Design', fornitoreLogo: colomboLogo, scheda: robotreScheda,
    immagini: {
      'Cromo satinato': robotreCromoSat
    }, varianti: [
    { codice: 'CD91 cromat', finitura: 'Cromo satinato', versione: 'Patent' } ] },
  { id: 13, categoria: '01', nome: 'Roboquattro', descrizione: 'Maniglia per porte interne battenti in Chromall®, con rosetta tonda Ø50. Appartiene alla collezione Contemporanee di Colombo Design. Il costruttore garantisce le finiture per 10 anni, 30 anni per l’oro lucido. Disponibile in 3 finiture: cromo satinato, oro lucido e oro satinato.', materiale: 'Chromall®', sottocategoria: 'battenti', dimensioni: 'Rosetta Ø50', fornitore: 'Colombo Design', fornitoreLogo: colomboLogo, scheda: roboqScheda,
    immagini: {
      'Cromo satinato': roboqCromoSat,
      'Oro lucido': roboqOroLuc,
      'Oro satinato': roboqOroSat
    }, varianti: [
    { codice: 'ID41 cromat', finitura: 'Cromo satinato', versione: 'Patent' },
    { codice: 'ID41 oroplus', finitura: 'Oro lucido', versione: 'Patent' },
    { codice: 'ID41 oromat', finitura: 'Oro satinato', versione: 'Patent' } ] },
  { id: 14, categoria: '01', nome: 'RoboquattroS', descrizione: 'Maniglia per porte interne battenti in Chromall®, con rosetta quadra 52×52. Appartiene alla collezione Contemporanee di Colombo Design. Il costruttore garantisce le finiture per 10 anni. Disponibile nella finitura cromo satinato.', materiale: 'Chromall®', sottocategoria: 'battenti', dimensioni: 'Rosetta 52×52', fornitore: 'Colombo Design', fornitoreLogo: colomboLogo, scheda: roboqsScheda,
    immagini: {
      'Cromo satinato': roboqsCromoSat
    }, varianti: [
    { codice: 'ID51 cromat', finitura: 'Cromo satinato', versione: 'Patent' } ] },
  { id: 15, categoria: '01', nome: 'RobocinqueS', descrizione: 'Maniglia per porte interne battenti in Chromall®, con rosetta quadra 52×52. Appartiene alla collezione Contemporanee di Colombo Design. Il costruttore garantisce le finiture per 10 anni. Disponibile in 3 finiture: cromo satinato, nero opaco e grafite mat.', materiale: 'Chromall®', sottocategoria: 'battenti', dimensioni: 'Rosetta 52×52', fornitore: 'Colombo Design', fornitoreLogo: colomboLogo, scheda: robo5sScheda,
    immagini: {
      'Cromo satinato': robo5sCromoSat,
      'Nero opaco': robo5sNeroOpaco,
      'Grafite mat': robo5sGrafiteMat
    }, varianti: [
    { codice: 'ID71 cromat', finitura: 'Cromo satinato', versione: 'Patent' },
    { codice: 'ID71 neromat', finitura: 'Nero opaco', versione: 'Patent' },
    { codice: 'ID71 grafitemat', finitura: 'Grafite mat', versione: 'Patent' } ] },
  { id: 16, categoria: '01', nome: 'Robot6', descrizione: 'Maniglia per porte interne battenti in Chromall®, con rosetta tonda Ø50. Appartiene alla collezione Contemporanee di Colombo Design. Il costruttore garantisce le finiture per 10 anni. Disponibile in 2 finiture: cromo satinato e nero opaco.', materiale: 'Chromall®', sottocategoria: 'battenti', dimensioni: 'Rosetta Ø50', fornitore: 'Colombo Design', fornitoreLogo: colomboLogo, scheda: robot6Scheda,
    immagini: {
      'Cromo satinato': robot6CromoSat,
      'Nero opaco': robot6NeroOpaco
    }, varianti: [
    { codice: 'ID 81 R-RY CM', finitura: 'Cromo satinato', versione: 'Patent' },
    { codice: 'ID 81 R-RY NM', finitura: 'Nero opaco', versione: 'Patent' } ] },
  { id: 17, categoria: '01', nome: 'Robot6S', descrizione: 'Maniglia per porte interne battenti in Chromall®, con rosetta quadra 50×50. Appartiene alla collezione Contemporanee di Colombo Design. Il costruttore garantisce le finiture per 10 anni. Disponibile in 2 finiture: cromo satinato e nero opaco.', materiale: 'Chromall®', sottocategoria: 'battenti', dimensioni: 'Rosetta 50×50', fornitore: 'Colombo Design', fornitoreLogo: colomboLogo, scheda: robot6sScheda,
    immagini: {
      'Cromo satinato': robot6sCromoSat,
      'Nero opaco': robot6sNeroOpaco
    }, varianti: [
    { codice: 'ID 91 R-RY CM', finitura: 'Cromo satinato', versione: 'Patent' },
    { codice: 'ID 91 R-RY NM', finitura: 'Nero opaco', versione: 'Patent' } ] },
  { id: 18, categoria: '01', nome: 'Peter', descrizione: 'Maniglia per porte interne battenti in ottone, con rosetta tonda Ø50. Appartiene alla collezione Contemporanee di Colombo Design. Il costruttore garantisce le finiture per 10 anni, 30 anni per l’oro lucido. Disponibile nella finitura oro lucido.', materiale: 'Ottone', sottocategoria: 'battenti', dimensioni: 'Rosetta Ø50', fornitore: 'Colombo Design', fornitoreLogo: colomboLogo, scheda: peterScheda,
    immagini: {
      'Oro lucido': peterOroLuc
    }, varianti: [
    { codice: 'ID 11 R-RY OL', finitura: 'Oro lucido', versione: 'Patent' } ] },
  { id: 19, categoria: '01', nome: 'Amalfi', descrizione: 'Maniglia per porte interne battenti in zama, con rosetta tonda Ø50. Disponibile in 2 finiture: oro lucido e oro satinato.', materiale: 'Zama / Zinc', sottocategoria: 'battenti', dimensioni: 'Rosetta tonda Ø50', fornitore: 'Forme', fornitoreLogo: formeLogo, scheda: amalfiScheda,
    immagini: {
      'Oro lucido': amalfiOroLuc
    }, varianti: [
    { codice: 'A118 RTX07 L01', finitura: 'Oro lucido', versione: 'Patent' },
    { codice: 'A118 RTX07 L02', finitura: 'Oro satinato', versione: 'Patent' } ] },
  { id: 20, categoria: '01', nome: 'Flexa', descrizione: 'Maniglia per porte interne battenti in zama, con rosetta tonda Ø50. Disponibile in 2 finiture: cromo satinato e oro lucido. Si coordina con Kit Easy Tondo, Kit Easy Tondo Cieco, Kit Easy Tondo Chiave e Kit Easy Tondo Yale per le porte scorrevoli.', materiale: 'Zama / Zinc', sottocategoria: 'battenti', dimensioni: 'Rosetta tonda Ø50', fornitore: 'Forme', fornitoreLogo: formeLogo, scheda: flexaScheda,
    immagini: {
      'Cromo satinato': flexaCromoSat,
      'Oro lucido': flexaOroLuc
    }, varianti: [
    { codice: 'A132 RTX07 C02', finitura: 'Cromo satinato', versione: 'Patent' },
    { codice: 'A132 RTX07 L01', finitura: 'Oro lucido', versione: 'Patent' } ] },
  { id: 21, categoria: '01', nome: 'Pegaso', descrizione: 'Maniglia per porte interne battenti in zama, con rosetta tonda Ø50. Disponibile in 2 finiture: oro lucido e bicolore oro lucido / satinato.', materiale: 'Zama / Zinc', sottocategoria: 'battenti', dimensioni: 'Rosetta tonda Ø50', fornitore: 'Forme', fornitoreLogo: formeLogo, scheda: pegasoScheda,
    immagini: {
      'Oro lucido': pegasoOroLuc
    }, varianti: [
    { codice: 'A127 RTX59 L01', finitura: 'Oro lucido', versione: 'Patent' },
    { codice: 'A127 RTX59 L01/L02', finitura: 'Bicolore oro lucido / satinato', versione: 'Patent' } ] },
  { id: 22, categoria: '01', nome: 'Kit Easy Quadro', descrizione: 'Kit per porte scorrevoli a scomparsa con nicchie quadre a filo porta. Comprende il paio di nicchie con foro WC e nottolino ribassato più il trascinatore; nella versione con serratura è inclusa la serratura WC. Richiede una fresatura sulla porta di ø48 mm. Fimet progetta e produce in Italia, a Casto in provincia di Brescia. Disponibile in 4 finiture: cromo satinato, oro lucido, nero opaco e bianco opaco. Si abbina alle maniglie Quadra, Hèlia, Sirio, Trio, Alicia e Vera del catalogo.', materiale: 'Zama / Zinc', sottocategoria: 'scorrevoli', dimensioni: 'Nicchia 53×53 · foro ø48 mm', fornitore: 'Fimet', fornitoreLogo: fimetLogo, scheda: easyScheda, optKey: 'finitura', optKey2: 'versione',
    immagini: {
      'Cromo satinato||Con serratura': easyQuadroCsCon,
      'Cromo satinato||Senza serratura': easyQuadroCsSenza,
      'Oro lucido||Con serratura': easyQuadroOlCon,
      'Oro lucido||Senza serratura': easyQuadroOlSenza,
      'Nero opaco||Con serratura': easyQuadroNoCon,
      'Nero opaco||Senza serratura': easyQuadroNoSenza,
      'Bianco opaco||Con serratura': easyQuadroBoCon,
      'Bianco opaco||Senza serratura': easyQuadroBoSenza
    }, varianti: [
    { codice: '3667RMQSEIM.05.IM', finitura: 'Cromo satinato', versione: 'Con serratura' },
    { codice: '3667RMQ.05.IM', finitura: 'Cromo satinato', versione: 'Senza serratura' },
    { codice: '3667RMQSEIM.01.IM', finitura: 'Oro lucido', versione: 'Con serratura' },
    { codice: '3667RMQ.01.IM', finitura: 'Oro lucido', versione: 'Senza serratura' },
    { codice: '3667RMQSEIM.NO.IM', finitura: 'Nero opaco', versione: 'Con serratura' },
    { codice: '3667RMQ.NO.IM', finitura: 'Nero opaco', versione: 'Senza serratura' },
    { codice: '3667RMQSEIM.BO.IM', finitura: 'Bianco opaco', versione: 'Con serratura' },
    { codice: '3667RMQ.BO.IM', finitura: 'Bianco opaco', versione: 'Senza serratura' } ] },
  { id: 23, categoria: '01', nome: 'Kit Easy Tondo', descrizione: 'Kit per porte scorrevoli a scomparsa con nicchie tonde a filo porta. Comprende il paio di nicchie con foro WC e nottolino ribassato più il trascinatore; nella versione con serratura è inclusa la serratura WC. Richiede una fresatura sulla porta di ø48 mm. Fimet progetta e produce in Italia, a Casto in provincia di Brescia. Disponibile in 4 finiture: cromo satinato, oro lucido, nero opaco e bianco opaco. Si abbina alle maniglie Goccia, Volta, Punto e Flexa del catalogo.', materiale: 'Zama / Zinc', sottocategoria: 'scorrevoli', dimensioni: 'Nicchia Ø57 · foro ø48 mm', fornitore: 'Fimet', fornitoreLogo: fimetLogo, scheda: easyTondoScheda, optKey: 'finitura', optKey2: 'versione',
    immagini: {
      'Cromo satinato||Con serratura': easyTondoCsCon,
      'Cromo satinato||Senza serratura': easyTondoCsSenza,
      'Oro lucido||Con serratura': easyTondoOlCon,
      'Oro lucido||Senza serratura': easyTondoOlSenza,
      'Nero opaco||Con serratura': easyTondoNoCon,
      'Nero opaco||Senza serratura': easyTondoNoSenza,
      'Bianco opaco||Con serratura': easyTondoBoCon,
      'Bianco opaco||Senza serratura': easyTondoBoSenza
    }, varianti: [
    { codice: '3666RMTSEIM.05.IM', finitura: 'Cromo satinato', versione: 'Con serratura' },
    { codice: '3666RMT.05.IM', finitura: 'Cromo satinato', versione: 'Senza serratura' },
    { codice: '3666RMTSEIM.01.IM', finitura: 'Oro lucido', versione: 'Con serratura' },
    { codice: '3666RMT.01.IM', finitura: 'Oro lucido', versione: 'Senza serratura' },
    { codice: '3666RMTSEIM.NO.IM', finitura: 'Nero opaco', versione: 'Con serratura' },
    { codice: '3666RMT.NO.IM', finitura: 'Nero opaco', versione: 'Senza serratura' },
    { codice: '3666RMTSEIM.BO.IM', finitura: 'Bianco opaco', versione: 'Con serratura' },
    { codice: '3666RMT.BO.IM', finitura: 'Bianco opaco', versione: 'Senza serratura' } ] },
  { id: 24, categoria: '01', nome: 'Vera', descrizione: 'Maniglia per porte interne battenti in ottone, con rosetta quadra. Misure: 147×67mm · Rosetta quadra 50×50. Arieni realizza le sue maniglie interamente in Italia, a Sabbio Chiese (Brescia), dal 1997. Disponibile in 2 finiture: nero opaco e bianco opaco. Si coordina con Kit Easy Quadro, Kit Easy Quadro Cieco, Kit Easy Quadro Chiave e Kit Easy Quadro Yale per le porte scorrevoli.', materiale: 'Ottone', sottocategoria: 'battenti', dimensioni: '147×67mm · Rosetta quadra 50×50', fornitore: 'Arieni', fornitoreLogo: arieniLogo, scheda: veraScheda,
    immagini: {
      'Nero opaco': veraNeroOpaco,
      'Bianco opaco': veraBiancoOpaco
    }, varianti: [
    { codice: '4702 NE', finitura: 'Nero opaco', versione: 'Patent' },
    { codice: '4702 BNC', finitura: 'Bianco opaco', versione: 'Patent' } ] },
  { id: 25, categoria: '01', nome: 'Kit Easy Quadro Cieco', descrizione: 'Variante cieca del Kit Easy Quadro, senza foro né serratura: comprende il paio di nicchie quadre cieche e il trascinatore. La soluzione più pulita quando la porta non deve chiudersi a chiave. Richiede una fresatura sulla porta di ø48 mm. Fimet progetta e produce in Italia, a Casto in provincia di Brescia. Disponibile in 4 finiture: cromo satinato, oro lucido, nero opaco e bianco opaco. Si abbina alle maniglie Quadra, Hèlia, Sirio, Trio, Alicia e Vera del catalogo.', materiale: 'Zama / Zinc', sottocategoria: 'scorrevoli', dimensioni: 'Nicchia 53×53 · foro ø48 mm · Trascinatore 30×25', fornitore: 'Fimet', fornitoreLogo: fimetLogo, scheda: easyCiecoScheda,
    immagini: {
      'Cromo satinato': easyCiecoCs,
      'Oro lucido': easyCiecoOl,
      'Nero opaco': easyCiecoNo,
      'Bianco opaco': easyCiecoBo
    }, varianti: [
    { codice: '3667CMQ.05.IM', finitura: 'Cromo satinato', versione: 'Senza serratura' },
    { codice: '3667CMQ.01.IM', finitura: 'Oro lucido', versione: 'Senza serratura' },
    { codice: '3667CMQ.NO.IM', finitura: 'Nero opaco', versione: 'Senza serratura' },
    { codice: '3667CMQ.BO.IM', finitura: 'Bianco opaco', versione: 'Senza serratura' } ] },
  { id: 26, categoria: '01', nome: 'Kit Easy Tondo Cieco', descrizione: 'Variante cieca del Kit Easy Tondo, senza foro né serratura: comprende il paio di nicchie tonde cieche e il trascinatore. La soluzione più pulita quando la porta non deve chiudersi a chiave. Richiede una fresatura sulla porta di ø48 mm. Fimet progetta e produce in Italia, a Casto in provincia di Brescia. Disponibile in 4 finiture: cromo satinato, oro lucido, nero opaco e bianco opaco. Si abbina alle maniglie Goccia, Volta, Punto e Flexa del catalogo.', materiale: 'Zama / Zinc', sottocategoria: 'scorrevoli', dimensioni: 'Nicchia Ø57 · foro ø48 mm · Trascinatore Ø29', fornitore: 'Fimet', fornitoreLogo: fimetLogo, scheda: tondoCiecoScheda,
    immagini: {
      'Cromo satinato': tondoCiecoCs,
      'Oro lucido': tondoCiecoOl,
      'Nero opaco': tondoCiecoNo,
      'Bianco opaco': tondoCiecoBo
    }, varianti: [
    { codice: '3666CMT.05.IM', finitura: 'Cromo satinato', versione: 'Senza serratura' },
    { codice: '3666CMT.01.IM', finitura: 'Oro lucido', versione: 'Senza serratura' },
    { codice: '3666CMT.NO.IM', finitura: 'Nero opaco', versione: 'Senza serratura' },
    { codice: '3666CMT.BO.IM', finitura: 'Bianco opaco', versione: 'Senza serratura' } ] },
  { id: 27, categoria: '01', nome: 'Kit Easy Quadro Chiave', descrizione: 'Kit per porte scorrevoli con nicchie quadre a foro chiave. Comprende il paio di nicchie e il trascinatore; nella versione con serratura sono incluse la serratura a chiave e la chiave, quindi è pronto all’uso senza altri acquisti. Richiede una fresatura sulla porta di ø48 mm. Fimet progetta e produce in Italia, a Casto in provincia di Brescia. Disponibile in 4 finiture: cromo satinato, oro lucido, nero opaco e bianco opaco. Si abbina alle maniglie Quadra, Hèlia, Sirio, Trio, Alicia e Vera del catalogo.', materiale: 'Zama / Zinc', sottocategoria: 'scorrevoli', dimensioni: 'Nicchia 53\u00d753 \u00b7 foro \u00f848 mm \u00b7 Trascinatore 30\u00d725', fornitore: 'Fimet', fornitoreLogo: fimetLogo, scheda: qChiaveScheda, optKey: 'finitura', optKey2: 'versione',
    immagini: {
      'Cromo satinato||Con serratura': qChiaveCsCon,
      'Cromo satinato||Senza serratura': qChiaveCsSenza,
      'Oro lucido||Con serratura': qChiaveOlCon,
      'Oro lucido||Senza serratura': qChiaveOlSenza,
      'Nero opaco||Con serratura': qChiaveNoCon,
      'Nero opaco||Senza serratura': qChiaveNoSenza,
      'Bianco opaco||Con serratura': qChiaveBoCon,
      'Bianco opaco||Senza serratura': qChiaveBoSenza
    }, varianti: [
    { codice: '3667FMQSE6050C.05.IM', finitura: 'Cromo satinato', versione: 'Con serratura' },
    { codice: '3667FMQ.05.IM', finitura: 'Cromo satinato', versione: 'Senza serratura' },
    { codice: '3667FMQSE6050C.01.IM', finitura: 'Oro lucido', versione: 'Con serratura' },
    { codice: '3667FMQ.01.IM', finitura: 'Oro lucido', versione: 'Senza serratura' },
    { codice: '3667FMQSE6050C.NO.IM', finitura: 'Nero opaco', versione: 'Con serratura' },
    { codice: '3667FMQ.NO.IM', finitura: 'Nero opaco', versione: 'Senza serratura' },
    { codice: '3667FMQSE6050C.BO.IM', finitura: 'Bianco opaco', versione: 'Con serratura' },
    { codice: '3667FMQ.BO.IM', finitura: 'Bianco opaco', versione: 'Senza serratura' } ] },
  { id: 28, categoria: '01', nome: 'Kit Easy Tondo Chiave', descrizione: 'Kit per porte scorrevoli con nicchie tonde a foro chiave. Comprende il paio di nicchie e il trascinatore; nella versione con serratura sono incluse la serratura a chiave e la chiave, quindi è pronto all’uso senza altri acquisti. Richiede una fresatura sulla porta di ø48 mm. Fimet progetta e produce in Italia, a Casto in provincia di Brescia. Disponibile in 4 finiture: cromo satinato, oro lucido, nero opaco e bianco opaco. Si abbina alle maniglie Goccia, Volta, Punto e Flexa del catalogo.', materiale: 'Zama / Zinc', sottocategoria: 'scorrevoli', dimensioni: 'Nicchia \u00d857 \u00b7 foro \u00f848 mm \u00b7 Trascinatore \u00d829', fornitore: 'Fimet', fornitoreLogo: fimetLogo, scheda: tChiaveScheda, optKey: 'finitura', optKey2: 'versione',
    immagini: {
      'Cromo satinato||Con serratura': tChiaveCsCon,
      'Cromo satinato||Senza serratura': tChiaveCsSenza,
      'Oro lucido||Con serratura': tChiaveOlCon,
      'Oro lucido||Senza serratura': tChiaveOlSenza,
      'Nero opaco||Con serratura': tChiaveNoCon,
      'Nero opaco||Senza serratura': tChiaveNoSenza,
      'Bianco opaco||Con serratura': tChiaveBoCon,
      'Bianco opaco||Senza serratura': tChiaveBoSenza
    }, varianti: [
    { codice: '3666FMTSE6050C.05.IM', finitura: 'Cromo satinato', versione: 'Con serratura' },
    { codice: '3666FMT.05.IM', finitura: 'Cromo satinato', versione: 'Senza serratura' },
    { codice: '3666FMTSE6050C.01.IM', finitura: 'Oro lucido', versione: 'Con serratura' },
    { codice: '3666FMT.01.IM', finitura: 'Oro lucido', versione: 'Senza serratura' },
    { codice: '3666FMTSE6050C.NO.IM', finitura: 'Nero opaco', versione: 'Con serratura' },
    { codice: '3666FMT.NO.IM', finitura: 'Nero opaco', versione: 'Senza serratura' },
    { codice: '3666FMTSE6050C.BO.IM', finitura: 'Bianco opaco', versione: 'Con serratura' },
    { codice: '3666FMT.BO.IM', finitura: 'Bianco opaco', versione: 'Senza serratura' } ] },
  { id: 29, categoria: '01', nome: 'Kit Easy Quadro Yale', descrizione: 'Kit per porte scorrevoli con nicchie quadre a foro cilindro (yale). Comprende il paio di nicchie e il trascinatore; nella versione con serratura è inclusa la serratura predisposta per cilindro europeo, da scegliere secondo il livello di sicurezza desiderato. Richiede una fresatura sulla porta di ø48 mm. Fimet progetta e produce in Italia, a Casto in provincia di Brescia. Disponibile nella finitura cromo satinato. Si abbina alle maniglie Quadra, Hèlia, Sirio, Trio, Alicia e Vera del catalogo.', materiale: 'Zama / Zinc', sottocategoria: 'scorrevoli', dimensioni: 'Nicchia 53\u00d753 \u00b7 foro \u00f848 mm \u00b7 Trascinatore 30\u00d725', fornitore: 'Fimet', fornitoreLogo: fimetLogo, scheda: qYaleScheda, optKey: 'finitura', optKey2: 'versione',
    immagini: {
      'Cromo satinato||Con serratura': qYaleCsCon,
      'Cromo satinato||Senza serratura': qYaleCsSenza
    }, varianti: [
    { codice: '3667ZMQSE6250.05.IM', finitura: 'Cromo satinato', versione: 'Con serratura' },
    { codice: '3667ZMQ.05.IM', finitura: 'Cromo satinato', versione: 'Senza serratura' } ] },
  { id: 30, categoria: '01', nome: 'Kit Easy Tondo Yale', descrizione: 'Kit per porte scorrevoli con nicchie tonde a foro cilindro (yale). Comprende il paio di nicchie e il trascinatore; nella versione con serratura è inclusa la serratura predisposta per cilindro europeo, da scegliere secondo il livello di sicurezza desiderato. Richiede una fresatura sulla porta di ø48 mm. Fimet progetta e produce in Italia, a Casto in provincia di Brescia. Disponibile in 2 finiture: cromo satinato e oro lucido. Si abbina alle maniglie Goccia, Volta, Punto e Flexa del catalogo.', materiale: 'Zama / Zinc', sottocategoria: 'scorrevoli', dimensioni: 'Nicchia \u00d857 \u00b7 foro \u00f848 mm \u00b7 Trascinatore \u00d829', fornitore: 'Fimet', fornitoreLogo: fimetLogo, scheda: tYaleScheda, optKey: 'finitura', optKey2: 'versione',
    immagini: {
      'Cromo satinato||Con serratura': tYaleCsCon,
      'Cromo satinato||Senza serratura': tYaleCsSenza,
      'Oro lucido||Con serratura': tYaleOlCon,
      'Oro lucido||Senza serratura': tYaleOlSenza
    }, varianti: [
    { codice: '3666ZMTSE6250.05.IM', finitura: 'Cromo satinato', versione: 'Con serratura' },
    { codice: '3666ZMT.05.IM', finitura: 'Cromo satinato', versione: 'Senza serratura' },
    { codice: '3666ZMTSE6250.01.IM', finitura: 'Oro lucido', versione: 'Con serratura' },
    { codice: '3666ZMT.01.IM', finitura: 'Oro lucido', versione: 'Senza serratura' } ] },
  { id: 31, categoria: '01', nome: 'Baden', descrizione: 'Guarnitura HOPPE con rosetta e bocchetta in acciaio inox per porte interne, modello E1388Z/17K/17KS della linea duranorm. Le molle di richiamo sono reversibili e ambidestre e gli anelli di guida non richiedono manutenzione, così la maniglia resta allineata negli anni. Quadro a profilo HOPPE da 8 mm, per porte di spessore da 35 a 54 mm. Un’unica maniglia in quattro versioni di foro — patent, yale e nottolino WC con o senza segnalatore di libero/occupato — per coordinare tutte le porte di casa. Disponibile nella finitura acciaio inox satinato.', materiale: 'Acciaio inox', sottocategoria: 'battenti', dimensioni: '139\u00d766mm \u00b7 Rosetta tonda \u00d852', fornitore: 'HOPPE', fornitoreLogo: hoppeLogo, optKey: 'versione',
    scheda: {
      'Patent': badenPatentScheda,
      'Yale': badenYaleScheda,
      'WC senza segnalatore': badenWcScheda,
      'WC con segnalatore': badenWcSegScheda
    },
    immagini: {
      'Patent': badenPatent,
      'Yale': badenYale,
      'WC senza segnalatore': badenWc,
      'WC con segnalatore': badenWcSeg
    }, varianti: [
    { codice: '12316064', finitura: 'Acciaio inox satinato', versione: 'Patent' },
    { codice: '12316088', finitura: 'Acciaio inox satinato', versione: 'Yale' },
    { codice: '12316095', finitura: 'Acciaio inox satinato', versione: 'WC senza segnalatore' },
    { codice: '12316143', finitura: 'Acciaio inox satinato', versione: 'WC con segnalatore' } ] },
  { id: 32, categoria: '01', nome: 'Arizona', descrizione: 'Maniglione tubolare per porte in acciaio inox AISI 304, con supporti diritti e profilo tondo. Le finiture sono protette da una verniciatura a polvere certificata resistente ai raggi UV, quindi regge bene anche sulle porte esposte. Viene fornito con il kit di fissaggio completo: bussole, guarnizioni, grani, viti autofilettanti e tronconi filettati. Fimet progetta e produce in Italia, a Casto in provincia di Brescia. Puoi scegliere la misura indifferentemente per lunghezza totale o per interasse: selezionando una delle due, restano disponibili solo le combinazioni compatibili.', materiale: 'Acciaio inox AISI 304', sottocategoria: 'maniglioni', fornitore: 'Fimet', fornitoreLogo: fimetLogo, scheda: arizonaScheda,
    assi: [
      { chiave: 'diametro', etichetta: 'Diametro', suffisso: ' mm' },
      { chiave: 'lunghezza', etichetta: 'Lunghezza totale', suffisso: ' mm' },
      { chiave: 'interasse', etichetta: 'Interasse', suffisso: ' mm' }
    ],
    immagini: {
      'Acciaio inox satinato': arizonaInox,
      'Nero opaco': arizonaNero,
      'PVD giallo lucido': arizonaPvd
    }, varianti: [
    { codice: '800.20.500.300', finitura: 'Acciaio inox satinato', diametro: 20, lunghezza: 500, interasse: 300 },
    { codice: '800.25.500.300', finitura: 'Acciaio inox satinato', diametro: 25, lunghezza: 500, interasse: 300 },
    { codice: '800.25.700.500', finitura: 'Acciaio inox satinato', diametro: 25, lunghezza: 700, interasse: 500 },
    { codice: '800.30.800.600', finitura: 'Acciaio inox satinato', diametro: 30, lunghezza: 800, interasse: 600 },
    { codice: '800.30.1000.700', finitura: 'Acciaio inox satinato', diametro: 30, lunghezza: 1000, interasse: 700 },
    { codice: '800.30.1200.900', finitura: 'Acciaio inox satinato', diametro: 30, lunghezza: 1200, interasse: 900 },
    { codice: '800.30.1500.1300', finitura: 'Acciaio inox satinato', diametro: 30, lunghezza: 1500, interasse: 1300 },
    { codice: '800.25.500.300', finitura: 'Nero opaco', diametro: 25, lunghezza: 500, interasse: 300 },
    { codice: '800.25.500.300', finitura: 'PVD giallo lucido', diametro: 25, lunghezza: 500, interasse: 300 } ] }
];

/* Forma della rosetta (per il filtro) */
(() => {
  const ROS = {
    tonda: [1, 4, 6, 10, 11, 12, 13, 16, 18, 19, 20, 21, 23, 26, 28, 30, 31],
    quadra: [2, 3, 5, 7, 8, 9, 14, 15, 17, 22, 24, 25, 27, 29]
  };
  Object.entries(ROS).forEach(([forma, ids]) => ids.forEach(id => {
    const p = PRODUCTS.find(x => x.id === id);
    if (p) p.rosetta = forma;
  }));
})();

/* Kit scorrevoli abbinati a maniglie battenti selezionate (bidirezionale) */
(() => {
  const KITS = [
    { id: 22, abbinate: [2, 5, 7, 8, 9, 24] },   // Kit Easy Quadro: Quadra, Hèlia, Sirio, Trio, Alicia, Vera
    { id: 23, abbinate: [1, 6, 10, 20] },    // Kit Easy Tondo: Goccia, Volta, Punto, Flexa
    { id: 25, abbinate: [2, 5, 7, 8, 9, 24] },  // Kit Easy Quadro Cieco: stesse maniglie del Quadro
    { id: 26, abbinate: [1, 6, 10, 20] },     // Kit Easy Tondo Cieco: stesse maniglie del Tondo
    { id: 27, abbinate: [2, 5, 7, 8, 9, 24] }, // Kit Easy Quadro Chiave: stesse maniglie del Quadro
    { id: 28, abbinate: [1, 6, 10, 20] },     // Kit Easy Tondo Chiave: stesse maniglie del Tondo
    { id: 29, abbinate: [2, 5, 7, 8, 9, 24] }, // Kit Easy Quadro Yale: stesse maniglie del Quadro
    { id: 30, abbinate: [1, 6, 10, 20] }      // Kit Easy Tondo Yale: stesse maniglie del Tondo
  ];
  KITS.forEach(({ id: kitId, abbinate }) => {
    const KIT = PRODUCTS.find(p => p.id === kitId);
    if (!KIT) return;
    abbinate.forEach(id => {
      const p = PRODUCTS.find(x => x.id === id);
      if (p) p.abbinati = [...(p.abbinati || []), kitId];
    });
    KIT.abbinati = abbinate;
  });
})();

// Sfondi che simulano il metallo reale di ogni finitura
const FINISHES = {
  'Cromo satinato': 'linear-gradient(135deg,#e6e9ec,#b7bdc2 42%,#d3d8db 55%,#a7adb2)',
  'Cromo lucido': 'linear-gradient(135deg,#f6f8f9,#c3c9ce 32%,#7f878e 50%,#c9ced2 68%,#f1f3f5)',
  'Effetto cromo satinato': 'linear-gradient(135deg,#e3e6e9,#b2b8bd 45%,#cdd2d6 58%,#a4aab0)',
  'Acciaio inox satinato': 'linear-gradient(135deg,#dfe2e5,#aeb4b9 45%,#c9ced2 58%,#9ea4a9)',
  'Ottone lucido': 'linear-gradient(135deg,#f7e6ac,#cfa544 34%,#8f6a20 52%,#d9b463 70%,#f2dc93)',
  'Ottone satinato': 'linear-gradient(135deg,#e7d199,#b8933f 48%,#d3b168 60%,#a9863a)',
  'Oro satinato': 'linear-gradient(135deg,#ecca77,#c39a3c 48%,#dcbb63 60%,#b78e35)',
  'Oro lucido': 'linear-gradient(135deg,#ffe9a3,#e6b83f 30%,#a9791d 50%,#e9c05a 68%,#ffefb0)',
  'Bronzo': 'linear-gradient(135deg,#9a774e,#5c3f26 52%,#7d5836 70%,#4d341f)',
  'Nero opaco': 'linear-gradient(135deg,#3d3d40,#232325 60%,#2f2f31)',
  'Nero': 'linear-gradient(135deg,#38383b,#1c1c1e 60%,#2a2a2c)',
  'Grafite mat': 'linear-gradient(135deg,#6a6a6f,#45454a 55%,#565659)',
  'Bianco opaco': 'linear-gradient(135deg,#fdfdfb,#e7e6e0 60%,#f2f1ec)',
  'Bicolore cromo lucido / satinato': 'linear-gradient(90deg,#eef1f3 0%,#c3c9ce 49%,#a7adb2 51%,#cdd2d6 100%)',
  'Bicolore oro lucido / satinato': 'linear-gradient(90deg,#ffefb0 0%,#e6b83f 49%,#c39a3c 51%,#b78e35 100%)'
};
const finBg = (f) => FINISHES[f] || 'linear-gradient(135deg,#c8c8c8,#9a9a9a)';

const Ghost = () => (
  <svg className="ghost" viewBox="0 0 120 90" aria-hidden="true">
    <circle cx="30" cy="45" r="17" />
    <path d="M30 45 C48 45 60 40 96 41 C104 41 104 49 96 49 C60 50 48 45 30 45 Z" />
  </svg>
);
const Chip = ({ finitura }) => <span className="chip" style={{ background: finBg(finitura) }} title={finitura} />;

/* ---------- Scheda prodotto ---------- */
function ProductCard({ product: p, idx, isFav, onFav }) {
  const images = p.immagini || {};
  const optKey = p.optKey || 'finitura';
  const isVer = optKey === 'versione';
  const optKey2 = p.optKey2;
  const has2 = !!optKey2;
  const ufins = [...new Set(p.varianti.map(v => v[optKey]))];
  const uvers = has2 ? [...new Set(p.varianti.map(v => v[optKey2]))] : [];
  const keyOf = (v) => has2 ? v[optKey] + '||' + v[optKey2] : v[optKey];
  const firstWithImg = p.varianti.find(v => images[keyOf(v)]);
  const [selFin, setSelFin] = useState(firstWithImg ? firstWithImg[optKey] : (p.varianti[0] && p.varianti[0][optKey]));
  const [selVer, setSelVer] = useState(has2 ? (firstWithImg ? firstWithImg[optKey2] : (p.varianti[0] && p.varianti[0][optKey2])) : null);
  const [open, setOpen] = useState(false);

  const hasImages = Object.keys(images).length > 0;
  const selImg = images[has2 ? selFin + '||' + selVer : selFin];

  /* Misure a piu' assi (es. maniglioni): qui, nella card, la tabella si limita
     a mostrare le colonne corrette — la scelta della misura resta nella pagina
     prodotto completa. */
  const assi = p.assi;

  return (
    <article className="card" style={{ animationDelay: `${Math.min(idx * 45, 400)}ms` }}>
      <div className="media">
        <span className="cat-tag">{p.categoria}</span>
        <button className={`fav${isFav ? ' on' : ''}`} aria-pressed={isFav}
          aria-label={isFav ? 'Rimuovi dai preferiti' : 'Aggiungi ai preferiti'} onClick={onFav}>
          <Heart size={16} fill={isFav ? 'currentColor' : 'none'} />
        </button>
        <div className="media-body clickable" onClick={() => go('/prodotto/' + p.id)} role="link"
          tabIndex={0} onKeyDown={e => { if (e.key === 'Enter') go('/prodotto/' + p.id); }}
          aria-label={`Apri la scheda di ${p.nome}`}>
          {selImg ? (
            <img src={selImg} alt={`${p.nome} — ${selFin}`} loading="lazy" />
          ) : hasImages ? (
            <div className="noimg"><Ghost /><small>Immagine non disponibile</small></div>
          ) : (
            <div className="noimg"><Ghost /><small>In arrivo</small></div>
          )}
        </div>
        {hasImages && <div className="media-cap">{!isVer && <Chip finitura={selFin} />}<span>{selFin}{has2 ? ' · ' + selVer : ''}</span></div>}
      </div>
      <div className="cbody">
        <div className="name-row">
          <h2 className="name clickable" onClick={() => go('/prodotto/' + p.id)}>{p.nome}</h2>
          {p.fornitoreLogo
            ? <span className="forn-logo"><img src={p.fornitoreLogo} alt={p.fornitore} /></span>
            : <span className="forn-text">{p.fornitore}</span>}
        </div>
        <div className="submeta">
          <p className="sub">{subName(p.sottocategoria)}</p>
          <div className="matrow"><span className="lab">Materiale</span><span className="val">{p.materiale}</span></div>
        </div>
        {p.scheda
          ? <button className="scheda" onClick={() => openScheda(p.id, has2 ? selVer : (isVer ? selFin : null))}>
              <Download size={15} /> Scheda tecnica
            </button>
          : <button className="scheda disabled" disabled title="Scheda tecnica in arrivo">
              <Download size={15} /> Scheda tecnica <em>in arrivo</em>
            </button>}
        {hasImages ? (
          <>
            <div className="finishes">
              <div className="fbtns">
                {ufins.map((f, i) => isVer ? (
                  <button key={i} className={`vbtn${f === selFin ? ' active' : ''}`}
                    onClick={() => setSelFin(f)} aria-pressed={f === selFin}>{f}</button>
                ) : (
                  <button key={i} className={`fbtn${f === selFin ? ' active' : ''}`}
                    onClick={() => setSelFin(f)} title={f} aria-label={f} aria-pressed={f === selFin}>
                    <Chip finitura={f} />
                  </button>
                ))}
              </div>
              <span className="fhint">{isVer ? 'Scegli la versione' : 'Scegli la finitura'}</span>
            </div>
            {has2 && (
              <div className="finishes">
                <div className="fbtns">
                  {uvers.map((f, i) => (
                    <button key={i} className={`vbtn${f === selVer ? ' active' : ''}`}
                      onClick={() => setSelVer(f)} aria-pressed={f === selVer}>{f}</button>
                  ))}
                </div>
                <span className="fhint">Scegli la versione</span>
              </div>
            )}
          </>
        ) : (
          <div className="finishes">
            <span className="chips">{ufins.slice(0, 5).map((f, i) => <Chip key={i} finitura={f} />)}</span>
            <span className="fcount">{ufins.length} {ufins.length === 1 ? 'finitura' : 'finiture'}</span>
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
              <thead>
                <tr><th>Codice articolo</th><th>Finitura</th>
                  {assi ? assi.map(a => <th key={a.chiave} className="ver">{a.etichetta}</th>) : <th>Versione</th>}
                </tr>
              </thead>
              <tbody>
                {p.varianti.map((v, i) => {
                  const active = assi
                    ? v.finitura === selFin
                    : hasImages && v[optKey] === selFin && (!has2 || v[optKey2] === selVer);
                  return (
                  <tr key={i}
                    className={`${hasImages ? 'vrow' : ''}${active ? ' active' : ''}`}
                    onClick={hasImages ? () => { setSelFin(assi ? v.finitura : v[optKey]); if (has2) setSelVer(v[optKey2]); } : undefined}>
                    <td className="code">{v.codice}</td>
                    <td><span className="fin-cell"><Chip finitura={v.finitura} />{v.finitura}</span></td>
                    {assi
                      ? assi.map(a => <td key={a.chiave} className="ver">{v[a.chiave]}{a.suffisso || ''}</td>)
                      : <td className="ver">{v.versione}</td>}
                  </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ---------- Hash routing ---------- */
function parseHash() {
  const h = window.location.hash.replace(/^#\/?/, '');
  if (!h) return { view: 'cover' };
  if (h === 'indice') return { view: 'indice' };
  const mp = h.match(/^prodotto\/(\d+)$/);
  if (mp) return { view: 'prodotto', id: Number(mp[1]) };
  const m = h.match(/^cat\/(\d{2})(?:\/([a-z]+))?$/);
  if (m) return { view: 'categoria', cat: m[1], sub: m[2] || null };
  return { view: 'cover' };
}
/* Memoria della posizione di scroll per ogni schermata, così "Indietro"
   riporta esattamente dov'eri invece che all'inizio della pagina. */
const scrollMem = {};
const go = (path) => {
  scrollMem[window.location.hash] = window.scrollY;
  window.location.hash = path;
};
const goBack = () => {
  if (window.history.length > 1) window.history.back();
  else go('/indice');
};

/* ---------- Copertina ---------- */
function Cover() {
  return (
    <div className="cover">
      <div className="cover-top">
        <img className="clogo" src={logoCover} alt="Ferramenta Stigliano — dal 1869" />
        <h1 className="catgen">Catalogo Generale</h1>
        <p className="tagline">Ferramenta tecnica per i settori del legno e del vetro. Un catalogo ampio e selezionato, dal 1869.</p>
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
  const count = (id) => PRODUCTS.filter(p => p.categoria === id).length;
  return (
    <>
      <div className="topbar">
        <div className="shell">
          <img className="logo" src={logo} alt="Ferramenta Stigliano" onClick={() => go('/')} />
          <span className="section">Indice</span>
        </div>
      </div>
      <div className="shell">
        <div className="index-head">
          <h1>Categorie prodotto</h1>
          <hr className="rule" />
        </div>
        <div className="idx-list">
          {CATEGORIES.map(c => {
            const n = count(c.id);
            return (
              <button className="idx-row" key={c.id} onClick={() => go(`/cat/${c.id}`)}>
                <span className="idx-num">{c.id}</span>
                <span className="idx-name">{c.nome}</span>
                <span className="idx-dots" />
                <span className="idx-meta">
                  {n > 0
                    ? <span className="idx-badge">{n} prodotti</span>
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
  const info = CATEGORIES.find(c => c.id === cat) || CATEGORIES[0];
  const catProducts = PRODUCTS.filter(p => p.categoria === cat);
  const hasSubs = cat === '01';
  const sub = (hasSubs && subParam && SOTTOCATEGORIE.some(s => s.id === subParam))
    ? subParam : SOTTOCATEGORIE[0].id;
  const setSub = (id) => go('/cat/' + cat + '/' + id);
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
            {SOTTOCATEGORIE.map(s => {
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
        <ProductCatalog key={sub} products={subProducts} />
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

/* ---------- Catalogo prodotti (griglia + filtri) ---------- */
function ProductCatalog({ products }) {
  const [q, setQ] = useState('');
  const [mat, setMat] = useState([]);
  const [fin, setFin] = useState([]);
  const [ros, setRos] = useState([]);
  const [prod, setProd] = useState([]);
  const [favOnly, setFavOnly] = useState(false);
  const [fOpen, setFOpen] = useState(false);
  const [drop, setDrop] = useState(null); // quale tendina è aperta (una alla volta)
  const [favorites, setFavorites] = useState(() => {
    try { const s = localStorage.getItem('ferramenta_favorites'); return s ? JSON.parse(s) : []; }
    catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem('ferramenta_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const mats = useMemo(() => [...new Set(products.map(p => p.materiale))].sort((a, b) => a.localeCompare(b, 'it')), [products]);
  const fins = useMemo(() => [...new Set(products.flatMap(p => p.varianti.map(v => v.finitura)))].sort((a, b) => a.localeCompare(b, 'it')), [products]);
  const rosOpts = useMemo(() => ['tonda', 'quadra'].filter(r => products.some(p => p.rosetta === r)), [products]);
  const prods = useMemo(() => [...new Set(products.map(p => p.fornitore))].sort((a, b) => a.localeCompare(b, 'it')), [products]);

  // Dentro lo stesso filtro le scelte sono in OR, tra filtri diversi in AND.
  // `salta` esclude un filtro dal calcolo: serve per sapere quali opzioni di
  // quel filtro darebbero ancora risultati (le altre vengono disabilitate).
  const match = (p, salta) => {
    const t = q.trim().toLowerCase();
    const okQ = !t || p.nome.toLowerCase().includes(t) || p.varianti.some(v => v.codice.toLowerCase().includes(t));
    const okM = salta === 'mat' || !mat.length || mat.includes(p.materiale);
    const okF = salta === 'fin' || !fin.length || p.varianti.some(v => fin.includes(v.finitura));
    const okR = salta === 'ros' || !ros.length || ros.includes(p.rosetta);
    const okP = salta === 'prod' || !prod.length || prod.includes(p.fornitore);
    const okFav = !favOnly || favorites.includes(p.id);
    return okQ && okM && okF && okR && okP && okFav;
  };

  const filtered = products.filter(p => match(p, null));

  // Un'opzione è disponibile se, tenendo fermi gli altri filtri, dà almeno un risultato.
  const disponibile = (campo, test) => products.some(p => match(p, campo) && test(p));

  const activeCount = (q.trim() ? 1 : 0) + mat.length + fin.length + ros.length + prod.length + (favOnly ? 1 : 0);
  const rosLabel = (r) => r === 'tonda' ? 'Rosetta tonda' : 'Rosetta quadrata';
  const toggleFav = (id) => setFavorites(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  const toggleVal = (set, v) => set(prev => prev.includes(v) ? prev.filter(x => x !== v) : [...prev, v]);
  const resetAll = () => { setQ(''); setMat([]); setFin([]); setRos([]); setProd([]); setFavOnly(false); };

  // Menù a tendina con caselle: le scelte già fatte restano sempre cliccabili (per poterle togliere).
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
          </div>

          <div className={`filter-panel${fOpen ? ' open' : ''}`}>
            <div className="filter-inner">
              <div className="filter-grid">
                <Gruppo etichetta="Materiale" campo="mat" opzioni={mats} scelte={mat} set={setMat}
                  test={(p, o) => p.materiale === o} tutti="Tutti i materiali" plurale="materiali" />
                <Gruppo etichetta="Produttore" campo="prod" opzioni={prods} scelte={prod} set={setProd}
                  test={(p, o) => p.fornitore === o} tutti="Tutti i produttori" plurale="produttori" />
                <Gruppo etichetta="Finitura" campo="fin" opzioni={fins} scelte={fin} set={setFin}
                  test={(p, o) => p.varianti.some(v => v.finitura === o)} tutti="Tutte le finiture" plurale="finiture" />
                {rosOpts.length > 1 && (
                  <Gruppo etichetta="Rosetta" campo="ros" opzioni={rosOpts} scelte={ros} set={setRos}
                    test={(p, o) => p.rosetta === o} label={rosLabel} tutti="Tutte le rosette" plurale="rosette" />
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
        <div className="gallery">
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

function Footer() {
  return (
    <footer>
      <div className="shell">
        <span>Catalogo Ferramenta <b>Stigliano</b> · <span className="est">dal 1869</span></span>
        <span>I preferiti restano salvati in questo browser</span>
      </div>
    </footer>
  );
}

/* ---------- Pagina prodotto dedicata ---------- */
function RelatedCard({ p }) {
  const img = p.immagini && p.immagini[Object.keys(p.immagini)[0]];
  return (
    <button className="rel-card" onClick={() => go('/prodotto/' + p.id)}>
      <div className="rel-media">
        {img ? <img src={img} alt={p.nome} loading="lazy" /> : <div className="noimg"><Ghost /></div>}
      </div>
      <div className="rel-body">
        <span className="rel-name">{p.nome}</span>
        <span className="rel-forn">{p.fornitore}</span>
      </div>
      <ChevronRight size={16} className="rel-arrow" />
    </button>
  );
}

/* Sezione a tendina: chiusa di default, si apre al clic sul titolo. */
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

function RelatedRow({ title, ids }) {
  const items = (ids || []).map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
  return (
    <SezioneTendina title={title} badge={items.length}>
      {items.length > 0 ? (
        <div className="rel-grid">{items.map(p => <RelatedCard key={p.id} p={p} />)}</div>
      ) : (
        <div className="rel-empty">
          <span className="rel-badge">In preparazione</span>
          <p>Questa sezione verrà presto popolata con gli articoli collegati.</p>
        </div>
      )}
    </SezioneTendina>
  );
}

function ProductDetail({ id }) {
  const p = PRODUCTS.find(x => x.id === id);
  const info = CATEGORIES.find(c => c.id === (p && p.categoria)) || CATEGORIES[0];
  const images = (p && p.immagini) || {};
  const optKey = (p && p.optKey) || 'finitura';
  const isVer = optKey === 'versione';
  const optKey2 = p && p.optKey2;
  const has2 = !!optKey2;
  const ufins = p ? [...new Set(p.varianti.map(v => v[optKey]))] : [];
  const uvers = has2 ? [...new Set(p.varianti.map(v => v[optKey2]))] : [];
  const keyOf = (v) => has2 ? v[optKey] + '||' + v[optKey2] : v[optKey];
  const firstWithImg = p && p.varianti.find(v => images[keyOf(v)]);
  const [selFin, setSelFin] = useState(firstWithImg ? firstWithImg[optKey] : (p && p.varianti[0] && p.varianti[0][optKey]));
  const [selVer, setSelVer] = useState(has2 ? (firstWithImg ? firstWithImg[optKey2] : (p && p.varianti[0] && p.varianti[0][optKey2])) : null);
  const [favorites, setFavorites] = useState(() => {
    try { const s = localStorage.getItem('ferramenta_favorites'); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  useEffect(() => { localStorage.setItem('ferramenta_favorites', JSON.stringify(favorites)); }, [favorites]);

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

  const hasImages = Object.keys(images).length > 0;
  const selImg = images[has2 ? selFin + '||' + selVer : selFin];
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
          <button className="crumb-back" onClick={goBack}><ChevronLeft size={15} /> Indietro</button>
          <span className="crumb-sep">/</span>
          <button className="crumb-link" onClick={() => go('/indice')}>Indice</button>
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
                  : hasImages ? <div className="noimg"><Ghost /><small>Immagine non disponibile</small></div>
                  : <div className="noimg"><Ghost /><small>In arrivo</small></div>}
              </div>
              {hasImages && <div className="media-cap">{!isVer && <Chip finitura={selFin} />}<span>{selFin}{has2 ? ' · ' + selVer : ''}</span></div>}
            </div>
          </div>

          <div className="pdp-info">
            <div className="name-row">
              <h1 className="pdp-name">{p.nome}</h1>
              {p.fornitoreLogo
                ? <span className="forn-logo"><img src={p.fornitoreLogo} alt={p.fornitore} /></span>
                : <span className="forn-text">{p.fornitore}</span>}
            </div>
            <p className="pdp-sub">{subName(p.sottocategoria)}</p>
            <hr className="rule" />
            <div className="pdp-specs">
              <div className="pdp-spec"><span className="k">Materiale</span><span className="v">{p.materiale}</span></div>
              <div className="pdp-spec"><span className="k">Fornitore</span><span className="v">{p.fornitore}</span></div>
            </div>

            {hasImages && (
              <div className="finishes pdp-finishes">
                <span className="fhint">{isVer ? 'Scegli la versione' : 'Scegli la finitura'}</span>
                <div className="fbtns">
                  {ufins.map((f, i) => isVer ? (
                    <button key={i} className={`vbtn${f === selFin ? ' active' : ''}`}
                      onClick={() => setSelFin(f)} aria-pressed={f === selFin}>{f}</button>
                  ) : (
                    <button key={i} className={`fbtn${f === selFin ? ' active' : ''}`}
                      onClick={() => setSelFin(f)} title={f} aria-label={f} aria-pressed={f === selFin}>
                      <Chip finitura={f} />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {hasImages && has2 && (
              <div className="finishes pdp-finishes">
                <span className="fhint">Scegli la versione</span>
                <div className="fbtns">
                  {uvers.map((f, i) => (
                    <button key={i} className={`vbtn${f === selVer ? ' active' : ''}`}
                      onClick={() => setSelVer(f)} aria-pressed={f === selVer}>{f}</button>
                  ))}
                </div>
              </div>
            )}

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

            {p.scheda
              ? <button className="scheda" onClick={() => openScheda(p.id, has2 ? selVer : (isVer ? selFin : null))}><Download size={15} /> Scheda tecnica</button>
              : <button className="scheda disabled" disabled title="Scheda tecnica in arrivo"><Download size={15} /> Scheda tecnica <em>in arrivo</em></button>}

            <div className="pdp-variants">
              <h3>Varianti disponibili ({p.varianti.length})</h3>
              <table className="variants">
                <thead><tr><th>Codice articolo</th><th>Finitura</th>
                  {assi ? assi.map(a => <th key={a.chiave} className="ver">{a.etichetta}</th>) : <th>Versione</th>}
                </tr></thead>
                <tbody>
                  {p.varianti.map((v, i) => {
                    const active = assi
                      ? (v.finitura === selFin && mis && assi.every(a => v[a.chiave] === mis[a.chiave]))
                      : hasImages && v[optKey] === selFin && (!has2 || v[optKey2] === selVer);
                    const scegliRiga = () => {
                      if (assi) {
                        setSelFin(v.finitura);
                        const o = {}; assi.forEach(a => { o[a.chiave] = v[a.chiave]; });
                        setMis(o); setUltimoAsse(null);
                      } else {
                        setSelFin(v[optKey]); if (has2) setSelVer(v[optKey2]);
                      }
                    };
                    return (
                    <tr key={i} className={`${hasImages ? 'vrow' : ''}${active ? ' active' : ''}`}
                      onClick={hasImages ? scegliRiga : undefined}>
                      <td className="code">{v.codice}</td>
                      <td><span className="fin-cell"><Chip finitura={v.finitura} />{v.finitura}</span></td>
                      {assi
                        ? assi.map(a => <td key={a.chiave} className="ver">{v[a.chiave]}{a.suffisso || ''}</td>)
                        : <td className="ver">{v.versione}</td>}
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
        <RelatedRow title="Articoli abbinati o complementari" ids={p.abbinati} />
        <RelatedRow title="Articoli necessari" ids={p.necessari} />
      </div>
      <Footer />
    </>
  );
}

/* Visualizzatore scheda tecnica in pagina (immagine a schermo intero):
   funziona sempre, anche da telefono e dentro l'anteprima protetta. */
function SchedaViewer() {
  const [item, setItem] = useState(null);
  useEffect(() => {
    const onOpen = (e) => {
      const { id, ver } = e.detail || {};
      const p = PRODUCTS.find(x => x.id === id);
      if (!p) return;
      const src = pickScheda(SCHEDA_IMG[p.id], ver);
      if (!src) return;
      setItem({ src, title: p.nome, ver: pickScheda(p.scheda, ver) !== p.scheda ? ver : null, pdf: pickScheda(p.scheda, ver) });
      document.body.style.overflow = 'hidden';
    };
    const onKey = (e) => { if (e.key === 'Escape') { setItem(null); document.body.style.overflow = ''; } };
    window.addEventListener('open-scheda', onOpen);
    window.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('open-scheda', onOpen); window.removeEventListener('keydown', onKey); };
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

export default function Catalogo() {
  const [route, setRoute] = useState(parseHash());

  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
    const onHash = () => {
      setRoute(parseHash());
      const saved = scrollMem[window.location.hash];
      if (saved != null) {
        delete scrollMem[window.location.hash];
        requestAnimationFrame(() => requestAnimationFrame(() => window.scrollTo(0, saved)));
      } else {
        window.scrollTo(0, 0);
      }
    };
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
