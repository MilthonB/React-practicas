// export const heroes = [ //aća también se puede export
const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

//Importación mutiples primera manera
export const owner = ['Marvel','DC'];
export default heroes; //expor por ser lo unico

//Importación mutiples segunda manera
// const owner = ['Marvel','DC'];
// export {
//     heroes as default,
//     owner
// }