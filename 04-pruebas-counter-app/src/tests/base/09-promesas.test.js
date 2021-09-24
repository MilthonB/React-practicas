import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";



describe('Pruebas con promesas', () => {


    test('getHeroeByIdAsync debe de retornar un hereo async', (done) => {


        const id = 1;
        getHeroeByIdAsync(id)
            .then(heroe => {

                expect(heroe).toBe(heroes[0]);
                done();

            });

    });



    test('getHeroeByIdAsync debe de retornar un error si el id del hereo no existe', (done) => {


        const id = 150;
        getHeroeByIdAsync(id)
            .catch(error => {

                expect(error).toBe('Heroe no existe');
                done();

            });

    });



});