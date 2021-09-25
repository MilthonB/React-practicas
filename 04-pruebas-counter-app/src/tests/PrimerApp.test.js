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


        const saludo = 'Hola soy goku';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />)

        expect(wrapper).toMatchSnapshot();

        // const { getByText } = render(<PrimeraApp saludo = {saludo} />);

        //  expect(getByText(saludo)).toBeInTheDocument();


    });

    test('debe de mostrar el subtitlo enviado por los porps', () => {


        const saludo = 'Hola soy goku';
        const subTitulo = 'Soy un subtitulo';

        const wrapper = shallow(<PrimeraApp 
            saludo={saludo}
            subtitulo={subTitulo} 
            />);

            const textoParrafo = wrapper.find('p').text();


             expect(textoParrafo).toBe(subTitulo)

    });



});