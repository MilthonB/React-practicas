import { render } from "@testing-library/react";
import PrimeraApp from "../PrimerApp";
// import "@testing-library/jest-dom/extend-expect";




describe('Pruebas a PrimerApp.js', () => {


    test('debe de retornar un Hola soy goku', () => {

        const saludo = 'Hola soy goku';

        const { getByText } = render(<PrimeraApp saludo = {saludo} />);
        
         expect(getByText(saludo)).toBeInTheDocument();


    });


});