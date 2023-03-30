let letra = prompt("Ingrese la letra que quiere que haga eco");
let veces = parseInt(prompt("Ingrese la cantidad de veces que quiera que haga eco la letra"))     
let contador =1;
let acomulado= "";

while (contador <= veces) {

    acomulado += letra

    contador++
}
console.log(acomulado);