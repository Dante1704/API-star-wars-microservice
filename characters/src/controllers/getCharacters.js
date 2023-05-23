const Characters = require("../data/index")
const { response } = require("../utils/index")


module.exports = async (req, res) => {
    const result = await Characters.list()
    const characters = await result.data.data
    response(res, 200, characters)
}