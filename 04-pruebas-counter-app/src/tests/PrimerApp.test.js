import { render } from "@testing-library/react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });
// import "@testing-library/jest-dom/extend-expect";


import PrimeraApp from "../PrimerApp";



describe('Pruebas a PrimerApp.js', () => {


    // test('debe de retornar un Hola soy goku', () => {

    //     const saludo = 'Hola soy goku';

    //     const { getByText } = render(<PrimeraApp saludo = {saludo} />);
        
    //      expect(getByText(saludo)).toBeInTheDocument();


    // });


    test('debe de mostrar <PrimerApp /> correctamente', () => {


        const saludo = 'Hola soy goku';
        const wrapper = shallow( <PrimeraApp saludo={saludo} /> )

        // const { getByText } = render(<PrimeraApp saludo = {saludo} />);
        
        //  expect(getByText(saludo)).toBeInTheDocument();


    });


});