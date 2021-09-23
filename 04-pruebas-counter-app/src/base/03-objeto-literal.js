

//Objetos leterales tambien conocidos como diccionarios en python

//Objetos trabajan con pares de valores
//{ key: value }
const persona =  {

    nomre: 'Lorenzo',
    apellido: 'Primitivo',
    edad: 'Todos',
    direcion: {
        ciudad: 'Saler calle privada',
        zip: 55516236,
        lat: 1515151515,
        lng: 1515151551
    }
};


console.table(persona);
console.log('Nombre', persona.nombre);
console.log('Apellido', persona.apellido);
console.log('Edad', persona.edad);
console.table(persona.direcion);


//Imprime un objeto de nombre persona que contine las propiedades
// de persona en el objeto
console.log({
    persona: persona
});

//EMC6 es redundante poner el mismo nombre dos veces, es decir
//Si el valor y la llave tiene el mismo nombre de identificación
console.log({
   persona
});


//Así se genera otra propiedad en el objeto
//Esta propiedad tiene de nombre mascota y contiene 
//un objeto con sus datos de la mascota
persona.mascotas = {
    nombre: 'Pikachu',
    alias: 'EL chuy',
    edad: undefined
} ;


console.table(persona);

//Asignacion de una nueva propiedad con valor de string
persona.sexo = 'M';

console.table(persona);


//Creacion de una clonacion del objeto persona
//Operador spread 
const persona2 = { ...persona };


console.table(persona2)

