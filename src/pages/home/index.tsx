import React from "react";
import { Items } from "./data";
import { Images } from "./data";
import { estoque } from "./data";

class Index extends React.Component {
    render() {
        return (
            <>

            <header className="header">
                <div className="header__content__brand">
                    <h1 className="h1">Reviva Fashion</h1>
                    <p className="p">by RCHLO</p>
                </div>
                <div className="header__content__shopping-cart">
                    <a href=" ">
                        <button className="header__buttton">
                            <svg width="28" height="32" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 5.98944C6 2.68134 8.68393 0 12 0C15.3161 0 18 2.68134 18 5.98944V8.55634H21.4286C22.8482 8.55634 24 9.7061 24 11.1232V22.2465C24 25.0808 21.6964 27.3803 18.8571 27.3803H5.14286C2.3025 27.3803 0 25.0808 0 22.2465V11.1232C0 9.7061 1.15125 8.55634 2.57143 8.55634H6V5.98944ZM8.57143 8.55634H15.4286V5.98944C15.4286 4.09902 13.8911 2.5669 12 2.5669C10.1089 2.5669 8.57143 4.09902 8.57143 5.98944V8.55634ZM7.28571 13.6901C7.99821 13.6901 8.57143 13.1179 8.57143 12.4067C8.57143 11.6954 7.99821 11.1232 7.28571 11.1232C6.57321 11.1232 6 11.6954 6 12.4067C6 13.1179 6.57321 13.6901 7.28571 13.6901ZM16.7143 11.1232C16.0018 11.1232 15.4286 11.6954 15.4286 12.4067C15.4286 13.1179 16.0018 13.6901 16.7143 13.6901C17.4268 13.6901 18 13.1179 18 12.4067C18 11.6954 17.4268 11.1232 16.7143 11.1232Z" fill="white"/>
                                </svg>
                        </button>
                    </a>
                </div>
            </header>

            <main className="main">
                <nav className="main-menu">
                <ul className="main-menu__list">
                    <li className="main-menu__itens "><a className="main-menu__links" href=" ">Página Inicial</a></li>
                    <li className="main-menu__itens"><a className="main-menu__links" href=" ">Masculino</a></li>
                    <li className="main-menu__itens"><a className="main-menu__links" href=" ">Feminino</a></li>
                    <li className="main-menu__itens"><a className="main-menu__links" href=" ">Infantil</a></li>
                    <li className="main-menu__itens"><a className="main-menu__links" href=" ">Manual de Moda</a></li>
                </ul>
                </nav>

                <form className="search-form">
                    <input type="text" className="search-form__input" placeholder=" Faça sua busca aqui se já souber o que está procurando " name="search "/>
                    <button className="search-form__button" type="submit">
                        <svg width="28 " height="28 " viewBox="0 0 28 28 " fill="none " xmlns="http://www.w3.org/2000/svg ">
                                <path d="M0.639851 24.2648L7.18594 17.7187C5.69735 15.5088 4.9629 12.7476 5.3561 9.80546C6.02657 4.80101 10.1281 0.728433 15.1375 0.0942229C22.5854 -0.848206 28.8482 5.4146 27.9057 12.8625C27.2713 17.874 23.1982 21.9789 18.1932
                                22.6461C15.251 23.0392 12.4893 22.305 10.2799 20.8162L3.73385 27.3623C2.87963 28.2165 1.4944 28.2165 0.640177 27.3623C-0.213276 26.507 -0.213274 25.1179 0.639851 24.2648ZM23.6742 11.375C23.6742 7.51515 20.5341 4.37499 16.6742 4.37499C12.8144
                                4.37499 9.67422 7.51515 9.67422 11.375C9.67422 15.2348 12.8144 18.375 16.6742 18.375C20.5341 18.375 23.6742 15.2359 23.6742 11.375Z " fill="white "/>
                        </svg>
                    </button>
                </form>

                <section className="latest-releases">
                    <h2 className="latest-releases__h2 h2">Últimos lançamentos</h2>
                    
                    <div className="product-list">
                        {estoque.map((item) => (
                        <div>
                            <div className="product-list__list-itens">
                                <img src={process.env.PUBLIC_URL + item.imagens[0].url} alt={item.imagens[0].descricao} width="269px" height="209px"/>
                                <div className="product-list__sizes">
                                    <p className="product-list__sizes__itens">{item.tamanhos_disponiveis[0]}</p>
                                    <p className="product-list__sizes__itens">{item.tamanhos_disponiveis[1]}</p>
                                    <p className="product-list__sizes__itens">{item.tamanhos_disponiveis[2]}</p>
                                </div>
                            </div>

                            <div className="item-text">
                                <p className="p">{item.nome}</p>
                                <p className="item-price p">R$ {item.preco}</p>
                            </div>

                            <div className="add-to-bag-button">
                                <div className="card-inner">
                                    <div className="card-front">
                                        <p className="card-front__text p">ADICIONAR À SACOLA</p>
                                        <button className="shopping-cart">
                                            <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 5.98944C6 2.68134 8.68393 0 12 0C15.3161 0 18 2.68134 18 5.98944V8.55634H21.4286C22.8482 8.55634 24 9.7061 24 11.1232V22.2465C24 25.0808 21.6964 27.3803 18.8571 27.3803H5.14286C2.3025 27.3803 0 25.0808 0 22.2465V11.1232C0 9.7061 1.15125 8.55634 2.57143 8.55634H6V5.98944ZM8.57143 8.55634H15.4286V5.98944C15.4286 4.09902 13.8911 2.5669 12 2.5669C10.1089 2.5669 8.57143 4.09902 8.57143 5.98944V8.55634ZM7.28571 13.6901C7.99821 13.6901 8.57143 13.1179 8.57143 12.4067C8.57143 11.6954 7.99821 11.1232 7.28571 11.1232C6.57321 11.1232 6 11.6954 6 12.4067C6 13.1179 6.57321 13.6901 7.28571 13.6901ZM16.7143 11.1232C16.0018 11.1232 15.4286 11.6954 15.4286 12.4067C15.4286 13.1179 16.0018 13.6901 16.7143 13.6901C17.4268 13.6901 18 13.1179 18 12.4067C18 11.6954 17.4268 11.1232 16.7143 11.1232Z" fill="white"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="card-back">
                                        <img src="../src/check-solid.svg" alt="adicionado" width="24" height="28" /*viewBox="0 0 24 28"*//>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))
                        }
                    </div>
                </section>

                <section className="banner">
                    <div className="banner__wrap">
                        <div className="banner__text">
                            <p className="p">Fique por dentro de tudo que há de novidade no mundo da moda!</p>
                            <p className="banner__text-bottom p">Baixe já nosso manual de moda!</p>
                        </div>

                        <div className="banner__text-brand">
                            <h1 className="banner__text-brand__h1 h1">Reviva Fashion</h1>
                            <p className="banner__text-brand__p p">by RCHLO</p>
                        </div>
                    </div>
                </section>

                <section className="summer-collection">
                    <h2 className="summer-collection__h2 h2">Coleção de verão 2022</h2>

                    <div className="product-list">
                        {estoque.map((item,index) => (
                        <div>
                            <div className="product-list__list-itens">
                                <img src={process.env.PUBLIC_URL + item.imagens[0].url} alt={item.imagens[0].descricao} width="269px" height="209px"/>
                                <div className="product-list__sizes">
                                    <p className="product-list__sizes__itens">{item.tamanhos_disponiveis[0]}</p>
                                    <p className="product-list__sizes__itens">{item.tamanhos_disponiveis[1]}</p>
                                    <p className="product-list__sizes__itens">{item.tamanhos_disponiveis[2]}</p>
                                </div>
                            </div>

                            <div className="item-text">
                                <p className="p">{item.nome}</p>
                                <p className="item-price p">R$ {item.preco}</p>
                            </div>

                            <div className="add-to-bag-button">
                                <div className="card-inner">
                                    <div className="card-front">
                                        <p className="card-front__text p">ADICIONAR À SACOLA</p>
                                        <button className="shopping-cart">
                                            <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 5.98944C6 2.68134 8.68393 0 12 0C15.3161 0 18 2.68134 18 5.98944V8.55634H21.4286C22.8482 8.55634 24 9.7061 24 11.1232V22.2465C24 25.0808 21.6964 27.3803 18.8571 27.3803H5.14286C2.3025 27.3803 0 25.0808 0 22.2465V11.1232C0 9.7061 1.15125 8.55634 2.57143 8.55634H6V5.98944ZM8.57143 8.55634H15.4286V5.98944C15.4286 4.09902 13.8911 2.5669 12 2.5669C10.1089 2.5669 8.57143 4.09902 8.57143 5.98944V8.55634ZM7.28571 13.6901C7.99821 13.6901 8.57143 13.1179 8.57143 12.4067C8.57143 11.6954 7.99821 11.1232 7.28571 11.1232C6.57321 11.1232 6 11.6954 6 12.4067C6 13.1179 6.57321 13.6901 7.28571 13.6901ZM16.7143 11.1232C16.0018 11.1232 15.4286 11.6954 15.4286 12.4067C15.4286 13.1179 16.0018 13.6901 16.7143 13.6901C17.4268 13.6901 18 13.1179 18 12.4067C18 11.6954 17.4268 11.1232 16.7143 11.1232Z" fill="white"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="card-back">
                                        <img src="../src/check-solid.svg" alt="adicionado" width="24" height="28" /*viewBox="0 0 24 28"*//>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))
                        }
                    </div>
                </section>

                <section>
                    <div className="fashion-tips__header">
                        <h2>Na dúvida sobre combinar suas roupas e ficar incrível?</h2>
                        <h2>Confira nossas dicas em nosso blog.</h2>
                    </div>

                    <div className="fashion-tips ">
                        <div className="fashion-tips__big-post ">
                            <img src={process.env.PUBLIC_URL + '/images/big_post.jpg'} alt="Blog post preview"/>
                            <p className="fashion-tips__post__text">O que fazer com o look que usou no carnaval? Confira já como fazer uso dessas mesmas peças no inverno e continuar na moda.</p>
                        </div>
                        <div className="fashion-tips__blog-posts ">
                            <div className="fashion-tips__small-post ">
                                <img src={process.env.PUBLIC_URL + '/images/small_post1.jpg'} alt="Blog post preview"/>
                                <p className="fashion-tips__post__text">O que fazer com o look que usou no carnaval? Confira já como fazer uso dessas mesmas peças no inverno e continuar na moda.</p>
                            </div>
                            <div className="fashion-tips__small-post ">
                                <img src={process.env.PUBLIC_URL + '/images/small_post2.jpg'} alt="Blog post preview"/>
                                <p className="fashion-tips__post__text">O que fazer com o look que usou no carnaval? Confira já como fazer uso dessas mesmas peças no inverno e continuar na moda.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

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

            
            </>
        )
    }
}

export default Index;