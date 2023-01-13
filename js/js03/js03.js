console.log("ejercicio js03");
/*declaracion de bloque
{} esto es una declaracion de bloque
las variables declaradas aqui 
solo son validas o alcanzadas aqui
*/
const datoUsuario = {nombre:"juancho", ciudad:"mex"};
{
    const datoUsuario = {nombre:"juancho", ciudad:"mex"};
    console.log(`${datoUsuario.nombre} nos dice hola desde ${datoUsuario.ciudad}`);
}

console.log(`${datoUsuario.nombre} nos dice hola desde ${datoUsuario.ciudad}`);

/*condicionales
sintaxis
if(condicional verdadera){
    bloque instrucciones
}else{
    bloque bloque instrucciones
*/
const respuesta = true //confirm('es bocchi tu waifu?');
/*let mensaje;
if (respuesta) {
    mensaje = 'excelente';
}else{
    mensaje = 'entendible tenga un buen dia';
}
console.log(mensaje);*/
//operador ternario
//condición ? expr1 : expr2
let mensaje = respuesta ? "bocchi for life" : "entendible tenga";
console.log(mensaje);
//console.log(`viva mexico: ${ respuesta ? "bocchi for life" : "entendible"}`);
let pais = "mexico";
console.log(`viva mexico: ${ pais==="mexico" ? "ajua" :
    pais === "usa"? "oh yes" : "entendible"}`);

/*condiciona switch
sintaxis
switch(condicional){
    case valor1:
        instruccion;
        break;
    case valor2:
        instruccion;
        break;
    default:
        istruccion;
mientras no siga break se seguira ejecutando igual
lo puedes utilizar para poner mas case o escenarios
case1:
case2:
case3:
case..n:
    instruccion;
    break;
default:
    istruccion;
*/

let nombrePersona = "karla";
let marcaReloj = "";
switch(nombrePersona){
    case "karla":
        marcaReloj = "rolex";
        break;
    case "juancho":
    case "karla":
        marcaReloj = "rolex";
        break;
    case "juancho":
        marcaReloj = "casio";
        break;
    case "juan":
        marcaReloj = "sol";
    default:
        marcaReloj = "no usa reloj";
}
console.log(`switch ${nombrePersona} tiene un relor de maraca ${marcaReloj}`);

let mes = prompt("que mes es?") ;
let mes2 = Number(mes);
let temporada= "" ;
let ms = "";
/*
switch(mes2){
    case 1:
        ms = "enero";
        temporada = "invierno";
        break;
    case 2:
        ms = "febrero";
        temporada = "invierno";
        break;
    case 3:
        ms = "marzo";
        temporada = "primavera";
        break;
    case 4:
        ms = "abril";
        temporada = "primavera";
        break;
    case 5:
        ms = "mayo";
        temporada = "primavera";
        break;
    case 6:
        ms = "junio";
        temporada = "verano";
        break;
    case 7:
        ms = "julio";
        temporada = "verano";
        break;
    case 8:
        ms="agosto";
        temporada = "verano";
        break;
    case 9:
        ms = "septiembre";
        temporada = "otoño";
        break;
    case 10:
        ms = "octubre";
        temporada = "otoño";
        break;
    case 11:
        ms = "noviembre";
        temporada = "otoño";
        break;
    case  12:
        ms = "diciembre";
        temporada = "invierno";
        break;
    default:
        instruction = "invierno";
}
console.log(`la estacion del año es ${temporada} mes ${mes}`);
console.log(`en ${ms} la estacion del año es ${temporada} mes: ${mes}`);
console.log(`en ${ms} la estacion del año es ${temporada}`);
*/
//if else

if (mes2 === 1) {
    ms = "enero";
    temporada = "invierno";
} else if(mes2 === 2) {
    ms = "febrero";
    temporada = "invierno";
} else if (mes2 === 3) {
    ms = "marzo";
    temporada = "primavera";
} else if (mes2 === 4) { 
    ms = "abril";
    temporada = "primavera";
} else if (mes2 === 5) {
    ms = "mayo";
    temporada = "primavera";
} else if (mes2 === 6) {
    ms = "junio";
    temporada = "verano";
} else if (mes2=== 7) {
    ms = "julio";
    temporada = "verano";
} else if (mes2 === 8){
    ms = "agosto";
    temporada = "verano";
} else if (mes2 === 9) {
    ms = "septiembre";
    temporada = "otoño";
} else if (mes2 === 10){
    ms = "octubre";
    temporada = "otoño";
} else if (mes2 === 10){
    ms = "octubre";
    temporada = "otoño";
} else if (mes2 === 10){
    ms = "octubre";
    temporada = "otoño";
} else {
    ms = "no se encontro el mes";
    temporada = "no se encontro la temporada";
}

console.log(`la estacion del año es ${temporada} mes ${mes}`);
console.log(`en ${ms} la estacion del año es ${temporada} mes: ${mes}`);
console.log(`en ${ms} la estacion del año es ${temporada}`);

////refactorizar usando operador ternario
/*function factorial(){
    if(number<1)
    return 1;
    return number*factorial(number-1);
}
console.log(factorial(5));*/
function fac(number){ 
    return number < 1 ?  1 : number * fac( number-1 ); }
console.log("con la funcion refactorizada: " + fac(5));

