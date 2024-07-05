const fs = require("fs").promises;

class ProductManager {

    static ultId = 0;

    
    constructor(path) {
        this.products = [];
        this.path = path;
    }

    async addProduct(title, description, price, img, code, stock) {
        //Y ese producto que recibo por parametro lo meto en el array: 
        //Pero antes.. validar que cada campo este completo y que el code no se repita: 

        //1) Validacion: verificamos que todos los campos esten completos

        if (!title || !description || !price || !img || !code || !stock) {
            console.log("Todos los campos son obligatorios");
            return;
        }

        //2) Validacion: 

        if (this.products.some(item => item.code === code)) {
            console.log("El codigo debe ser unico.. o todos moriremos");
            return;
        }

        //3) Crear el producto, pero que tenga el id autoincrementable. 
        const nuevoProducto = {
            id: ++ProductManager.ultId,
            title,
            description,
            price,
            img,
            code,
            stock
        }

        //4) Metemos el producto al array. 
        this.products.push(nuevoProducto);

        //5) Lo guardamos en el archivo: 
        await this.guardarArchivo(this.products);
    }

    async getProducts() {
        const arrayProductos = await this.leerArchivo();
        return arrayProductos;
    }

    //Debe contar con un método “getProductById” el cual debe buscar en el arreglo el producto que coincida con el id
    //En caso de no coincidir ningún id, mostrar en consola un error “Not found”

    async getProductById(id) {

        const arrayProductos = await this.leerArchivo();
        const buscado = arrayProductos.find(item => item.id === id);

        if (!buscado) {
            return "Producto no encontrado";
        } else {
            return buscado;
        }
    }

    //Métodos auxiliares: 
    async leerArchivo() {
        const respuesta = await fs.readFile(this.path, "utf-8");
        const arrayProductos = JSON.parse(respuesta);
        return arrayProductos;
    }

    async guardarArchivo(arrayProductos) {
        await fs.writeFile(this.path, JSON.stringify(arrayProductos, null, 2));
    }


}

//Con CommonJS: 
module.exports = ProductManager; 

//Con ESModules: 
//export default ProductManager;