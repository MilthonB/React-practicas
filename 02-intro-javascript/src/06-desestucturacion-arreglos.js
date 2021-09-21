

const personajes = [ 'Goku', 'Vegeta', 'Trunks' ];

// Los elementos se toman conforme a las posiciones del arreglo
const [ p1 ] = personajes;
const [ , p2 ] = personajes;
const [ , , p3 ] = personajes;


console.log(p1);
console.log(p2);
console.log(p3);

const retornaArreglo = () => {
    return ['ABC',123];
}


const [ letras,numeros ] = retornaArreglo();

console.log(letras,numeros);

const usStates = (valor) => {
    return[valor, ()=> {console.log('Hola Mundo')}];
}

const [nombre, funcion] = usStates('goku');

console.log(nombre);
funcion();