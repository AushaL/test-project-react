import { FC, useCallback } from "react";
import { MainInput } from "../../../shared/ui/mainInput";
import { SelectInput } from "../../../shared/ui/selectInput";
import { InputLabel } from "../../../shared/ui/inputLabel";
import debounce from "lodash.debounce";
import "./productsTab.scss";
import { useAppDispatch, useAppSelector } from "../../../app/store/hooks";
import { setSearchValue } from "../../../entities/search/model/search.reducer";
// import { selectSortValue } from "../../../entities/sort/model/sort.selectors";
import { setSortValue } from "../../../entities/sort/model/sort.reducer";

export const ProductsTab: FC = () => {
  const dispatch = useAppDispatch();
  const sortOptions = ["sort by desc", "sort by asc"];
  // const filterOptions = [
  //   "men's clothing",
  //   "women's clothing",
  //   "jewelery",
  //   "electronics",
  // ];

  // const currentSortValue = useAppSelector(selectSortValue);

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

  const updateSortValue = (value: string) => {
    if (value === "sort by asc") {
      dispatch(setSortValue("asc"));
    } else if (value === "sort by desc") {
      dispatch(setSortValue("desc"));
    }
  };

  const onChandeSortSelect = (value: string) => {
    updateSortValue(value);
  };

  return (
    <div className="products-tab">
      <div className="products-tab__wrapper">
        {/* <div className="products-tab__item">
          <InputLabel value="Filter" />
          <SelectInput options={filterOptions}  onSelectInput={('') => {}} />
        </div> */}
        <div className="products-tab__item">
          <InputLabel value="Sort by" />
          <SelectInput
            options={sortOptions}
            onSelectInput={onChandeSortSelect}
          />
        </div>
        <div className="products-tab__item">
          <InputLabel value="Search" />
          <MainInput onClear={onClickClear} onInputChange={onChangeInput} />
        </div>
      </div>
    </div>
  );
};
