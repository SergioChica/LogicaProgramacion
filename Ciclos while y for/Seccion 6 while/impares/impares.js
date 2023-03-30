let numero = parseInt(prompt("Ingrese hasta que numero quiere mostrar numeros impares"));
let aumento = 0;

while (aumento <= numero) {
    if (aumento % 2 != 0 ) {
        console.log(aumento);
    }

    aumento++
}