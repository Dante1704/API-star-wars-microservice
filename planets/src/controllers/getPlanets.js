const Planets = require("../data/index")
const {response} = require("../utils/index")

module.exports = async (req, res) => {
  const result = await Planets.list()
  const planets = result.data.data
  response(res, 200, planets)
}