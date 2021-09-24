import { retornaArreglo } from "../../base/06-desestucturacion-arreglos";


describe('Pruebas 06-desestructuracion-arr.js', () => {

    test('debe de retornar dos posiciones una de letras y la otra de numeros', () => {


        const [letras, numeros] = retornaArreglo();

        expect(letras).toBe('ABC');
        expect( typeof letras).toBe('string');
         
         expect(numeros).toBe(123);
         expect( typeof numeros).toBe('number');

    });
    

});