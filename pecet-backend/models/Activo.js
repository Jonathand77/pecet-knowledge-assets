const mongoose = require('mongoose');

const activoSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  autor: {
    type: String,
    required: true
  },
  grupo: {
    type: String,
    required: true
  },
  fecha: {
    type: Date,
    required: true
  },
  palabrasClave: {
    type: String,
    required: true
  },
  tipo: {
    type: String,
    enum: ['Documento', 'Audio', 'Video'], // Definimos tipos específicos
    required: true
  },
  estado: {
    type: String,
    enum: ['Público', 'Privado'],
    required: true
  },
  enlace: {
    type: String,
    default: ''
  },
  idioma: {
    type: String,
    required: true
  },
  visualizaciones: {
    type: Number,
    default: 0
  },
  descargas: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

module.exports = mongoose.model('Activo', activoSchema);
