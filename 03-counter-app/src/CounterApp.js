
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {

    const handlApp = (e) => {
        console.log(e)
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> {value} </h2>

            <button onClick={ handlApp } >
                +1
            </button>
        </>
    );

}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired 
}


export default CounterApp;

