const mongoose = require("mongoose");

const casoSchema = mongoose.Schema({
  descripcion: { type: String, required: true },
  fechaCreacion: { type: Date, default: Date.now }, 
  estado: { type: String, enum: ['abierto', 'en progreso', 'resuelto'], default: 'abierto' },
  solucion: { type: String },
  tipoProcedimiento: { type: String, enum: ['software', 'hardware'], required: true },
  tipoSolucion: { type: String, enum: ['parcial', 'definitiva'], required: true }
});

module.exports = mongoose.model('Caso', casoSchema);
