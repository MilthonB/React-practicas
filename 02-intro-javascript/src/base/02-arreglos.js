

//Arreglos en js
//Coleccion de valores en una sola varible

const arreglo_chafa = new Array(100); // esto define un arreglo con tamaño fijo

const arreglo = [1,2,3,4,5,6];

//La funcion push no es recomendable usar porque modifica el objeto principal;
//Los arrelgos son ojetos también

// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);
// arreglo.push(5);


let arreglo2 = [...arreglo,150]; //Esto crear un arreglo nuevo con los valores del arreglo1
//En javascript todo se pasa por referencia por lo tanto si el arreglo principal
//es modificado todos eso quiere decir que todos los arrelgo igualados a ese 
//cambiara también 

const arreglo3 = arreglo2.map( function( x ) {
    const numero = x * 2;
    return numero; 
}); // si simplificar

//Funcion de flecha
const arreglo3 = arreglo2.map( x => x * 2); //simplificada

console.log(arreglo3);
console.log(arreglo2);
console.log(arreglo);