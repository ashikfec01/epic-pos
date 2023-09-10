import { createSelector } from "reselect";


export const categoryState = (state: any)=> state.category;

export const selectError = createSelector(
  [categoryState],
  ({error})=> error,
)
export const selectIsFetching = createSelector(
  [categoryState],
  ({isFetching})=> isFetching,
)
export const selectCategories = createSelector(
  [categoryState],
  ({categories})=> categories,
)