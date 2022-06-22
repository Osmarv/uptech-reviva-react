import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { estoque, Items } from "../../pages/home/data";
import { useRecoilState } from "recoil";
import { cartState, productsState } from '../../atoms'
import styled from "styled-components";

const ProductList = styled.div`
    margin: 1.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media screen and (max-width:1300px) {
        display: flex;
        flex-wrap: wrap;
    }
`
const ProductListListItens = styled.div`
    border: 1px solid #C4C4C4;
    border: none;
`
const ProductListSizes = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 0.3rem;
`

const ProductListSizesItems = styled.p`
    padding: 0.3rem;
    border: 1px solid #C4C4C4;
    margin: 0.3rem 0 0.3rem 0.3rem;
`
const ItemText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ItemPrice = styled.p`
    margin-top: 0.5rem;
    font-weight: bold;
    color: chocolate;
`
const AddToBagButton = styled.div`
    color: #FFFFFF;
    background-color: #008844;
    border-radius: 4px;
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto auto;
    margin: 0.5rem 0;
    perspective: 500px;
    :hover {
        opacity: 0.7;
        cursor: pointer;
    }
`
const CardInner = styled.div`
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    display: grid;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    grid-column-start: 1;
    grid-column-end: 8;
`
const CardFront = styled.div`
    grid-column-start: 1;
    grid-column-end: 8;
    display: grid;
    backface-visibility: hidden;
`
const CardFrontText = styled.p`
    font-size: 0.8em;
    grid-column-start: 3;
    grid-column-end: 6;
    align-self: center;
    display: flex;
    justify-content: flex-end;
`
const ShoppingCart = styled.button`
    border-radius: 4px;
    background-color: #008844;
    border: none;
    grid-column-start: 8;
`

const Products: React.FC = () => {
    const [cart, setCart] = useRecoilState(cartState)
    const [, setProducts] = useRecoilState(productsState)
    function addProducts(product: Items): void{
        console.log("teste", product);
        setCart([...cart,product])
    }

    useEffect(() => {
        setProducts([...estoque])
    },[])

    return (
            <ProductList>
                {estoque.map((item) => (
                <div key={item.id}>
                    <ProductListListItens>
                        <Link to={"detalhes" + item.id}>
                            <img src={process.env.PUBLIC_URL + item.imagens[0].url} alt={item.imagens[0].descricao} width="269px" height="209px" />
                        </Link>
                        <ProductListSizes>
                            <ProductListSizesItems>{item.tamanhos_disponiveis[0]}</ProductListSizesItems>
                            <ProductListSizesItems>{item.tamanhos_disponiveis[1]}</ProductListSizesItems>
                            <ProductListSizesItems>{item.tamanhos_disponiveis[2]}</ProductListSizesItems>
                        </ProductListSizes>
                    </ProductListListItens>

                    <ItemText>
                        <p>{item.nome}</p>
                        <ItemPrice>R$ {item.preco}</ItemPrice>
                    </ItemText>

                    <AddToBagButton>
                        <CardInner>
                            <CardFront>
                                <CardFrontText onClick={():void => addProducts(item)}>ADICIONAR À SACOLA</CardFrontText>
                                <ShoppingCart>
                                    <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 5.98944C6 2.68134 8.68393 0 12 0C15.3161 0 18 2.68134 18 5.98944V8.55634H21.4286C22.8482 8.55634 24 9.7061 24 11.1232V22.2465C24 25.0808 21.6964 27.3803 18.8571 27.3803H5.14286C2.3025 27.3803 0 25.0808 0 22.2465V11.1232C0 9.7061 1.15125 8.55634 2.57143 8.55634H6V5.98944ZM8.57143 8.55634H15.4286V5.98944C15.4286 4.09902 13.8911 2.5669 12 2.5669C10.1089 2.5669 8.57143 4.09902 8.57143 5.98944V8.55634ZM7.28571 13.6901C7.99821 13.6901 8.57143 13.1179 8.57143 12.4067C8.57143 11.6954 7.99821 11.1232 7.28571 11.1232C6.57321 11.1232 6 11.6954 6 12.4067C6 13.1179 6.57321 13.6901 7.28571 13.6901ZM16.7143 11.1232C16.0018 11.1232 15.4286 11.6954 15.4286 12.4067C15.4286 13.1179 16.0018 13.6901 16.7143 13.6901C17.4268 13.6901 18 13.1179 18 12.4067C18 11.6954 17.4268 11.1232 16.7143 11.1232Z" fill="white"/>
                                    </svg>
                                </ShoppingCart>
                            </CardFront>
                        </CardInner>
                    </AddToBagButton>
                </div>
                ))
                }
            </ProductList>
        )
    }


export default Products;