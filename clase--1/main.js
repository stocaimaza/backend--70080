/** CLASE 1 - Principios básicos de JavaScript  **/

//Ecma Internacional lanza la primera version en Junio del 1997. Llamada ES1. 

//ES6 se lanza en el año 2015 y es la version mas completa. 

//Temas de hoy: 

//1) Plantillas Literales
//2) Funciones
//3) Scope 
//4) Clousures
//5) Clases y POO en JS. 


//PLANTILLAS LITERALES: 

//Los template strings son una forma de concatenar strings mucho mas sencilla. 

//Antes: 

let mascota = "Fatiga"; 

let mascotaEdad = 5; 

console.log("Nuestro perro " + mascota + " tiene " + mascotaEdad + " años");

//Ahora: 
//backsticks ` alt + 96 `
console.log(`Nuestro perro ${mascota} tiene ${mascotaEdad + 1 } años`);
//En este espacio tambien puede ejecutar cualquier codigo de JS. 

// FUNCIONES: 

//Repasemos: las funciones son bloques de codigo que podemos reutilizar en nuestro programa. Es importante destacar que una función debe tener una sola responsabilidad, debe hacer una sola cosa. 

//Tenemos dos categorias en funciones: 

//FUNCIONES DECLARATIVAS: 

//Paso 1, las voy a declarar: 

function saludar(curso) {
    //Cuerpo de la función. 
    console.log("Hola comision " + curso);
}


//Paso 2, las voy a invocar
saludar("de Backend! I");

//¿Se puede invocar una función antes de su declaracion? 

//Si se puede, esto se puede hacer gracias al "hoisting" (elevacion), es un proceso interno que realiza el lenguaje durante la lectura del codigo, en donde "eleva" las declaraciones de las funciones. Cuidado! Solo las declarativas. 

//FUNCIONES EXPRESIVAS: 
//Estas se definen utilizando una expresión. Las trabajamos asignandolas a variables: 


//Función anónima: 

let nuevoSaludo = function(curso) {
    console.log("La mejor comision del condado: " + curso)
}

nuevoSaludo("70080");


//Función Flecha: 

let ultimoSaludo = curso  => {
    console.log("Casi fin de semana! Siiiiiiii, a descansar curso de :"  + curso);
}

ultimoSaludo("Backend"); 

//Version resumida: 

let chau = curso => console.log("Chau: " + curso); 

chau("Backendiño");

//4) SCOPE: 
//El scope es el alcance que tienen las variables dentro de nuestro programa. 
//En JS tenemos dos tipos de Scope que son: 
// - Scope global: las variables globales pueden ser accedidas desde cualquier parte del programa. 
// - Scope local: las variables locales solo pueden ser accedidas desde el bloque en el que fueron declaradas. 

let global = 2024; 

function saludito() {
    console.log("Hola, estamos en el año " + global); 
    let curso = "Backend"; 
    console.log("Curso de " + curso); 
}

saludito(); 


//4) CLOSURES: 
//Los cierres o cláusulas en JS es un concepto que se refiere a la capacidad de una función anidada de acceder a las variables de su función padre, incluso cuando la función ya termino su ejecucion. 

function padre() {
    let deuda = 1500000; 
    function anidada() {
        console.log(deuda); 
    }

    return anidada; 
}

let clausula = padre(); 
clausula(); 


//5) CLASES: son moldes que nos permiten crear objetos con caracteristicas similares. 
//Recordemos que JS es un lenguaje basado en prototipos como Java, pero igual en la version ES6 se incorporan las clases, que son una forma mas simple de crear prototipos. 

class Persona {
    //Podemos implementar una función constructora, que se ejecuta cuando creamos un objeto de esta clase: 
    constructor(nombre, edad) {
        this.nombre = nombre; 
        this.edad = edad; 
        //La palabra reservada "this" hace referencia al objeto qeu se esta creando. 
        //Cada vez que creamos un objeto a partir de una clase decimos que estamos creando una instancia de esa clase. 
    }
    //Métodos: 
    saludar() {
        console.log("Hola, soy " + this.nombre);
    }

    despedir() {
        console.log("Chau, me voy, soy " + this.nombre);
    }
    // Propiedad estatica: 

    static planeta = "Tierra"; 

    //Método estático: 

    static especie() {
        console.log("Soy un ser humano");
    }

}

let coky = new Persona("Coky Argento", 18);
let paola = new Persona("Paola Argento", 18);
console.log(coky);
console.log(paola);
//Para crear una instancia de una clase, utilizamos la palabra reservada "new", seguida del nombre de la clase, y entre parentesis los parametros que recibe la función constructora. 

coky.saludar();
paola.despedir();

console.log(Persona.planeta);

//¿Cómo voy a invocar un método estatico? 
//A partir del nombre de clase: 
Persona.especie(); 

//Vamos a aplicar el principio de Herencia para crear una clase Estudiante. 

class Estudiante extends Persona {
    //Si yo quiero generar una variable o propiedad privada. La tengo que mencionar en la clase con el #. 
    #promedio; 
    constructor(nombre, edad, carrera, promedio) {
        super(nombre, edad); 
        this.carrera = carrera; 
        this.#promedio = promedio; 
    }

    //Métodos propios: 
    miCarrera() {
        console.log(`Hola, mi carrera es ${this.carrera}`);
    }

    //Para poder revisar variables privadas, tengo que crear un método que me permita acceder a ellas: 
    get getPromedio() {
        return this.#promedio;
    }
}

let estudiante = new Estudiante("Juan", 20 , "Ingenieria en Sistemas", 10 ); 

console.log(estudiante);
estudiante.saludar(); 
estudiante.despedir(); 
estudiante.miCarrera();

console.log("Mi promedio de notas es: " + estudiante.promedio);

//Peeero, si uso el método get puedo revisar el dato privado: 
console.log(estudiante.getPromedio);

