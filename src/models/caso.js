const mongoose = require("mongoose");

const casoSchema = mongoose.Schema({
  descripcion: { type: String, required: true },
  fechaCreacion: { type: Date, default: Date.now }, // Se maneja automáticamente
  estado: { type: String, enum: ['abierto', 'en progreso', 'resuelto'], default: 'abierto' },
});

module.exports = mongoose.model('Caso', casoSchema);
