let lado1 = parseFloat(prompt("Ingrese el primer lado"))
let lado2 = parseFloat(prompt("Ingrese el segundo lado"))
let lado3 = parseFloat(prompt("Ingrese el tercer lado"))

let triangulo = lado1 + lado2 + lado3

if (triangulo == 180){

    console.log("Es un triangulo");

}else{

    console.log("No es un triangulo");

}