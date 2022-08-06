import Button from "../Button/Button";
import ItemCount from "../ItemCount/ItemCount"
import "./item.css"

function Item ({nombre,precio, img, detalle, stock, talle}){
    return (
        <div className="card mt-5 shadow p-3 mb-5 bg-white rounded" >
          <div className="card-img">
            <img src={img} className="img-fluid " alt="imagen" />
          </div>
          <div className="card-body">
            <h2>{nombre}</h2>
            <p>{detalle}</p>
            <p> Talle {talle}</p>
            <h4>$ {precio}</h4>
            <Button type text="Ver más"></Button>
            <h4>Stock {stock}</h4>
          </div>
        </div>
      );
}

export default Item;