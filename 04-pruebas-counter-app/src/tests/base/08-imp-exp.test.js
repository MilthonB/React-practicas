import { getHeroById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";


describe('Pruebas 08-im-exp.js', () => {

    test('debe retornar un objeto tipo heroe', () => {

        const id = 1;
        const heroePre = getHeroById(id);

        const hereoeExpect = heroes.find( h =>  h.id === id );
        
         expect(heroePre).toEqual(hereoeExpect);
        
    })


    test('denbe de retornar un undefine sin no hay heroe', () => {
        
        const id = 150;

        const usuarioPre = getHeroById(id);

        expect(usuarioPre).toBe(undefined)

    });


    test('debe retornar un arreglo con los de DC', () => {
        
        const owner = 'DC';
        const dc = getHeroesByOwner(owner);

        expect(dc.length).toBe(3)

    });

    test('debe retornar un arreglo con los de Marvel', () => {
        
        const owner = 'Marvel';
        const marvelPre = getHeroesByOwner(owner);

        const marvelExpect = heroes.filter( h =>  h.owner === owner );

        expect(marvelPre).toEqual(marvelExpect);

        

    });
    
    
    

});