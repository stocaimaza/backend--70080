const express = require("express"); 
const router = express.Router(); 
const ProductManager = require("../managers/product-manager.js");
const manager = new ProductManager("./src/data/productos.json"); 

//Ruta /products que me muestra el listado actual de mis productos. Utilizando express-handlebars. 

router.get("/products", async (req, res) => {
    const productos = await manager.getProducts(); 

    res.render("home", {productos});
})

//Punto dos. mostrar los productos en tiempo real
//Con formulario para agregar y boton de eliminar

router.get("/realtimeproducts", (req, res) => {
    res.render("realtimeproducts");
})


module.exports = router; 