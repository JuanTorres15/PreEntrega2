import "./ItemDetail.css";
import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";





function ItemDetail ({id, title, image, price, description, category}) {

    const [quantityAdded, setQuantityAdded] = useState(0);

    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) =>{
        setQuantityAdded(quantity)

        const Item = {
            id, image, title, price,
        }
        addItem(Item, quantity)
    }
    
    return (
        <article>
            <header>
                <h2 className="ItemHeader">
                    {title}
                </h2>
            </header>
            <picture className="Galeria">
                <img src={image} alt={title} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripcion: {description}
                </p>
                <p className="Info">
                    Precio: ${price}
                </p>
            </section>
            <footer>
                <div className="Counter">
                    {
                        quantityAdded > 0 ? (
                            <Link to='/cart' className="Option2">Terminar su compra</Link>
                        ) : (
                            <ItemCount initial={1} stock={10} onAdd={handleOnAdd}/>
                        )
                    }
                </div>
            </footer>
        </article>
    )
}


export default ItemDetail;