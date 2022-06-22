import React from "react";
import styles from './styles.module.scss'
import { useRecoilValue } from "recoil";
import { productsSelector } from "../../../selectors";

const CartProducts: React.FC = () => {

    const products = useRecoilValue(productsSelector);

    return (
        <section id="sacola">
            <h2 className={styles.h2}>Minha sacola</h2>

            <div className={styles.cart_wrapper}>
                <div className={styles.items_wrapper}>

                    {products.map((item) => (
                        <div className={styles.item_info}>
                            <div className={styles.item_image}>
                                <img src={process.env.PUBLIC_URL + item.imagens[0].url} alt={item.imagens[0].descricao} width="189px " height="146px " />
                            </div>

                            <div className={styles.item_text}>
                                <h3 className={styles.h3}>Produto</h3>
                                <p className={styles.p}>{item.nome}</p>
                            </div>

                            <div className={styles.sizes}>
                                <div>
                                    <h3 className={styles.h3}>Tamanho escolhido</h3>
                                </div>

                                <div className={styles.products__sizes}>
                                    <p className={styles.products__size}>{item.tamanhos_disponiveis[0]}</p>
                                    <p className={styles.products__size}>{item.tamanhos_disponiveis[1]}</p>
                                    <p className={styles.products__size}>{item.tamanhos_disponiveis[2]}</p>
                                </div>
                            </div>

                            <div className={styles.price}>
                                <h3 className={styles.h3}>Valor</h3>
                                <p className={styles.item_price} id="undValue">{item.preco}</p>
                            </div>

                            <div className={styles.quantity}>
                                <h3 className={styles.h3}>Quantidade</h3>
                                <form id='myform' className={styles.quantity__form} action='#'>
                                    <input type='number' name='quantity' value='2' className={styles.qty} id="qntd" /*onChange="totalCalculator(document.querySelector('#qntd').value, document.querySelector('#undValue').innerHTML) ; updateCart(document.querySelector('#qntd').value)" */ />
                                </form>
                            </div>

                            <div className={styles.subtotal}>
                                <h3 className={styles.h3}>Subtotal</h3>
                                <label className={styles.subtotal__value} id="total">R$ 39,90</label>
                            </div>

                        </div>
                    ))}
                    
                </div>


                <div className={styles.payment}>
                    <div className={styles.total}>
                        <div className={styles.total__values}>
                            <p className={styles.p}>Total</p>
                            <p className={styles.p}>R$ 159,70</p>

                        </div>
                        <div className={styles.subtotal__values}>
                            <label htmlFor="quantity" id="qntdPayment1"> </label>
                            <label htmlFor="quantity" id="qntdPayment2"> </label>
                        </div>

                        <button className={styles.payment__button}>ir para pagamento</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CartProducts;