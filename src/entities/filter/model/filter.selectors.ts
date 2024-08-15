import { RootState } from "../../../app/store";

export const selectFilterValue = (state: RootState) => state.filter.filterValue;

export const selectFilteredProducts = (state: RootState) => state.filter.items;
