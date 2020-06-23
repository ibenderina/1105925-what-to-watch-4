import ReactDOM from "react-dom";
import App from "@components/app/app";
import films, {MainFilmInfo} from "../src/mocks/films";

ReactDOM.render(
    <App
      filmName={MainFilmInfo.NAME}
      filmGenre={MainFilmInfo.GENRE}
      filmDate={MainFilmInfo.DATE}
      filmsList={films}
    />,
    document.querySelector(`#root`)
);
