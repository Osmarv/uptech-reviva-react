import React from "react";
import Header from "../../components/header/header";
import MainMenu from "../../components/mainMenu/mainMenu";
import SearchhForm from "../../components/searchForm/searchForm";
import Footer from "../../components/footer/footer";
import CartProducts from "./cartProducts";

function Carrinho () {
    return (
        <>
        <Header />
        <main className="main">
            <MainMenu />
            <SearchhForm />
            <CartProducts />
        </main>
        <Footer />
        </>
    )
}

export default Carrinho;