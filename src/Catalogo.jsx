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
  { id: 1, categoria: '01', nome: 'Goccia', materiale: 'Zama / Zinc', sottocategoria: 'battenti', dimensioni: '45x45mm (ø 7mm)', fornitore: 'Fimet', fornitoreLogo: fimetLogo,
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
  { id: 2, categoria: '01', nome: 'Quadra', materiale: 'Zama / Zinc', sottocategoria: 'battenti', dimensioni: '50x127mm', fornitore: 'Fimet', fornitoreLogo: fimetLogo,
    immagini: {
      'Cromo satinato': quadraCromoSat,
      'Cromo lucido': quadraCromoLuc
    }, varianti: [
    { codice: '168201B05', finitura: 'Cromo satinato', versione: 'Patent' },
    { codice: '168201B04', finitura: 'Cromo lucido', versione: 'Patent' },
    { codice: '168201B01', finitura: 'Ottone lucido', versione: 'Patent' } ] },
  { id: 3, categoria: '01', nome: 'Angolo', materiale: 'Alluminio', sottocategoria: 'battenti', dimensioni: '144x50mm', fornitore: 'Ital Linea', fornitoreLogo: italineaLogo,
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
  { id: 4, categoria: '01', nome: 'Round', materiale: 'Alluminio', sottocategoria: 'battenti', dimensioni: '142x50mm (ø 50mm)', fornitore: 'Forme', fornitoreLogo: formeLogo,
    immagini: {
      'Cromo satinato': roundCromoSat,
      'Nero opaco': roundNeroOpaco,
      'Bianco opaco': roundBiancoOpaco
    }, varianti: [
    { codice: 'A519RTX59CS', finitura: 'Cromo satinato', versione: 'Patent' },
    { codice: 'A519RTX59NE', finitura: 'Nero opaco', versione: 'Patent' },
    { codice: 'A519RTX59BO', finitura: 'Bianco opaco', versione: 'Patent' },
    { codice: 'A519RTX59OS', finitura: 'Oro satinato', versione: 'Patent' } ] },
  { id: 5, categoria: '01', nome: 'Hèlia', materiale: 'Zama / Zinc', sottocategoria: 'battenti', dimensioni: 'Standard', fornitore: 'AD-TECH', fornitoreLogo: adtechLogo,
    immagini: {
      'Cromo satinato': heliaCromoSat,
      'Nero opaco': heliaNero
    }, varianti: [
    { codice: '121RBQCS', finitura: 'Cromo satinato', versione: 'Patent' },
    { codice: '121RBQNE', finitura: 'Nero opaco', versione: 'Patent' } ] },
  { id: 6, categoria: '01', nome: 'Volta', materiale: 'Zama / Zinc', sottocategoria: 'battenti', dimensioni: 'Standard', fornitore: 'AD-TECH', fornitoreLogo: adtechLogo,
    immagini: {
      'Cromo satinato': voltaCromoSat
    }, varianti: [
    { codice: '122RBTCS', finitura: 'Cromo satinato', versione: 'Patent' } ] },
  { id: 7, categoria: '01', nome: 'Sirio', materiale: 'Zama / Zinc', sottocategoria: 'battenti', dimensioni: 'Standard', fornitore: 'Arieni', fornitoreLogo: arieniLogo,
    immagini: {
      'Cromo satinato': sirioCromoSat,
      'Bicolore cromo lucido / satinato': sirioBicolore
    }, varianti: [
    { codice: '9051CS', finitura: 'Cromo satinato', versione: 'Patent' },
    { codice: '9051CS/CL', finitura: 'Bicolore cromo lucido / satinato', versione: 'Patent' } ] },
  { id: 8, categoria: '01', nome: 'Trio', materiale: 'Zama / Zinc', sottocategoria: 'battenti', dimensioni: 'Standard', fornitore: 'Linea Calì', fornitoreLogo: lineacaliLogo,
    immagini: {
      'Cromo satinato': trioCromoSat,
      'Cromo lucido': trioCromoLuc,
      'Nero opaco': trioNeroOpaco
    }, varianti: [
    { codice: '485RB0880CCS', finitura: 'Cromo satinato', versione: 'Patent' },
    { codice: '485RB0880CCL', finitura: 'Cromo lucido', versione: 'Patent' },
    { codice: '485RB0880CNE', finitura: 'Nero opaco', versione: 'Patent' } ] },
  { id: 9, categoria: '01', nome: 'Alicia', materiale: 'Zama / Zinc', sottocategoria: 'battenti', dimensioni: 'Standard', fornitore: 'Fimet', fornitoreLogo: fimetLogo,
    immagini: {
      'Cromo satinato': aliciaCromoSat,
      'Oro satinato': aliciaOttoneSat
    }, varianti: [
    { codice: '1220213BCS', finitura: 'Cromo satinato', versione: 'Patent' },
    { codice: '1220213BOS', finitura: 'Oro satinato', versione: 'Patent' } ] },
  { id: 10, categoria: '01', nome: 'Punto', materiale: 'Zama / Zinc', sottocategoria: 'battenti', dimensioni: 'Standard', fornitore: 'Fimet', fornitoreLogo: fimetLogo,
    immagini: {
      'Cromo satinato': puntoCromoSat,
      'Nero opaco': puntoNeroOpaco
    }, varianti: [
    { codice: '1205208BCS', finitura: 'Cromo satinato', versione: 'Patent' },
    { codice: '1205208BNE', finitura: 'Nero opaco', versione: 'Patent' } ] },
  { id: 11, categoria: '01', nome: 'Robot', materiale: 'Chromall®', sottocategoria: 'battenti', dimensioni: 'Rosetta Ø50', fornitore: 'Colombo Design', fornitoreLogo: colomboLogo, scheda: robotScheda,
    immagini: {
      'Cromo satinato': robotCromoSat,
      'Oro lucido': robotOroLuc
    }, varianti: [
    { codice: 'CD41 cromat', finitura: 'Cromo satinato', versione: 'Patent' },
    { codice: 'CD41 oroplus', finitura: 'Oro lucido', versione: 'Patent' } ] },
  { id: 12, categoria: '01', nome: 'Robotre', materiale: 'Chromall®', sottocategoria: 'battenti', dimensioni: 'Rosetta Ø50', fornitore: 'Colombo Design', fornitoreLogo: colomboLogo, scheda: robotreScheda,
    immagini: {
      'Cromo satinato': robotreCromoSat
    }, varianti: [
    { codice: 'CD91 cromat', finitura: 'Cromo satinato', versione: 'Patent' } ] },
  { id: 13, categoria: '01', nome: 'Roboquattro', materiale: 'Chromall®', sottocategoria: 'battenti', dimensioni: 'Rosetta Ø50', fornitore: 'Colombo Design', fornitoreLogo: colomboLogo, scheda: roboqScheda,
    immagini: {
      'Cromo satinato': roboqCromoSat,
      'Oro lucido': roboqOroLuc,
      'Oro satinato': roboqOroSat
    }, varianti: [
    { codice: 'ID41 cromat', finitura: 'Cromo satinato', versione: 'Patent' },
    { codice: 'ID41 oroplus', finitura: 'Oro lucido', versione: 'Patent' },
    { codice: 'ID41 oromat', finitura: 'Oro satinato', versione: 'Patent' } ] },
  { id: 14, categoria: '01', nome: 'RoboquattroS', materiale: 'Chromall®', sottocategoria: 'battenti', dimensioni: 'Rosetta 52×52', fornitore: 'Colombo Design', fornitoreLogo: colomboLogo, scheda: roboqsScheda,
    immagini: {
      'Cromo satinato': roboqsCromoSat
    }, varianti: [
    { codice: 'ID51 cromat', finitura: 'Cromo satinato', versione: 'Patent' } ] },
  { id: 15, categoria: '01', nome: 'RobocinqueS', materiale: 'Chromall®', sottocategoria: 'battenti', dimensioni: 'Rosetta 52×52', fornitore: 'Colombo Design', fornitoreLogo: colomboLogo, scheda: robo5sScheda,
    immagini: {
      'Cromo satinato': robo5sCromoSat,
      'Nero opaco': robo5sNeroOpaco,
      'Grafite mat': robo5sGrafiteMat
    }, varianti: [
    { codice: 'ID71 cromat', finitura: 'Cromo satinato', versione: 'Patent' },
    { codice: 'ID71 neromat', finitura: 'Nero opaco', versione: 'Patent' },
    { codice: 'ID71 grafitemat', finitura: 'Grafite mat', versione: 'Patent' } ] },
  { id: 16, categoria: '01', nome: 'Robot6', materiale: 'Chromall®', sottocategoria: 'battenti', dimensioni: 'Rosetta Ø50', fornitore: 'Colombo Design', fornitoreLogo: colomboLogo, scheda: robot6Scheda,
    immagini: {
      'Cromo satinato': robot6CromoSat,
      'Nero opaco': robot6NeroOpaco
    }, varianti: [
    { codice: 'ID 81 R-RY CM', finitura: 'Cromo satinato', versione: 'Patent' },
    { codice: 'ID 81 R-RY NM', finitura: 'Nero opaco', versione: 'Patent' } ] },
  { id: 17, categoria: '01', nome: 'Robot6S', materiale: 'Chromall®', sottocategoria: 'battenti', dimensioni: 'Rosetta 50×50', fornitore: 'Colombo Design', fornitoreLogo: colomboLogo, scheda: robot6sScheda,
    immagini: {
      'Cromo satinato': robot6sCromoSat,
      'Nero opaco': robot6sNeroOpaco
    }, varianti: [
    { codice: 'ID 91 R-RY CM', finitura: 'Cromo satinato', versione: 'Patent' },
    { codice: 'ID 91 R-RY NM', finitura: 'Nero opaco', versione: 'Patent' } ] },
  { id: 18, categoria: '01', nome: 'Peter', materiale: 'Ottone', sottocategoria: 'battenti', dimensioni: 'Rosetta Ø50', fornitore: 'Colombo Design', fornitoreLogo: colomboLogo, scheda: peterScheda,
    immagini: {
      'Oro lucido': peterOroLuc
    }, varianti: [
    { codice: 'ID 11 R-RY OL', finitura: 'Oro lucido', versione: 'Patent' } ] },
  { id: 19, categoria: '01', nome: 'Amalfi', materiale: 'Zama / Zinc', sottocategoria: 'battenti', dimensioni: 'Rosetta tonda Ø50', fornitore: 'Forme', fornitoreLogo: formeLogo, scheda: amalfiScheda,
    immagini: {
      'Oro lucido': amalfiOroLuc
    }, varianti: [
    { codice: 'A118 RTX07 L01', finitura: 'Oro lucido', versione: 'Patent' },
    { codice: 'A118 RTX07 L02', finitura: 'Oro satinato', versione: 'Patent' } ] },
  { id: 20, categoria: '01', nome: 'Flexa', materiale: 'Zama / Zinc', sottocategoria: 'battenti', dimensioni: 'Rosetta tonda Ø50', fornitore: 'Forme', fornitoreLogo: formeLogo, scheda: flexaScheda,
    immagini: {
      'Cromo satinato': flexaCromoSat,
      'Oro lucido': flexaOroLuc
    }, varianti: [
    { codice: 'A132 RTX07 C02', finitura: 'Cromo satinato', versione: 'Patent' },
    { codice: 'A132 RTX07 L01', finitura: 'Oro lucido', versione: 'Patent' } ] },
  { id: 21, categoria: '01', nome: 'Pegaso', materiale: 'Zama / Zinc', sottocategoria: 'battenti', dimensioni: 'Rosetta tonda Ø50', fornitore: 'Forme', fornitoreLogo: formeLogo, scheda: pegasoScheda,
    immagini: {
      'Oro lucido': pegasoOroLuc
    }, varianti: [
    { codice: 'A127 RTX59 L01', finitura: 'Oro lucido', versione: 'Patent' },
    { codice: 'A127 RTX59 L01/L02', finitura: 'Bicolore oro lucido / satinato', versione: 'Patent' } ] },
  { id: 22, categoria: '01', nome: 'Kit Easy Quadro', materiale: 'Zama / Zinc', sottocategoria: 'scorrevoli', dimensioni: 'Nicchia 53×53 · foro ø48 mm', fornitore: 'Fimet', fornitoreLogo: fimetLogo, scheda: easyScheda, optKey: 'finitura', optKey2: 'versione',
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
  { id: 23, categoria: '01', nome: 'Kit Easy Tondo', materiale: 'Zama / Zinc', sottocategoria: 'scorrevoli', dimensioni: 'Nicchia Ø57 · foro ø48 mm', fornitore: 'Fimet', fornitoreLogo: fimetLogo, scheda: easyTondoScheda, optKey: 'finitura', optKey2: 'versione',
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
  { id: 24, categoria: '01', nome: 'Vera', materiale: 'Ottone', sottocategoria: 'battenti', dimensioni: '147×67mm · Rosetta quadra 50×50', fornitore: 'Arieni', fornitoreLogo: arieniLogo, scheda: veraScheda,
    immagini: {
      'Nero opaco': veraNeroOpaco,
      'Bianco opaco': veraBiancoOpaco
    }, varianti: [
    { codice: '4702 NE', finitura: 'Nero opaco', versione: 'Patent' },
    { codice: '4702 BNC', finitura: 'Bianco opaco', versione: 'Patent' } ] }
];

/* Forma della rosetta (per il filtro) */
(() => {
  const ROS = {
    tonda: [1, 4, 6, 10, 11, 12, 13, 16, 18, 19, 20, 21, 23],
    quadra: [2, 3, 5, 7, 8, 9, 14, 15, 17, 22, 24]
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
    { id: 23, abbinate: [1, 6, 10, 20] }     // Kit Easy Tondo: Goccia, Volta, Punto, Flexa
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
          ? <a className="scheda" href={p.scheda} download={`scheda-tecnica-${p.nome}.pdf`} target="_blank" rel="noopener">
              <Download size={15} /> Scheda tecnica
            </a>
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
                <tr><th>Codice articolo</th><th>Finitura</th><th>Versione</th></tr>
              </thead>
              <tbody>
                {p.varianti.map((v, i) => {
                  const active = hasImages && v[optKey] === selFin && (!has2 || v[optKey2] === selVer);
                  return (
                  <tr key={i}
                    className={`${hasImages ? 'vrow' : ''}${active ? ' active' : ''}`}
                    onClick={hasImages ? () => { setSelFin(v[optKey]); if (has2) setSelVer(v[optKey2]); } : undefined}>
                    <td className="code">{v.codice}</td>
                    <td><span className="fin-cell"><Chip finitura={v.finitura} />{v.finitura}</span></td>
                    <td className="ver">{v.versione}</td>
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
  const [mat, setMat] = useState('');
  const [fin, setFin] = useState('');
  const [ros, setRos] = useState('');
  const [favOnly, setFavOnly] = useState(false);
  const [fOpen, setFOpen] = useState(false);
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

  const filtered = products.filter(p => {
    const t = q.trim().toLowerCase();
    const okQ = !t || p.nome.toLowerCase().includes(t) || p.varianti.some(v => v.codice.toLowerCase().includes(t));
    const okM = !mat || p.materiale === mat;
    const okF = !fin || p.varianti.some(v => v.finitura === fin);
    const okR = !ros || p.rosetta === ros;
    const okFav = !favOnly || favorites.includes(p.id);
    return okQ && okM && okF && okR && okFav;
  });

  const activeCount = (q.trim() ? 1 : 0) + (mat ? 1 : 0) + (fin ? 1 : 0) + (ros ? 1 : 0) + (favOnly ? 1 : 0);
  const rosLabel = (r) => r === 'tonda' ? 'Rosetta tonda' : 'Rosetta quadrata';
  const toggleFav = (id) => setFavorites(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  const resetAll = () => { setQ(''); setMat(''); setFin(''); setRos(''); setFavOnly(false); };

  return (
    <>
      <div className="toolbar-wrap">
        <div className="shell">
          <div className="filterbar">
            <button className={`filter-trigger${fOpen ? ' open' : ''}`} aria-expanded={fOpen}
              onClick={() => setFOpen(o => !o)}>
              <SlidersHorizontal size={16} />
              <span>Filtra prodotti</span>
              {activeCount > 0 && <span className="filter-badge">{activeCount}</span>}
              <ChevronDown className="fchev" size={16} />
            </button>
            <span className="count">
              <b>{filtered.length}</b> {filtered.length === 1 ? 'prodotto' : 'prodotti'}
            </span>
          </div>

          <div className={`filter-panel${fOpen ? ' open' : ''}`}>
            <div className="filter-inner">
              <label className="search">
                <Search size={16} />
                <input type="text" value={q} onChange={e => setQ(e.target.value)}
                  placeholder="Cerca per nome o codice articolo…" autoComplete="off" aria-label="Cerca" />
              </label>
              <div className="filter-grid">
                <label className="fld">
                  <span className="fld-k">Materiale</span>
                  <select value={mat} onChange={e => setMat(e.target.value)}>
                    <option value="">Tutti i materiali</option>
                    {mats.map(m => <option key={m} value={m}>{m}</option>)}
                  </select>
                </label>
                <label className="fld">
                  <span className="fld-k">Finitura</span>
                  <select value={fin} onChange={e => setFin(e.target.value)}>
                    <option value="">Tutte le finiture</option>
                    {fins.map(f => <option key={f} value={f}>{f}</option>)}
                  </select>
                </label>
                {rosOpts.length > 1 && (
                  <label className="fld">
                    <span className="fld-k">Rosetta</span>
                    <select value={ros} onChange={e => setRos(e.target.value)}>
                      <option value="">Tutte le rosette</option>
                      {rosOpts.map(r => <option key={r} value={r}>{rosLabel(r)}</option>)}
                    </select>
                  </label>
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

function RelatedRow({ title, ids }) {
  const items = (ids || []).map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
  return (
    <section className="rel-section">
      <div className="rel-head"><h2>{title}</h2></div>
      {items.length > 0 ? (
        <div className="rel-grid">{items.map(p => <RelatedCard key={p.id} p={p} />)}</div>
      ) : (
        <div className="rel-empty">
          <span className="rel-badge">In preparazione</span>
          <p>Questa sezione verrà presto popolata con gli articoli collegati.</p>
        </div>
      )}
    </section>
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
              {p.dimensioni && <div className="pdp-spec"><span className="k">Dimensioni</span><span className="v">{p.dimensioni}</span></div>}
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

            {p.scheda
              ? <a className="scheda" href={p.scheda} download={`scheda-tecnica-${p.nome}.pdf`} target="_blank" rel="noopener"><Download size={15} /> Scheda tecnica</a>
              : <button className="scheda disabled" disabled title="Scheda tecnica in arrivo"><Download size={15} /> Scheda tecnica <em>in arrivo</em></button>}

            <div className="pdp-variants">
              <h3>Varianti disponibili ({p.varianti.length})</h3>
              <table className="variants">
                <thead><tr><th>Codice articolo</th><th>Finitura</th><th>Versione</th></tr></thead>
                <tbody>
                  {p.varianti.map((v, i) => {
                    const active = hasImages && v[optKey] === selFin && (!has2 || v[optKey2] === selVer);
                    return (
                    <tr key={i} className={`${hasImages ? 'vrow' : ''}${active ? ' active' : ''}`}
                      onClick={hasImages ? () => { setSelFin(v[optKey]); if (has2) setSelVer(v[optKey2]); } : undefined}>
                      <td className="code">{v.codice}</td>
                      <td><span className="fin-cell"><Chip finitura={v.finitura} />{v.finitura}</span></td>
                      <td className="ver">{v.versione}</td>
                    </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <RelatedRow title="Articoli abbinati o complementari" ids={p.abbinati} />
        <RelatedRow title="Articoli necessari" ids={p.necessari} />
      </div>
      <Footer />
    </>
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
    </div>
  );
}
