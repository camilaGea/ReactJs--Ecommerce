import ItemCount from "./../ItemCount/ItemCount";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import React, { useState} from "react";
import {useCartContext} from "../cartContext/CartContext"

function ItemDetail({item}){

    const {addItem} = useCartContext();
    const [cant, setCant]= useState(false);

    function handleOnAdd (count) {
        addItem({item, cantidad: count});
        setCant(true)
    }

    return(
        <div className="container text-center p-3">
            <div className="row row-cols-2">
                <div className="col img-detail d-flex text-center p-2 ">
                    <img src={item.img} className="img-fluid" alt={item.nombre} />
                </div>
                <div className="col text-detail">
                    <div className="container">
                        <h3 className="item-name">{item.nombre}</h3>
                        <p className="item-detail">{item.detalle}</p>
                        <p className="item-detail">Precio: {item.precio}</p>
                        <p className="item-detail">Talle: {item.talle}</p>
                        
                        {cant?  
                            <Link className="link-buy" to={"/cart"}>Continuar la Compra</Link>
                        : <ItemCount stock={item.stock} initial="1" onAdd={handleOnAdd} />

                        }
                        <p className="stock-disposable">Stock Disponible: {item.stock}</p>
                        <Link className="link-initiation" to={"/"} >Volver</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ItemDetail