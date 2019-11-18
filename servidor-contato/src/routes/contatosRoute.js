const express = require("express")
const bodyParser = require("body-parser")
const controller = require("../controller/contatosController")

const router = express.Router()

router.get("/", controller.getAll)
router.post("/criar", bodyParser.json(), controller.add)

module.exports = router
