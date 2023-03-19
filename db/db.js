  const mongoose = require('mongoose');
  require('dotenv').config();
  mongoose.set('strictQuery', false);
  
  const connect = async () =>{
      try {
          await mongoose.connect(process.env.MONGO_CONNECT);
          console.log('Conectado a la base de datos')
      } catch {
          console.log('Error al conectarse a la base de datos')
      }
  }
  
  module.exports = {connect}