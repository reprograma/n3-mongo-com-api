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
  // dataNascimento: {
  //   type: Date,
  //   required: true
  // },   
  // desafio: incluir campo dataNascimento do tipo Date

})

const ContatoCollection = mongoose.model('contato', ContatoSchema)

module.exports = ContatoCollection
