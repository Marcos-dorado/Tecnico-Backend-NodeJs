const TipoProcedimiento = require("../models/tipoProcedimiento");

exports.createTipoProcedimiento = (req, res) => {
  const tipoProcedimiento = new TipoProcedimiento(req.body);
  tipoProcedimiento.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

exports.getTipoProcedimientos = (req, res) => {
  TipoProcedimiento.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

exports.getTipoProcedimientoById = (req, res) => {
  const { id } = req.params;
  TipoProcedimiento.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

exports.updateTipoProcedimiento = (req, res) => {
  const { id } = req.params;
  const { descripcion, estado } = req.body;

  TipoProcedimiento.updateOne({ _id: id }, { $set: { descripcion, estado } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

exports.deleteTipoProcedimiento = (req, res) => {
  const { id } = req.params;
  TipoProcedimiento.deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};
