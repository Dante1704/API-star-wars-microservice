const store = require("../database/index")
const {response} = require ("../utils/index")

module.exports= async (req,res) => {
    console.log("llegue hasta el microservice database");
    const {model} = req.params
    const list = await store[model].list() 
    console.log("res de la consulta a la db", list);
    response(res, 200, list)
}