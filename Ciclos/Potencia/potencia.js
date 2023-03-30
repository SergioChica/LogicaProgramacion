let a = parseInt(prompt("Ingrese la base"));
let b = parseInt(prompt("Ingrese la potencia"));

let resultado = 1;
let acomulado = 1;

while (resultado <= b) {

    acomulado = acomulado * a;  
    resultado++
    
}
console.log("resultado =", acomulado);