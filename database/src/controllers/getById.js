const store = require("../database/index")
const {response} = require ("../utils/index")

module.exports = async (req,res) => {
    console.log("microservicio database antes de hacer la request por id");
    const {model, id} = req.params
    const document_by_id = await store[model].get(id)
    console.log(" respuesta de microservicio database a la request por id", document_by_id);
    response(res, 200, document_by_id)
}