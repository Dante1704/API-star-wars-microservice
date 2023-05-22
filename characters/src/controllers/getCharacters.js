const Characters = require("../data/index")
const { response } = require("../utils/index")


module.exports = async (req, res) => {
    const data = await Characters.list()
    const characters = await data.data
    response(res, 200, characters)
}