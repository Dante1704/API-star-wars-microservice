const {ClientError} = require("../utils/errors/index")

module.exports = (req, res, next) => {
    const {model} = req.params

    if (!["Character", "Film", "Planet"].includes(model)) {
        throw new ClientError("Invalid Model", 404)
    } 
    next() 

}