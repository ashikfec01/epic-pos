import { Manufacturer } from "@/@domain/types/Manufacturer";
import { Creators, Types } from "@/stores/manufacturerReducer";
import { call, put, takeLatest } from "redux-saga/effects";
import { getManufacturerList } from "../services/manufacturer.service";




export function* getManufacturersRequest(){
    try {
        const data: Manufacturer[] = yield call(getManufacturerList);
        console.table(data)
        yield put(Creators.getManufacturerSuccess(data));    
    } catch (error) {
        yield put(Creators.getManufacturerFailure(error))
    }
}


export default function* unitSaga (){
    yield(takeLatest(Types.GET_MANUFACTURER , getManufacturersRequest))
}