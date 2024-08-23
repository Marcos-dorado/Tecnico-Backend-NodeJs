const mongoose = require("mongoose");

const tSolucionSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('Tipo Solucion', tSolucionSchema);
