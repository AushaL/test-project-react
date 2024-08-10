import { FC } from "react";
import { MainInput } from "../../../shared/ui/mainInput";
import { SelectInput } from "../../../shared/ui/selectInput";
import { InputLabel } from "../../../shared/ui/inputLabel";
import "./productsTab.scss";

export const ProductsTab: FC = () => {
  const sortOptions = ["sort by price", "sort by name"];
  const filterOptions = [
    "men's clothing",
    "women's clothing",
    "jewelery",
    "electronics",
  ];

  return (
    <div className="products-tab">
      <div className="products-tab__wrapper">
        <div className="products-tab__item">
          <InputLabel value="Filter" />
          <SelectInput options={filterOptions} />
        </div>
        <div className="products-tab__item">
          <InputLabel value="Sort by" />
          <SelectInput options={sortOptions} />
        </div>
        <div className="products-tab__item">
          <InputLabel value="Search" />
          <MainInput />
        </div>
      </div>
    </div>
  );
};
