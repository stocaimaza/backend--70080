/** CLASE 4 - NODE Y NPM  **/

//Para iniciar un proyecto ejecutamos en consola: 
//npm init (y completamos todos los datos nosotros)
//npm init --yes (y se completa con las opciones por default)

console.log("Hola mundo, estoy desde el backend 100% "); 

//Modulo: es un archivo de JavaScript que contiene un conjunto de funciones que nos permiten resolver una tarea en particular. 

//MODULOS ESCRITOS POR NOSOTROS. 

//Importación con Common JS: 

//const saludos = require("./saludos.js"); 

// saludos.temprano();
// saludos.tarde(); 
// saludos.noche(); 

//Importacion con ES Modules: 

import { temprano, tarde, noche } from "./saludos.js";

temprano(); 
tarde(); 
noche();


//MODULOS ESCRITOS POR TERCEROS. 



//MODULOS NATIVOS DE NODE:

// Estos modulos ya vienen con Node JS. Ya tiene un conjunto de funciones que nos permiten resolver tareas. 

//Algunos modulos nativos mas usados son: 

// - FS: para trabajar con un sistema de archivos. 
// - HTTP: para crear un servidor web. 
// - PATH: para trabajar con las rutas de los archivos. 
// - CRYPTO: para trabajar con encriptación de datos. 
// - TIMERS: para trabajar con tareas asincrónicas. 
// - CONSOLE: para mostrar mensajes por consola. 

// import fs from "fs"; 
// console.log(fs);

//¿Por que se le dice dependencia? 
//La dependencia es un paquete o modulo externo que mi proyecto necesita para funcionar. 

console.log("tengo sueño");

//Dependencias de Desarrollo: 
//npm i nodemon -D
