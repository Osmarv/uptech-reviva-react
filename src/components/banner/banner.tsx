import React from "react";
import styled from "styled-components";

const BannerWrap = styled.div`
    background-color: #D6BBA3;
    margin: 1.5rem;
`;

const BannerText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 3rem;
`;

const BannerTextBottom = styled.p`
    display: flex;
`;

const BannerTextBrand = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
`;

const BannerTextBrandH1 = styled.h1`
    display: flex;
    justify-content: flex-end;
    font-size: 2.5em;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    width: 100%;
`;

const BannerTextBrandP = styled.h1`
    display: flex;
    justify-content: flex-end;
    font-size: 1.5em;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    width: 100%;
`;

class Banner extends React.Component {
    render() {
        return (
            <section>
                <BannerWrap>
                    <BannerText>
                        <p className="p">Fique por dentro de tudo que há de novidade no mundo da moda!</p>
                        <BannerTextBottom>Baixe já nosso manual de moda!</BannerTextBottom>
                    </BannerText>

                    <BannerTextBrand>
                        <BannerTextBrandH1>Reviva Fashion</BannerTextBrandH1>
                        <BannerTextBrandP>by RCHLO</BannerTextBrandP>
                    </BannerTextBrand>
                </BannerWrap>
            </section>
        )
    }
}

export default Banner;
