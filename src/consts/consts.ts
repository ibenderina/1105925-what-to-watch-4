export enum Level {
  BAD = `Bad`,
  NORMAL = `Normal`,
  GOOD = `Good`,
  VERY_GOOD = `Very good`,
  AWESOME = `Awesome`
}

export enum Tab {
  OVERVIEW = `Overview`,
  DETAILS = `Details`,
  REVIEWS = `Reviews`
}

export const ALL_GENRES = `All Genres`;

export enum ClassName {
  ACTIVE_TAB = `movie-nav__item--active`,
  ACTIVE_GENRE = `catalog__genres-item catalog__genres-item--active`,
  INACTIVE_GENRE = `catalog__genres-item`,
  SIMILAR_FILMS = `catalog catalog--like-this`,
}

export enum CountLimit {
  MAX_FILMS = 8,
  MAX_SIMILAR_FILMS = 4,
  MAX_GENRES = 9,
}

export const TIMEOUT = 1000;

export const ESC = `Escape`;

export enum ErrorMessages {
  EMAIL_INVALID = `Email invalid`,
  PASSWORD_INVALID = `Password invalid`,
  INVALID_USER_DATA = `Invalid user data`,
  INVALID_RATING = `Please select rating`,
  TOO_SHORT_COMMENT = `Minimal comment length 50 symbols`,
  TOO_LONG_COMMENT = `Maximum comment length 400 symbols`,
}

export enum SuccessMessages {
  ADD_COMMENT = `Comment was added!`,
}

export enum TransferStates {
  NEW = `NEW`,
  IN_PROGRESS = `IN_PROGRESS`,
  SUCCESS = `SUCCESS`,
  ERROR = `ERROR`,
}

export enum RatingLevel {
  MAX = 5,
  MIN = 1,
}

export enum CommentLength {
  MAX = 400,
  MIN = 50,
}

export enum PageRoute {
  INDEX = `/`,
  LOGIN = `/login`,
  MY_LIST = `/mylist`,
  REVIEW = `/review`,
  FILMS = `/films`,
  PLAYER = `/player`,
}

export enum APIEndpoints {
  PROMO_FILM = `/films/promo`,
  FILMS = `/films`,
  FAVORITE = `/favorite`,
  COMMENTS = `/comments`,
  LOGIN = `/login`,
}
