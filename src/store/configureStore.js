import { createBrowserHistory } from "history";
import { createStore, compose, applyMiddleware } from "redux";
import createRootReducer from "./modules";
import { routerMiddleware } from "connected-react-router";
import reduxLogger from "redux-logger";
import sagaMiddleware, { rootSaga } from "store/sagas";

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    compose(
      applyMiddleware(routerMiddleware(history), reduxLogger, sagaMiddleware)
    )
  );

  sagaMiddleware.run(rootSaga);
  // saga에서 rootSaga까지 전부 넣어줘서 run 시킨후 import하려고 했으나
  // middleware 등록 전에 saga를 run시키면 에러 발생, 그래서 sagaMiddleware, rootSaga 따로 선언 후
  // configureStore에서 run
  return store;
}
