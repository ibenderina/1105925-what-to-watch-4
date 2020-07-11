import ReactDOM from "react-dom";
import App from "@components/app/app";
import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from "react-redux";
import {createAPI} from "@api/api";
import thunk from "redux-thunk";
import {Actions as UserActions, AuthorizationStatus} from "@reducer/user/user";
import {Operations as DataOperations} from "@reducer/films/films";
import reducer from "@reducer/reducer";

const api = createAPI(() => {
  store.dispatch(UserActions.requireAuthorization(AuthorizationStatus.NO_AUTH));
});

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

store.dispatch(DataOperations.loadPromoFilm());
store.dispatch(DataOperations.loadFilms());

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);
