import { selector } from "recoil";
import { productsState } from "../atoms";

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