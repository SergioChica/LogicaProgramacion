let nombre = prompt("Ingrese su nombre")
let correo = prompt("ingrese su correo");
let nit = prompt("Ingrese su nit");
let correoMalo = !correo.includes("@") 
let nitMalo = nit.length < 0 || nit.length > 12 || !nit.includes("-") 
//ojo sera con && ya que si por ejemplo el email falla no puede concluir que el nit tambien
let correoynitMalo = !correo.includes("@") && nit.length < 0 || nit.length > 12 || !nit.includes("-")
switch (true) {
    //no muestra los mensajes correctos
    //OJO CORREGIR ESTE SWITCH
    case correoynitMalo:

    console.log(nombre," email y Nit incorrectos");

    break;

    case correoMalo:
        console.log(nombre,"email no válido");
    break;
    
    case nitMalo:
        console.log(nombre,"Nit no valido");
    break;

    default:
        console.log("A entrado a la base");
        break;
}
