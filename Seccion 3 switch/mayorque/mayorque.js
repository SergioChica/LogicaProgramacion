let n1 = parseFloat(prompt("Ingrese el primer numero"));
let n2 = parseFloat(prompt("Ingrese el segundo numero"));
let Mayor = n1 > n2;
let Menor = n1 < n2;
let Igual = n1 == n2;
switch (true) {
    case Mayor:
        console.log("El numero 1 es mayor que numero 2");
        break;
    case Menor:
        console.log("El numero 1 es menor que numero 2");
        break;
    case Igual:
        console.log("El numero es igual");
        break;

    default:
        console.log("Cifra invalida");
        break;
}