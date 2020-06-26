import ReactDOM from "react-dom";
import App from "@components/app/app";
import films from "../src/mocks/films";

ReactDOM.render(
    <App
      filmsList={films}
    />,
    document.querySelector(`#root`)
);
