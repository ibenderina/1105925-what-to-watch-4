import {Level} from "@consts";

export const setTextRating = (ratingScore: number): string => {
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

export const extend = <T, P>(a: T, b: P): T & P => {
  return Object.assign({}, a, b);
};

export const isValidEmail = (email: string): boolean => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};

export const isValidPassword = (password: string): boolean => {
  return !!password.toString().length;
};
