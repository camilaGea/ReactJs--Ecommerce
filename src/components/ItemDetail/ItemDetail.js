import ItemCount from "./../ItemCount/ItemCount"
import "./ItemDetail.css"

function ItemDetail({item}){

    return(
        <div className="container text-center p-3">
            <div className="row row-cols-2">
                <div className="col d-flex text-center p-2 ">
                    <img src={item.img} className="img-fluid" alt="imagen" />
                </div>
                <div className="col">
                    <div className="container">
                        <h3>{item.nombre}</h3>
                        <p>{item.detalle}</p>
                        <p>{item.precio}</p>
                        <ItemCount stock={item.stock} initial="1" />
                        <p>Stock Disponible: {item.stock}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ItemDetail