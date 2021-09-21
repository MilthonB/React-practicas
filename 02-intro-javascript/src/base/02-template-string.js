

const nombre= "Felizardo";
const apellido = "Salamanca";


const getSaludo = () => {
    return 'Hola estimado';
}


const nombreCompleto = `${ getSaludo() } ${nombre} ${apellido} `
console.log(nombreCompleto);