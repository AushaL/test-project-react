import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "../../shared/constants/routes";

export const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.DEFAULT} element>
        <Route path={ROUTES.HOME} element></Route>
        <Route path={ROUTES.PRODUCTS} element></Route>
        <Route path={ROUTES.PRODUCT} element></Route>
        <Route path={ROUTES.NOT_FOUND} element></Route>
      </Route>
    </Routes>
  );
};
