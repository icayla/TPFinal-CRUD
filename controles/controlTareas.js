const {Tarea} = require('../modelos/tareas')
const {validationResult } = require('express-validator')

module.exports = {

// Obtener todos los registros de tareas
  verTareas: async (req, res) => {
    const tareas = await Tarea.find();
    res.json(tareas);
  },
   
	// Crear un registro de tarea
    crearTarea: async (req, res)=>{
        try {
            const err = validationResult(req);
            if (err.isEmpty()) {
                const item = new Tarea(req.body);
                await item.save();
                res.status(201).json({item})
            } else {
                res.status(401).json(err.errors)
            }
        } catch (error) {
            res.status(401).json({error})
        }
    },
	//Bustar tareas por parametro

	 buscarTareaParam: async  (req, res)=>  {
        const item = await Tarea.findOne({titulo: req.params.titulo}) //busca por parametro
        res.status(200).json({ item })
    },

    
    //Bustar tareas por Id
	buscarTareaPorID: async(req, res)=>  {
        const item = await Tarea.findById(req.params.id) 
        res.status(200).json({item})
    },

  	// Actualizar un registro por ID
    editarTarea: async (req, res) => {
        try {
            const err = validationResult(req);
            if (err.isEmpty()) {
                await Tarea.findByIdAndUpdate(req.params.id, req.body);
                res.status(201).json({msg: 'Se actualizo el registro ' + req.params.id});
            } else {
                res.status(401).json(err.errors);
            }
        } catch (error) {
            res.status(401).json({error})
        }
    },
        


	// Eliminar un registro por ID
    borrarTarea: async (req, res) => {
        const tarea= await Tarea.findByIdAndDelete(req.params.id);
        res.status(203).json({msg: 'Se elimino el registro ' + tarea});
    }
}
