import { call, put, takeLatest } from "redux-saga/effects";
import { addBrand, getBrandList } from "../services/brand.service";
import { Creators, Types } from "@/stores/brandReducer";
import { Brand } from "@/@domain/types/Brand";

export function* getBrandsRequest(){
    try {
        const data: Brand[] = yield call(getBrandList);
        yield put(Creators.getBrandsSuccess(data));
    } catch (error) {
        yield put(Creators.getBrandsFailure(error));
    }
}


export function* addBrandsRequest(actions: any){
    try {
        const data: Brand[] = yield call(addBrand,actions.payload);
        yield put(Creators.addBrandSuccess(data));
    } catch (error) {
        yield put(Creators.addBrandFailure(error));
    }
}


export default function* brandSaga (){
  yield takeLatest(Types.GET_BRANDS, getBrandsRequest);
  yield takeLatest(Types.ADD_BRAND, addBrandsRequest);
}