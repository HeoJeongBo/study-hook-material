import { push } from "connected-react-router";
import { put, call, takeEvery, delay, select } from "redux-saga/effects";
import { routerSelector } from "./helper/selector";

export function* sagaRoute({ payload }) {
  const { path } = payload;
  const {
    location: { pathname, query, search }
  } = yield select(routerSelector);
  //   나중에 router customizing 더 할 때 이용하려고 그냥 미리 만둘어 둠

  yield put(push(`${path}`));
}

export function* watchSagaRoute() {
  yield takeEvery("SAGA_ROUTE", sagaRoute);
}
