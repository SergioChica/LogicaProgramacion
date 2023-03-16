let numero = parseFloat(prompt("Ingrese un numero"));
let par = numero % 2 == 0
let impar = numero % 2 == !0

switch (true) {
    case par:
        console.log("El numero es par");
        break;
        
    case impar:
        console.log("El numero es impar");
        break;

    default:
        console.log("Caracter no valido");
        break;
}