import React, { useEffect, useState} from "react";
import Data from "../../data/Data";
import ItemDetail from "../ItemDetail/ItemDetail";
import {useParams } from "react-router-dom";
import './itemDetailContainer.css'
 
function ItemDetailContainer() {
    const [products, setProducts] = useState ({});
    const id = useParams().id
 
    function traerProductos() {
        return new Promise((resolve, reject) => {
            let itemRequested = Data.find((element) => element.id === Number(id));
            setTimeout(() => {
                if (itemRequested === undefined) reject("No encontramos el item");
                else resolve(itemRequested);
            }, 1000);
        });
    }
 
    useEffect (() => {
        traerProductos()
            .then((respuesta) => setProducts(respuesta))
            .catch((error) => alert(error));
    }, []);
 
    return(
        <>
        <div className="container-home">
            <h2 className="item-H2"> DETALLE DE PRODUCTO</h2>
        </div>
        <ItemDetail item={products} />
        </>
    )
}
 
export default ItemDetailContainer;

