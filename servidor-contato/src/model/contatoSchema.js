const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ContatoSchema = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId, // tipo dos dados
    auto: true, // é autogerado?
    required: true // é obrigatorio?
  },
  nome: {
    type: String,
    required: true,
    unique: true,
  },
  celular: {
    type: String,
    required: true,
  },
  dataNascimento : {
    type: Date,
    required: true,
  },
  fotoPerfil: {
    type: String, // aqui vai a URL da foto
    required: false,
  }
})

const ContatosCollection = mongoose.model('contato', ContatoSchema)

module.exports = ContatosCollection
