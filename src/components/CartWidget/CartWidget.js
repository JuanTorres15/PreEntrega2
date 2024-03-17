import cart from "./assets/1001596.svg";
import "./CartWidget.css";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";


function CartWidget () {

    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to="/cart" className="CartWidget" style={{ display: totalQuantity > 0 ? "block" : "none" }}>
            <img className="imagen_carrito" src={cart} alt="cart-widget"/>
            {totalQuantity > 0 && (
                    <span className="cartQuantity">{totalQuantity}</span>
                )}
        </Link>
    )
}



export default CartWidget;