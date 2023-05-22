const {catchedAsync} = require("../utils/index")

module.exports = {
    getAllElements: catchedAsync(require("./getAllElements")),
    getById: catchedAsync(require("./getById")),
    createNewDocument: catchedAsync(require("./createNewDocument"))
}