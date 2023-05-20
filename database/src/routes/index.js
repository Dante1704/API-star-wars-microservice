const {Router} = require('express')
const store = require("../database/index")
const router = Router()
const {validateModel} = require("../middlewares")


//todos los modelos tienen definido un metodo list() por lo tanto con una sola ruta los puedo llamar dinamicamente
router.get("/:model", validateModel ,async (req,res) => {
    const {model} = req.params
    const response = await store[model].list() 
    res.status(200).json(response)
})

router.get("/:model/:id", validateModel, async (req,res) => {
    const {model, id} = req.params
    const response = await store[model].get(id)
    res.status(200).json(response)
})

router.post("/:model", validateModel, async (req, res) => {
    const { model } = req.params
    const new_document = req.body
    console.log("req.body", req.body);
    const response = await store[model].insert(new_document)
    res.status(201).json(response)
})

module.exports = router
