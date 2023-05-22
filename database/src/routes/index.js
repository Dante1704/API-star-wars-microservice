const { Router } = require('express')
const router = Router()
const { validateModel } = require("../middlewares")
const databaseControllers = require("../controllers/index")


//todos los modelos tienen definido un metodo list() por lo tanto con una sola ruta los puedo llamar dinamicamente
router.get("/:model", validateModel, databaseControllers.getAllElements)

router.get("/:model/:id", validateModel, databaseControllers.getById)

router.post("/:model", validateModel, databaseControllers.createNewDocument)

module.exports = router
