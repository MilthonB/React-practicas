

//Funciones en js
const saludar = function (nombre) {

    return `Hola, ${nombre}`;

}

//Funcion de flecha
const saludar2 = (nombre) => {

    return `Hola, ${nombre}`;

}

//simplificación cuando hay return 
const saludar3 = (nombre) => `Hola, ${nombre}`;


// function saludar(nombre){
//     return `Hola, ${nombre}`;
// }
// saludar = 30; //rompe con la referencia de la funcion 
//Y sigue funcionando

console.log();
console.log(saludar('Samarripa'));
console.log(saludar2('Ortencio'));
console.log(saludar3('Zapata'));



const getUser = () => {
    return {
        uid: '12321',
        username: 'La_lore12523'
    }
}


const getUser2 = () =>
({
    uid: '12321',
    username: 'SAMARRIPA1523'
})



console.log(getUser())
console.log(getUser2())


const getUsuarioActivo =  ( username ) => ({ 
    uid:'21321',
    username
});



const usuarioActivo = getUsuarioActivo('Lorenzo');
console.log(usuarioActivo);