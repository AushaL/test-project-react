import { FC } from "react";
import { Helmet } from "react-helmet-async";
import { ProductsList } from "../../../widgets/productsList/ui/productsList";
import { ProductsTab } from "../../../widgets/productsTab";
import { ProductsControls } from "../../../widgets/productsControls";

export const Products: FC = () => {
  return (
    <>
      <Helmet>
        <title>Products page</title>
      </Helmet>
      <div>
        <ProductsTab />
        <ProductsList />
        <ProductsControls />
      </div>
    </>
  );
};
