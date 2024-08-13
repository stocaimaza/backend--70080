/** MONGO AVANZADO 1 **/

//Temas de hoy: 
//1) Teoria de la indexacion. 
//2) Maneja de Populations en MongoDB. 
//3) Middleware PRE

//TEORIA DE LA INDEXACION: 

//Es una tecnica o proceso que realizamos para tener respuesta a las consultas mucho más rapido. 

//Esto nos permite tener una referencia previa al momento de buscar un documento, con el fin de evitar recorrer toda la coleccion, documento por documento, hasta encontrar el valor buscado. 

//Esta referencia es la que se conoce como indice y se crea a partir de uno o varios campos del documento. 

// import mongoose from "mongoose";
// import UserModel from "./models/user.model.js";

// const main = async () => {
//     await mongoose.connect("mongodb+srv://backend70080:coderhouse@cluster0.4fw2i.mongodb.net/Coder?retryWrites=true&w=majority&appName=Cluster0"); 

//     const respuesta = await UserModel.find({edad: {$lt:19}}).explain("executionStats");
//     //El método explain me da una estadistica de la consulta y le tenemos que pasar el parametro "executionStats" para obtener todos los detalles: 
//     console.log(respuesta);
// }

// main(); 

//Resultados de la consulta: 
//nReturned: 25000,
//executionTimeMillis: 17

//Consultamos por "Carlos": 
// nReturned: 111,
//executionTimeMillis: 66

//Si consultamos por documentos con el nombre "Carlos" pero con el indice configurado en la propiedad nombre, tenemos el siguiente resultado: 

//nReturned: 111,
//executionTimeMillis: 7

//Consultamos por los 19 añitos: 
//nReturned: 384,
//executionTimeMillis: 32,

//Y si usamos el index en la edad: 
//nReturned: 384,
//executionTimeMillis: 1,

/////////////////////////////////////////////////////////////

//EJERCICIO CON CURSOS Y ALUMNOS

import mongoose from "mongoose";
import AlumnoModel from "./models/alumno.model.js";
import CursoModel from "./models/curso.model.js";

const main = async () => {
    await mongoose.connect("mongodb+srv://backend70080:coderhouse@cluster0.4fw2i.mongodb.net/Coder?retryWrites=true&w=majority&appName=Cluster0"); 

    const estudiante = await AlumnoModel.findById("66bbeaef78eae309623b29ae");
    const cursoBackend = await CursoModel.findById("66bbeb2178eae309623b29b3") 

    //console.log(estudiante);
    //console.log(cursoBackend);

    //Ahora ingreso el curso al alumno: 

    //estudiante.cursos.push(cursoBackend);

    //Actualizar la base de datos: 
    //await AlumnoModel.findByIdAndUpdate("66bbeaef78eae309623b29ae", estudiante);
    
    //Ahora si quiero ver al estudiante con sus cursos, yo puedo hacer lo siguiente: 

    const estudianteConCurso = await AlumnoModel.findById("66bbeaef78eae309623b29ae")
    //.populate("cursos"); 
    console.log(estudianteConCurso); 
    //console.log(JSON.stringify(estudianteConCurso, null, 2));
}

main(); 