import { RootState } from "../../../app/store";

export const selectSearchValue = (state: RootState) => state.search.searchValue;
