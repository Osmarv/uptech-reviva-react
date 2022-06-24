import React from "react";
import Header from "../../components/header/header";
import MainMenu from "../../components/mainMenu/mainMenu";
import SearchhForm from "../../components/searchForm/searchForm";
import Products from "../../components/products/products";
import Banner from "../../components/banner/banner";
import FashionTips from "../../components/fashionTips/fashionTips";
import Footer from "../../components/footer/footer";
import styled from "styled-components";

const Main = styled.main`
    background-color: #E0E0E0;
`

const H2 = styled.h2`
    font-size: 1.5em;
    margin: 1rem;
    font-weight: bold;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`

function Index () {
return (
    <>
    <Header />
    <Main>
        <MainMenu />
        <SearchhForm />
        <section className="latest-releases">
            <H2>Últimos lançamentos</H2>        
            <Products />
        </section>
        <Banner />
        <section className="summer-collection">
            <H2>Coleção de verão 2022</H2>
            <Products />
        </section>
        <FashionTips />
    </Main>
    <Footer />           
    </>
)
}

export default Index;