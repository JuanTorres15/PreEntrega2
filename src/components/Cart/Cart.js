import "./Cart.css";
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from "../Context/CartContext";
import CartItem  from "../CartItem/CartItem";

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <div className="Counter">
                <h1>No hay items en el carrito</h1>
                <Link to="/" className="Option">Volver al inicio</Link>
            </div>
        );
    }

    return (
        <div className="Counter">
            {cart.map(item => (
                <CartItem key={item.id} {...item} />
            ))}
            <h3>Total: ${total}</h3>
            <button onClick={clearCart} className="Button">Limpiar Carrito</button>
            <Link to="/checkout" className="Button">Checkout</Link>
        </div>
    );
};

export default Cart;
