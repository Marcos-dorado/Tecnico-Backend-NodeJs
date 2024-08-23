const TipoSolucion = require("../models/tiposSoluciones");

exports.createTipoSolucion = (req, res) => {
  const tipoSolucion = new TipoSolucion(req.body);
  tipoSolucion.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

exports.getTipoSoluciones = (req, res) => {
  TipoSolucion.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

exports.getTipoSolucionById = (req, res) => {
  const { id } = req.params;
  TipoSolucion.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

exports.updateTipoSolucion = (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion } = req.body;

  TipoSolucion.updateOne({ _id: id }, { $set: { nombre, descripcion } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

exports.deleteTipoSolucion = (req, res) => {
  const { id } = req.params;
  TipoSolucion.deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};
