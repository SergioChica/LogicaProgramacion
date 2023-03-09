console.log("Modificar");
console.log("Visualizar");

let datos = prompt("ingrese sus datos");

let estado = prompt("Ingrese estado");



switch (estado) {
 

    case "nuevos datos":
        datos = prompt("modificar datos");
        console.log("Nuevo nombre:",datos);
        break;

    case "ver":
        console.log("Sus datos",datos);

    default:
        console.log("Estado no valido");
        break;
}
