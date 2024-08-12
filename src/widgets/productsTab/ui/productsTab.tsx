import { FC, useCallback } from "react";
import { MainInput } from "../../../shared/ui/mainInput";
import { SelectInput } from "../../../shared/ui/selectInput";
import { InputLabel } from "../../../shared/ui/inputLabel";
import debounce from "lodash.debounce";
import "./productsTab.scss";
import { useAppDispatch } from "../../../app/store/hooks";
import { setSearchValue } from "../../../entities/search/model/search.reducer";

export const ProductsTab: FC = () => {
  const dispatch = useAppDispatch();
  const sortOptions = ["sort by price", "sort by name"];
  const filterOptions = [
    "men's clothing",
    "women's clothing",
    "jewelery",
    "electronics",
  ];

  const onClickClear = () => {
    dispatch(setSearchValue(""));
  };

  const updateSearchValue = useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 1000),
    []
  );

  const onChangeInput = (value: string) => {
    updateSearchValue(value);
  };

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
          <MainInput onClear={onClickClear} onInputChange={onChangeInput} />
        </div>
      </div>
    </div>
  );
};
