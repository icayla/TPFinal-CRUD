const express = require("express")
const router = express.Router()
const apiController = require("../controles/controlTareas")
const { validarID } = require("../middleware/validarID")
const {check} = require("express-validator")

router.get("/vertodo",apiController.verTareas)
router.get("/buscar/:id",validarID,apiController.buscarTareaPorID)
router.get("/buscar/:titulo",apiController.buscarTareaParam)

router.post("/crear",[
    check("titulo").not().isEmpty().withMessage("El campo es obligatorio").isLength({max:20,min:3}).withMessage("el campo nombre debe contar con un maximo de 20 caracteres y un minimo de 3"),
    check("descripcion").not().isEmpty().withMessage("El campo obligatorio"),
    check("completada").not().isEmpty().withMessage("El campo es obligatorio")
],apiController.crearTarea)

router.put("/editar/:id",validarID,[
  check("titulo").not().isEmpty().withMessage("El campo es obligatorio").isLength({max:20,min:3}).withMessage("el campo nombre debe contar con un maximo de 15 caracteres y un minimo de 3"),
  check("descripcion").not().isEmpty().withMessage("El campo obligatorio"),
  check("completada").not().isEmpty().withMessage("El campo es obligatorio")
], apiController.editarTarea)

router.delete("/eliminar/:id",validarID, apiController.borrarTarea)

module.exports = router
