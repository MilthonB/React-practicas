import { useState } from "react";


export const GifExpertApp = () => {


    // const categorias = ['DBZ', 'Pokemon','Gladiadores'];
    const [categorias, setCategorias] = useState(['DBZ', 'Pokemon', 'Gladiadores']);

    const handleAdd = () => {

        // setCategorias(categorias => [...categorias,'Malcomn']);
        setCategorias([...categorias,'Malcomn']);
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />

            <button onClick={handleAdd} >Agregar</button>

            <ol>
                {
                    categorias.map(category => {
                        return <li key={category} > {category} </li>
                    })
                }
            </ol>

        </>
    );


}