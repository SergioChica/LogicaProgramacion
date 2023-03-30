let n1 = parseFloat(prompt("Ingrese primer numero"))
let n2 = parseFloat(prompt("Ingrese segundo numero"))
let numero = n1 % n2 == 0

switch (numero) {
    case true:
        console.log("El numero es par");
        break;

    default:
        console.log("impar");
        break;
}