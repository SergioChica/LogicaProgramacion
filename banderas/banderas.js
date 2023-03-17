/*Una bandera es un mecanismo de
los ciclos. Generalmente es una
variable que cambia de estado, 
haciendo que es ciclo deje de 
ejecutarse o que se ejecute
*/

//Un programa que pida al usuario
//números. Si alguno de estos numeros
//es 0, el ciclo deja de ejecutarse.
//De lo contrario, el ciclo se ejecuta.
//imaginemos con numero = 6
let numero = parseInt(prompt("ingrese número"));
//en este caso numero no es contador ni acumuladors
//es una bandera que controla el ciclo
while (numero != 0) {
  numero = parseInt(prompt("ingrese número"));
}