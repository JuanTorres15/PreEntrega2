import { useState, useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../services/services/firebaseConfig";



function ItemDetailContainer () {

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, "products", itemId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productsAdapted = { id: response.id, ...data }
                setProduct(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId]);

    if (loading){
        return <h1 className="Counter">Cargando los productos al carrito..</h1>
    }

    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...product}/>
        </div>
    )


}

export default ItemDetailContainer;