import React from "react";

import { Route, Routes } from "react-router-dom";
import Carrinho from "../pages/carrinho";
import Detalhes from "../pages/detalhes";
import Index from "../pages/home";
import NotFound from "../pages/notFound";

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/carrinho" element={<Carrinho />} />
    <Route path="/detalhes:id" element={<Detalhes />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
