/** CLASE 8 - ROUTER Y MULTER **/

//TEMAS DE HOY: 

//1) Express Router
//2) Servicio de archivos estáticos
//3) Middleware
//4) Tipos de Middleware
//5) Multer
//6) Lanzamos la primer pre entrega.. todo es panico, bronca y dolor!!!!!

//La Veterinaria de Pepe Argento. 

import express from "express";
const app = express();
const PUERTO = 8080; 

//Importamos los router: 
import petsRouter from "./routes/pets.router.js"; 
import usersRouter  from "./routes/users.router.js";

//Aca le digo al servidor que voy a recibir datos en formato JSON: 
app.use(express.json()); 

//Rutas: 

app.use("/api/pets", petsRouter);
app.use("/api/users", usersRouter);

//Ejemplin: 
//app.use("/api/products", productsRouter);
//app.use("/api/carts", cartsRouter);

app.listen(PUERTO, () => {
    console.log(`Escuchando en el puerto de Mar del Plata`);
})

//2) Servicio de archivos estaticos: 
//Express nos permite tener archivos estaticos, es decir archivos que no cambian en tiempo de ejecucion, como por ejemplo: html, imagenes, css, js. 

//Para configurar la carpeta public en express colocamos la siguiente linea: 

//app.use(express.static("./src/public"));

//Prefijo Virtual: si queremos que la carpeta public se llame de otra forma podemos hacerlo con el siguiente codigo: 

app.use("/static", express.static("./src/public"));

//Multer: middleware de terceros que me permite cargar archivos al servidor. 

//1) Instalamos y lo importamos: npm install multer

import multer from "multer";

//2) Creamos una ruta para subir imagenes: 

//3) Creamos el middleware de carga: 

//const upload = multer({dest:"./src/public/img"});

//4) Configuramos un storage: 
//Esto es un objeto que tiene dos propiedades: destination y filename. Como y donde se van a guardar los archivines. 

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./src/public/img");
        //Carpeta donde se van a guardar las imagenes
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); 
        //Mantengo el nombre original
    }
})

const upload = multer({storage: storage});


app.post("/imagenes", upload.single("imagen") ,(req, res) => {
    res.send("Archivo cargado!"); 
})

