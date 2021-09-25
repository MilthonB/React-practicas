import { useState } from "react";
import { AddCategoria } from "./components/AddCategoria";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {


    const [categorias, setCategorias] = useState(['DBZ']);

    
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategoria setCategorias={setCategorias} />
            <hr />

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