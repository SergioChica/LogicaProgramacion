let cantidad = parseInt(prompt("Ingrese la cantidad de numeros que quiere sumar"))
let suma = 0;


for (let index = 0; index < cantidad; index++) {
    let numeros = parseInt(prompt("Ingrese el numero que va a sumar"))
    suma += numeros;

}console.log("Resultado:", suma); 