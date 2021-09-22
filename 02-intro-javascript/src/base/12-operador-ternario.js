
const activo = true;

let mensaje = '';

//Forma tradicional 
if( activo ){
    mensaje="Activo";
}else{
    mensaje="Inactivo";
}


console.log(mensaje)


//Condicion ternaria 
// mensaje = (activo) ? 'Activo' : 'Inactivo';
// mensaje = (!activo) ? 'Activo' : null;

//condicion and
mensaje = activo && 'Activo'; //Mensaje activo
// mensaje = !activo && 'Activo'; //falso retorna


console.log('Mensaje dos ',mensaje)