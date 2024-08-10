import { FC } from "react";
import { Title } from "@mantine/core";
import { MainInput } from "../../../shared/ui/mainInput";
import { SelectInput } from "../../../shared/ui/selectInput";
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
        <Title className="title">Filter</Title>
        <SelectInput options={filterOptions} />
        <Title className="title">Sort by</Title>
        <SelectInput options={sortOptions} />
        <Title className="title">Search</Title>
        <MainInput />
      </div>
    </div>
  );
};
