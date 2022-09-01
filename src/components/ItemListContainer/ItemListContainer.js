import React, { useEffect, useState } from "react"
import ItemList from "../itemList/ItemList";
import { useParams } from "react-router-dom";
import './itemListContainer.css';
import firestoreDB from '../../services/dataBase';
import { getDocs, collection, query, where} from 'firebase/firestore';
 
function ItemListContainer (props){
    const [products, setProducts] = useState ([]);
    const idCategory = useParams().idCategory
 
    function traerProductos() {
        return new Promise((resolve) => {
          const productsCollections = collection(firestoreDB, "productos")
          getDocs(productsCollections).then(snapshot => {
            const docsData = snapshot.docs.map(doc => { return { ...doc.data(), id: doc.id }})
            resolve(docsData)
          })
        });
    }

    function traerProductoCategory(idCategory){
        return new Promise((resolve) => {
            const productsCollections = collection(firestoreDB, "productos");
            const qProducts = query(productsCollections, where("category", "==", idCategory))
            getDocs(qProducts).then(snapshot => {
                const docsData = snapshot.docs.map(doc =>{
                    return {...doc.data(), id: doc.id}
                });
                resolve(docsData);
                
            });
        });
    };

    useEffect (() => {
        if (idCategory){
            traerProductoCategory(idCategory).then((resolve) => {
                setProducts(resolve)
            });
        }else {
            traerProductos().then((resolve) =>{
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
