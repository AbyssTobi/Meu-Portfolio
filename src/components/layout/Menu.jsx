import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Início</Link>
                </li>

                <li>
                <Link to="/about">Sobre mim</Link>
                </li>

                <li>
                    <Link to="/projects">Projetos </Link>
                </li>
                
                <li>
                <Link to="/skills">Habilidades</Link>
                </li>
            </ul>

        </nav>
    </aside>
)

export default Menu