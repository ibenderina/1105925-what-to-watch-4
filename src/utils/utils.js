export const setTextRating = (ratingScore) => {
  const LEVELS = [`Bad`, `Normal`, `Good`, `Very good`, `Awesome`];

  if (ratingScore < 3) {
    return LEVELS[0];
  }
  if (ratingScore >= 3 && ratingScore < 5) {
    return LEVELS[1];
  }
  if (ratingScore >= 5 && ratingScore < 8) {
    return LEVELS[2];
  }
  if (ratingScore >= 8 && ratingScore < 10) {
    return LEVELS[3];
  }
  return LEVELS[4];
};

export const chooseRandomInt = (min, max) => {
  const random = min + Math.random() * (max + 1 - min);

  return Math.floor(random);
};
