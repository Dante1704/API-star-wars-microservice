const axios = require("axios")
const characters = require("./characters.json")

module.exports = {
    create: async (new_character) => {
        return axios.post("http://database:3004/Character", new_character)
    },
    list: async () => {
        return axios.get("http://database:3004/Character")
    },
    getOne: async (id) => {
        return axios.get(`http://database:3004/Character/${id}`)
    }
}