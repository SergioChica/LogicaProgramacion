let lado1 = parseFloat(prompt("Ingrese primer lado"));
let lado2 = parseFloat(prompt("Ingrese segundo lado"));
let lado3 = parseFloat(prompt("Ingrese tercer lado"));
let triangulo = lado1 + lado2 + lado3 == 180

switch (triangulo) {
    case true:
        console.log("Es un triangulo");
        break;

    default:
        console.log("No es un triangulo");
        break;
}