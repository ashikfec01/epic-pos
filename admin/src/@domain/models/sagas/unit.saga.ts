import { Unit } from "@/@domain/types/Unit";
import { Creators, Types } from "@/stores/unitReducer";
import { call, put, takeLatest } from "redux-saga/effects";
import { getUnitList } from "../services/unit.service";




export function* getUnitsRequest(){
    try {
        const data: Unit[] = yield call(getUnitList);
        console.table(data)
        yield put(Creators.getUnitsSuccess(data));    
    } catch (error) {
        yield put(Creators.getUnitsFailure(error))
    }
}


export default function* unitSaga (){
    yield(takeLatest(Types.GET_UNITS , getUnitsRequest))
}