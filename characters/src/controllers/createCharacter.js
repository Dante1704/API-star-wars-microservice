const Character = require("../data/index")
const {response} = require("../utils")

module.exports = async (req, res) => {
        const body = req.body
        const data = await Character.create(body)
        const newCharacter = await data.data
        response(res, 201, newCharacter)    
}