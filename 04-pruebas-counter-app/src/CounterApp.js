
import { useState } from "react";

import PropTypes from "prop-types";

const CounterApp = ({ value = 10 }) => {

    const [count, setCount] = useState(value);

    

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{count}</h2>

            <button onClick={ () => setCount( count+1 ) } >
                + 1
            </button>
            <button onClick={ () => setCount( value ) } >
                Reset
            </button>
            <button onClick={ () => setCount( count-1 ) } >
                - 1
            </button>
        </>
    );

}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired 
}

CounterApp.defaultProps = {

    value: 10

}


export default CounterApp;

