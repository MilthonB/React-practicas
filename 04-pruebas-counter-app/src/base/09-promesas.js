

import { getHeroById } from "./08-imp-exp";


//Promesas js 

//Las promesas son asincronas
//Las promesas se ejecutan con un callback
//resolve = la promesa se resolvio 
//reject = ocrrio un error 
export const promesa = new Promise( (resolve, reject ) => {

    setTimeout(() => {
        // console.log('2 segundos después')
        // resolve()
        const heroe = getHeroById(2);
        resolve(heroe)
        // reject('No se puede encontrar el heroe')
    }, 1500);

});


//Pra ejecutar el then se necesita ejecutar el resolve dentro de la promesa
// promesa.then((data)=>{
//     console.table(data);
// })
// .catch(err => console.warn(err));



export const getHeroeByIdAsync = ( id ) => {

    return new Promise( (resolve, reject ) => {

        setTimeout(() => {
            // console.log('2 segundos después')
            // resolve()
            const heroe = getHeroById(id);
            if( !heroe ){
                reject('Heroe no existe');
            }
            // else{
                resolve(heroe)

            // }
            // reject('No se puede encontrar el heroe')
        }, 1500);
    
    });
}

// getHeroeByIdAsync(4)
// .then( (data) => console.log(data) )
// .catch( (err) => console.log(err) );


//Simplificacion 
// getHeroeByIdAsync(4)
// .then( console.log )
// .catch( console.log );