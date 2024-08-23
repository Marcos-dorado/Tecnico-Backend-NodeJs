// const express = require("express");
// const casoSchema = require("../models/caso");

// const router = express.Router();

// // Crear Categoría
// router.post("/caso", (req, res) => {
//   const caso = new casoSchema(req.body);
//   caso.save()
//     .then((data) => res.json(data))
//     .catch((error) => res.json({ message: error }));
// });

// router.get("/caso", (req, res) => {
//   casoSchema
//     .find()
//     .then((data) => res.json(data))
//     .catch((error) => res.json({ message: error }));
// });

// router.get("/caso/:id", (req, res) => {
//   const { id } = req.params;
//   casoSchema
//     .findById(id)
//     .then((data) => res.json(data))
//     .catch((error) => res.json({ message: error }));
// });

// router.put("/caso/:id", (req, res) => {
//   const { id } = req.params;
//   const { descripcion, estado } = req.body; // No incluyas fechaCreacion aquí

//   casoSchema
//     .updateOne({ _id: id }, { $set: { descripcion, estado } })
//     .then((data) => res.json(data))
//     .catch((error) => res.json({ message: error }));
// });


// router.delete("/caso/:id", (req, res) => {
//   const { id } = req.params;
//   casoSchema
//     .deleteOne({ _id: id })
//     .then((data) => res.json(data))
//     .catch((error) => res.json({ message: error }));
// });

// module.exports = router;






const express = require("express");
const router = express.Router();
const casoController = require("../controllers/casoController");

router.post("/caso", casoController.createCaso);
router.get("/caso", casoController.getCasos);
router.get("/caso/:id", casoController.getCasoById);
router.put("/caso/:id", casoController.updateCaso);
router.delete("/caso/:id", casoController.deleteCaso);

module.exports = router;
