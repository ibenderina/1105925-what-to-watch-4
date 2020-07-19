import {Film, parseComments, parseFilms, UserAccount} from "@api/adapter";
import NameSpace from "@reducer/name-space";
import {AuthorizationStatus} from "@reducer/user/user";
import {ALL_GENRES, TransferStates} from "@consts";

export const rawTestFilms = [
  {"name": `Once Upon a Time in America`, "poster_image": `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Once_Upon_a_Time_in_America.jpg`, "preview_image": `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/Once_Upon_a_Time_in_America.jpg`, "background_image": `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/ones_upon_a_time_in_america.jpg`, "background_color": `#CBAC79`, "description": `A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan over thirty years later, where he once again must confront the ghosts and regrets of his old life.`, "rating": 9.9, "scores_count": 276395, "director": `Sergio Leone`, "starring": [`Robert De Niro`, `James Woods`, `Elizabeth McGovern`], "run_time": 229, "genre": `Crime`, "released": 1984, "id": 1, "is_favorite": false, "video_link": `http://media.xiph.org/mango/tears_of_steel_1080p.webm`, "preview_video_link": `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`},
  {"name": `No Country for Old Men`, "poster_image": `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/No_Country_for_Old_Men.jpg`, "preview_image": `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/no-country-for-old-men.jpg`, "background_image": `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/No_Country_for_Old_Men.jpg`, "background_color": `#BDAD8F`, "description": `Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.`, "rating": 4.1, "scores_count": 764976, "director": `Ethan Coen`, "starring": [`Tommy Lee Jones`, `Javier Bardem`, `Josh Brolin`], "run_time": 122, "genre": `Crime`, "released": 2007, "id": 2, "is_favorite": false, "video_link": `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`, "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`},
  {"name": `A Star Is Born`, "poster_image": `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/A_Star_Is_Born.jpg`, "preview_image": `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/A_Star_Is_Born.jpg`, "background_image": `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/A_Star_is_Born.jpg`, "background_color": `#C4C0C0`, "description": `A musician helps a young singer find fame as age and alcoholism sendhis own career into a downward spiral.`, "rating": 3.9, "scores_count": 244484, "director": `Bradley Cooper`, "starring": [`Lady Gaga`, `Bradley Cooper`, `Sam Elliott`], "run_time": 136, "genre": `Drama`, "released": 2018, "id": 3, "is_favorite": false, "video_link": `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`, "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`}
];

export const rawTestComments = [
  {"id": 1, "user": {"id": 11, "name": `Jack`}, "rating": 9.7, "comment": `This movie is just plain bad. There must be some big payola going round this awards season. Badly written, average acting at best, all the characters are unrelatable and inlikeable. 2 hours of my life wasted.`, "date": `2020-06-21T10:54:44.818Z`},
  {"id": 2, "user": {"id": 10, "name": `Max`}, "rating": 4, "comment": `This movie is just plain bad. There must be some big payola going round this awards season. Badly written, average acting at best, all the characters are unrelatable and inlikeable. 2 hours of my life wasted.`, "date": `2020-06-23T10:54:44.818Z`}
];

export const rawUserAccount = {"id": 1, "email": `test@te33st.tr`, "name": `test`, "avatar_url": `/wtw/static/avatar/5.jpg`};

export const testFilms = parseFilms(rawTestFilms);
export const testComments = parseComments(rawTestComments);
export const testUserAccount = UserAccount.parse(rawUserAccount);

export const testUserStore = {
  authorizationStatus: AuthorizationStatus.IN_PROGRESS,
  authorizationErrorMessage: ``,
  userAccount: testUserAccount
};

export const testUserEmptyStore = {
  authorizationStatus: AuthorizationStatus.IN_PROGRESS,
  authorizationErrorMessage: ``,
  userAccount: new UserAccount({}),
};

export const testFilmStore = {
  currentGenre: ALL_GENRES,
  genres: [...new Set(testFilms.map((f) => f.genre))],
  films: testFilms,
  promoFilm: testFilms[0],
  showedFilmsCount: 8
};

export const testEmptyFilmStore = {
  currentGenre: ALL_GENRES,
  genres: [],
  films: [],
  promoFilm: new Film({}),
  showedFilmsCount: 0,
};

export const testEmptyCommentsStore = {
  addStatusMessage: ``,
  addStatus: TransferStates.NEW,
};

export const testCommentsStore = {
  1: testComments,
  addStatusMessage: ``,
  addStatus: TransferStates.NEW,
};

export const testStore = {
  [NameSpace.USER]: testUserStore,
  [NameSpace.FILMS]: testFilmStore,
  [NameSpace.COMMENTS]: testCommentsStore,
};
