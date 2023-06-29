import { moduloIngresar } from "./ingresar.js";
import { moduloEliminar } from "./eliminar.js";
import { esquema } from "./model.js";

esquema();

function start() {
  //mostramos las categorias disponibles
  // aseo();
  // carnes();
  // lacteos();
  //se aumenta la cantidad de productos en 1
  // let salir = prompt("Ponga si quiere salir de la funcion")
    let opcion = parseInt(prompt("Seleccione que funcion quiere utilizar: Ingresar = 1 | Eliminar = 2"))

      switch (opcion) {
        case 1:
                moduloIngresar();
          break;
    
        case 2:
                moduloEliminar();
        break;
    
        default:
          console.log("Gracias por usar nuestro programa");
          break;
      }

    

}

start();