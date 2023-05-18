const Character = require("../data/index")
const {response} = require("../utils")

module.exports = async (req, res) => {
        const newCharacter = await Character.create()
        response(res, 201, newCharacter)    
}