import { FC } from "react";
import { Helmet } from "react-helmet-async";

import { Hero } from "../../../widgets/hero";
import { Faq } from "../../../widgets/faq";

export const HomePage: FC = () => {
  return (
    <>
      <Helmet>
        <title>Application Main page</title>
      </Helmet>
      <div>
        <Hero />
        <Faq />
      </div>
    </>
  );
};
