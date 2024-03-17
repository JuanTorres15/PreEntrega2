import "./ItemListContainer.css";
import { useEffect, useState, } from "react";
import { db } from "../../services/services/firebaseConfig"; 
import { getDocs, collection, query, where } from "firebase/firestore";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


function ItemListContainer({ greeting }) {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true);

        const collectionRef = categoryId
            ? query(collection(db, "products"), where("category", "==", categoryId))
            : collection(db, "products")

            getDocs(collectionRef)
                .then(response => {
                    const productsAdapted = response.docs.map(doc =>{
                        const data = doc.data()
                        return { id: doc.id, ...data }
                    })
                    setProducts(productsAdapted)
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() => {
                    setLoading(false)
                })
    }, [categoryId])


    /*const [Productos, setProductos] = useState([]) 

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
    }, [categoryId])*/

    return(
        <div>
            <h1 className="Productos">Productos</h1>
            <ItemList Productos={products}/>
        </div>
    )


}

export default ItemListContainer;