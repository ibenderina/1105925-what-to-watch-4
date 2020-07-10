import {combineReducers} from "redux";
import {reducer as films} from "@reducer/films/films";
import {reducer as comments} from "@reducer/comments/comments";
import {reducer as user} from "@reducer/user/user";
import NameSpace from "@reducer/name-space";

export default combineReducers({
  [NameSpace.FILMS]: films,
  [NameSpace.COMMENTS]: comments,
  [NameSpace.USER]: user,
});
