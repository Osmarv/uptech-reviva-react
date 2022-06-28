import { createContext } from 'react';
import { Items } from '../pages/home/data';

export const ProductsContext = createContext<Items[]>([]);