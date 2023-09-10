import { all, fork } from "redux-saga/effects";
import warehouseSaga from "./sagas/warehouse.saga";
import brandSaga from "./sagas/brand.saga";
import rackSaga from "./sagas/rack.saga";
import unitSaga from "./sagas/unit.saga";
import categorySaga from "./sagas/category.saga";
import manufacturerSaga from "./sagas/manufacturer.saga";

export default function* rootSaga() {
  yield all([
    fork(warehouseSaga),
    fork(brandSaga),
    fork(rackSaga),
    fork(unitSaga),
    fork(categorySaga),
    fork(manufacturerSaga)
    // fork(authS agas)
  ]);
}