const mongoose = require('mongoose');

const automovelSchema = new mongoose.Schema({
  tipoAutomovel: {
    type: String,
    required: true,
  },
  placa: {
    type: String,
    required: true,
  },
  cpfcnpj: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  tempoEntrada: {
    type: String,
    required: true,
  },
  tempoSaida: {
    type: String,
    required: true,
  },
  valor: {
    type: String,
    required: true,
  },
});

const Automovel = mongoose.model('automoveis', automovelSchema);

module.exports = Automovel;
