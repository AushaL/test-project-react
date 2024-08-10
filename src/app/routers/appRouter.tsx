import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "../../shared/constants/routes";

import { Layout } from "../layout";
import { HomePage } from "../../pages/homePage";
import { Products } from "../../pages/products";
import { Product } from "../../pages/product";
import { NotFound } from "../../pages/notFound";

export const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.DEFAULT} element={<Layout />}>
        <Route path={ROUTES.HOME} element={<HomePage />}></Route>
        <Route path={ROUTES.PRODUCTS} element={<Products />}></Route>
        <Route path={ROUTES.PRODUCT} element={<Product />}></Route>
        <Route path={ROUTES.NOT_FOUND} element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
};
