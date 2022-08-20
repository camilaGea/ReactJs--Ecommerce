import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);
export const  useCartContext = () => useContext(CartContext);

function CartContextProvider ({children}){

    const [cartList, setCartList] = useState([]);

    function addItem(items){
        const cartListBak = [...cartList];
        if (cartListBak.find((prod) => prod.id === items.item.id) !== undefined){
            //si existe suma la cantidad
            cartListBak.find((prod) => prod.id === items.item.id).cantidad += items.cantidad;
            setCartList(cartListBak)
        } else {
            //no existe lo agrega
            setCartList([...cartList, {...items.item, cantidad: items.cantidad}]);
        }
    }


    function itemsCarrito(){
		return cartList.reduce((prev, next) => prev + next.cantidad, 0);
	}

    function isInCart(id){
        //existe?
        return (cartList.some(item => item.id === id))
    }

    function clear() {
        //elimina todos los items
        setCartList([])
    }

    function removeItem(id) {
        //elimina un item
        setCartList(cartList.filter(item => item.id !== id))
    }

    function totalCart (){
        return(cartList.reduce((total, item) => total + (item.cantidad * item.precio), 0))
    }

    return (
        <CartContext.Provider value={{cartList, addItem, isInCart, clear, removeItem, itemsCarrito, totalCart}}>
            {children}
        </CartContext.Provider>
    );

};

export default CartContextProvider;