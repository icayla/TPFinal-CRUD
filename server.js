const app = require("./app")
//carga de archivo .env
require("dotenv").config()

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})
