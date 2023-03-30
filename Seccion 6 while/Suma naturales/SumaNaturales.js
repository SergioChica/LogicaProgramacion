let numero1 = parseInt(prompt("Ingrese cuantos numeros quiere sumar"));
let numero2; 

let incremento = 1;
let acomulado = 0;

while (incremento <= numero1) {

    numero2 = parseInt(prompt("Ingrese que numeros quiere sumar"));
    acomulado = acomulado + numero2;
    
    incremento++
    
}
console.log("Resultado:", acomulado);