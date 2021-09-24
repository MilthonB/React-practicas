

const nombre= "Felizardo";
const apellido = "Salamanca";


export const getSaludo = (nombre='Carlos') => {
    return 'Hola '+nombre;
}


const nombreCompleto = `${ getSaludo(nombre) } ${apellido} `
console.log(nombreCompleto);