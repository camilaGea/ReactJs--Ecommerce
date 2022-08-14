import Item from "../Item/Item";
import "./itemList.css"

function ItemList ({props}){
    return (
        <div className="contenedorItem">
            { props.map((item) => {
                return (
                    <Item 
                    key={item.id}
                    id= {item.id}
                    nombre={item.nombre} 
                    precio={item.precio} 
                    img={item.img} 
                    stock={item.stock}/>
                )
            })}
        </div>
    )
}

export default ItemList;