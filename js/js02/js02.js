console.log("ejercicio sesion 02")
/*
funciones declaradas / unciones definidas

caracteristicas de las funciones declaras
tienen hoisting (elevacion)
*/
console.log(multiplicacion(2, 3));/*hoisting no 
importa si eta arriba igual js lo leera como 
si estuviera abajo */

function multiplicacion(a, b) {
    return a * b;
}

/* funciones expresadas
son funciones declaras dentro de la asignacion de una variable
estas pueden ser anonimas (no tienen nombre)
estas no tienen hoisting
*/

/**
 * suma dos valores
 * @param {number} a primer operador para sumarlo 
 * @param {number} b segundo operador para sumarlo 
 * @returns resultado de a + b;
 */
const suma = function (a, b) {
    return a + b;
};
console.log(suma(2,3));

/*funciones autoinvocadas
estas funciones pueden ser declaradas 
dentro de una función/ se ejecutan en su definicion 
pueden ser anonimas (function name(parametros){
    codigo
})();<= esto invoca la función.
*/

(function saludo() {
    console.log("hola, me estoy autoinvocando");
})();

/* funciones flechas(arrow functions)
son similares a las funciones expresadas
pero no requieren de la palabra function
no requieren de return y las llaves
*/
/*
conts suma2 = function(a, b){
    return a + b;
}
esto quedara como abajo
*/
const suma2 = (a, b) => a + b;
console.log(suma2(2, 3));
//si llevas mas de un solo codigo o sin llaves 
//lleva return
const reta = (a, b) => {
    const result = a - b;
    return result;
}
console.log(reta(2, 3));
//un solo parametro es sin () en el parametro
const exponenteCuadrado =  a  => a ** 2;
console.log(exponenteCuadrado(2));

//sin parametros/ no tienen elevacion hoisting
const saludoImprime = () => console.log("hola");
saludoImprime();

/*funciones con parametros inicializados

*/
function dividir( a=1, b=1 ) {
    return a / b;
}
console.log(dividir(3));

/* Rest parameter
nos permite representar una serie de valores
indefinidos en los argumentos como un array
el parametro rest siempre debe de ir al final
*/
function sumatoriaIndefinida(a, b, ...args) {
    let sumatoria = a + b;
    for (var i=0; i<args.length; i++) {
        sumatoria += args[i];//sumaroria = sumatoria + args[i];
    }
    return sumatoria;
}
console.log(sumatoriaIndefinida(2, 3, 4, 5, 6));

/*funciones recursivas
funciones recursivas son funciones que se llaman 
asi mismas
factoria 0 = 1;
3 = 3*2*1;
5 = 5 * 4 * 3 * 2 * 1;
*/
/*
function factorialRecursion(a){
    if (a < 1) return 1;
    return a * factorialRecursion(a-1);
}
function factorialRecursion(a){
    if a > 1 ? return 1 :
    return a * factorialRecursion(a-1);
}
*/
function factoria(n) {
    if (n == 1) {
        return 1;
    } else {
        return n * factoria(n-1);
    }
}
console.log(factoria(5));

function saludo(n, a = 1) {
    console.log("hola" + a);
    if (n == a)
    return "adios " + n ;
    //return 'hola ' + n +saludo(n-1);
    return saludo(n, a+1);

    
}
console.log(saludo(10));