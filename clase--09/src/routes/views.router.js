import { Router } from "express";
const router = Router(); 

//Array de productos: 
const arrayProductos = [
    {nombre: "Fideos", descripcion: "Los mas ricos", precio: 100},
    {nombre: "Arroz", descripcion: "Marolio", precio: 200},
    {nombre: "Helado", descripcion: "De menta granizada", precio: 300}
]

//Rutas: 

router.get("/", (req, res) => {
    //Ademas de renderizar el index.handlebars, le voy a mandar un objeto: 
    const usuario = {
        nombre: "Tinki", 
        apellido: "Winki", 
        mayorEdad: true
    }

    res.render("index", {usuario, arrayProductos});
})

router.get("/tienda", (req, res) => {
    res.render("tienda"); 
})

router.get("/contacto", (req, res) => {
    res.render("contacto");
})

export default router;

