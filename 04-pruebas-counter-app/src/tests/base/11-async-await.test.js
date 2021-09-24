import { getImgen } from "../../base/11-async-await";


describe('Pruebas con async-await.js', () => {

    test('debe de retornar un url de la imagen', async() => {


        const url = await getImgen();

         expect( url.includes('http') ).toBe(true)


    });
    

});