const express = require('express');
const router = express.Router();

// CONTROLLERS
const postInteriorDesignController = require("../controllers/postConsulenzaInteriorDesign.js");
const postManutenzioneStraordinariaController = require("../controllers/postConsulenzaManutenzioneStraordinaria.js");
const postManutenzioneOrdinariaController = require("../controllers/postConsulenzaManutenzioneOrdinaria.js");
const postConsulenzaArchitetturaController = require("../controllers/postConsulenzaArchitettura.js");

//ROUTES
router.post('/consulenza-interior-design', postInteriorDesignController);
router.post('/consulenza-manutenzione-straordinaria', postManutenzioneStraordinariaController);
router.post('/consulenza-manutenzione-ordinaria', postManutenzioneOrdinariaController);
router.post('/consulenza-architettura', postConsulenzaArchitetturaController);

module.exports = router;