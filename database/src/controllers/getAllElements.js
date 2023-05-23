const store = require("../database/index")
const {response} = require ("../utils/index")

module.exports= async (req,res) => {
    const {model} = req.params
    const list = await store[model].list() 
    response(res, 200, list)
}