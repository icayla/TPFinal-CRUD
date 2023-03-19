const mongoose = require('mongoose');
const { Schema } = mongoose;

const tareaSchema = new Schema({
  titulo:{
    type: String,
    required: true
    
  },
  descripcion:{
    type: String,
    required: true
  },
  fecha:{
    type: String,
    required: false
  },
  completada:{
    type: Boolean,
    required: true
  },

});
const Tarea = mongoose.model('Tarea', tareaSchema);
module.exports = {Tarea};


