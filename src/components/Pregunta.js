import React, { Fragment, useState } from 'react';
import Error from './Error';

const Pregunta = ({ guardarPresupuesto, guardarRestante }) => {

    // state 

    const [cantidad, guardarCatidad] = useState(0);
    const [error, guardarError] = useState(false)

    // Función de un presupuesto 

    const definirPresupuesto = e => {
        guardarCatidad( parseInt (e.target.value, 10))
    }

    // Submit

    const agregarPresupuesto = e => {
        e.preventDefault();


        // Validar
        if (cantidad < 1 || isNaN (cantidad)) {
            guardarError(true);
            return;
        }

        // Se pasa la validación

        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
    }


    return ( 
       <Fragment>
        <h2>Coloca tu presupuesto</h2>

        {error ? <Error mensaje="El presupuesto es incorrecto"/> : null}

        <form
            onSubmit={agregarPresupuesto}
        >
            <input
                type="number"
                className="u-full-width"
                placeholder="Dime tu presupuesto"
                onChange={definirPresupuesto}
            />

            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Definir presupuesto"
            />
        </form>
       </Fragment>
     );
}
 
export default Pregunta;