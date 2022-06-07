import React from "react";

class Banner extends React.Component {
    render() {
        return (
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
        )
    }
}

export default Banner;
