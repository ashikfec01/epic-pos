import { createSelector } from "reselect";

export const rackState = (state: any)=> state.rack;

export const selectError = createSelector(
  [rackState],
  ({error})=> error,
)
export const selectIsFetching = createSelector(
  [rackState],
  ({isFetching})=> isFetching,
)
export const selectRacks = createSelector(
  [rackState],
  ({racks})=> racks,
)