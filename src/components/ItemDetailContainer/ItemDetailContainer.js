import React, { useEffect, useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import {useParams } from "react-router-dom";
import './itemDetailContainer.css';
import firestoreDB from "../../firebase/dataBase";
import { collection, doc, getDoc } from "firebase/firestore";
 
function ItemDetailContainer() {
    const [products, setProducts] = useState ([]);
    const id = useParams().id
 

    function traerProcutos(id){
        return new Promise((resolve) => {
            const productsCollections = collection(firestoreDB, "productos");
            const docs = doc(productsCollections, id);
            getDoc(docs).then(snapshot => {
                resolve({ ...snapshot.data(), id: snapshot.id})
            });
        })
    }

    useEffect (() => {
        traerProcutos(id).then(product => {
            setProducts(product)
        })
    }, [id]);
 
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

