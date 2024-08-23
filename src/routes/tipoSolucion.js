// const express = require("express");
// const categorieSchema = require("../models/caso");

// const router = express.Router();

// // Crear Producto
// router.post("/product", (req, res) => {
//   const { nombre, precio, descripcion, categoria } = req.body;
  
//   categorieSchema.findById(categoria)
//     .then((cat) => {
//       if (!cat) {
//         return res.status(404).json({ message: "Categoría no encontrada" });
//       }

//       const product = new productSchema({
//         nombre,
//         precio,
//         descripcion,
//         categoria
//       });

//       return product.save();
//     })
//     .then((data) => res.json(data))
//     .catch((error) => res.json({ message: error }));
// });

// router.get("/product", (req, res) => {
//   productSchema
//     .find()
//     .populate('categoria', 'nombre')
//     .then((data) => res.json(data))
//     .catch((error) => res.json({ message: error }));
// });

// router.get("/product/:id", (req, res) => {
//   const { id } = req.params;
//   productSchema
//     .findById(id)
//     .populate('categoria', 'nombre')
//     .then((data) => res.json(data))
//     .catch((error) => res.json({ message: error }));
// });


// router.put("/product/:id", (req, res) => {
//   const { id } = req.params;
//   const { nombre, precio, descripcion, categoria } = req.body;

//   categorieSchema.findById(categoria)
//     .then((cat) => {
//       if (!cat) {
//         return res.status(404).json({ message: "Categoría no encontrada" });
//       }

//       return productSchema.updateOne({ _id: id }, { $set: { nombre, precio, descripcion, categoria } });
//     })
//     .then((data) => res.json(data))
//     .catch((error) => res.json({ message: error }));
// });

// // Eliminar Producto
// router.delete("/product/:id", (req, res) => {
//   const { id } = req.params;
//   productSchema
//     .deleteOne({ _id: id })
//     .then((data) => res.json(data))
//     .catch((error) => res.json({ message: error }));
// });

// module.exports = router;

// const express = require("express");
// const tipoSolucionSchema = require("../models/tiposSoluciones");

// const router = express.Router();

// // Crear Categoría
// router.post("/tipoSolucion", (req, res) => {
//   const tipoSolucion = new tipoSolucionSchema(req.body);
//   tipoSolucion.save()
//     .then((data) => res.json(data))
//     .catch((error) => res.json({ message: error }));
// });

// router.get("/tipoSolucion", (req, res) => {
//   tipoSolucionSchema
//     .find()
//     .then((data) => res.json(data))
//     .catch((error) => res.json({ message: error }));
// });

// router.get("/tipoSolucion/:id", (req, res) => {
//   const { id } = req.params;
//   tipoSolucionSchema
//     .findById(id)
//     .then((data) => res.json(data))
//     .catch((error) => res.json({ message: error }));
// });

// router.put("/tipoSolucion/:id", (req,res)=>{
//   const {id} = req.params;
//   const {nombre,descripcion}=req.body
//   userSchema
//   .updateOne({_id: id},{$set:{nombre,descripcion}})
//   .then((data)=>res.json(data))
//   .catch((error)=> res.json({message:error}))

// })


// router.delete("/tipoSolucion/:id", (req, res) => {
//   const { id } = req.params;
//   tipoSolucionSchema
//     .deleteOne({ _id: id })
//     .then((data) => res.json(data))
//     .catch((error) => res.json({ message: error }));
// });

// module.exports = router;



const express = require("express");
const router = express.Router();
const tipoSolucionController = require("../controllers/tipoSolucionController");

router.post("/tipoSolucion", tipoSolucionController.createTipoSolucion);
router.get("/tipoSolucion", tipoSolucionController.getTipoSoluciones);
router.get("/tipoSolucion/:id", tipoSolucionController.getTipoSolucionById);
router.put("/tipoSolucion/:id", tipoSolucionController.updateTipoSolucion);
router.delete("/tipoSolucion/:id", tipoSolucionController.deleteTipoSolucion);

module.exports = router;
