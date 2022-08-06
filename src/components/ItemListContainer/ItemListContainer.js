
import Data from "../../data/Data"
import { useEffect, useState } from "react"
import ItemList from "../itemList/ItemList";

function traerProductos() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(Data), 2000);
    });
}


function ItemListContainer (props){
    const [products, setProducts] = useState ([]);

    useEffect (() => {
        traerProductos()
            .then((respuesta) =>{
                setProducts(respuesta);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return(
        <div className="itemList">
            <ItemList props={products} />
        </div>
    )
}

export default ItemListContainer
