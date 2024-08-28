const express = require("express");
const router = express.Router();
const casoController = require("../controllers/casoController");

router.post("/caso", casoController.createCaso);
router.get("/caso", casoController.getCasos);
router.get("/caso/:id", casoController.getCasoById);
router.put("/caso/:id", casoController.updateCaso);
router.delete("/caso/:id", casoController.deleteCaso);
router.get("/caso/estado", casoController.getCasosByEstado);

module.exports = router;
