const contatosCollection = require("../model/contatoSchema")

const add = (request, response) => {
  console.log(request.url)
  // novo objeto pra nossa coleção
  const contatoDoBody = request.body
  const contato = new contatosCollection(contatoDoBody)

  contato.save((error) => {
    // if(error !== null && error !== undefined)
    if(error) {
      return response.status(400).send(error)
    } else {
      return response.status(201).send(contato)
    }
  })
}
// DESAFIO: implementar o metodo getAll usando o mongodb

const getAll = (request, response) => {
  // response.status(200).send(model.agenda)
  console.log(request.url)
  contatosCollection.find((error,contatos) => {
    if(error){
      return response.status(500).send(error)
    } else {
      return response.status(200).send(contatos)
    }
  })
}

const deleteById = (request, response) => {
  var id = req.params.id

  try {
    Users.findByIdAndRemove(id, (err) => {
      if (err) {
        return response.send(err)
      } else {
        return response.send("Usuário excluido!")
      }
    })

  } catch (err) {
    return response.status(err.code).send({ error: "Erro ao excluir usuário" })
  }

}

module.exports = {
  getAll,
  add,
  deleteById
}
