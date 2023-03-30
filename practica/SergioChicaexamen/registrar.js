let nombre = prompt("Ingrese su nombre")
let correo = prompt("ingrese su correo");
let nit = prompt("Ingrese su nit");
//ojo sera con && ya que si por ejemplo el email falla no puede concluir que el nit tambien
//ESTA VALIDACION DAÑA LAS DE ABAJO, YA QUE PE si el nit > 12 pero el correo esta bien
//va a mostrar que los dos estan malos
if (!correo.includes("@") && !(nit.length < 0 && nit.length > 12 && nit.includes("-"))) {

    console.log(nombre," email y Nit incorrectos");
    
}
 
if (nit.length < 0 || nit.length > 12 || !nit.includes("-") ) {

    console.log(nombre,"Nit no valido");
    
}else{
    console.log(nombre,"Nit  valido");

}


if (!correo.includes("@") ) {
    console.log(nombre,"email no válido");
    
}

//nota: 1.8

