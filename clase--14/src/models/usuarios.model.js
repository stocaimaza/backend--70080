//Importamos mongoose: 
import mongoose from "mongoose";

//Dejamos una constante con el nombre de la coleccion. 
const usuariosCollection = "usuarios"; 

//Definimos el "schema": 
//El "Schema" es un objeto que nos permite definir la forma de los documentos. Configuramos el nombre de los campos y los tipos de datos que almacenara. 

const usuarioSchema = new mongoose.Schema({
    nombre: String, 
    apellido: String, 
    edad: Number
})

//Definimos el modelo: 
const UsuarioModel = mongoose.model(usuariosCollection, usuarioSchema);

export default UsuarioModel; 