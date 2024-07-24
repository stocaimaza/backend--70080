//Desarrollar un servidor express que, en su archivo app.js importe al archivo de productManager.

const express = require("express"); 
const app = express(); 
const PUERTO = 8080;
const productsRouter = require("./routes/products.router.js");
const cartsRouter = require("./routes/carts.router.js"); 
const viewsRouter = require("./routes/views.router.js");

//Importamos express-handlebars
const exphbs = require("express-handlebars");

//Configuramos express-handlebars: 
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

//Middleware: 
app.use(express.json()); 
//Le decimos al servidor que vamos a trabajar con JSON. 

//Rutas
app.use("/api/products", productsRouter );
app.use("/api/carts", cartsRouter); 
app.use("/", viewsRouter);


app.listen(PUERTO, () => {
    console.log(`Escuchando en el http://localhost:${PUERTO}`); 
})