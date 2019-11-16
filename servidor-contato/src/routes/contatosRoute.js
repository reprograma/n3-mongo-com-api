const express = require("express")
const router = express.Router()
const bodyParser = require("body-parser")
const controller = require("../controller/contatosController")

router.get("/", controller.getAll)
router.get("/por-nome/:nome", controller.getByName)
router.post("/criar", bodyParser.json(), controller.add)

// desafio: /id/:id
// router.get("/id/:id", controller.getById)

module.exports = router
