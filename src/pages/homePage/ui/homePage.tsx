import { FC } from "react";
import { Helmet } from "react-helmet-async";

export const HomePage: FC = () => {
  return (
    <>
      <Helmet>
        <title>Application Main page</title>
      </Helmet>
      <div>Главная</div>
    </>
  );
};
