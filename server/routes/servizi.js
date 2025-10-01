const express = require('express');
const router = express.Router();

// CONTROLLERS
const postInteriorDesignController = require("../controllers/postConsulenzaInteriorDesign.js");
const postManutenzioneStraordinariaController = require("../controllers/postConsulenzaManutenzioneStraordinaria.js");
const postManutenzioneOrdinariaController = require("../controllers/postConsulenzaManutenzioneOrdinaria.js");
const postConsulenzaArchitetturaController = require("../controllers/postConsulenzaArchitettura.js");
const postServizioTraslocoController = require("../controllers/postServizioTrasloco.js");
const postConsulenzaFinanziariaController = require("../controllers/postConsulenzaFinanziario.js");
const postServizioGeometraController = require('../controllers/postServizioGeometra.js');
const postAvvocatoController = require('../controllers/postAvvocato.js')

//ROUTES
router.post('/consulenza-interior-design', postInteriorDesignController);
router.post('/consulenza-manutenzione-straordinaria', postManutenzioneStraordinariaController);
router.post('/consulenza-manutenzione-ordinaria', postManutenzioneOrdinariaController);
router.post('/consulenza-architettura', postConsulenzaArchitetturaController);
router.post('/trasloco', postServizioTraslocoController);
router.post('/consulenza-finanziario', postConsulenzaFinanziariaController);
router.post('/servizio-geometra', postServizioGeometraController)
router.post('/avvocato', postAvvocatoController);

module.exports = router;