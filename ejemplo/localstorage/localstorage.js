//guardado de datos
//los valores siempre deben ser cadenas

let correo = prompt("ingrese correo");
localStorage.setItem("correo", correo);

//eliminacion se hace mediante la llave
//localStorage.removeItem("correo");

//lectura de datos, se hace mediante la llave
let correoIngresado = localStorage.getItem("correo");
console.log("El correo guardado es ", correoIngresado);