import { createSelector } from "reselect";

export const brandState = (state: any)=> state.brand;

export const selectError = createSelector(
  [brandState],
  ({error})=> error,
)
export const selectIsFetching = createSelector(
  [brandState],
  ({isFetching})=> isFetching,
)
export const selectBrands = createSelector(
  [brandState],
  ({brands})=> brands,
)