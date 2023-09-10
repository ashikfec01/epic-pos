import { call, put, takeLatest } from "redux-saga/effects";
import { Creators, Types } from "@/stores/rackReducer";
import { Rack } from "@/@domain/types/Rack"
import { getRackList } from "../services/rack.service"


export function* getRacksRequest(){
    try {
        const data: Rack[] = yield call(getRackList);
        console.table(data)
        yield put(Creators.getRacksSuccess(data));    
    } catch (error) {
        yield put(Creators.getRacksFailure(error))
    }
}


export default function* rackSaga(){
    yield takeLatest(Types.GET_RACKS , getRacksRequest)
}
