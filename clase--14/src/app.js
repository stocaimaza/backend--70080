/** CLASE 14 - MONGOOSE  **/

//Temas de hoy: 

//1) Clientes de base de datos
//2) MongoDB Atlas
//3) DBaaS (Database as a service)
//4) Configuracion e instalacion de Mongoose
//5) CRUD en nuestra App

//App con Mongoose: 
//npm i mongoose

import express from "express";
import mongoose from "mongoose";
const app = express(); 
const PUERTO = 8080; 
import usuariosRouter from "./routes/usuarios.router.js"; 

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true})); 

//Ruta
app.use("/usuarios", usuariosRouter);

app.listen(PUERTO, () => {
    console.log(`Llueve en la costa, mientras escuchamos en el puerto: ${PUERTO}`);
})

//Nos conectamos con MongoDB Atlas: 
mongoose.connect("mongodb+srv://backend70080:coderhouse@cluster0.4fw2i.mongodb.net/Supermercado?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("Nos conectamos re bien, la vida nos sonrie, la programacion es lo nuestro"))
    .catch(() => console.log("Regresa al front con Maxi a centrar divs"))
