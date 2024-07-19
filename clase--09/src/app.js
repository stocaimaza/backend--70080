/** CLASE 9 - MOTORES DE PLANTILLAS  **/

//Temas de hoy: 
//1) ¿Que es un motor de plantillas?
//2) Instalacion y uso
//3) Condicionales y ciclos
//4) Organizamos el router de Handlebars
//5) Trabajamos con la carpeta public, js y css
//6) Avanzamos con la pre entrega

//Instalamos con el siguiente comando: npm install express-handlebars

//Configuramos nuestro servidor: 

import express from "express"; 
const app = express(); 
const PUERTO = 8080; 
import viewsRouter from "./routes/views.router.js";

//Me voy a importar el modulo de Express-Handlebars: 
import exphbs from "express-handlebars";

//Configuramos el motor de plantillas: 

app.engine("handlebars", exphbs.engine()); 
//Le decimos a express en esta linea que cuando vea un archivo de extension "handlebars", utilice el motor de plantillas: handlebars.

app.set("view engine", "handlebars"); 
//Aca nuevamente configuramos que la vista de nuestra aplicacion es desarrollada con Handlebars. 

app.set("views", "./src/views");
//Aca le decimos a express donde tiene que ir a buscar los archivos de handlebars. 

//Rutas
app.use("/", viewsRouter);

//Listen: 

app.listen(PUERTO, () => {
    console.log(`Escuchando en el puerto: ${PUERTO}`);
})

//Estructura, condicionales y ciclos: 
//layout: suele contener las plantillas principales que actuan con diseños para nuestra aplicacion.  Aca podemos colocar el footer, header, etc

//partials: los vamos a usar para fragmentos de codigo reutilizable. Ejemplo la card con productos. 

//Trabajamos con material estatico (Carpeta Public): 
app.use(express.static("./src/public"));

