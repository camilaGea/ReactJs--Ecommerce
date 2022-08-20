import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
/* import {Link} from "react-router-dom"; */
import {useCartContext} from "../cartContext/CartContext";

function CartWidget (cantidad){
    const {itemsCarrito} = useCartContext();
    if (itemsCarrito()!==0){
    return(
        <div className="text-decoration-none">
            <FontAwesomeIcon icon= {faCartShopping} />
            {` `+ itemsCarrito()}
        </div>
    );}
    return (
        <FontAwesomeIcon icon= {faCartShopping} />
    )
}

export default CartWidget