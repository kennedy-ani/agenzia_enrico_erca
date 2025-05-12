const express = require('express');
const router = express.Router();

// CONTROLLERS
const getAnnunci = require("../controllers/get_annunci_controller.js");
const postAnnunci = require("../controllers/get_annunci_controller.js");
const updateAnnunci = require("../controllers/get_annunci_controller.js");
const deleteAnnunci = require("../controllers/get_annunci_controller.js");

//ROUTES
router.get('/', getAnnunci);
//router.post('/', postAnnunci);
//router.put('/', updateAnnunci);
//router.delete('/', deleteAnnunci);

module.exports = router;