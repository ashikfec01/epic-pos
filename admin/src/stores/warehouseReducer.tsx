import { createActions, createReducer } from "reduxsauce";

const { Types, Creators } = createActions({

  addWarehouse: ['payload'],
  addWarehouseSuccess: ['response'],
  addWarehouseFailure: ['error'],

  updateWarehouse: ['payload'],
  updateWarehouseSuccess: ['response'],
  updateWarehouseFailure: ['error'],
  
  removeWarehouse: ['payload'],
  removeWarehouseSuccess: ['response'],
  removeWarehouseFailure: ['error'],

  warehouses: [],
  warehousesSuccess: ['warehouses'],
  warehousesFailure: ['error'],

}, { prefix: '@Warehouse/' });
export { Types, Creators };
const initialState = {
  error: false,
  isFetching: false,
  warehouses: [],

};
export default createReducer(initialState, {
  [Types.WAREHOUSES]: (state) => {
    return {
      ...state,
      error: false,
      isFetching: true,
    }
  },
  [Types.WAREHOUSES_SUCCESS]: (state, action) => {
    const {warehouses} = action;
    return {
      ...state,
      warehouses: warehouses,
      error: false,
      isFetching: false,
    }
  },
  [Types.WAREHOUSES_FAILURE]: (state, action) => {
    return {
      ...state,
      error: action.error,
      isFetching: false,
    }
  },

  [Types.ADD_WAREHOUSE]: (state, action) => { 
    return {
      ...state
    }
  },
  [Types.ADD_WAREHOUSE_SUCCESS] : (state, action) => { 
    return {
      ...state
    }
  },
  [Types.ADD_WAREHOUSE_FAILURE] : (state, action) => { 
    return {
      ...state
    }
  },
  [Types.UPDATE_WAREHOUSE]: (state, action) => { 
    return {
      ...state
    }
  },
  [Types.UPDATE_WAREHOUSE_SUCCESS] : (state, action) => { 
    return {
      ...state
    }
  },
  [Types.UPDATE_WAREHOUSE_FAILURE] : (state, action) => { 
    return {
      ...state
    }
  },
  [Types.REMOVE_WAREHOUSE]: (state, action) => { 
    return {
      ...state
    }
  },
  [Types.REMOVE_WAREHOUSE_SUCCESS] : (state, action) => { 
    return {
      ...state
    }
  },
  [Types.REMOVE_WAREHOUSE_FAILURE] : (state, action) => { 
    return {
      ...state
    }
  },

})