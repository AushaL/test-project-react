import { RootState } from "../../../app/store";

export const selectSortValue = (state: RootState) => state.sort.sortValue;
