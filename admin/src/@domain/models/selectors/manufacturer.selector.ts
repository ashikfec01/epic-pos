import { createSelector } from "reselect";

export const manufacturerState = (state: any)=> state.manufacturer;

export const selectError = createSelector(
  [manufacturerState],
  ({error})=> error,
)
export const selectIsFetching = createSelector(
  [manufacturerState],
  ({isFetching})=> isFetching,
)
export const selectManufacturers = createSelector(
  [manufacturerState],
  ({manufacturers})=> manufacturers,
)