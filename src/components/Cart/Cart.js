import { useCartContext } from "../cartContext/CartContext";
import { Link } from "react-router-dom";
import "./cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons"

function Cart(){
    const {cartList, clear, removeItem, itemsCarrito, totalCart} = useCartContext();
    return(
        <>
            {itemsCarrito() === 0 ? (
                <div className="main">
                    <h1 className="text-center mt-3">
                        El Carrito esta VACIO!! 
                    </h1>
                    <Link className="link-comprar" to="/"> <button className="btn-comprar">COMPRAR</button> </Link>
                </div>
            ) : (
                <div className="container main">
                    <h1 className="text-center">CARRITO DE COMPRAS</h1>
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th>ID</th>                            
                                <th>Foto</th>                            
                                <th>Nombre</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                                <th>Total</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartList.map((prod) => (
                            <tr>
                                <td key={prod.id}> {prod.id}</td>
                                <th> <img src={prod.img} alt={prod.nombre} className="shadow-lg" style={{height: 100}} /></th>
                                <th>{prod.nombre}</th>
                                <th>{prod.cantidad}</th>
                                <th>{prod.precio}</th>
                                <th>{prod.cantidad * prod.precio}</th>
                                <th className=" bi-trash-fill" onClick={() => removeItem(prod.id)}><FontAwesomeIcon icon={faTrash} /></th>
                            </tr>

                            ))}
                        </tbody>
                    </table>
                    
                    <h5>{`Importe Total de compra: ${totalCart()}`}</h5>

                    <button className="btn-comprar" onClick={() => clear()} >Vaciar Carrito</button>
                </div>
            )
            }
        </>
    );
};

export default Cart;