const Character = require("../data/index")
const {response} = require("../utils")

module.exports = async (req, res) => {
        const body = req.body
        const newCharacter = await Character.create(body)
        response(res, 201, newCharacter)    
}