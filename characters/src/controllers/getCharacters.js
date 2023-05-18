const Characters = require("../data/index")
const {response} = require("../utils/index")


module.exports = async (req, res) => {
    console.log("entre");
    const characters = await Characters.list()
    response(res, 200, characters)
}