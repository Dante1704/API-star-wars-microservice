const { Router } = require("express");
const filmsController = require("../controllers/index")
const middlewares = require("../middlewares/index")

const filmsRouter = Router();

filmsRouter.get("/films", middlewares.filmsValidator, filmsController.getFilms);

module.exports = filmsRouter;