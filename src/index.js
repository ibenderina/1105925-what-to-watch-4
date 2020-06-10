import ReactDOM from "react-dom";
import App from "@app/app";
import {FilmInfo} from "@consts";

ReactDOM.render(
    <App
      filmName={FilmInfo.NAME}
      filmGenre={FilmInfo.GENRE}
      filmDate={FilmInfo.DATE}
    />,
    document.querySelector(`#root`)
);
