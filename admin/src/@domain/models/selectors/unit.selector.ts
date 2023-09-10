import { createSelector } from "reselect";

export const unitState = (state: any)=> state.unit;

export const selectError = createSelector(
  [unitState],
  ({error})=> error,
)
export const selectIsFetching = createSelector(
  [unitState],
  ({isFetching})=> isFetching,
)
export const selectUnits = createSelector(
  [unitState],
  ({units})=> units,
)