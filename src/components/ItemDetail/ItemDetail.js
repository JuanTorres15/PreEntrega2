import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";





function ItemDetail ({id, title, image, price, description, category}) {
    
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
                <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad agregada",quantity)}/>
            </footer>
        </article>
    )
}


export default ItemDetail;