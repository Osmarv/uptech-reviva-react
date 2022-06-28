import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Carrinho from "./pages/carrinho";
import Detalhes from "./pages/detalhes";
import Index from "./pages/home";
import NotFound from "./pages/notFound";
import { CartContext } from "./context/cart";
import { ProductsContext } from "./context/products";

export default function AppRouter() {
    return (
        <Router>
            <Routes>

                <Route path="/">
                    <Route index element={
                        <ProductsContext.Provider>
                            <Index />
                        </ProductsContext.Provider>
                    } />
                    <Route path="carrinho" element={<Carrinho />} />
                    <Route path="detalhes:id" element={
                        <CartContext.Provider>
                            <Detalhes />
                        </CartContext.Provider>
                    } />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </Router>
    );
}