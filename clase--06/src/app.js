/** CLASE 6 - SERVIDORES WEB **/

//Temas de hoy: 

//1) ¿Que es un servidor? 
//2) Protocolo HTTP
//3) Modulo Nativo HTTP
//4) Express JS
//5) Objeto Request
//6) Tarea para el hogar 

//SERVIDOR: software o hardware que almacena y administra recursos. 
//Como imagenes,archivos, sitios web, videos, datos. Su funcion es responder a las peticiones de los clientes. A esta relacion se la conoce como modelo cliente-servidor.

//Por ejemplo cuando me conecto a infobae.com desde mi navegador (Brave), estoy  haciendo una peticion desde el cliente (mi navegador) hasta el servidor que almacena estos recursos web. Si la peticion se cumple, yo voy a poder leer el diario. 

//cliente = pedidos = request 
//servidor = respuesta = response


//2) HTTP: Significa "Hypertext Transfer Protocol" o "Protocolo de transferencia de hipertexto". Es un protocolo de comunicacion, es decir un conjunto de reglas que definen como se comunican dos o mas dispositivos. 

//3) MODULO NATIVO HTTP. 

//1 pasito importar el modulo: 

//const http = require("http"); 
//import http from "http". 

//Segundo paso: vamos a crear un servidor. Para esto utilizamos el metodo "createServer" del modulo http. Este metodo recibe como parametro una funcion callback que va a ser ejecutada cada vez que se realice una peticion al servidor. Esta funcion callback recibe dos parametros: request y response. 

// const server = http.createServer( (request, response) => {
//     console.log("EXPERTO EN BACKEND"); 
//     response.end("tengo frioooo"); 
// })


//Tercer paso: vamos a poner a escuchar a nuestro servidor en algun puerto de la computadora. 


// server.listen(PUERTO, () => {
    //     //console.log(`Escuchando el puerto ${PUERTO}`);
    //     console.log(`Escuchando en el http://localhost:${PUERTO}`);
    // })
    //` ALT + 96
    
    //EXPRESS: es un framework minimalista de Node JS que nos permite crear servidores de una forma mucho más simple. 
    
    // Comando para instalar: npm install express
    
const express = require("express");
const app = express();
const PUERTO = 3000; 

//Creamos una ruta: 

//El método GET recibe como primer parametro una ruta y como segundo parametro una funcion callback qeu se va a ejecutar cada vez que se realice una peticion al servidor en esta ruta en particular. Y la funcion callback tiene dos parametros, un objeto request que representa la  peticion del cliente y el objeto response que representa la respuesta del servidor. 

app.get("/", (req, res) => {
    //Cuando utilizo "/" estoy haciendo referencia a la ruta raiz de mi aplicacion, es decir, la ruta principal. 
    res.send("Mi primer servidor con express");

})

app.get("/contacto", (req, res) => {
    res.send("Esta es la seccion de Contacto");
})

app.get("/tienda", (req, res) => {
    res.send("Esta es la seccion Tienda");
})

app.listen(PUERTO, () => {
    console.log(`Escuchando en el puerto ${PUERTO}`);
})

//EJERCICIO: array de productos

const misProductos = [
    {id: "1", nombre: "Fideos", precio: 150},
    {id: "2", nombre: "Arroz", precio: 250},
    {id: "3", nombre: "Pan", precio: 350},
    {id: "4", nombre: "Leche", precio: 450},
    {id: "5", nombre: "Queso", precio: 550},
    {id: "6", nombre: "Mermelada", precio: 650},
    {id: "7", nombre: "Mucho Vino", precio: 50},
]

//Vamos a crear una ruta "/productos" y que esta ruta nos retorne nuestro inventario: 

app.get("/productos", (req, res) => {
    res.send(misProductos);
})

//Ruta que me retorne un producto por id: 

app.get("/productos/:id", (req, res) => {
    //Esta informacion se envia desde el objeto request, peeero en la propieda "params"
    //let id = req.params.id;
    let {id} = req.params;
    //TODO DATO QUE VIENE DE LOS PARAMETROS ES UN "STRING". 
    
    let productoBuscado = misProductos.find(producto => producto.id === id);

    if ( productoBuscado ) {
        res.send(productoBuscado);
    } else {
        res.send(" Producto no encontrado! Escribiii bien! ");
    }
})

//req.query: query se refiere a las multiples consultas que se pueden hacer en determinado endpoint. Simplemente le tenemos que colocar el simbolo de interrogacion "?" y luego el  nombre de la consulta. 


app.get("/clientes", (req, res) => {
    //Me voy a guardar el nombre y el apellido del cliente. 
    //let nombre = req.query.nombre;
    //let apellido = req.query.apellido; 

    let { nombre, apellido } = req.query;


    res.send(`Bienvenido ${nombre} - ${apellido}`);
})