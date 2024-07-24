console.log("Hola mundo");

//Generamos una instancia de Socket.io, ahora desde el lado del cliente. 

const socket = io(); 

//Para poder enviar mensajes al backend, tengo que usar el metodo "emit" y para poder escuchar los mensajes "on". Esto se transmite a partir de eventos. 

socket.emit("mensaje", "Hola Mundo! Te escribo desde el cliente");

//Recibimos el mensaje del backend: 
socket.on("saludito", (data) => {
    console.log(data);
})

//Recibimos el array de usuarios: 
socket.on("usuarios", (data) => {
    const listaUsuarios = document.getElementById("lista-usuarios"); 

    data.forEach( usuario => {
        listaUsuarios.innerHTML += `<li> ${usuario.nombre} - ${usuario.apellido} </li>`
    })
})