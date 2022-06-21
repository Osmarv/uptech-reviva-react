import { atom } from 'recoil';
import { Items } from '../pages/home/data';

const postsState = atom({
    key: "posts",
    default: [],
});

const productsState = atom<Items[]>({
    key: "products",
    default: [],
});

const cartState = atom<Items[]>({
    key: "cart",
    default: [],
});

export { postsState, productsState, cartState };
