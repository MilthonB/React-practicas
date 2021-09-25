
import { shallow } from "enzyme";
import CounterApp from "../CounterApp";


describe('Pruebas a CounterApp.js', () => {

    let wrapper = shallow(<CounterApp />);
    
    beforeEach( () => {
        wrapper = shallow(<CounterApp />);
    } );


    test('debe mostrar el <CounterApp /> correctamente', () => {


        expect(wrapper).toMatchSnapshot();


    });


    test('debe mostrar el valor por defecto de 100', () => {

        const value = 100;

        const wrapper = shallow(<CounterApp value={100} />);

        const textH2 = wrapper.find('h2').text();

        expect(textH2).toBe('100');




    });


    test('debe de incrementar con el boton +1', () => {

        const btn = wrapper.find('button').at(0).simulate('click');
        const counter = wrapper.find('h2').text().trim();

        expect(counter).toBe('11')


    });


    test('debe de decrementar con el boton -1', () => {
 
        const btn = wrapper.find('button').at(2).simulate('click');
        const counter = wrapper.find('h2').text().trim();

        expect(counter).toBe('9')


    });


});