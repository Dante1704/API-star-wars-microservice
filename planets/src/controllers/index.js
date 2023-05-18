const {catchedAsync} = require("../utils/index")

module.exports = {
    getPlanets: catchedAsync(require("./getPlanets"))
}