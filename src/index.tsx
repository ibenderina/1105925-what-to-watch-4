import * as React from "react";
import * as ReactDOM from "react-dom";
import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import reducer from "@reducer/reducer";
import {Actions as UserActions, AuthorizationStatus} from "@reducer/user/user";
import {createAPI, ErrorCodes} from "@api/api";
import App from "@components/app/app.connect";
import {history} from "./history";
import {APIEndpoints, PageRoute} from "@consts";

const api = createAPI((error) => {
  const {response} = error;
  if (response.status === ErrorCodes.UNAUTHORIZED) {
    store.dispatch(UserActions.requireAuthorization(AuthorizationStatus.NO_AUTH));
    if (error.config.url !== APIEndpoints.LOGIN) {
      return history.push(PageRoute.LOGIN);
    }
  }
  throw error;
});

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);
