import ItemCount from "./../ItemCount/ItemCount"
import "./ItemDetail.css"
import { Link } from "react-router-dom"

function ItemDetail({item}){
    return(
        <div className="container text-center p-3">
            <div className="row row-cols-2">
                <div className="col imgDetalle d-flex text-center p-2 ">
                    <img src={item.img} className="img-fluid" alt={item.nombre} />
                </div>
                <div className="col textDetalle">
                    <div className="container">
                        <h3 className="itemNombre">{item.nombre}</h3>
                        <p className="itemDetalle">{item.detalle}</p>
                        <p className="itemDetalle">{item.precio}</p>
                        <p className="itemDetalle">{item.talle}</p>
                        <ItemCount stock={item.stock} initial="1" />
                        <p className="stockDisponible">Stock Disponible: {item.stock}</p>
                        <Link className="linkInicio" to={"/"} >Volver</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ItemDetail