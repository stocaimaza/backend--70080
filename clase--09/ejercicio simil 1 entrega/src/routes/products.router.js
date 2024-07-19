const express = require("express");
const router = express.Router();
const ProductManager = require("../controllers/product-manager.js");
const manager = new ProductManager("./src/data/productos.json");

//ruta ‘/products’, la cual debe leer el archivo de productos y devolverlos dentro de un objeto.

//Realizamos ejemplo con el limit:

router.get("/products", async (req, res) => {
    let limit = req.query.limit;
    try {
        const arrayProductos = await manager.getProducts();

        if (limit) {
            res.send(arrayProductos.slice(0, limit));
        } else {
            res.send(arrayProductos);
        }
    } catch (error) {
        res.status(500).send("Error interno del servidor");
    }
})


//ruta ‘/products/:pid’, la cual debe recibir por req.params el pid (product Id), y devolver sólo el producto solicitado, en lugar de todos los productos. 

router.get("/products/:pid", async (req, res) => {
    let id = req.params.pid;

    const producto = await manager.getProductById(parseInt(id));

    if (!producto) {
        res.send("No se encuentra el producto deseado, maldito moriraaaass lentamente");
    } else {
        res.send({ producto });
    }
})

//La ruta raíz POST / deberá agregar un nuevo producto

router.post("/products", async (req, res) => {
    const nuevoProducto = req.body;
    try {
        await manager.addProduct(nuevoProducto);
        res.status(201).send({ message: "Producto agregado exitosamente" });
    } catch (error) {
        res.status(500).send({ status: "error", message: error.message });
    }
})


module.exports = router; 