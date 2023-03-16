let contraseña = prompt("Ingrese contraseña")
if (contraseña.length < 8 || contraseña.length > 15){

    alert ("La contraseña tiene que tener entre 8 y 15 caracteres")

}else if (!contraseña.includes(" ")) {
    alert ("La contraseña tiene que tener un espacio")
}else{
    console.log("la contraseña es valida");
}
