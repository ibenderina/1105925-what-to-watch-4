import ReactDOM from "react-dom";
import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import reducer from "@reducer/reducer";
import {Actions as UserActions, AuthorizationStatus} from "@reducer/user/user";
import {createAPI} from "@api/api";
import App from "@components/app/app.connect";
import {history} from "./history";
import {APIEndpoints, PageRoute} from "@consts";

const api = createAPI((error) => {
  store.dispatch(UserActions.requireAuthorization(AuthorizationStatus.NO_AUTH));
  if (error.config.url !== APIEndpoints.LOGIN) {
    history.push(PageRoute.LOGIN);
  }
});

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);
