import React from "react";
import ReactDOM from "react-dom";
import App from "@app/app.jsx";

export const FilmInfo = {
  NAME: `American Horror Story`,
  GENRE: `Horror`,
  DATE: `2011 – ...`
};

ReactDOM.render(
    <App
      filmName={FilmInfo.NAME}
      filmGenre={FilmInfo.GENRE}
      filmDate={FilmInfo.DATE}
    />,
    document.querySelector(`#root`)
);
