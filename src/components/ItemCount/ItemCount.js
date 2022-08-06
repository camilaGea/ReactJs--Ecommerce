import React from 'react';
import "./itemCount.css"

function ItemCount (props){

    const [contador, setCont] = React.useState(1)

    const contIncrementador = () => {
        contador < props.stock ? setCont(contador +1) : console.log("No hay mas Stock")
    }

    const contDecrementador = () => {
        contador > props.initial ? setCont(contador - 1 ) :  console.log("no decremetar en negativo")
      }
    
    const onAdd = () => {
        console.log ("AGREGADO")
    }

    return(
        <>
            <h3> Cantidad </h3>
            <div className= "conteContador">
                <button onClick={ contIncrementador } >+</button>
                <h4>{contador}</h4>
                <button onClick={ contDecrementador } >-</button>
            </div>
            <button className="btnCont" onClick={ onAdd }> Agregar</button>
      </>

    );
}

export default ItemCount