const axios = require("axios")

module.exports = {
    list: async () => {
        return await axios.get("http://localhost:3004/Film")
    }
}