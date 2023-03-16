let contraseña = prompt("Ingrese contraseña");
let caracteres = contraseña.length < 8 || contraseña.length > 15
let espacio = !contraseña.includes(" ")
switch (true) {
    case caracteres:
        console.log("La contraseña tiene que tener de 8 a 15 caracteres");

    case espacio:
        console.log("La contraseña tiene que tener un espacio");
        break;

    default:
        console.log("La contraseña es valida");
        break;
}