const { ClientError } = require("../utils/errors/index")


module.exports = (req, res, next) => {
    if(req.body.token) {
        return next()
    } else {
        throw new ClientError("Invalid Operation", 403 )
    }
}