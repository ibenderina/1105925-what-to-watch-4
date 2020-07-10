import {combineReducers} from "redux";
import {reducer as films} from "@reducer/films/films.jsx";
import {reducer as comments} from "@reducer/comments/comments.jsx";
import {reducer as user} from "@reducer/user/user.jsx";
import NameSpace from "@reducer/name-space.jsx";

export default combineReducers({
  [NameSpace.FILMS]: films,
  [NameSpace.COMMENTS]: comments,
  [NameSpace.USER]: user,
});
