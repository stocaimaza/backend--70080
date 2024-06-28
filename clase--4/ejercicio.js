import moment from "moment"; 

//Debe contar con una variable que almacene la fecha actual (utilizar moment())

const fechaActual = moment(); 

//Debe contar con una variable que almacene sólo la fecha de tu nacimiento (utilizar moment).

const fechaNacimiento = moment("1987-03-10"); 

//Validar con un if que la variable contenga una fecha válida (utilizar el método isValid());

if(fechaNacimiento.isValid()){
    //Finalmente, mostrar por consola cuántos días han pasado desde que naciste hasta el día de hoy. (utilizar el método diff()

    const diasPasados = fechaActual.diff(fechaNacimiento, "days"); 

    console.log(`Han pasado ${diasPasados} dias desde que el profe nacio hasta hoy`); 
} else {
    console.log("La fecha es incorrecta"); 
}
