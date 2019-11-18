const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ContatoSchema = new Schema ({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true, 
    required: true 
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

  // desafio 01: incluir campo opcional fotoPerfil 
  // dataNascimento: {
  //   type: Date,
  // }, 

  // desafio 02: incluir campo obrigatório dataNascimento do tipo Date
  // dataNascimento: {
  //   type: Date,
  //   required: true
  // },  
})

const ContatoCollection = mongoose.model('contato', ContatoSchema)

module.exports = ContatoCollection
