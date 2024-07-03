
/** 2 DESAFIO - BACKEND **/

//Importamos filesystem: 
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

    getProducts() {
        
        return this.products;
    }

    //Debe contar con un método “getProductById” el cual debe buscar en el arreglo el producto que coincida con el id
    //En caso de no coincidir ningún id, mostrar en consola un error “Not found”

    getProductById(id) {
        const producto = this.products.find(item => item.id === id);

        if (!producto) {
            console.log("Not found!, maldita rata de dos patas ");
        } else {
            console.log("Sii lo encontramos!: ");
            console.log(producto);
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

//Apuntes: Cada producto que se genere debe tener lo siguiente: 
/*
title (nombre del producto)
description (descripción del producto)
price (precio)
thumbnail (ruta de imagen)
code (código identificador)
stock (número de piezas disponibles)
*/

//TESTING: 

//1) Se creará una instancia de la clase “ProductManager”: 

const manager = new ProductManager("./src/productos.json"); 


//2) Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []

console.log(manager.getProducts());

//3)Se llamará al método “addProduct” con los campos:
// title: “producto prueba”
// description:”Este es un producto prueba”
// price:200,
// thumbnail:”Sin imagen”
// code:”abc123”,
// stock:25

manager.addProduct("Producto prueba", "Este es un producto prueba", 500, "sin imagen", "abc123", 25); 

// El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE

//Agregamos un segundo producto para chequear el id: 

//manager.addProduct("Fideos", "los mas ricos", 150, "sin imagen", "abc124", 1000); 

//Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado

//Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.

//manager.addProduct("Arroz", "Marolio", 150, "sin imagen", "abc125", 1000); 
//manager.addProduct("Arroz", "Marolio", 150, "sin imagen", "abc125", 1000); 

//console.log(manager.getProducts());

//Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo

//manager.getProductById(2);

//manager.getProductById(100);