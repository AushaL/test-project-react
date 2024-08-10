import { FC } from "react";
import { Helmet } from "react-helmet-async";
import { ProductContent } from "../../../widgets/ProductContent";

export const Product: FC = () => {
  return (
    <>
      <Helmet>
        <title>Product page</title>
      </Helmet>
      <div>
        <ProductContent />
      </div>
    </>
  );
};
