/** PRACTICA INTEGRADORA **/

//Temas de repaso: 
//Express
//Express-Handlebars
//Router y Multer
//MongoDB y Mongoose

//Actividad: generar un pinterest, almacenando nuestros usuarios en MongoDB. 

import express from "express";
import { engine } from "express-handlebars";
const app = express(); 
const PUERTO = 8080; 
import imagenRouter from "./routes/imagen.router.js"; 
import "./database.js";

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true})); 
app.use(express.static("./src/public"));

//Express-Handlebars
app.engine("handlebars", engine()); 
app.set("view engine", "handlebars"); 
app.set("views", "./src/views");


//Rutas

app.use("/", imagenRouter); 

app.listen(PUERTO, () => {
    console.log(`Escuchando en el puerto: ${PUERTO}`);
})