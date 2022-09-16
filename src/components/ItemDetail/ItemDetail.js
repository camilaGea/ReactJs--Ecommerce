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
        <div className="container">
            <div className="section-container">
                <div className="img-container">
                    <img src={item.img} className="img-detail" alt={item.nombre} />
                </div>
                <div className="detail-container">
                    <h3 className="item-name">{item.nombre}</h3>
                    <p className="item-detail">{item.detalle}</p>
                    <p className="item-detail">Precio: ${item.precio}</p>
                    <p className="item-detail">Talle: {item.talle}</p>
                        
                    {cant?  
                        <Link className="link-buy" to={"/cart"}>Continuar la Compra</Link>
                    : <ItemCount stock={item.stock} initial="1" onAdd={handleOnAdd} />
                    }

                    <p className="stock-disponible">Stock Disponible: {item.stock}</p>
                    <Link className="link-inicio" to={"/"} >Volver</Link>
                </div>
            </div>
        </div>
    )
};

export default ItemDetail