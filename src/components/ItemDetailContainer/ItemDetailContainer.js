import { useState, useEffect } from "react";
import Data from "../../data/Data";
import ItemDetail from "../ItemDetail/ItemDetail";

function traerProductos() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(Data), 2000);
    });
}

function ItemDetailContainer() {
    const [products, setProducts] = useState ([]);

    useEffect (() => {
        traerProductos()
            .then((respuesta) =>{
                setProducts(respuesta[0]);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return(
        <>
            <h2> DETALLE DE PRODUCTO</h2>
            <ItemDetail item={products} />
        </>
    )
}

export default ItemDetailContainer;
