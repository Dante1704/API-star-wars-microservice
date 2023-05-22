const Character = require("../data/index")
const {response} = require("../utils")

module.exports = async (req, res) => {
        const body = req.body
        console.log("entre al microservicio character");
        const data = await Character.create(body)
        const newCharacter = await data
        console.log("respuesta del microservicio database:", newCharacter);
        response(res, 201, newCharacter)    
}