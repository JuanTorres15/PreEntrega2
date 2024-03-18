import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { db } from "../../services/services/firebaseConfig";
import CheckoutForm from "../CheckoutForm/CheckoutForm";



function Checkout () {

    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState("")

    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true)
    
        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }
    
            const orderRef = collection(db, "orders");
    
            const orderAdded = await addDoc(orderRef, objOrder);
    
            setOrderId(orderAdded.id);
            clearCart();
        } catch (error) {
            console.error("Error al crear la orden:", error);
        } finally {
            setLoading(false);
        }
    }
    

    if(loading){
        return <h1 className="Counter">Se esta generando su orden...</h1>
    }

    if(orderId) {
        return <h1 className="Counter">El id de su orden es: {orderId}</h1>
    }

    return (
        <div className="Counter">
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )
}

export default Checkout;