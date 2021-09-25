
import React, {useState} from 'react'

export const AddCategoria = () => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        console.log(e.target.value)
        setInputValue(e.target.value);
    }

    const handleSubmit = (e)=> {

        e.preventDefault();
        console.log('Submit hecho')


    }
    
    return (
        <form onSubmit={handleSubmit}>
            <h3> { inputValue } </h3>
            <input
                type='text'
                value={inputValue}
                onChange={ handleInputChange }
                placeholder='Hola mundo'
            />
        </form>
    );

}

