const express = require("express"); 
const router = express.Router(); 
const ProductManager = require("../managers/product-manager.js");
const manager = new ProductManager("./src/data/productos.json"); 

//Ruta /products que me muestra el listado actual de mis productos. Utilizando express-handlebars. 

router.get("/products", async (req, res) => {
    const productos = await manager.getProducts(); 

    res.render("index", {productos});
})




module.exports = router; 