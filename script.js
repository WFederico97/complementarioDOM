//DOM
const divSaludo = document.querySelector("#saludoAlUsuario");


//Saludo al usuario
const Saludo = () => {
    let nombre = prompt("Ingrese su nombre:");
    while (nombre === "" || !isNaN(parseInt(nombre))) {
        nombre = prompt("Ingrese solo valores alfabéticos por favor : ")
    }
    divSaludo.innerHTML = `<h1>¡Bienvenido! ${nombre.toUpperCase()}</h1> `

};

Saludo();




