import { granos, aseo, carnes, lacteos } from "./disponibles.js";
//esta función solo aumenta en 1 la cantidad de arroz
//SE DEBE IMPLEMENTAR PARA QUE AUMENTE CUALQUIER CANTIDAD DE
//CUALQUIER PRODUCTO DE CUALQUIER CATEGORÍA
function aumentarArroz(cantidad) {
  //se recupera la cantidad de existencias del arroz

  let Mostrarcantidad = localStorage.getItem("arroz");
  //se actualiza la cantidad de existencias del arroz sumando una
  localStorage.setItem("arroz", parseInt(Mostrarcantidad) + cantidad);
  return "actualizado";
}

function aumentarFrijoles(cantidad) {
  //se recupera la cantidad de existencias del arroz

  let Mostrarcantidad = localStorage.getItem("frijoles");
  //se actualiza la cantidad de existencias del arroz sumando una
  localStorage.setItem("frijoles", parseInt(Mostrarcantidad) + cantidad);
  return "actualizado";
}

function aumentarLentejas(cantidad) {
  //se recupera la cantidad de existencias del arroz

  let Mostrarcantidad = localStorage.getItem("lentejas");
  //se actualiza la cantidad de existencias del arroz sumando una
  localStorage.setItem("lentejas", parseInt(Mostrarcantidad) + cantidad);
  return "actualizado";
}

function aumentarJabon(cantidad) {
  //se recupera la cantidad de existencias del arroz

  let Mostrarcantidad = localStorage.getItem("jabon");
  //se actualiza la cantidad de existencias del arroz sumando una
  localStorage.setItem("jabon", parseInt(Mostrarcantidad) + cantidad);
  return "actualizado";
}

function aumentarLimpido(cantidad) {
  //se recupera la cantidad de existencias del arroz

  let Mostrarcantidad = localStorage.getItem("limpido");
  //se actualiza la cantidad de existencias del arroz sumando una
  localStorage.setItem("limpido", parseInt(Mostrarcantidad) + cantidad);
  return "actualizado";
}

function aumentarChampu(cantidad) {
  //se recupera la cantidad de existencias del arroz

  let Mostrarcantidad = localStorage.getItem("champu");
  //se actualiza la cantidad de existencias del arroz sumando una
  localStorage.setItem("champu", parseInt(Mostrarcantidad) + cantidad);
  return "actualizado";
}

function aumentarPescado(cantidad) {
  //se recupera la cantidad de existencias del arroz

  let Mostrarcantidad = localStorage.getItem("pescado");
  //se actualiza la cantidad de existencias del arroz sumando una
  localStorage.setItem("pescado", parseInt(Mostrarcantidad) + cantidad);
  return "actualizado";
}

function aumentarRes(cantidad) {
  //se recupera la cantidad de existencias del arroz

  let Mostrarcantidad = localStorage.getItem("res");
  //se actualiza la cantidad de existencias del arroz sumando una
  localStorage.setItem("res", parseInt(Mostrarcantidad) + cantidad);
  return "actualizado";
}

function aumentarCerdo(cantidad) {
  //se recupera la cantidad de existencias del arroz

  let Mostrarcantidad = localStorage.getItem("cerdo");
  //se actualiza la cantidad de existencias del arroz sumando una
  localStorage.setItem("cerdo", parseInt(Mostrarcantidad) + cantidad);
  return "actualizado";
}

function aumentarYogurt(cantidad) {
  //se recupera la cantidad de existencias del arroz

  let Mostrarcantidad = localStorage.getItem("yogurt");
  //se actualiza la cantidad de existencias del arroz sumando una
  localStorage.setItem("yogurt", parseInt(Mostrarcantidad) + cantidad);
  return "actualizado";
}

function aumentarLeche(cantidad) {
  //se recupera la cantidad de existencias del arroz

  let Mostrarcantidad = localStorage.getItem("leche");
  //se actualiza la cantidad de existencias del arroz sumando una
  localStorage.setItem("leche", parseInt(Mostrarcantidad) + cantidad);
  return "actualizado";
}

function aumentarKumis(cantidad) {
  //se recupera la cantidad de existencias del arroz

  let Mostrarcantidad = localStorage.getItem("kumis");
  //se actualiza la cantidad de existencias del arroz sumando una
  localStorage.setItem("kumis", parseInt(Mostrarcantidad) + cantidad);
  return "actualizado";
}


function moduloIngresar() {

  let categoriasIngresar = parseInt(prompt("Seleccione una categoria: Granos = 1 | Aseo = 2 | Carnes = 3 | Lacteos = 4"))
  switch (categoriasIngresar) {
    case 1:
            let productoGrano = parseInt(prompt("Seleccione un producto: Arroz = 1 | Frijoles = 2 | Lentejas = 3"))
            switch (productoGrano) {
              case 1:
                  let cantidadArroz = parseInt(prompt("Ingrese una cantidad"))
                  let ingresarArroz = aumentarArroz(cantidadArroz);
                      if (ingresarArroz == "actualizado"){
                  //mostramos la cantidad de arroz disponible actualizada
                  console.log(granos());
                  }else{
                    console.log("Ocurrió un error al actualizar");
                  }
                break;
                case 2:
                  let cantidadFrijoles = parseInt(prompt("Ingrese una cantidad"))
                  let ingresarFrijoles = aumentarFrijoles(cantidadFrijoles);
                      if (ingresarFrijoles == "actualizado"){
                  //mostramos la cantidad de Frijoles disponible actualizada
                  console.log(granos());
                  }else{
                    console.log("Ocurrió un error al actualizar");
                  }
                  break;
                case 3:
                  let cantidadLentejas = parseInt(prompt("Ingrese una cantidad"))
                  let ingresarLentejas = aumentarLentejas(cantidadLentejas);
                      if (ingresarLentejas == "actualizado"){
                  //mostramos la cantidad de Lentejas disponible actualizada
                  console.log(granos());
                  }else{
                    console.log("Ocurrió un error al actualizar");
                  }
                  break;
            
              default:
                  console.log("Gracias por usar nuestro programa");
                break;
            }
      break;
    case 2:
      let productoAseo = parseInt(prompt("Seleccione un producto: Jabon = 1 | Limpido = 2 | Champu = 3"))
      switch (productoAseo) {
        case 1:
            let cantidadJabon = parseInt(prompt("Ingrese una cantidad"))
            let ingresarJabon = aumentarJabon(cantidadJabon);
                if (ingresarJabon == "actualizado"){
            //mostramos la cantidad de Jabon disponible actualizada
            console.log(aseo());
            }else{
              console.log("Ocurrió un error al actualizar");
            }
          break;
          case 2:
            let cantidadLimpido = parseInt(prompt("Ingrese una cantidad"))
            let ingresarLimpido = aumentarLimpido(cantidadLimpido);
                if (ingresarLimpido == "actualizado"){
            //mostramos la cantidad de Limpido disponible actualizada
            console.log(aseo());
            }else{
              console.log("Ocurrió un error al actualizar");
            }
            break;
          case 3:
            let cantidadChampu = parseInt(prompt("Ingrese una cantidad"))
            let ingresarChampu = aumentarChampu(cantidadChampu);
                if (ingresarChampu == "actualizado"){
            //mostramos la cantidad de Champu disponible actualizada
            console.log(aseo());
            }else{
              console.log("Ocurrió un error al actualizar");
            }
            break;
      
        default:
            console.log("Gracias por usar nuestro programa");
          break;
      }
      break;
    case 3:
      let productoCarnes = parseInt(prompt("Seleccione un producto: Pescado = 1 | Res = 2 | Cerdo = 3"))
      switch (productoCarnes) {
        case 1:
            let cantidadPescado = parseInt(prompt("Ingrese una cantidad"))
            let ingresarPescado = aumentarPescado(cantidadPescado);
                if (ingresarPescado == "actualizado"){
            //mostramos la cantidad de Pescado disponible actualizada
            console.log(carnes());
            }else{
              console.log("Ocurrió un error al actualizar");
            }
          break;
          case 2:
            let cantidadRes = parseInt(prompt("Ingrese una cantidad"))
            let ingresarRes = aumentarRes(cantidadRes);
                if (ingresarRes == "actualizado"){
            //mostramos la cantidad de Res disponible actualizada
            console.log(carnes());
            }else{
              console.log("Ocurrió un error al actualizar");
            }
            break;
          case 3:
            let cantidadCerdo = parseInt(prompt("Ingrese una cantidad"))
            let ingresarCerdo = aumentarCerdo(cantidadCerdo);
                if (ingresarCerdo == "actualizado"){
            //mostramos la cantidad de Cerdo disponible actualizada
            console.log(carnes());
            }else{
              console.log("Ocurrió un error al actualizar");
            }
            break;
      
        default:
            console.log("Gracias por usar nuestro programa");
          break;
      }
      break;
    case 4:
      let productoLacteos = parseInt(prompt("Seleccione un producto: Yogurt = 1 | Leche = 2 | Kumis = 3"))
      switch (productoLacteos) {
        case 1:
            let cantidadYogurt = parseInt(prompt("Ingrese una cantidad"))
            let ingresarYogurt = aumentarYogurt(cantidadYogurt);
                if (ingresarYogurt == "actualizado"){
            //mostramos la cantidad de Yogurt disponible actualizada
            console.log(lacteos());
            }else{
              console.log("Ocurrió un error al actualizar");
            }
          break;
          case 2:
            let cantidadLeche = parseInt(prompt("Ingrese una cantidad"))
            let ingresarLeche = aumentarLeche(cantidadLeche);
                if (ingresarLeche == "actualizado"){
            //mostramos la cantidad de Leche disponible actualizada
            console.log(lacteos());
            }else{
              console.log("Ocurrió un error al actualizar");
            }
            break;
          case 3:
            let cantidadKumis = parseInt(prompt("Ingrese una cantidad"))
            let ingresarKumis = aumentarKumis(cantidadKumis);
                if (ingresarKumis == "actualizado"){
            //mostramos la cantidad de Kumis disponible actualizada
            console.log(lacteos());
            }else{
              console.log("Ocurrió un error al actualizar");
            }
            break;
      
        default:
            console.log("Gracias por usar nuestro programa");
          break;
      }
      break; 

    default:
      console.log("Gracias por usar nuestro programa");
      break;
  }
}

export { moduloIngresar };