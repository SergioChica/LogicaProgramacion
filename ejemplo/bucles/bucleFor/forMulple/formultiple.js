//Aunque no suele ser habitual, es posible añadir varias inicializaciones o incrementos en un bucle for separando por comas.
//En el siguiente ejemplo además de aumentar el valor de una variable i, 
//inicializamos una variable con el valor 5 y lo vamos decrementando:
for (i = 0, j = 5; i < 5; i++, j--) {
    console.log("Valor de i y j:", i, j);
  }
//Si i++ aumenta en 1 el valor de i en cada iteración, lo que hace j-- es disminuir en 1 el valor de j en cada iteración.
