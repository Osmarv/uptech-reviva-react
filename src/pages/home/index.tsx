import React from "react";
import Header from "../../components/header/header";
import MainMenu from "../../components/mainMenu/mainMenu";
import SearchhForm from "../../components/searchForm/searchForm";
import Products from "../../components/products/products";
import Banner from "../../components/banner/banner";
import FashionTips from "../../components/fashionTips/fashionTips";
import Footer from "../../components/footer/footer";

class Index extends React.Component {
    render() {
        return (
            <>
            <Header />

            <main className="main">
                <MainMenu />
                <SearchhForm />
                <section className="latest-releases">
                    <h2 className="latest-releases__h2 h2">Últimos lançamentos</h2>        
                    <Products />
                </section>

                <Banner />

                <section className="summer-collection">
                    <h2 className="summer-collection__h2 h2">Coleção de verão 2022</h2>
                    <Products />
                </section>

                <FashionTips />

            </main>

            <Footer />
            
            </>
        )
    }
}

export default Index;