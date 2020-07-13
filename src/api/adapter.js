class Film {
  constructor(rawFilm) {
    this.backgroundColor = rawFilm[`background_color`];
    this.background = rawFilm[`background_image`];
    this.description = rawFilm[`description`];
    this.director = rawFilm[`director`];
    this.genre = rawFilm[`genre`];
    this.id = parseInt(rawFilm[`id`], 10);
    this.isFavorite = rawFilm[`is_favorite`];
    this.title = rawFilm[`name`];
    this.src = rawFilm[`poster_image`];
    this.previewImage = rawFilm[`preview_image`];
    this.previewVideoLink = rawFilm[`preview_video_link`];
    this.ratingCount = rawFilm[`rating`];
    this.date = rawFilm[`released`];
    this.runTime = rawFilm[`run_time`];
    this.ratingScore = rawFilm[`scores_count`];
    this.starring = rawFilm[`starring`] || [];
    this.url = rawFilm[`video_link`];
    this.comments = [];
  }
}

class FilmComment {
  constructor(rawComment) {
    this.id = parseInt(rawComment[`id`], 10);
    this.commentAuthor = rawComment[`user`][`name`];
    this.authorId = parseInt(rawComment[`user`][`id`], 10);
    this.commentText = rawComment[`comment`];
    this.commentDate = rawComment[`date`];
    this.commentRating = rawComment[`rating`];
  }
}

class UserAccount {
  constructor(rawUser) {
    this.id = parseInt(rawUser[`id`], 10);
    this.avatarUrl = rawUser[`avatar_url`];
    this.email = rawUser[`email`];
    this.name = rawUser[`name`];
  }

  static parse(rawData) {
    try {
      return new UserAccount(rawData);
    } catch (e) {
      return null;
    }
  }
}

const parseArray = (rawData, DataType) => {
  return rawData.map((item) => new DataType(item));
};

const parseFilms = (rawFilms) => {
  return parseArray(rawFilms, Film);
};

const parseComments = (rawComments) => {
  return parseArray(rawComments, FilmComment);
};

export {Film, FilmComment, UserAccount, parseFilms, parseComments};
