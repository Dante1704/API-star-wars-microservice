const store = require("../database/index")
const {response} = require ("../utils/index")

module.exports = async (req,res) => {
    const {model, id} = req.params
    const document_by_id = await store[model].get(id)
    response(res, 200, document_by_id)
}