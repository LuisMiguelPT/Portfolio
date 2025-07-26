import React from "react";
import { Link } from "react-router-dom";
import '../styles/Header.css'

function Header(){
    return(
    <header className="header">
        <Link to="/" >
        <h1 className="nombre">Luismy Pérez Teruel</h1>
        </Link>
        <nav className="navi">
            <Link to="/project">Proyectos</Link>
            <Link to="/contact">Contacto</Link>
            <Link to="/comingSoon">Planes de futuro</Link>
        </nav>
    </header>
    );
}
export default Header;