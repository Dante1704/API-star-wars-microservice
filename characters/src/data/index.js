const axios = require("axios")
const characters = require("./characters.json")

module.exports = {
    create: async (new_character) => {
        return await axios({
            method:"post",
            url:"http://database:3004/Character",
            data: new_character
        })
    },
    list: async () => {
        return await axios.get("http://database:3004/Character")
    },
    getOne: async (id) => {
        return await axios.get(`http://database:3004/Character/${id}`)
    }
}