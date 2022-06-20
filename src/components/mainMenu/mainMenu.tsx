import React from "react";
import { Link } from 'react-router-dom'

class MainMenu extends React.Component {
    render() {
        return(
            <nav className="main-menu">
                <ul className="main-menu__list">
                    <li className="main-menu__itens "><Link className="main-menu__links" to="/">Página Inicial</Link></li>
                    <li className="main-menu__itens "><Link className="main-menu__links" to="masculino">Masculino</Link></li>
                    <li className="main-menu__itens "><Link className="main-menu__links" to="feminino">Feminino</Link></li>
                    <li className="main-menu__itens "><Link className="main-menu__links" to="infantil">Infantil</Link></li>
                    <li className="main-menu__itens "><Link className="main-menu__links" to="manual de moda">Manual de Moda</Link></li>
                </ul>
            </nav>
        )
    }
}

export default MainMenu;