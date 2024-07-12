/** CLASE 7 - EXPRESS AVANZADO **/

//Temas de hoy: 

//1) Codigos de estado
//2) ¿ Que es una API? 
//3) API REST
//4) Metodos de peticion 
//5) Postman
//6) Practicamos: get, post, put, delete, tinkiwinki. 

//1)  Codigos de estado: Cuando realizamos alguna petición al servidor mediante el protocolo HTTP, el servidor debe respondernos no sólo con información, sino con un estado del proceso. Este es un código que nos permitirá saber cómo se encuentra el proceso, o cómo finalizó. 


//Lo mas utilizados: 

//200: ok. La peticion ha tenido exito. 
//400: Bad request: La solicitud no puede serentendida por el servidor debido a una sintaxis incorrecta del cliente. 
//401: Acceso no autorizado al recurso. 
//403: El servidor no puede responder a la solicitud del cliente, porque sus credenciales no tienen autorizacion para acceder al contenido. 
//404: recurso no encontrado. 
//500: Error interno del servidor. 

//4) Metodos de la peticion

import express from "express";
const app = express();
const PUERTO = 8080;

//Middleware
app.use(express.json());

//Array de clientes: 

const clientes = [
    { id: "1", nombre: "Lionel", apellido: "Scaloni" },
    { id: "2", nombre: "Julian", apellido: "Alvarez" },
    { id: "3", nombre: "Colibri", apellido: "Borja" },
    { id: "4", nombre: "Lucho", apellido: "Diaz" }
]

//1) Que la ruta raiz me traiga a todos mis clientes: 

app.get("/", (req, res) => {
    res.send(clientes);
})

//2) La ruta get me retorne un cliente por id: 

app.get("/:id", (req, res) => {
    //Primero recuperamos el parametro y luego buscamos en el array. 

    let { id } = req.params;
    //otra forma: 
    //let id = req.params.id

    const clienteBuscado = clientes.find(cliente => cliente.id == id);

    if (clienteBuscado) {
        return res.send(clienteBuscado);
    } else {
        return res.send("No se encuentra el cliente con ese ID");
    }

})


//3) Metodo POST: cargamos un nuevo cliente a nuestro array

app.post("/", (req, res) => {
    const clienteNuevo = req.body;

    try {
        //Recupero del body los datos del nuevo cliente y hago push en el array de datos. 
        clientes.push(clienteNuevo);
        console.log(clientes);
        res.send({ status: "success", message: "Cliente creado" });

    } catch (error) {

        res.status(500).send({status:"error", message: "Error interno del servidor"}); 
    }

})

//4) Ruta put vamos a actualizar un cliente: 

app.put("/:id", (req, res) => {
    const { id } = req.params; 
    const { nombre, apellido } = req.body; 

    //Busco al usuario en mi array: 
    const clienteIndex = clientes.findIndex( cliente => cliente.id === id); 

    if( clienteIndex !== -1 ){
        //Si existe y lo encuentro, actualizo sus datos:
        clientes[clienteIndex].nombre = nombre; 
        clientes[clienteIndex].apellido = apellido; 

        console.log(clientes); 
        res.send({status: "success", message: "Cliente actualizado correctamente"}); 
    } else {
        res.status(404).send({status: "error", message: "Cliente no encontrado"}); 
    }
})


app.listen(PUERTO, () => {
    console.log(`Escuchando en el http://localhost:${PUERTO}`);
})