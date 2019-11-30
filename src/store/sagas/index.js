import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { watchUser } from "./user";

const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
  yield all([watchUser()]);
  // 작성한 saga들 여기서
}

export default sagaMiddleware;
