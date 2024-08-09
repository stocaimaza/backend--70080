const CartModel = require("../models/cart.model.js");

class CartManager {
    async crearCarrito() {
        try {
            const nuevoCarrito = new CartModel({ products: [] });
            await nuevoCarrito.save();
            return nuevoCarrito;
        } catch (error) {
            console.log("Error al crear un cariño de compras");
        }
    }

    //Retorne un carrito por id:

    async getCarritoById(carritoId) {
        try {
            const carrito = await CartModel.findById(carritoId);
            if (!carrito) {
                throw new Error("No existe un carrito con ese id");
            }
            return carrito;
        } catch (error) {
            console.log("Error al obtener el carrito por id");
            throw error;
        }
    }

    //Agregar productos al carrito: 

    async agregarProductosAlCarrito(carritoId, productoId, quantity = 1) {
        try {
            const carrito = await this.getCarritoById(carritoId);
            const existeProducto = carrito.products.find(p => p.product.toString() === productoId);

            if (existeProducto) {
                existeProducto.quantity += quantity;
            } else {
                carrito.products.push({ product: productoId, quantity });
            }

            //Vamos a marcar la propiedad "products" como modificada antes de guardar. 
            carrito.markModified("products");
            await carrito.save(); 
            return carrito;
        } catch (error) {
            console.log("Error al agregar un producto: ", error); 
        }
    }

}

module.exports = CartManager; 