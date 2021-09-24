

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





export const getUser = () => {
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



export const getUsuarioActivo =  ( username ) => ({ 
    uid:'21321',
    username
});



const usuarioActivo = getUsuarioActivo('Lorenzo');
