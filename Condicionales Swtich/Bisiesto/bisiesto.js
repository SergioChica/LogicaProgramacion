let año = parseInt(prompt("Ingrese año"))
let bisiesto = año % 4 == 0 || año % 400 == 0
switch (bisiesto) {
    case true:
        console.log("El año es bisiesto");
        break;

    default:
        console.log("El año no es bisiesto");
        break;
}