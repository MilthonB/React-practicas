
import React from 'react';

import PropTypes from 'prop-types';


//Exiten dos tipos de componentes 
//Los que estan basdos en clases y otros en funciones

//Fcuntional component


const PrimeraApp = ( {saludo, subtitulo } ) => {

    //Si alguien quiere usar este componente tiene que mandarme
    // los props
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
            <p>{subtitulo}</p>
        </>
    );

    
}

PrimeraApp.propTypes  = {
    saludo: PropTypes.string.isRequired
}


PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;