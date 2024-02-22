import "./Item.css";
import { Link } from "react-router-dom";




function Item ({id, title, image, price, description}) {
    
    return (
        <article className="Articulo">
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
                    Precio: ${price}
                </p>
            </section>
            <footer className="ItemFooter">
                <Link to={`/item/${id}`} className="Option">Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item;
