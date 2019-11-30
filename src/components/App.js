import React from "react";
import { Provider } from "react-redux";
import configureStore, { history } from "store/configureStore";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import Login from "components/Login";
import Main from "./Main";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/main" component={Main} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
