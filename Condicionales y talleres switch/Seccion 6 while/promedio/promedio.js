let cantidad = 10;
let aumeto = 1;
let numeros;
let suma = 0;
let divisor;


while (aumeto <= cantidad) {

    numeros = parseInt(prompt("Ingrese el numero a calcular"));

    suma = suma + numeros;
    divisor = suma / cantidad;
    aumeto++
}
console.log("El promedio es:", divisor);