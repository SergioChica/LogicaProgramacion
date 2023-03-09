let contraseñaIngresada = prompt("Ingrese su contraseña:");
let resultadoValidacion = validarContraseña(contraseñaIngresada);

function validarContraseña(contraseña) {
    if (contraseña.length < 8 || contraseña.length > 15) {
      return "La contraseña debe tener entre 8 y 15 caracteres.";
    } else if (contraseña.indexOf(' ') === -1) {
      return "La contraseña debe contener un espacio.";
    } else {
      return "La contraseña es válida.";
    }
  }
console.log(resultadoValidacion);