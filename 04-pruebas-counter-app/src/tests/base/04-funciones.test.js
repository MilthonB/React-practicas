import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../base/04-funciones';


describe( 'Pruebas en 04-funciones.js',() => {

    test('getUser debe de retornar un objeto', () => {


        // Lo que se espera
        const userTest = {
            uid: '12321',
            username: 'La_lore12523'
        };

        //Lo que se recibe
        const usuario = getUser();

        //Lo que se recibe      //lo que se esperaba
         expect(usuario).toEqual(userTest);

    });


    test('getUsuarioActivo debe de regresar un objeto', () => {
       
        const username = 'Primitivo'
        
        const usuarioTest = { 
            uid:'21321',
            username
        };
        
        const usuario = getUsuarioActivo(username);

        expect(usuario).toEqual(usuarioTest);

        
    });
    
    


});