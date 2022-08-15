import ItemCount from "./../ItemCount/ItemCount";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import React, { useState} from "react";

function ItemDetail({item}){

    const [cant, setCant]= useState(false);

    function handleOnAdd (count) {
        setCant(count)
        alert(`cantidad agregada al carrito es ${count}`)
    }

    return(
        <div className="container text-center p-3">
            <div className="row row-cols-2">
                <div className="col imgDetalle d-flex text-center p-2 ">
                    <img src={item.img} className="img-fluid" alt={item.nombre} />
                </div>
                <div className="col textDetalle">
                    <div className="container">
                        <h3 className="itemNombre">{item.nombre}</h3>
                        <p className="itemDetalle">{item.detalle}</p>
                        <p className="itemDetalle">Precio: {item.precio}</p>
                        <p className="itemDetalle">Talle: {item.talle}</p>
                        {cant?  
                            <Link className="linkCompra" to={"/cart"}>Continuar la Compra</Link>
                        : <ItemCount stock={item.stock} initial="1" onAdd={handleOnAdd} />

                        }
                        <p className="stockDisponible">Stock Disponible: {item.stock}</p>
                        <Link className="linkInicio" to={"/"} >Volver</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ItemDetail