import { push } from "connected-react-router";
import { put, call, takeEvery, delay } from "redux-saga/effects";
import * as loginActions from "store/modules/user";

// worker saga : 실제 작업 수행
export function* login({ payload }) {
  // login Action before redirection
  const { userId, password } = payload;
  yield put(loginActions.createLoginStart());
  yield delay(5000);
  yield put(loginActions.createLoginSuccess({ userId, password }));
  yield put(push("/main"));
}

export function* logout() {
  yield put(loginActions.createLogoutStart());
  yield put(loginActions.createLogoutSuccess());
  yield put(push("/login"));
}

// export 하는 watch saga : 각각의 작업에 맞는 worker saga 수행
export function* watchUser() {
  yield takeEvery("SAGA_LOGIN", login);
  yield takeEvery("SAGA_LOUTOUT", logout);
}
