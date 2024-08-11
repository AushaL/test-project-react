import { createSelector } from "@reduxjs/toolkit";

const selectBase = createSelector(
  (state) => state,
  (state) => state.products
);

export const selectProducts = createSelector(
  selectBase,
  (state) => state.items
);
