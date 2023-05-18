const {catchedAsync} = require("../utils/")

//catchedAsync es la High Order Function que recibe el controller como parametro
// y se encarga de manejar todos sus errores. 

module.exports = {
    getCharacters: catchedAsync(require("./getCharacters")),
    createCharacter: catchedAsync(require("./createCharacter"))
}