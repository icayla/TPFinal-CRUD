// Configuración del middleware
const {Tareas} = require("../modelos/tareas")
const validarID = async (req, res, next) =>{
    try {
       const tarea= await Tareas.findById(req.params.id)
        if (tarea !== null) {
            next()
        } else {
           res.status(500).json({msg: "el id es invalido"}) 
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { validarID }

