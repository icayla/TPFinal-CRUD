const express = require('express')
const cors = require("cors")
const logger = require("morgan")

require("dotenv").config()
const app = express()


const apiRouter = require("./rutas/rutasTareas")
const {connect} = require("./db/db")

app.use(logger("dev"))
app.use(express.json())
app.use(cors())


// Rutas del CRUD
app.use('/tarea',apiRouter)

connect()

module.exports = app