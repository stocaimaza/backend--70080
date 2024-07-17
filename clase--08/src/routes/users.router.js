import { Router } from "express";
const router = Router(); 

//Array para almacenar usuarios: 
const users = [];

//Rutas: 

router.get("/", (req, res) => {
    res.send(users);
})

router.post("/", (req, res) => {
    const nuevoUsuario = req.body; 
    users.push(nuevoUsuario); 
    res.send({status: "success", message: "Usuario creado correctamente"}); 
})



export default router; 
