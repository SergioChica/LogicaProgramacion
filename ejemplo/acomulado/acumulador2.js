/*
Un programa que pida al usuario seis números
enteros y muestre su suma
*/
let numero;
let contador = 1;
let acumuladora = 0;
while (contador <= 6) {
  numero = parseInt(prompt("ingrese numero"));
  acumuladora = acumuladora + numero;
  contador++
}
console.log("suma total :", acumuladora);