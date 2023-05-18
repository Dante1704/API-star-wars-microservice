const planets = require("./planets.json")

module.exports = {
    list: async () => {
        return await planets
    }
 }