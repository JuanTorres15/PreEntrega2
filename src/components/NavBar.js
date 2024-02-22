import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";



function NavBar(){

    return (
        <nav className="NavBar">
            <Link to="/" className="TituloPrincipal">
                <h3>My Ecommerce</h3>
            </Link>
            <div>
                <NavLink to={`/category/Accion-Aventura`} className="NavLink">Accion-Aventura</NavLink>
                <NavLink to={`/category/Deportes`} className="NavLink">Deportes</NavLink>
                <NavLink to={`/category/Armas`} className="NavLink">Armas</NavLink>
            </div>
        </nav>
    )
}

export default NavBar;