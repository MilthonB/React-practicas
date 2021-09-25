
import { shallow } from "enzyme";
import CounterApp from "../CounterApp";


describe('Pruebas a CounterApp.js', () => {

    test('debe mostrar el <CounterApp /> correctamente', () => {
        

        const wrapper = shallow( <CounterApp /> );
        expect(wrapper).toMatchSnapshot();


    });


    test('debe mostrar el valor por defecto de 100', () => {
        
        const value = 100;

        const wrapper = shallow( <CounterApp value={100}/> );
        
        const textH2 = wrapper.find('h2').text();

         expect(textH2).toBe('100');
        



    });
    
    

});