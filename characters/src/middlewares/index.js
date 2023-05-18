//aca voy a traer y mandar los middlewares necesarios
//que use en las rutas antes de que entre al controller correspondiente. 
//yo quiero que las validaciones sincronicas de los datos que me manda el usuario
//se hagan antes de que entre al controller.

module.exports = {
    characterValidation: require("./characterValidator")
}