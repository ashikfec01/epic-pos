import { createSelector } from "reselect";

export const warehouseState = (state: any)=> state.warehouse;

export const selectError = createSelector(
  [warehouseState],
  ({error})=> error,
)
export const selectIsFetching = createSelector(
  [warehouseState],
  ({isFetching})=> isFetching,
)
export const selectWarehouses = createSelector(
  [warehouseState],
  ({warehouses})=> warehouses,
)