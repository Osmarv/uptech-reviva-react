import React from "react";

class Footer extends React.Component {
    render(){
        return (
            <footer className="footer">
                <div className="footer__header-wrapper">
                    <div className="content-brand">
                        <h1 className="h1">Reviva Fashion</h1>
                        <p className="p">by RCHLO</p>
                    </div>
                    <div></div>
                </div>

                <div className="footer-wrapper ">
                    <div className="footer-menu ">
                        <nav>
                            <h3 className="h3">Menu</h3>
                            <ul className="footer-menu__list">
                                <li className="footer-menu__itens "><a className="footer-menu__link" href=" ">Página Inicial</a></li>
                                <li className="footer-menu__itens "><a className="footer-menu__link" href=" ">Masculino</a></li>
                                <li className="footer-menu__itens "><a className="footer-menu__link" href=" ">Feminino</a></li>
                                <li className="footer-menu__itens "><a className="footer-menu__link" href=" ">Infantil</a></li>
                                <li className="footer-menu__itens "><a className="footer-menu__link" href=" ">Manual de Moda</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="footer-medias ">
                        <h3 className="h3">Siga-nos nas redes sociais</h3>
                        <div>
                            <img className="footer-medias__img" src={process.env.PUBLIC_URL + '/images/facebook-logo.png'} alt="logo do facebook "/>
                            <img className="footer-medias__img" src={process.env.PUBLIC_URL + '/images/twitter-logo.png'} alt="logo do twitter "/>
                            <img className="footer-medias__img" src={process.env.PUBLIC_URL + '/images/instagram-logo.png'} alt="logo do instagram "/>
                            <img className="footer-medias__img" src={process.env.PUBLIC_URL + '/images/youtube-logo.png'} alt="logo do youtube "/>
                        </div>
                    </div>

                    <div className="footer-contact ">
                        <h3 className="h3">Entre em contato</h3>
                        <p className="p footer-contact__p">Contato</p>
                        <p className="p footer-contact__p">reviva@rchlo.com.br</p>
                        <div className="whatsapp ">
                            <p className="p">Whatsapp</p>
                            <img src={process.env.PUBLIC_URL + '/images/whatsapp-logo.png'} alt="logo do whatsapp "/>
                        </div>
                        <div className="telefone ">
                            <p className="footer-medias__img">11 2123-3321</p>
                            <img src={process.env.PUBLIC_URL + '/images/telephone-logo.png'} alt="logo do telefone "/>
                        </div>
                    </div>

                    <div className="newsletter ">
                        <h3 className="h3">Assine nossa newsletter</h3>
                        <div className="newsletter__div">
                            <input type="email " id="email " placeholder="Digite seu email "/>
                            <input type="submit " className="newsletter__button " value="CADASTRAR "/>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;