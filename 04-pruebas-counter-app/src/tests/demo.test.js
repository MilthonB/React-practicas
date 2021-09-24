


describe('Pruebas en el archivo demo.test.js', ()=> {

    test('debe ser string los dos', () => {
    
        const mensaje = 'Hola mundo';
    
        const mensaje2 = "Hola mundo";
    
        expect(mensaje).toBe(mensaje2);
    
    });
})

//Test
