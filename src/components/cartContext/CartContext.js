import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);
export const  useCartContext = () => useContext(CartContext);

function CartContextProvider ({children}){

    const [cartItems, setCartItems ] = useState([]);

    function addItem(items){
        const cartItemsBak = [...cartItems];
        if (cartItemsBak.find((prod) => prod.id === items.item.id) !== undefined){
            //si existe suma la cantidad
            cartItemsBak.find((prod) => prod.id === items.item.id).cantidad += items.cantidad;
            setCartItems(cartItems)
        } else {
            //no existe lo agrega
            setCartItems([...cartItems, {...items.item, cantidad: items.cantidad}]);
        }
    }

    function totalProductsInCart(){
		return cartItems.reduce((prev, next) => prev + next.cantidad, 0);
	}

    function isInCart(id){
        //existe?
        return (cartItems.some(item => item.id === id))
    }

    function clear() {
        //elimina todos los items
        setCartItems([])
    }

    function removeItem(id) {
        //elimina un item
        setCartItems(cartItems.filter(item => item.id !== id))
    }

    function totalCart (){
        return(cartItems.reduce((total, item) => total + (item.cantidad * item.precio), 0))
    }

    return (
        <CartContext.Provider value={{cartItems, addItem, isInCart, clear, removeItem, totalProductsInCart, totalCart}}>
            {children}
        </CartContext.Provider>
    );

};

export default CartContextProvider;