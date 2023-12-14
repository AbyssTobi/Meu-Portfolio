import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Início</Link>
                    <Link to="/about">Sobre mim</Link>
                    <Link to="/skills">Habilidades</Link>
                    <Link to="/projects">Projetos </Link>
                </li>

            </ul>

        </nav>
    </aside>
)

export default Menu