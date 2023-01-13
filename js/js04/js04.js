console.log("Ssesion js04");

/*
arreglos
*/
const nombres = ["juancho", "pedrin", "manolo"];
//arreglos con constructor de la clse array
const nombresS = new Array("lopez", "zapata", "cepillin");
console.log(nombres);
console.log(nombresS);
console.log(nombres[0] + " " + nombresS [0]);

const edades = [25];
//este arreglo con constructor en lugar de insertar un valor, nos creara un arreglo
//con dicha cantidad ingresada
//un arreglo es un objeto mutable, se puede modificar
const edadesS = new Array(25);
console.log(edades);
console.log(edadesS);
//para conocer el length
console.log(edades.length);
console.log(edadesS.length);
//es recomendable declarar objetos con const para evitar que se cambie el tipo de dato
const carros = ["Ford", "Toyota", "Nissan"];
console.log(carros);

//leer un elemento del array
const bicicletas = ["Bmxw", "Triciclo", "Apache"];
console.log( nombres[0] + " tiene una bibicleta: "+ bicicletas[0]);
console.log(bicicletas);

//modificar un dato del array y agregar
//bicicletas = "dura" esto te dara error ya que la variable es constante y si fuera let cambiarias el valor de tipo objeto a string
bicicletas[2] = "Dura"
bicicletas[3] = "Monociclo";
//agregar un elemento al final del array
bicicletas[ bicicletas.length ] = "Bici"
bicicletas.push("BiciSinPedales", "BiciSinManurio");
//agrega un elemto al inicio del array
bicicletas.unshift("BiciSinLlantas","BiciMarco");
console.log(bicicletas);

/*//eliminar un elemento del array
bicicletas.splice(0,1);
console.log(bicicletas);*/

//datos primitivos
let nombreCarro = "Ford";
console.log(nombreCarro + nombreCarro[0]);
nombreCarro[0] ="D"// se espera Dord
console.log(nombreCarro + nombreCarro[0]);//no cambio ya que el dato string es primitivo y por lo tanto inmutable

//iteraccion de arreglos
/*ciclo for 
sinraxis: 
for (instruccion inicio; condicion; expresion final){
    instrucciones;
}
for( let i = 0; i < 10; i++ ) {
    instrucciones;
}
*/
for (let i = 0; i < bicicletas.length; i++) {
    console.log(`el indice ${i} tiene la bici: ${bicicletas[i]}`);
}

//funcion callback bicicletas.foreach( callbackfunction );
function iterarArreglo( elemento, indice, arreglo){
    console.log(`el indice ${indice} tiene la bici: ${elemento}`);
}
bicicletas.forEach( iterarArreglo );
//FUNCION FLECHA
bicicletas.forEach(( elemento, indice) => 
    console.log(`el indice ${indice} tiene la bici: ${elemento}`))

// forIn va iterar los indices del arreglo
for ( let bicis in bicicletas) {
    console.log(`forIn ${bicis} tiene la bici: ${bicicletas[bicis]}`)}
// forOf itera los elementos del arreglo
for ( let bicis of bicicletas) {
    console.log(`forOf bicicletas: ${bicis}`)}

//iterar de forma descendentes las armas
for (let i = bicicletas.length-1; i > 0; i--) {
    console.log(`forma descendente el indice ${i} tiene la bici: ${bicicletas[i]}`);
}