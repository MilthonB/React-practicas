
// import React from 'react';


//Exiten dos tipos de componentes 
//Los que estan basdos en clases y otros en funciones

//Fcuntional component

const PrimeraApp = () => {

    const saludo = {
        nombre: 'lore',
        edad:45
    }

    const saludo2 = 'Hola mundo';

    return (
        <>
            <pre> { JSON.stringify(saludo,null,3) } </pre>
            <h1> { saludo2 } </h1>
            <p>Mi primera aplicacion</p>
        </>
    );

}

export default PrimeraApp;