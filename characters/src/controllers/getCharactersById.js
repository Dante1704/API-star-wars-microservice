const Characters = require("../data/index")
const { response } = require("../utils/index")


module.exports = async (req, res) => {
    console.log("entre al microservice characters");
    const{ id } = req.params
    const characters = await Characters.getOne(id)
    console.log("response en microservice characters", characters);
    response(res, 200, characters)
}