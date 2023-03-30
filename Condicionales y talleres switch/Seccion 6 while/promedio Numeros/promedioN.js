let numeros;
let cantidad = 0;
let aumento = 0;
let suma = 0;
let divisor;


while (numeros != 0 || aumento <= cantidad) {

        numeros = parseInt(prompt("Ingrese el numero a calcular"));
        suma = suma + numeros;
        divisor = suma / aumento;

     aumento++   

}
console.log("El promedio es:", divisor);