import ReactDOM from "react-dom";
import App from "@app/app";
import {FILM_NAMES, MainFilmInfo} from "@consts";

ReactDOM.render(
    <App
      filmName={MainFilmInfo.NAME}
      filmGenre={MainFilmInfo.GENRE}
      filmDate={MainFilmInfo.DATE}
      filmNames={FILM_NAMES}
    />,
    document.querySelector(`#root`)
);
