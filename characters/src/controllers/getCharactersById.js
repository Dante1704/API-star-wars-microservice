const Characters = require("../data/index")
const { response } = require("../utils/index")


module.exports = async (req, res) => {
    const{ id } = req.params
    const result = await Characters.getOne(id)
    const character = await result.data.data
    response(res, 200, character)
}