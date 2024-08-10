import { FC } from "react";
import { Helmet } from "react-helmet-async";

export const Product: FC = () => {
  return (
    <>
      <Helmet>
        <title>Product page</title>
      </Helmet>
      <div>Product</div>
    </>
  );
};
