const express = require('express');
const router = express.Router();

//CONTROLLERS
const postConsulenzaImmobiliare = require('../controllers/post_consulenza_immobiliare.js');

// ROUTES
router.post('/', postConsulenzaImmobiliare);

module.exports = router;