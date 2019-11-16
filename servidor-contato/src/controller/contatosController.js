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

const getByName = (request, response) => {
  const filter = { nome: request.params.nome }
  // desafio: fazer usando o LIKE
  // const regex = new RegExp(request.params.nome, 'i')
  // const filter = { nome: regex }

  Contatos.find(filter,(error, contatos) => {
    if (error) {
      response.status(400).send(error)
    }
    response.status(200).send(contatos)
  })
}

// desafio: /id/:id
// const getById = (request, response) => {
//   const id = request.params.id
//   Contatos.findById(id,(error, contatos) => {
//     if (error) {
//       response.status(400).send(error)
//     }
//     response.status(200).send(contatos)
//   })
// }

module.exports = {
  getAll,
  getByName,
  getById,
  add
}
