import "./ItemListContainer.css";
import { useEffect, useState, } from "react";
import { getProductos, getProductosByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


function ItemListContainer({ greeting }) {

    const [Productos, setProductos] = useState([]) 

    const { categoryId } = useParams()

    useEffect(()=>{
        const asyncFunc = categoryId ? getProductosByCategory: getProductos

        asyncFunc(categoryId)
            .then(response => {
                setProductos(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])

    return(
        <div>
            <h1 className="Productos">Productos</h1>
            <ItemList Productos={Productos}/>
        </div>
    )


}

export default ItemListContainer;