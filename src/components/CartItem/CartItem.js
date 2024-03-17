import "./CartItem.css";
import { useContext } from "react"
import { CartContext } from "../Context/CartContext"




const CartItem = ({ id, title, image, quantity, price }) => {
    const { removeItem } = useContext(CartContext);

    return (
        <div className="Counter">
            <picture>
                <img className="ItemImg" src={image} alt={title} />
            </picture>
            <div className="Counter">
                <h2>{title}</h2>
                <p>Cantidad: {quantity}</p>
                <p>Subtotal: {quantity * price}</p>
                <button onClick={() => removeItem(id)}>Eliminar</button>
            </div>
        </div>
    );
}

export default CartItem;