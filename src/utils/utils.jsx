import {Level} from "@consts";

export const setTextRating = (ratingScore) => {
  if (ratingScore < 3) {
    return Level.BAD;
  }
  if (ratingScore >= 3 && ratingScore < 5) {
    return Level.NORMAL;
  }
  if (ratingScore >= 5 && ratingScore < 8) {
    return Level.GOOD;
  }
  if (ratingScore >= 8 && ratingScore < 10) {
    return Level.VERY_GOOD;
  }
  return Level.AWESOME;
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};
