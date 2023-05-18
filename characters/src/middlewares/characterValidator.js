const {ClientError} = require("../utils/errors/index")

module.exports = (req, res, next) => {
    //supongamos que la validacion solo es con el nombre
    const {name} = req.body
    if(name) return next()
    //ahora en vez de arrojar new Error, arrojo new ClientError(message, statusCode)
    else throw new ClientError("Name Required", 401)
}