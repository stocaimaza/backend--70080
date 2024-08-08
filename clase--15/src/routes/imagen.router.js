import { Router } from "express";
const router = Router(); 
//Necesito recibir el Model de "imagenes": 
import ImagenModel from "../model/imagen.model.js";

//Ruta raiz de la aplicacion 

router.get("/", async (req, res) => {

    const imagenes = await ImagenModel.find() 

    //Pueden utilizar el método "lean()" de Mongoose para transformar correctamente los objetos de MongoDB a JavaScript.   (.lean();)

    //Otra forma mas rustica de arreglarlo es mapearlo: 
    const nuevoArray = imagenes.map(imagen => {
        return {
            id: imagen._id,
            title: imagen.title, 
            description: imagen.description, 
            filename: imagen.filename, 
            path: imagen.path
        }
    })
    res.render("index", {imagenes: nuevoArray});
})


export default router; 