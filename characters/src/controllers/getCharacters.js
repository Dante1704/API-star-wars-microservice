const Characters = require("../data/index")
const { response } = require("../utils/index")


module.exports = async (req, res) => {
    console.log("entre al microservice characters");
    const characters = await Characters.list()
    console.log("response en microservice characters", characters);
    response(res, 200, characters)
}