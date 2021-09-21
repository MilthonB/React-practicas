

import heroes,{owner} from "../data/heroes";


// console.log(owner)


export const getHeroById = (id) =>  heroes.find( heroe => heroe.id === id);


// console.log(getHeroById(2));


export const getHeroesByOwner = ( owner ) =>  heroes.filter( heroe => heroe.owner === owner);



// console.log(getHeroesByOwner('DC'));