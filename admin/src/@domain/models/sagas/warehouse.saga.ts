import { call, put, takeLatest } from "redux-saga/effects";
import { addWarehouseList, getWarehouseList } from "../services/warehouse.service";
import { Creators, Types } from "@/stores/warehouseReducer";
import { Warehouse } from "@/@domain/types/Warehouse";
import { WarehouseParams } from "@/interface/product/WarehouseParams";

export function* warehousesRequest(action: any) {
  try {    
    const warehouses:Warehouse[] = yield call(getWarehouseList);
    yield put(Creators.warehousesSuccess(warehouses));
  } catch (error) {
    yield put(Creators.warehousesFailure(error))
  }
};


export function* addWarehouseRequest(actions: any) {
  try {    
    const warehouse:WarehouseParams = yield call(addWarehouseList, actions.payload);
    yield put(Creators.addWarehouseSuccess(warehouse));
    warehousesRequest(actions)
  } catch (error) {
    yield put(Creators.addWarehouseFailure(error))
  }
};



export default function* warehouseSaga (){
  yield takeLatest(Types.WAREHOUSES, warehousesRequest);
  yield takeLatest(Types.ADD_WAREHOUSE, addWarehouseRequest);
}