import React , { useState } from 'react';
import "./itemCount.css"

function ItemCount (props){
    const [contador, setCont] = useState(1);

    const contIncrementador = () => {
        contador < props.stock ? setCont(contador +1) : console.log("No hay mas Stock")
    }

    const contDecrementador = () => {
        contador > props.initial ? setCont(contador - 1 ) :  console.log("no decremetar en negativo")
    }

    return(
        <>
            <h3 className='container-amount'> CANTIDAD </h3>
            <div className= "container-counter">
                <button className='btn-plus-less' onClick={ contIncrementador } >+</button>
                <h4>{contador}</h4>
                <button className='btn-plus-less' onClick={ contDecrementador } >-</button>
            </div>
            <button className="btn-counter" onClick={ () => props.onAdd(contador)}> Agregar</button>
      </>

    );
}

export default ItemCount