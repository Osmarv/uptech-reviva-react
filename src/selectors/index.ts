import { selector } from "recoil";
import { productsState, cartState } from "../atoms";

const productsSelector = selector({
  key: "productsSelector",
  get: ({ get }) => {
    const products = get(productsState);
    /*return products.map((p) => ({
      ...p,
      preco: p.preco.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        style: "currency",
        currency: "BRL",
      }),
    }));*/
    return products;
  },
});

export { productsSelector };

const cartSelector = selector({
  key: "cartSelector",
  get: ({ get }) => {
    const cart = get(cartState);
    /*return cart.map((p) => ({
      ...p,
      preco: p.preco.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        style: "currency",
        currency: "BRL",
      }),
    }));*/
    return cart;
  },
});

export { cartSelector };