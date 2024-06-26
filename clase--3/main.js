/** CLASE 3 **/

//Temas de hoy: 

//1) Enfoque sincrónico vs asincrónico. 
//2) Callbackd
//3) Promesas 
//4) Async Await

// Sincronismo vs Asincronismo 

//PROGRAMACIÓN SINCRONICA

//Es un enfoque o estilo de programación en el que las tareas se ejecutan secuencialmente en el orden en el que se escriben.  

console.log("Primero");
console.log("Segundo");
console.log("Tercero");

//Ejemplo con funciones: 

function a() {
    console.log("1");
    b();
}

function b() {
    console.log("2");
    c();
}

function c() {
    console.log("3");
}

a();

//Cada mensaje es ejecutado en ordea, y se bloquea la ejecución del siguiente mensaje hasta que este se complete. 


//PROGRAMACION ASINCRONICA: 
//Es un enfoque o estilo de programación en que las tareas se ejecutan en segundo plano y no bloquean la ejecucion de la siguiente tarea. 

//Para poder simular una peticion a una API, vamos a usar un método de JS llamado setTimeOut. Este método recibe dos parametros: una funcion y un tiempo en milisegundos. 

setTimeout(() => {
    console.log("Primer tareaaaaaaa");
}, 3000);

console.log("Segunda tarea, ahh re loco");

//2) CALLBACKS 
//Que es un callback? Es una función que pasamos como argumento a otra funcion. 

//Ejempliño: 

function suma(numeroA, numeroB, cb) {
    let resultado = numeroA + numeroB;
    cb(resultado);
}

function mostrarResultado(dato) {
    console.log("El resultado de la suma: " + dato);
}

//Invocamos a suma: 

suma(10, 5, mostrarResultado);

//EJERCICIO DE ANALISIS: 

//Ejemplo de función map "made in la salada"

let numeros = [1, 2, 3, 4, 5];

let numerosDuplicados = numeros.map(numero => numero * 2);

console.log(numerosDuplicados);

//Desarrollo: 

function mapear(array, callback) {
    let arrayNuevo = [];

    for (let i = 0; i < array.length; i++) {
        arrayNuevo.push(callback(array[i]));
    }

    return arrayNuevo;
}

//Funcion callback para duplicar: 

function duplicar(numero) {
    return numero * 2;
}

console.log("Nueva función Map desarrollada por nosotros: " + mapear(numeros, duplicar));

//3) PROMESAS 
// Las promesas son objetos que representan un hecho eventual a futuro. Las vamos a utilizar en operaciones asincronicas que pueden resultar exitosas o fallidas. 

//Las promesas tienen tres estados: 
//PENDIENTE: La operacion aun se ha completado ni rechazado. 
//EXITOSA: La operacion asincrónica se completó correctamente. 
//FALLIDA: La operacion asincrónica fallo y se rechazo la promesa. Esto puede suceder si se produce algun error en la operacion. 

//Creamos una promesa: 

const promesa = new Promise((resolve, reject) => {
    //Aca va el codigo que queremos ejecutar. 

    //Resolve y Reject son funciones que nos provee la promesa para indicarle el estado de la misma. 
    let estado = true;
    if (estado) {
        resolve("Exito en la promesa, me llego la camiseta firmada");
    } else {
        reject("Error en la promesa, me llega un par de medias ");
    }
})

console.log(promesa);

//Métodos THEN y CATCH:
//Estos métodos nos permite manejar el resultado de la promesa. Se usan concatenados a la promesa. 

//THEN: lo utilizamos cuando la promesa se resuelve exitosamente. 
//CATCH: lo ejecutamos cuando una promesa se rechaza. 
//FINALLY: Es opcional, se agrega en ES8 y se ejecuta siempre, sin importar si se resuelve o se rechaza la promesa. 

//Ejemplo: 

promesa
    .then(() => console.log("La promesa es exitosaaaaaaaaaaaa, viva la vidaaaaa"))
    .catch(() => console.log("La promesa se rechazooooo, nooooooooooooooooooo "))
    .finally(() => console.log("Es el fin señores, todo termino!"))


// Ejemplo con productos, retornamos por ID: 

const productos = [
    { id: 1, nombre: "Mesa", precio: 5000 },
    { id: 2, nombre: "Silla", precio: 1500 },
    { id: 3, nombre: "Cuadro", precio: 500 }
]

function buscarProductoPorId(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const productoBuscado = productos.find(producto => producto.id === id);
            if (productoBuscado) {
                resolve(productoBuscado);
            } else {
                reject(" No existe el producto, vamos a morir! ");
            }
        }, 4000)
    })
}

buscarProductoPorId(50)
    .then( ( producto ) => console.log( producto ))
    .catch ( (error) => console.log("Tenemos un error, todo es bronca y dolor: " + error)) 

//4) ASYNC AWAIT: 

//Async y Await son palabritas reservadas que nos permite trabajar con promesas de una forma mucho más simple. 

async function buscoProductoPorIdAsyn(id) {
    const producto = await buscarProductoPorId(id); 
    console.log(producto); 
}

buscoProductoPorIdAsyn(3); 

//CONSULTAMOS ALGUNA API: 

async function obtenerUsuarios() {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users"); 
    const usuarios = await respuesta.json();
    console.log(usuarios); 
}

obtenerUsuarios(); 

//Es lo mismo que hacer esto: 
fetch("https://jsonplaceholder.typicode.com/users")
    .then(respuesta => respuesta.json())
    .then(usuarios => console.log(usuarios))