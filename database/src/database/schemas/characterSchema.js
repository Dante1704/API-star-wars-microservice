const {Schema} = require("mongoose")

const characterSchema = new Schema({
     _id: String,
    name: String,
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: String,
    gender: ['male', 'female', 'other'],
    homeworld: {type:String, ref: "Planet"}, //referencia al id del planeta del personaje
    films: [{type: String, ref: "Film"}] //array de referencia a las peliculas
})

// se puede y es conveniente declarar algunos metodos propios del schema por adelantado que ya sabemos que seguro vamos a usar. Como son propios del schema character en este caso, podemos declararlos a continuacion del schema.

characterSchema.statics.list = async function () {
    return await this.find().populate("homeworld", ["_id","name"]).populate("films", ["_id", "title"])
}

characterSchema.statics.get = async function(id) {
    return await this.findById(id).populate("homeworld", ["_id","name"]).populate("films", ["_id", "title"])
}

characterSchema.statics.insert = async function (character) {
    return await this.create(character)
}

module.exports = characterSchema