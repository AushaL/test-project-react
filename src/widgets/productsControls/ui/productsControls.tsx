import { FC } from "react";
import { MainButton } from "../../../shared/ui/mainButton";

export const ProductsControls: FC = () => {
  return (
    <div className="products-controls">
      <div className="products-controls__wrapper">
        <MainButton title="load more (8)" />
        <MainButton title="load more (16)" variant="light" />
        <MainButton title="load everything" variant="outline" />
      </div>
    </div>
  );
};
