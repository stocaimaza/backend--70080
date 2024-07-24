/** CLASE 10 -WEBSOCKETS **/

//Temas de hoy: 
//1) Que es websocket
//2) Socket.io

//npm i express express-handlebars


//Websockets es un protocolo de comunicacion bidireccional en tiempo real. A diferencia de HTTP, donde el cliente envia una solicitud y el servidor responde, los websockets permiten una comunicacion continua y en tiempo real entre el cliente y el servidor. 

//La comunicacion se realiza entre dos endpoints, cada uno recibe el nombre de socket. 

//¿Como funciona?

//1)  el cliente tiene que enviar una peticion HTTP al servidor y esto se conoce como handshake (apreton de manos).

//2) El servidor recibe la peticion y procede a responder el saludo. A esto se lo conoce como "abrir la conexion". 

//3) A partir de este momento la comunicacion es bidireccional entre el cliente y el servidor. Hasta que uno de los dos cierre la llamada. 

import express from "express"; 
import { engine } from "express-handlebars";
const app = express(); 
const PUERTO = 8080; 

//Configuramos Express-Handlebars
app.engine("handlebars", engine()); 
app.set("view engine", "handlebars"); 
app.set("views", "./src/views"); 

//Middleware
app.use(express.json());
app.use(express.static("./src/public")); 

//Rutas
app.get("/", (req, res) => {
    res.render("index");
})

//Listen
const httpServer = app.listen(PUERTO, () => {
    console.log("Escuchando en el puerto 8080"); 
})

//Trabajamos con socket.io: 
//instalamos: npm i socket.io

//1) Importamos el modulo de socket.io: 

import { Server } from "socket.io";

//2) Nos tenemos que guardar una referencia del servidor de express. 

//3) Generamos uns instancia de websocket desde el lado del backend. 

const io = new Server(httpServer);
//Instancia desde el lado del backend

//Vamos a crear un pequeño array de usuarios para enviar al front: 
const usuarios = [
    {id: 1, nombre: "Lionel", apellido: "Messi"},
    {id: 2, nombre: "Cristiano", apellido: "Ronaldo"},
    {id: 3, nombre: "Neymar", apellido: "Junior"},
    {id: 4, nombre: "Pocho", apellido: "Lavezzi"},
]

io.on("connection", (socket) => {
    console.log("Un cliente se conecto conmigo");

    //Vamos a escuchar ahora si el mensaje que me envia el front. 
    socket.on("mensaje", (data) => {
        console.log(data);
    })

    //Ahora el backend le contesta al front: 
    socket.emit("saludito", "Hola Cliente, ¿Como estas? "); 

    //Emviamos un array de usuarios: 
    socket.emit("usuarios", usuarios);

})