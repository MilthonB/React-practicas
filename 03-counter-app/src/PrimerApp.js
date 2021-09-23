
// import React from 'react';


//Exiten dos tipos de componentes 
//Los que estan basdos en clases y otros en funciones

//Fcuntional component

const PrimeraApp = ( {saludo = "hola mundo"} ) => {

    // const saludo = {
    //     nombre: 'lore',
    //     edad:45
    // }

    // const saludo2 = 'Hola mundo';

    console.log(saludo)

    return (
        <>
            <pre> { saludo } </pre>
            {/* <h1> { saludo2 } </h1> */}
            <p>Mi primera aplicacion</p>
        </>
    );

}

export default PrimeraApp;