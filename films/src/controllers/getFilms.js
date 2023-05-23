const Films = require("../data/index")
const {response} = require("../utils/index")


module.exports= async (req, res) => {
  const result = await Films.list()
  const films = result.data.data
  response(res, 200, films)
}