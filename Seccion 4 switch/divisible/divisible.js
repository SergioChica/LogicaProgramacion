let numero = parseFloat(prompt("Igrese un numero"));
let operacion = numero % 5 == 0

switch (operacion) {
    case true:
        console.log("El numero es divisible entre 5");
        break;

    default:
        console.log("El numero no es divisible entre 5");
        break;
}