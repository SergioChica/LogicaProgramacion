let numero = parseInt(prompt("Ingrese un numero de 1 a 15"))
let primo = numero == 2 || numero == 3 || numero == 5 || numero == 7 
|| numero == 11 || numero == 13;

switch (primo) {
    case true:
        console.log("El numero es primo");
        break;

    default:
        console.log("El numero no es primo");
        break;
}