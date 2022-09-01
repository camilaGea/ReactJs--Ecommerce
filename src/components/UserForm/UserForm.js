import React, { useState } from "react";
import "./userForm.css";
import { collection, addDoc} from "firebase/firestore";
import { useCartContext } from "../cartContext/CartContext";
import firestoreDB from "../../services/dataBase";


function UserForm() {
    const { cartItems, totalProductsInCart, clear} = useCartContext();
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        telefono: "",
    });

    const [orderFirebase, setOrderFirebase] = useState({
        id: '',
        complete: false,
    });

    const ordenDeCompra = {
        buyer: { ...userData },
        items: [ ...cartItems],
        total: totalProductsInCart(),
        date: new Date(),
    };

    async function handleSubmit(evt) {
        evt.preventDefault();    
        const collectionRef = collection(firestoreDB, "orders");
        const order = await addDoc(collectionRef, ordenDeCompra )
        
        setOrderFirebase({id: order.id, complete: true});
        clear()
    } 

    function inputChangeHandler(evt) {
        const input = evt.target;

        const value = input.value;
        const inputName = input.name;

        let copyUserData = { ...userData };

        copyUserData[inputName] = value;
        setUserData(copyUserData);
    }

    function handleReset(evt) {
        setUserData({
        name: "",
        email: "",
        telefono: "",
        });
    }

    return (
        (orderFirebase.complete === true) ? (
        
        <div className="main">
            <h1 className="text-center mt-3">Gracias por tu compra!</h1>
            <p className="text-center mt-3">El id de seguimiento de tu compra es: {orderFirebase.id}</p>
        </div>

        ) : (
            <div className="main">
                <form className=" form-container" onReset={handleReset} onSubmit={handleSubmit}>
                    <div className="form-item mb-3">
                        <label htmlFor="name">Nombre</label>
                        <input className="part-form"
                            value={userData.name}
                            onChange={inputChangeHandler}
                            name="name"
                            type="text"
                            placeholder="Nombre"
                            required
                        />
                    </div>

                    <div className="form-item mb-3">
                        <label htmlFor="telefono">Telefono</label>
                        <input className="part-form"
                            value={userData.telefono}
                            onChange={inputChangeHandler}
                            name="telefono"
                            type="text"
                            placeholder="Telefono"
                            required
                        />
                    </div>

                    <div className="form-item mb-3">
                        <label htmlFor="email">Email</label>
                        <input className="part-form"
                            value={userData.email}
                            onChange={inputChangeHandler}
                            name="email"
                            type="text"
                            placeholder="Correo"
                            required
                        />
                    </div>
                    <div>
                        <button className="btn-comprar" type="submit" onClick={handleSubmit}>
                            Finalizar Compra
                        </button>
                    </div>
                </form>
            </div>
        )

    )
        
}

export default UserForm;