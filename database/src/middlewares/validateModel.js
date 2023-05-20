
module.exports = (req, res, next) => {
    const {model} = req.params

    if (!["Character", "Film", "Planet"].includes(model)) {
        throw new Error("Invalid Model")
    } 
    next() 

}