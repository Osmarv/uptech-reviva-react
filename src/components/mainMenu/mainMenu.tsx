import React from "react";

class MainMenu extends React.Component {
    render() {
        return(
            <nav className="main-menu">
                <ul className="main-menu__list">
                    <li className="main-menu__itens "><a className="main-menu__links" href=" ">Página Inicial</a></li>
                    <li className="main-menu__itens"><a className="main-menu__links" href=" ">Masculino</a></li>
                    <li className="main-menu__itens"><a className="main-menu__links" href=" ">Feminino</a></li>
                    <li className="main-menu__itens"><a className="main-menu__links" href=" ">Infantil</a></li>
                    <li className="main-menu__itens"><a className="main-menu__links" href=" ">Manual de Moda</a></li>
                </ul>
            </nav>
        )
    }
}

export default MainMenu;