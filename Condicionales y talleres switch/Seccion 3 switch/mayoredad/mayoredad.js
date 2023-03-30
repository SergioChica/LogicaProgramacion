let edad = prompt("Ingrese edad");
let mayoredad = edad >= 18;

switch (mayoredad) {
    case true:
        console.log("Usted es mayor de edad");
        break;

    default:
        console.log("Usted es menor de edad");
        break;
}