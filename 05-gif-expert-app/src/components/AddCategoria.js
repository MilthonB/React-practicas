
import React, { useState } from 'react'

import PropTypes from "prop-types";


export const AddCategoria = ({ setCategorias }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        console.log(e.target.value)
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategorias(categorias => [...categorias, inputValue]);
            setInputValue('')
        }




    }

    return (
        <form onSubmit={handleSubmit}>
            <h3> {inputValue} </h3>
            <input
                type='text'
                value={inputValue}
                onChange={handleInputChange}
                placeholder='Hola mundo'
            />
        </form>
    );

}

AddCategoria.propTypes = {
    setCategorias: PropTypes.func.isRequired
};

