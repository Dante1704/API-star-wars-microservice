//la clase Error por si misma no esta preparada para arrojar errores personalizados.
//creando la clase ClientError extendiendo Error 
//puedo personalizar errores para que envie no solo el mensaje sino tambien un statusCode.

class ClientError extends Error {
    constructor(message, statusCode = 400) {
        super(message)
        this.statusCode = statusCode;
    }
}

module.exports = { ClientError }