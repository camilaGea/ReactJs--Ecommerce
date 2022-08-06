import Item from "../Item/Item";
import "./itemList.css"

function ItemList ({props}){
    return (
        <div className="contenedor_Item">
            { props.map((item) => {
                return (
                    <Item key={item.id} nombre={item.nombre} precio={item.precio} img={item.img} detalle={item.detalle} talle={item.talle} stock={item.stock}/>
                )
            })}
        </div>
    )
}

export default ItemList;