const Caso = require("../models/caso");

exports.createCaso = (req, res) => {
  const caso = new Caso(req.body);
  caso.save()
    .then((data) => res.json(data))
    .catch((error) => res.status(500).json({ message: error.message }));
};

exports.getCasos = (req, res) => {
  Caso.find()
    .then((data) => res.json(data))
    .catch((error) => res.status(500).json({ message: error.message }));
};

exports.getCasoById = (req, res) => {
  const { id } = req.params;
  Caso.findById(id)
    .then((data) => {
      if (!data) return res.status(404).json({ message: "Caso no encontrado" });
      res.json(data);
    })
    .catch((error) => res.status(500).json({ message: error.message }));
};

exports.updateCaso = (req, res) => {
  const { id } = req.params;
  const { descripcion, estado, solucion, tipoProcedimiento, tipoSolucion } = req.body;
  Caso.findByIdAndUpdate(id, { descripcion, estado, solucion, tipoProcedimiento, tipoSolucion }, { new: true })
    .then((data) => {
      if (!data) return res.status(404).json({ message: "Caso no encontrado" });
      res.json(data);
    })
    .catch((error) => res.status(500).json({ message: error.message }));
};

exports.deleteCaso = (req, res) => {
  const { id } = req.params;
  Caso.findByIdAndDelete(id)
    .then((data) => {
      if (!data) return res.status(404).json({ message: "Caso no encontrado" });
      res.json({ message: "Caso eliminado" });
    })
    .catch((error) => res.status(500).json({ message: error.message }));
};

exports.getCasosByEstado = (req, res) => {
  const { estado } = req.query;
  Caso.find({ estado })
    .then((data) => res.json(data))
    .catch((error) => res.status(500).json({ message: error.message }));
};
