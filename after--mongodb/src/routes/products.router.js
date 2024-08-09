const express = require("express");
const router = express.Router();

const ProductManager = require("../dao/db/product-manager-db.js");
const manager = new ProductManager();

//Listar todos los productos: 

router.get("/", async (req, res) => {
    const arrayProductos = await manager.getProducts();
    res.send(arrayProductos);
})

//Buscar producto por id: 

router.get("/:pid", async (req, res) => {
    let id = req.params.pid;
    try {
        const producto = await manager.getProductById(id);

        if (!producto) {
            res.send("Producto no encontrado");
        } else {
            res.send(producto);
        }
    } catch (error) {
        res.send("Error al buscar ese id en los productos");
    }
})


//3) Agregar un nuevo producto: 

router.post("/", async (req, res) => {
    const nuevoProducto = req.body;

    try {
        await manager.addProduct(nuevoProducto);
        res.status(201).json({
            message: "Producto agregado correctamente"
        });
    } catch (error) {
        res.status(500).json({ error: "Error interno del servidor" })
    }
})


//4) Actualizar por ID: 

router.put("/:pid", async (req, res) => {
    const productoActualizado = req.body;
    const id = req.params.pid;

    try {
        await manager.updateProduct(id, productoActualizado);
        res.json({
            message: "Producto actualizado correctamente, la vida nos sonrie"
        });
    } catch (error) {
        res.status(500).json({ error: "Error interno del servidor" })
    }
})


//5) Eliminar por id: 

router.delete("/:pid", async (req, res) => {
    const id = req.params.pid;

    try {
        await manager.deleteProduct(id);
        res.json({
            message: "Producto eliminado correctamente"
        })
    } catch (error) {
        res.status(500).json({ error: "Error interno del servidor" })
    }
})
module.exports = router; 