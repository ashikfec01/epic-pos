import { Category } from "@/@domain/types/Category";
import { Creators, Types } from "@/stores/categoryReducer";
import { getCategoryList } from "../services/category.service";
import { call, put, takeLatest } from "redux-saga/effects";



export function* getCategoriesRequest(){
    try {
        const data: Category[] = yield call(getCategoryList);
        yield put(Creators.getCategoriesSuccess(data));
    } catch (error) {
        yield put(Creators.getCategoriesFailure(error));
    }
}



export default function* brandSaga (){
    yield takeLatest(Types.GET_CATEGORIES,  getCategoriesRequest);
   
  }
