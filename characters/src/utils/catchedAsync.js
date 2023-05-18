//este modulo me permite redirigir todos los errores (incluso los asincronicos que no son manejados por express)
//surgidos en la ruta sin necesidad de llamar al bloque try/catch cada vez
//fn es el controlador de la ruta que le voy a pasar
//next(err) me lleva a redirigir cualquier error en la ruta hacia el manejador de errores 

module.exports = (fn) => { 
    return function(req, res, next) {
        fn(req, res).catch((err) => {
            next(err)
        })
    }
}