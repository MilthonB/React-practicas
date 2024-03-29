

// Desestructuración
// Adignación desestructurante



const persona = {
    nombre: 'Solovino',
    edad: 45,
    clave: 'El taquero'
};

const { nombre: nombre2 } = persona; //extraer por propiedad de un objeto
const { edad: anios } = persona; // renombar la propieda para su uso

const { nombre, edad, clave } = persona

console.log(nombre);
console.log(anios);


//Desestructurar una propiedad que no existe 
const datos = ({ edad, nombre, clave, rango = 'Asador' }) => {
    // console.log('retorno de persona:  ', nombre);

    return {
        nombreClave: clave,
        anies: edad,
        latlng: {
            lat: 14.125,
            lng:-1523.5
        }
    }

}


//Desestructuracion de objetos anidados
const {nombreClave, anies, latlng:{lat, lng}} = datos(persona);

console.log(nombreClave);
console.log(anies);
console.log(lat, lng);


