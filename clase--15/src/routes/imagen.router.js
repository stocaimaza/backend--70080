import { Router } from "express";
const router = Router(); 
//Necesito recibir el Model de "imagenes": 
import ImagenModel from "../model/imagen.model.js";
//Traeeemo a FS: 
import {promises as fs} from "fs";

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

//Ruta para acceder al formulario de carga

router.get("/upload", (req, res) => {
    res.render("upload"); 
})

//Ruta upload para subir imagenes

router.post("/upload", async (req, res) => {
    try {
        const imagen = new ImagenModel(); 
        imagen.title = req.body.title; 
        imagen.description = req.body.description; 
        imagen.filename = req.file.filename;
        imagen.path = "/img/" + req.file.filename; 

        //Guardamos en la base de datos: 
        await imagen.save(); 
        res.redirect("/"); 

    } catch (error) {
        res.status(500).send({message: "Error en el servidor, vamos a re morir"}); 
    }
})

//Ruta para eliminar una imagen 

router.get("/imagen/:id/delete", async (req, res) => {
    const {id} = req.params; 
    const imagen = await ImagenModel.findByIdAndDelete(id);
    await fs.unlink("./src/public" + imagen.path); 
    res.redirect("/"); 
})

export default router; 