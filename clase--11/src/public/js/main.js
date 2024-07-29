console.log("Hola, si funciona!");

const socket = io(); 
//Crear una instancia de socket.io desde el lado del cliente ahora. 

//Crear una variable para guardar al usuario. 
let user; 

const chatBox = document.getElementById("chatBox"); 

//Utilizamos Sweet Alert para el mensaje de Bienvenida. 

//Swal es un objeto que nos permite usar los métodos de la libreria. 
//Fire nos permite configurar el alerta. 

Swal.fire({
    title:"Identificate",
    input:"text", 
    text: "Ingresa un usuario para identificarte en el chat", 
    inputValidator: (value) => {
        return !value && "Necesitas escribir un nombre para continuar"; 
    }, 
    allowOutsideClick: false
}).then(result => {
    user = result.value;
})

//Desde el chatbox capturamos el mensaje y se lo enviamos al backend: 

chatBox.addEventListener("keyup", (event) => {
    if(event.key === "Enter") {
        //Trim nos permite sacar los espacios en blanco del principio y del final de un string. 
        //(LENGTH = LOS GATITOS TIENEN HAMBRE)
        if(chatBox.value.trim().length > 0) {
            socket.emit("message", {user: user, message: chatBox.value});
            chatBox.value = "" ; 
        }
    }
})


//Listener de mensajes: 
socket.on("messagesLogs", data => {
    const log = document.getElementById("messagesLogs"); 
    let messages = ""; 

    data.forEach(message => {
        messages = messages + `${message.user} dice: ${message.message} <br>`
    })

    log.innerHTML = messages; 
})