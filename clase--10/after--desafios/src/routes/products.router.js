const express = require("express"); 
const router = express.Router(); 
const ProductManager = require("../managers/product-manager.js"); 
const manager = new ProductManager("./src/data/productos.json");

//Listar todos los productos: 

router.get("/", async (req, res) => {
    const arrayProductos = await manager.getProducts(); 
    res.send(arrayProductos); 
})

//Buscar producto por id: 

router.get("/:pid", async (req, res) => {
    let id = req.params.pid; 
    try {
        const producto = await manager.getProductById(parseInt(id)); 

        if(!producto) {
            res.send("Producto no encontrado"); 
        } else {
            res.send(producto); 
        }
    } catch (error) {
        res.send("Error al buscar ese id en los productos"); 
    }
})



module.exports = router; 