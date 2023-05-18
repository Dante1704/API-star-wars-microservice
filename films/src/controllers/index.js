const {catchedAsync} = require("../utils/index")

module.exports = {
    getFilms: catchedAsync(require("./getFilms"))
}