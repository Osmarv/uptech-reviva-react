import {
    BannerWrap,
    BannerText,
    BannerTextBottom,
    BannerTextBrand,
    BannerTextBrandH1,
    BannerTextBrandP
} from './bannerStyle'

function Banner () {
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

export default Banner;
