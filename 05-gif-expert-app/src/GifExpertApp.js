import { useState } from "react";
import { AddCategoria } from "../src/components/AddCategoria";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {


    const [categorias, setCategorias] = useState(['DBZ']);

    // const handleAdd = () => {

    //     // setCategorias(categorias => [...categorias,'Malcomn']);
    //     setCategorias([...categorias,'Malcomn']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategoria setCategorias={setCategorias} />
            <hr />

            {/* <button onClick={handleAdd} >Agregar</button> */}


            <ol>
                {
                    categorias.map(category =>
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    )
                }
            </ol>

        </>
    );


}