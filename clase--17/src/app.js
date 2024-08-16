/** CLASE 17 - MONGODB AVANZADO 2 **/

//Temas de hoy: 
//1) Agregaciones
//2) Paginación 
//3) TP FINAL. 

//mongodb+srv://backend70080:coderhouse@cluster0.4fw2i.mongodb.net/ElCodigoLoco?retryWrites=true&w=majority&appName=Cluster0

// import mongoose from "mongoose";
// import OrderModel from "./models/order.model.js";

// const main = async () => {
//     mongoose.connect("mongodb+srv://backend70080:coderhouse@cluster0.4fw2i.mongodb.net/ElCodigoLoco?retryWrites=true&w=majority&appName=Cluster0"); 

//     //Ejercicio 1: Calculamos el total de pizzas vendidas por sabores pero solo en tamaño familiar. 

//     const resultado = await OrderModel.aggregate([
//         {
//             $match: {
//                 tam: "familiar"
//             }
//         },
//         {
//             $group: {
//                 _id: "$nombre",
//                 total: {
//                     $sum: "$cantidad"
//                 }
//             }
//         },
//         //Ejercicio 2: 
//         {
//             $sort: {
//                 total: 1
//                 //1: ascendente
//                 //-1: descendente
//             }
//         }, 
//         //Guardamos los  nuevos resultados en una coleccion llamada "reports": 
//         {
//             $group: {
//                 _id: 1, 
//                 orders: {   //Si yo quiero que los resultados se guarden en un array puedo usar la herramienta $push: 
//                     $push: "$$ROOT"
//                     //Root hace referencia al documento actual en donde estamos trabajando. 
//                 }
//             }
//         },
//         //Una vez que agrupamos los resultados, los guardamos en una coleccion: 
//         {
//             $project: {
//                 _id: 1, 
//                 orders: "$orders"
//                 //Aca le decimos que el campo orders va a ser igual a los resultados que guardamos en el paso anterior. 
//             }
//         },
//         {
//             //Ultimo paso super importante, hacer el merge de las colleccion
//             $merge: {
//                 into: "reports"
//             }
//         }
//     ])

//     console.log(resultado);
// }

// main(); 

//EJERCICIO PAGINACION: 

import mongoose from "mongoose";
import OrderModel from "./models/order.model.js";

const main = async () => {
    mongoose.connect("mongodb+srv://backend70080:coderhouse@cluster0.4fw2i.mongodb.net/ElCodigoLoco?retryWrites=true&w=majority&appName=Cluster0");

    const resultado = await OrderModel.paginate({"tam":"familiar"}, {limit: 2, page: 2});
    console.log(resultado);
}

//main(); 

///////////////////////////////////////////////////////////

//EJERCICIO DE PAGINACION CON VISTAS EN EXPRESS-HANDLEBARS: 

import express from "express";
const app = express(); 
const PUERTO = 8080; 
import exphbs from "express-handlebars";

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views"); 

//Nos conectamos: 
mongoose.connect("mongodb+srv://backend70080:coderhouse@cluster0.4fw2i.mongodb.net/ElCodigoLoco?retryWrites=true&w=majority&appName=Cluster0");

//Rutas
app.get("/pizzas", async (req, res) => {
        let page = req.query.page || 1;
        let limit = 2; 

    try {
        const listadoPizzas = await OrderModel.paginate({}, {limit, page}); 

        //Me puedo recuperar el doc y pasarlo a pizzas: 
        const pizzasResultadoFinal = listadoPizzas.docs.map( pizza => {
            const{_id, ...rest} = pizza.toObject();
            return rest; 
        })

        res.render("pizzas", {
            pizzas: pizzasResultadoFinal, 
            hasPrevPage: listadoPizzas.hasPrevPage,
            hasNextPage: listadoPizzas.hasNextPage,
            prevPage: listadoPizzas.prevPage, 
            nextPage: listadoPizzas.nextPage,
            currentPage: listadoPizzas.page, 
            totalPages: listadoPizzas.totalPages
        })
    } catch (error) {
        console.log(error);
        res.status(500).send("nos vamos a re morir ");
    }
    
})

app.listen(PUERTO, () => {
    console.log("Escuchando en el puerto 8080");
})



