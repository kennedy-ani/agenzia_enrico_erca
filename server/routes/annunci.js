const express = require('express');
const router = express.Router();

// CONTROLLERS
const getAnnunci = require("../controllers/get_annunci_controller.js");
const getAnnunciImg = require("../controllers/get_annunci_img_controller.js")
const ricercaAnnunci = require("../controllers/ricerca_annunci_controller.js");
const updateAnnunci = require("../controllers/get_annunci_controller.js");
const deleteAnnunci = require("../controllers/get_annunci_controller.js");

//ROUTES
router.get('/', getAnnunci);
// get images
router.get("/:id/images", getAnnunciImg);

//For searching listing available
router.get('/ricerca', ricercaAnnunci);
//router.put('/', updateAnnunci);
//router.delete('/', deleteAnnunci);

module.exports = router;