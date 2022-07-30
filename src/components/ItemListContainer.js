import ItemCount from "./ItemCount"


function ItemListContainer (props){
    return(
        <>
        <div className="itemList">
            <h1 className="itemH1"> {props.greeting}</h1>
            <ItemCount stock={15} initial={1} />
        </div>
        
        </>

    )
}

export default ItemListContainer
