import Data from "../../data/Data"
import React, { useEffect, useState } from "react"
import ItemList from "../itemList/ItemList";
import { useParams } from "react-router-dom";
import './itemListContainer.css'
 
function ItemListContainer (props){
    const [products, setProducts] = useState ([]);
    const idCategory = useParams().idCategory
 
    function traerProductos() {
        return new Promise((resolve) => {
          setTimeout(() => resolve(Data), 2000);
        });
    }
 
 
    useEffect (() => {
        traerProductos()
            .then((respuesta) =>{
                let itemsFilter = Data.filter((element) => element.category === idCategory)
                if (idCategory === undefined){
                    setProducts(respuesta)
                }
                else{
                    setProducts(itemsFilter)
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [idCategory]);
 
    return(
        <div >
            <div className="contHome">
                <h1 className="itemH1"> {props.greeting}</h1>
            </div>
            <ItemList props={products} />
        </div>
    )
}
 
export default ItemListContainer
