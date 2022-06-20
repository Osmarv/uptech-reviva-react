import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Carrinho from "./pages/carrinho";
import Index from "./pages/home";
import NotFound from "./pages/notFound";

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/">
                    <Route index element={<Index />}/>
                    <Route path="carrinho" element={<Carrinho />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </Router>
    );
}