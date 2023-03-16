let diametro = parseFloat(prompt("Ingrese diametro"));
let grande = diametro > 1.4
let mediano = diametro > 0.8 && diametro <= 1.4
switch (true) {

    case grande:
        console.log("La rueda es para un vehículo grande");
        break;
        
    case mediano:
        console.log("La rueda es para un vehículo mediano");
        break;

    default:
        console.log("La rueda es para un vehículo pequeño");
        break;
}