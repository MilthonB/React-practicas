
import { useState } from "react";

import PropTypes from "prop-types";

const CounterApp = ({ value }) => {

    const [count, setCount] = useState(0);



    return (
        <>
            <h1>CounterApp</h1>
            <h2> {count} </h2>

            <button onClick={ () => setCount( count+1) } >
                + 1
            </button>
        </>
    );

}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired 
}


export default CounterApp;

