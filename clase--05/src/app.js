/** CLASE 5 - MANEJO DE ARCHIVOS  **/

//Temas de hoy: 
//1) File System
//2) Manejo de archivos de forma sincrónica
//3) Manejo de archivos con callbacks
//4) Manejo de archivos con promesas
//5) Manejor de datos complejos
//6) Practicamos para el desafio (no entregable)

////////////////////////////////////////////////////////////////////////////

//1) File System es un manejador de archivos que viene ya incorporado con Node JS. 
//Me permite realizar operaciones como Crear, Leer, Actualizar y Borrar registros (CRUD).

//Ventajas y desventajas (diapo 49). 

//1) Primer pasito: tenemos que importar el módulo

const fs = require("fs");

//console.log(fs);

//A) TRABAJAMOS DE FORMA SINCRÓNICA: 

const rutaEjemploUno = "./ejemplo-sin.txt";

//Crear un archivo: 

fs.writeFileSync(rutaEjemploUno, "Hola, estamos trabajando en un ejemplo sincronico");

//Leer un archivo: 

let contenido = fs.readFileSync(rutaEjemploUno, "utf-8"); 
//El primer parametro es el path del archivo y el segundo es la codificación. Recuerden que nosotros usamos "utf-8". 
//console.log(contenido);

//Si queremos verificar que el archivo existe, hacemos lo siguiente: 

if( fs.existsSync(rutaEjemploUno)) {
    let respuesta = fs.readFileSync(rutaEjemploUno, "utf-8");
    //console.log(respuesta); 
} else {
    console.log("No existe el archivo, vamos a morir");
}

// Actualizar Contenidos: 

fs.writeFileSync(rutaEjemploUno, "Hola, esta info esta actualizada");

// Agregar mas contenido al final: 

fs.appendFileSync(rutaEjemploUno, " y este es un contenido que agregamos al final");


//Eliminar un archivo: 

fs.unlinkSync(rutaEjemploUno);

//B) TRABAJANDO CON CALLBACKS: 

const rutaEjemploDos = "./concallback.txt"; 

//Realizamos todas las operaciones: 

fs.writeFile(rutaEjemploDos, "Nuevo archivo, ahora con callbacks", (error) => {
    //El tercer parametro es el callback, que nos pregunta si hubo algun error: 
    if ( error ) return console.log("No pudimos crear el archivo");

    //Leer el archivo: 

    fs.readFile(rutaEjemploDos, "utf-8", (error, contenido) => {
        //Aca el cb tiene dos parametros, uno el error, segundo el contenido. 
        if ( error ) return console.log("No podemos leer, hay un error en la ruta");
        //console.log( contenido );

        //Si queremos agregar mas info: 
        fs.appendFile(rutaEjemploDos, " mas contenido", (error) => {
            if ( error ) return console.log("No podemos agregar mas contenido nuevo");
            
            //Eliminamos el archivo: 
            fs.unlink(rutaEjemploDos, (error) => {
                if ( error ) return  console.log("No podemos eliminarlo, vamos a morir")
            })
        })
    })
})

//C) TRABAJAMOS CON PROMESAS: 

const textoPromises = "./texto-promise.txt"; 

const operacionesAsincronicas = async () => {

    //Crear un archivo
    await fs.promises.writeFile(textoPromises, "Nuevo archivo, ahora practicamos con promesas");

    //Leer un archivo: 
    let respuesta = await fs.promises.readFile(textoPromises, "utf-8");
    console.log(respuesta);

    //Agregar contenido adicional
    await fs.promises.appendFile(textoPromises, " agregamos este texto extra");

    //Releer: 
    respuesta = await fs.promises.readFile(textoPromises, "utf-8");
    console.log(respuesta);

    //Lo eliminamos: 
    await fs.promises.unlink(textoPromises);

}

operacionesAsincronicas();

//5) Manejo de datos complejos: 

const arrayPersonas = [
    {nombre: "Tinki Winki", apellido: "Teletubbie", edad: 50},
    {nombre: "Dipsi", apellido: "Teletubbie", edad: 55},
    {nombre: "Lala", apellido: "Teletubbie", edad: 45},
    {nombre: "Po", apellido: "Teletubbie", edad: 58},
    {nombre: "Sol", apellido: "Teletubbie", edad: 30},
]

const teletubbies = "./teletubbies.json"; 

const guardarArchivo = async () => {
    await fs.promises.writeFile(teletubbies, JSON.stringify(arrayPersonas, null, 2));
}

guardarArchivo();

const leerArchivos = async () => {
    const respuesta = await fs.promises.readFile(teletubbies, "utf-8");
    const arrayNuevo = JSON.parse(respuesta);
    console.log(arrayNuevo); 
}

leerArchivos();