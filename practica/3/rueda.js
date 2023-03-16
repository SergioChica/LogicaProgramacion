let diametro = parseFloat(prompt("Ingrese diametro"));
if (diametro > 1.4){

    console.log("La rueda es para un vehículo grande");

}else if (diametro > 0.8 && diametro <= 1.4) {

    console.log("La rueda es para un vehículo mediano");
    
}else{

    console.log("La rueda es para un vehículo pequeño");

}