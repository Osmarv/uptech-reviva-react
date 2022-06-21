import React from "react";
import Header from "../../components/header/header";
import MainMenu from "../../components/mainMenu/mainMenu";
import SearchhForm from "../../components/searchForm/searchForm";
import Footer from "../../components/footer/footer";
import Banner from "../../components/banner/banner";
import ProductDetails from "./productDetails";
import Products from "../../components/products/products";

function Detalhes () {
    return (
        <>
        <Header />
        <main className="main">
            <MainMenu />
                <SearchhForm />
                <ProductDetails />
            <Banner />

            <section className="latest-releases">
                    <h2 className="latest-releases__h2 h2">Últimos lançamentos</h2>        
                    <Products />
            </section>

        </main>
        <Footer />
        </>
    )
}

export default Detalhes;