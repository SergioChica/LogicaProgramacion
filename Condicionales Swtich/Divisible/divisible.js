let numero = parseFloat(prompt("Ingrese un numero"))
let divisible = numero % 3 == 0 && numero % 5 == 0
switch (divisible) {
    case true:
        console.log("El numero es divisible entre 3 y 5 al mismo tiempo");
        break;

    default:
        console.log("El numero no es divisible entre 3 y 5 al mismo tiempo");
        break;
}