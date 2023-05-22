const store = require("../database/index")
const {response} = require ("../utils/index")

module.exports = async (req, res) => {
    const { model } = req.params
    const body = req.body
    const new_document = await store[model].insert(body)
    response(res, 201, new_document)
}