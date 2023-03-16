let numero = parseInt(prompt("Ingrese un numero"));
let positivo = numero > 0
let negativo = numero < 0
switch (true) {
    case positivo:
        console.log("El numero es positivo");        
        break;

    case negativo:
        console.log("El numero es negativo");        
         break;

    default:
        console.log("0 es un numero neutral");
        break;
}