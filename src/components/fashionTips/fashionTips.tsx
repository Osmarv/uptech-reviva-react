import React from "react";

class FashionTips extends React.Component {
    render () {
        return (
            <section>
                    <div className="fashion-tips__header">
                        <h2 className="h2">Na dúvida sobre combinar suas roupas e ficar incrível?</h2>
                        <h2 className="h2">Confira nossas dicas em nosso blog.</h2>
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
        )
    }
}

export default FashionTips;