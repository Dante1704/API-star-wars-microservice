const axios = require("axios")


module.exports = {
    create: async (new_character) => {
        return await axios({
            method:"post",
            url:"http://localhost:3004/Character",
            data: new_character
        })
    },
    list: async () => {
        return await axios.get("http://localhost:3004/Character")
    },
    getOne: async (id) => {
        return await axios.get(`http://localhost:3004/Character/${id}`)
    }
}