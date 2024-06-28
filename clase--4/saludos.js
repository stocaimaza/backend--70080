const temprano = () => {
    console.log("Buenos dias");
}

const tarde = () => {
    console.log("Buenas tardes"); 
}

const noche = () => {
    console.log("Buenas noches"); 
}

//Hay dos formas para exportar y tambien para importar codigo: 
//- Common JS
//- ES Modules

// module.exports = {
//     temprano, 
//     tarde, 
//     noche
// }

export {temprano, tarde, noche}
