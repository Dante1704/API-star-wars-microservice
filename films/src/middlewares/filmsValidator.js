const {ClientError} = require("../utils/errors/index")

module.exports = (req, res, next) => {
    //supongamos que la validacion solo es con el token
    /* const {token} = req.token */
    if(req.body.token) return next()
    //ahora en vez de arrojar new Error, arrojo new ClientError(message, statusCode)
    else throw new ClientError("Invalid Operation", 403 )
}