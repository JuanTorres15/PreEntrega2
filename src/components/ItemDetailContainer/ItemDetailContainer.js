import { useState, useEffect } from "react";
import {  getProductosById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";



function ItemDetailContainer () {

    const [Producto, setProducto] = useState(null)

    const { itemId } = useParams()

    useEffect(()=> {
        getProductosById(itemId)
            .then(response => {
                setProducto(response)
            })
            .catch (error => {
                console.error(error)
            })
        },[itemId])

    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...Producto}/>
        </div>
    )


}

export default ItemDetailContainer;