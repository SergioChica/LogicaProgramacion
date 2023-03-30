console.log("registrarse:");
console.log("iniciar sesion:");
console.log("vender producto:");
let menu = prompt ("seleccione una opcion")
switch (menu) {
    case "registrarse":
        prompt("ingrese correo");
        prompt("ingrese contraseña")
        console.log("Esta registrado");
        break;
    case "iniciar sesion":
        prompt("ingrese correo");
        prompt("ingrese contraseña")
        console.log("Inicio sesion correctamente");
        break;
    case "vender producto":
        prompt("ingrese nombre de producto")
        prompt("ingrese precio de producto")
        console.log("Producto en venta");
        break;
    default:
        console.log("opcion no valida");
        break;
}