const { Router } = require("express");
const charactersController = require("../controllers/index")
const middlewares = require("../middlewares/index")

const charactersRouter = Router();

charactersRouter.get("/characters", charactersController.getCharacters);

charactersRouter.get("/characters/:id", charactersController.getCharactersById);

charactersRouter.post("/characters", middlewares.characterValidation, charactersController.createCharacter)

module.exports = charactersRouter;