import React from "react";
import "./item.css";
import { Link } from "react-router-dom"

function Item ({nombre,precio, img, stock, id}){
    return (
        <div className="card mt-5 shadow p-3 mb-5 bg-white rounded" >
          <div className="card-img">
            <img src={img} className="img-fluid " alt="imagen" />
          </div>
          <div className="card-body">
            <h2 className="item-name">{nombre}</h2>
            <h4 className="item-price">$ {precio}</h4>
            <Link to={`/detail/${id}`} className="see-more">Ver Detalle</Link>
            <h4 className="item-stock">Stock {stock}</h4>
          </div>
        </div>
      );
}

export default Item;