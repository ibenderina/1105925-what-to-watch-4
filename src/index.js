import ReactDOM from "react-dom";
import App from "@components/app/app";
import films from "../src/mocks/films";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer.js";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        filmsList={films}
      />
    </Provider>,
    document.querySelector(`#root`)
);
