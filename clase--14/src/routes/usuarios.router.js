import { Router } from "express";
const router = Router();

//Importamos el Model (No se olviden! )
import UsuarioModel from "../models/usuarios.model.js";

//1) Obtenemos el listado de todos los usuarios: 

router.get("/", async (req, res) => {
    try {
        const listadoUsuarios = await UsuarioModel.find()
        res.json(listadoUsuarios);
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor, ahora se pone dificil la cosa" });
    }
})

//2) Subimos un nuevo usuario por Postman: 
router.post("/", async (req, res) => {
    const nuevoUsuario = req.body;
    try {
        const documentoUser = new UsuarioModel(nuevoUsuario);
        await documentoUser.save();
        res.send({ message: "Usuario guardado", usuario: documentoUser })
    } catch (error) {
        res.status(500).send("Error al crear un usuario, nos vamos a morir de frio");
    }
})


//3) Actualizamos a un usuario por ID: 
router.put("/:id", async (req, res) => {
    try {
        const user = await UsuarioModel.findByIdAndUpdate(req.params.id, req.body); 
        if(!user) {
            return res.status(404).send("Cliente no encontrado"); 
        }
        res.status(201).send({message: "Todo bien, actualizamos al usuario"})
    } catch (error) {
        res.status(500).send("Error interno del servidor");
    }
})

//4) Eliminamos un usuario por su ID: 

router.delete("/:id", async (req, res) => {
    try {
        const user = await UsuarioModel.findByIdAndDelete(req.params.id); 
        if(!user) {
            return res.status(404).send("Cliente no encontrado"); 
        }
        
        res.send("Usuario eliminado!"); 
        
    } catch (error) {
        res.status(500).send("Error interno del servidor");
    }
})


export default router; 