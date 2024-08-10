import { FC } from "react";
import { Helmet } from "react-helmet-async";

export const Products: FC = () => {
  return (
    <>
      <Helmet>
        <title>Products page</title>
      </Helmet>
      <div>Products</div>
    </>
  );
};
