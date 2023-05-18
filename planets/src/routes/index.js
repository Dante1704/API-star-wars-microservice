const { Router } = require("express");
const planetsController = require("../controllers/index");
const middlewares = require("../middlewares/index")

const planetsRouter = Router();

planetsRouter.get("/planets", middlewares.planetsValidator, planetsController.getPlanets);

module.exports = planetsRouter;
