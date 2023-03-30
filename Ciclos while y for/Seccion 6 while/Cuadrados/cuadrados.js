let cantidad = parseInt(prompt("Ingrese la cantidad a calcular"));
let aumeto = 1;
let numeros;
let suma = 0;
let multiplicacion;


while (aumeto <= cantidad) {

    numeros = parseInt(prompt("Ingrese el numero a calcular"));

    multiplicacion = numeros * numeros
    suma = suma + multiplicacion;

    aumeto++
}
console.log("El promedio es:", suma);