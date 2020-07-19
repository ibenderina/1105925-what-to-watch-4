export const Level = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VERY_GOOD: `Very good`,
  AWESOME: `Awesome`
};

export const Tab = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

export const ALL_GENRES = `All Genres`;

export const ClassName = {
  ACTIVE_TAB: `movie-nav__item--active`,
  ACTIVE_GENRE: `catalog__genres-item catalog__genres-item--active`,
  INACTIVE_GENRE: `catalog__genres-item`,
  SIMILAR_FILMS: `catalog catalog--like-this`,
};

export const CountLimit = {
  MAX_FILMS: 8,
  MAX_SIMILAR_FILMS: 4,
  MAX_GENRES: 9,
};

export const TIMEOUT = 1000;

export const ESC = `Escape`;

export const ErrorMessages = {
  EMAIL_INVALID: `Email invalid`,
  PASSWORD_INVALID: `Password invalid`,
  INVALID_USER_DATA: `Invalid user data`,
};

export const SuccessMessages = {
  ADD_COMMENT: `Comment was added!`,
};

export const TransferStates = {
  NEW: `NEW`,
  IN_PROGRESS: `IN_PROGRESS`,
  SUCCESS: `SUCCESS`,
  ERROR: `ERROR`,
};

export const RatingLevel = {
  MAX: 5,
  MIN: 1
};

export const CommentLength = {
  MAX: 400,
  MIN: 50
};


export const PageRoute = {
  INDEX: `/`,
  LOGIN: `/login`,
  MY_LIST: `/mylist`,
  REVIEW: `/review`,
  FILMS: `/films`,
  PLAYER: `/player`,
};

export const APIEndpoints = {
  PROMO_FILM: `/films/promo`,
  FILMS: `/films`,
  FAVORITE: `/favorite`,
  COMMENTS: `/comments`,
  LOGIN: `/login`,
};
