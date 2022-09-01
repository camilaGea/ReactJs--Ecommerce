import React, { useEffect, useState } from "react"
import ItemList from "../itemList/ItemList";
import { useParams } from "react-router-dom";
import './itemListContainer.css';
import firestoreDB from '../../services/dataBase';
import { getDocs, collection, query, where} from 'firebase/firestore';
/* import { faLeftLong } from "@fortawesome/free-solid-svg-icons"; */
 
function ItemListContainer (props){
    const [products, setProducts] = useState ([]);
    const idCategory = useParams().idCategory

    function traerProductos( qProducts) {
        return new Promise((resolve) => {
          getDocs(qProducts).then(snapshot => {
            const docsData = snapshot.docs.map(doc => { return { ...doc.data(), id: doc.id }})
            resolve(docsData)
          })
        });
    }
    
    useEffect (() => {
        if (idCategory){
            const productsCollections = collection(firestoreDB, "productos");
            let qProducts = query(productsCollections, where("category", "==", idCategory))
            traerProductos(qProducts).then((resolve) => {
                setProducts(resolve)
            });
        }else {
            const productsCollections = collection(firestoreDB, "productos");
            traerProductos(productsCollections).then((resolve) =>{
                setProducts(resolve)
            })
        }
    }, [idCategory]);
 
    return(
        <div >
            <div className="container-home">
                <h1 className="text-center item-H1"> {props.greeting}</h1>
            </div>
            <ItemList props={products} />
        </div>
    )
}
 
export default ItemListContainer
