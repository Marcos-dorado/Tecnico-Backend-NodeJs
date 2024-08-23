// const express = require("express");
// const tipoProcedimientoSchema = require("../models/tipoProcedimiento");

// const router = express.Router();

// // Crear Categoría
// router.post("/tipoProcedimiento", (req, res) => {
//   const tipoProcedimiento = new tipoProcedimientoSchema(req.body);
//   tipoProcedimiento.save()
//     .then((data) => res.json(data))
//     .catch((error) => res.json({ message: error }));
// });

// router.get("/tipoProcedimiento", (req, res) => {
//   tipoProcedimientoSchema
//     .find()
//     .then((data) => res.json(data))
//     .catch((error) => res.json({ message: error }));
// });

// router.get("/tipoProcedimiento/:id", (req, res) => {
//   const { id } = req.params;
//   tipoProcedimientoSchema
//     .findById(id)
//     .then((data) => res.json(data))
//     .catch((error) => res.json({ message: error }));
// });

// router.put("/tipoProcedimiento/:id", (req, res) => {
//   const { id } = req.params;
//   const { descripcion, estado } = req.body; // No incluyas fechaCreacion aquí

//   tipoProcedimientoSchema
//     .updateOne({ _id: id }, { $set: { descripcion, estado } })
//     .then((data) => res.json(data))
//     .catch((error) => res.json({ message: error }));
// });



// router.delete("/tipoProcedimiento/:id", (req, res) => {
//   const { id } = req.params;
//   tipoProcedimientoSchema
//     .deleteOne({ _id: id })
//     .then((data) => res.json(data))
//     .catch((error) => res.json({ message: error }));
// });

// module.exports = router;


const express = require("express");
const router = express.Router();
const tipoProcedimientoController = require("../controllers/tipoProcedimientoController");

router.post("/tipoProcedimiento", tipoProcedimientoController.createTipoProcedimiento);
router.get("/tipoProcedimiento", tipoProcedimientoController.getTipoProcedimientos);
router.get("/tipoProcedimiento/:id", tipoProcedimientoController.getTipoProcedimientoById);
router.put("/tipoProcedimiento/:id", tipoProcedimientoController.updateTipoProcedimiento);
router.delete("/tipoProcedimiento/:id", tipoProcedimientoController.deleteTipoProcedimiento);

module.exports = router;
