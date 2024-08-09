const ProductModel = require("../models/product.model.js");

class ProductManager {

    async addProduct({ title, description, price, img, code, stock, category, thumbnails }) {
        try {
            if (!title || !description || !price || !img || !code || !stock || !category) {
                console.log("Todos los campos son obligatorios");
                return;
            }

            //2) Validacion: 
            //Acá tenemos que cambiar la validacion: 
            const existeCodigo = await ProductModel.findOne({ code: code });

            if (existeCodigo) {
                console.log("El codigo debe ser unico, maldita rata de dos patas!!");
                return;
            }

            const nuevoProducto = new ProductModel({
                title,
                description,
                price,
                img,
                code,
                stock,
                category,
                status: true,
                thumbnails
            })
            //Lo guardamos: 
            await nuevoProducto.save();

        } catch (error) {
            console.log("Error al agregar un producto");
        }

    }

    async getProducts() {
        try {
            const arrayProductos = await ProductModel.find();
            return arrayProductos;
        } catch (error) {
            console.log("Error al leer el archivo", error);
        }

    }

    async getProductById(id) {
        try {
            const buscado = await ProductModel.findById(id);

            if (!buscado) {
                console.log("producto no encontrado");
                return null;
            }
            console.log("Producto encontrado");
            return buscado;

        } catch (error) {
            console.log("Error al buscar por id", error);
        }
    }

    //Método para actualizar productos: 

    async updateProduct(id, productoActualizado) {
        try {
            const updateado = await ProductModel.findByIdAndUpdate(id, productoActualizado);

            if (!updateado) {
                console.log("No se encuentra ese producto maldito que estas buscandoo!! muejejejeje");
                return null;
            }
            return updateado;
        } catch (error) {
            console.log("Tenemos un error al actualizar productos");
        }
    }

    async deleteProduct(id) {
        try {
            const deleteado = await ProductModel.findByIdAndDelete(id);

            if (!deleteado) {
                console.log("Uhhh te mandaron a eliminar algo que no existe, burrrrooooo");
                return null;
            }

            return deleteado;

        } catch (error) {
            console.log("Tenemos un error al eliminar productos");
        }
    }

}

module.exports = ProductManager; 