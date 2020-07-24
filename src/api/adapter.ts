interface RawFilm {
  background_color: string
  background_image: string
  description: string
  director: string
  genre: string
  id: number
  is_favorite: boolean
  name: string
  poster_image: string
  preview_image: string
  preview_video_link: string
  rating: number
  released: number
  run_time: number
  scores_count: number
  starring: string[],
  video_link: string,
}

interface Film {
  backgroundColor: string
  background: string
  description: string
  director: string
  genre: string
  id: number
  isFavorite: boolean
  title: string
  src: string
  previewImage: string
  previewVideoLink: string
  ratingCount: number
  date: number
  runTime: number
  ratingScore: number
  starring: string[]
  url: string
  parse: (rawFilm: RawFilm) => Film
}

class Film implements Film {
  constructor(rawFilm: RawFilm) {
    this.backgroundColor = rawFilm.background_color;
    this.background = rawFilm.background_image;
    this.description = rawFilm.description;
    this.director = rawFilm.director;
    this.genre = rawFilm.genre;
    this.id = rawFilm.id;
    this.isFavorite = rawFilm.is_favorite || false;
    this.title = rawFilm.name;
    this.src = rawFilm.poster_image;
    this.previewImage = rawFilm.preview_image;
    this.previewVideoLink = rawFilm.preview_video_link;
    this.ratingCount = rawFilm.rating;
    this.date = rawFilm.released;
    this.runTime = rawFilm.run_time;
    this.ratingScore = rawFilm.scores_count;
    this.starring = rawFilm.starring || [];
    this.url = rawFilm.video_link;
  }

  static parse(rawData: RawFilm[]): Film[] {
    return rawData.map((item: RawFilm) => new Film(item))
  }
}

interface RawComment {
  id: number
  user: {
    name: string,
    id: number
  }
  comment: string
  date: string
  rating: number
}

interface FilmComment {
  id: number
  commentAuthor: string
  authorId: number
  commentText: string
  commentDate: Date
  commentRating: number
}

class FilmComment implements FilmComment {
  constructor(rawComment: RawComment) {
    this.id = rawComment.id;
    this.commentAuthor = rawComment.user.name;
    this.authorId = rawComment.user.id;
    this.commentText = rawComment.comment;
    this.commentDate = new Date(rawComment.date);
    this.commentRating = rawComment.rating;
  }

  static parse(rawData: RawComment[]): FilmComment[] {
    return rawData.map((item: RawComment) => new FilmComment(item))
  }
}

interface RawUserAccount {
  id: number
  avatar_url: string
  email: string
  name: string
}

interface UserAccount {
  id: number
  avatarUrl: string
  email: string
  name: string
}

class UserAccount implements UserAccount {
  constructor(rawUser: RawUserAccount) {
    this.id = rawUser[`id`];
    this.avatarUrl = rawUser[`avatar_url`];
    this.email = rawUser[`email`];
    this.name = rawUser[`name`];
  }

  static parse(rawUser: RawUserAccount) {
    return new UserAccount(rawUser);
  }
}

export {Film, FilmComment, UserAccount, RawFilm, RawComment, RawUserAccount};
