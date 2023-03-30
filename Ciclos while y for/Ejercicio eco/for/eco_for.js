let letra = prompt("Ingrese una letra: ");
let repeticiones = parseInt(prompt("¿Cuántas veces desea repetir la letra? "));

let eco = "";
for (let index = 0; index < repeticiones; index++) {
  eco =  eco + letra;
}

console.log(eco);