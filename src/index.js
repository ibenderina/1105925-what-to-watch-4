import ReactDOM from "react-dom";
import App from "@app/app";
import {FILMS_NAMES, MainFilmInfo} from "@consts";

ReactDOM.render(
    <App
      filmName={MainFilmInfo.NAME}
      filmGenre={MainFilmInfo.GENRE}
      filmDate={MainFilmInfo.DATE}
      filmNames={FILMS_NAMES}
    />,
    document.querySelector(`#root`)
);
