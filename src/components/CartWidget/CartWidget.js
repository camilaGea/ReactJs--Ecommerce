import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
/* import {Link} from "react-router-dom"; */
import {useCartContext} from "../cartContext/CartContext";

function CartWidget (cantidad){
    const {totalProductsInCart} = useCartContext();
    if (totalProductsInCart()!==0){
    return(
        <div className="cart-icon">
           <FontAwesomeIcon icon={faCartShopping}/>{` `+ totalProductsInCart()}
        </div>
    );}
    return (
        <FontAwesomeIcon icon= {faCartShopping} />
    )
}

export default CartWidget