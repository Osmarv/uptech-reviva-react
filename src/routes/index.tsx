import React from "react";

import { Route, Routes } from "react-router-dom";
import Carrinho from "../pages/carrinho";
import Index from "../pages/home";

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/carrinho" element={<Carrinho />} />
  </Routes>
);

export default AppRoutes;
