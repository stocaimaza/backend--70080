const express = require("express");
const app = express(); 
const PUERTO = 8080; 

//Importamos el ProductManager: 
const ProductManager = require("./controllers/product-manager.js"); 
const manager = new ProductManager("./src/data/productos.json"); 

//Rutas

app.get("/", (req, res) => {
    res.send("Hola mundo, los quiero muchiiiiiooo");
})

//ruta ‘/products’, la cual debe leer el archivo de productos y devolverlos dentro de un objeto.

app.get("/products", async (req, res) => {
    const arrayProductos = await manager.getProducts(); 
    res.send(arrayProductos); 
})


//ruta ‘/products/:pid’, la cual debe recibir por req.params el pid (product Id), y devolver sólo el producto solicitado, en lugar de todos los productos. 

app.get("/products/:pid", async (req, res) => {
    let id = req.params.pid; 

    const producto = await manager.getProductById(parseInt(id)); 

    if( !producto ) {
        res.send("No se encuentra el producto deseado, maldito moriraaaass lentamente"); 
    } else {
        res.send({producto}); 
    }
})



//Listen 

app.listen(PUERTO, () => {
    console.log("Escuchando en el puerto 8080");
})