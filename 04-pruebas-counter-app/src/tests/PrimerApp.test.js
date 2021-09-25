import { render } from "@testing-library/react";

// import "@testing-library/jest-dom/extend-expect";

import { shallow } from 'enzyme';


import PrimeraApp from "../PrimerApp";



describe('Pruebas a PrimerApp.js', () => {


    // test('debe de retornar un Hola soy goku', () => {

    //     const saludo = 'Hola soy goku';

    //     const { getByText } = render(<PrimeraApp saludo = {saludo} />);
        
    //      expect(getByText(saludo)).toBeInTheDocument();


    // });


    test('debe de mostrar <PrimerApp /> correctamente', () => {


        const saludo = 'Hola soy goku!!';
        const wrapper = shallow( <PrimeraApp saludo={saludo} /> )

         expect(wrapper).toMatchSnapshot();

        // const { getByText } = render(<PrimeraApp saludo = {saludo} />);
        
        //  expect(getByText(saludo)).toBeInTheDocument();


    });


});