let numero1 = parseInt(prompt("Ingrese primer numero"));
let numero2 = parseInt(prompt("Ingrese segundo numero"));

let resultado = 1;
let acomulado = 0;

while (resultado <= numero1) {

    acomulado = acomulado + numero2;  
    resultado++
    
}
console.log("resultado =", acomulado);