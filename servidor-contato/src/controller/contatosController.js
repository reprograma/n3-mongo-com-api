const Contatos = require("../model/contatoSchema")

const getAll = (request, response) => {
  Contatos.find((error, contatos) => {
    if (error) {
      response.status(400).send(error)
    }
    response.status(200).send(contatos)
  })
}

const add = (request, response) => {
  const contato = new Contatos({
    nome: request.body.nome,
    dataNascimento: request.body.dataNascimento,
    celular: request.body.celular
  })

  contato.save(error => {
    if (error) {
      return response.status(400).send(error)
    }
    return response.status(201).send(contato)
  })
}

module.exports = {
  getAll,
  add
}
