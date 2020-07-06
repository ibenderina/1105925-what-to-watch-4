import {chooseRandomInt, chooseRandomString, chooseRandomStrings} from "@utils";
import {CountLimit} from "@consts";

export const UNIVERSAL_MOCK_TEXT = [
  `If you can't be good, be careful`,
  `A volunteer is worth twenty pressed men`,
  `Suffering for a friend doubleth friendship`,
  `A woman's work is never done`,
  `Comparisons are odious`,
  `Money talks`,
  `Don't keep a dog and bark yourself`,
  `Every man has his price`,
];

export const UNIVERSAL_MOCK_NAMES = [
  `Sophia	Jacob`,
  `Isabella	Mason`,
  `Emma	William`,
  `Olivia	Jayden`,
  `Man with a gun`
];

export const UNIVERSAL_COMMENTS_DATES = [
  `25.11.1999`,
  `13.03.2005`,
  `01.06.2020`,
  `17.12.2019`,
];

export const UNIVERSAL_MOCK_DATES = [
  `1999`,
  `2005`,
  `2020`,
  `2019`,
];

export const UNIVERSAL_MOCK_GENRES = [
  `Comedy`,
  `Crime`,
  `Documentary`,
  `Drama`,
  `Horror`,
  `Kids & Family`,
  `Romance`,
  `Sci-Fi`,
  `Thriller`,
];

export const UNIVERSAL_MOCK_BACKGROUND = [
  `https://i.pinimg.com/originals/1c/51/70/1c51707d341b915c32ed8d91d99d4ae9.gif`,
  `https://i.pinimg.com/originals/01/47/bd/0147bd61ee15e3228d30e03ce2d64f5a.jpg`,
  `https://img1.goodfon.ru/wallpaper/big/9/6f/minimalizm-gradient-background.jpg`
];

export const UNIVERSAL_MOCK_VIDEO = [
  `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
];

const films = [
  {
    id: 0,
    title: chooseRandomString(UNIVERSAL_MOCK_TEXT),
    src: `https://pets.mail.ru/sharepic/68/10401.png`,
    description: chooseRandomStrings(UNIVERSAL_MOCK_TEXT),
    director: chooseRandomString(UNIVERSAL_MOCK_NAMES),
    starring: chooseRandomString(UNIVERSAL_MOCK_NAMES),
    genre: chooseRandomString(UNIVERSAL_MOCK_GENRES),
    date: chooseRandomString(UNIVERSAL_MOCK_DATES),
    background: chooseRandomString(UNIVERSAL_MOCK_BACKGROUND),
    ratingScore: chooseRandomInt(0, 10),
    ratingCount: chooseRandomInt(1, 450),
    url: chooseRandomString(UNIVERSAL_MOCK_VIDEO),
    comments: [{
      id: 0,
      commentAuthor: chooseRandomString(UNIVERSAL_MOCK_NAMES),
      commentText: chooseRandomStrings(UNIVERSAL_MOCK_TEXT),
      commentDate: chooseRandomString(UNIVERSAL_COMMENTS_DATES),
      commentRating: chooseRandomInt(0, 10),
    },
    {
      id: 1,
      commentAuthor: chooseRandomString(UNIVERSAL_MOCK_NAMES),
      commentText: chooseRandomStrings(UNIVERSAL_MOCK_TEXT),
      commentDate: chooseRandomString(UNIVERSAL_COMMENTS_DATES),
      commentRating: chooseRandomInt(0, 10),
    },
    {
      id: 2,
      commentAuthor: chooseRandomString(UNIVERSAL_MOCK_NAMES),
      commentText: chooseRandomStrings(UNIVERSAL_MOCK_TEXT),
      commentDate: chooseRandomString(UNIVERSAL_COMMENTS_DATES),
      commentRating: chooseRandomInt(0, 10),
    }],
    runTime: `${chooseRandomInt(1, 3)}h ${chooseRandomInt(10, 59)}m`,
  }, {
    id: 1,
    title: chooseRandomString(UNIVERSAL_MOCK_TEXT),
    src: `https://twizz.ru/wp-content/uploads/-000//1/animals-about-to-drop-album-photos-58aeb0ce59ff1__700.jpg`,
    description: chooseRandomStrings(UNIVERSAL_MOCK_TEXT),
    director: chooseRandomString(UNIVERSAL_MOCK_NAMES),
    starring: chooseRandomString(UNIVERSAL_MOCK_NAMES),
    genre: chooseRandomString(UNIVERSAL_MOCK_GENRES),
    date: chooseRandomString(UNIVERSAL_MOCK_DATES),
    background: chooseRandomString(UNIVERSAL_MOCK_BACKGROUND),
    ratingScore: chooseRandomInt(0, 10),
    ratingCount: chooseRandomInt(1, 450),
    url: chooseRandomString(UNIVERSAL_MOCK_VIDEO),
    comments: [{
      id: 0,
      commentAuthor: chooseRandomString(UNIVERSAL_MOCK_NAMES),
      commentText: chooseRandomStrings(UNIVERSAL_MOCK_TEXT),
      commentDate: chooseRandomString(UNIVERSAL_COMMENTS_DATES),
      commentRating: chooseRandomInt(0, 10),
    },
    {
      id: 1,
      commentAuthor: chooseRandomString(UNIVERSAL_MOCK_NAMES),
      commentText: chooseRandomStrings(UNIVERSAL_MOCK_TEXT),
      commentDate: chooseRandomString(UNIVERSAL_COMMENTS_DATES),
      commentRating: chooseRandomInt(0, 10),
    },
    {
      id: 2,
      commentAuthor: chooseRandomString(UNIVERSAL_MOCK_NAMES),
      commentText: chooseRandomStrings(UNIVERSAL_MOCK_TEXT),
      commentDate: chooseRandomString(UNIVERSAL_COMMENTS_DATES),
      commentRating: chooseRandomInt(0, 10),
    }],
    runTime: `${chooseRandomInt(1, 3)}h ${chooseRandomInt(10, 59)}m`,
  }, {
    id: 2,
    title: chooseRandomString(UNIVERSAL_MOCK_TEXT),
    src: `https://medialeaks.ru/wp-content/uploads/2019/08/glavnaya-1.jpg`,
    description: chooseRandomStrings(UNIVERSAL_MOCK_TEXT),
    director: chooseRandomString(UNIVERSAL_MOCK_NAMES),
    starring: chooseRandomString(UNIVERSAL_MOCK_NAMES),
    genre: chooseRandomString(UNIVERSAL_MOCK_GENRES),
    date: chooseRandomString(UNIVERSAL_MOCK_DATES),
    background: chooseRandomString(UNIVERSAL_MOCK_BACKGROUND),
    ratingScore: chooseRandomInt(0, 10),
    ratingCount: chooseRandomInt(1, 450),
    url: chooseRandomString(UNIVERSAL_MOCK_VIDEO),
    comments: [{
      id: 0,
      commentAuthor: chooseRandomString(UNIVERSAL_MOCK_NAMES),
      commentText: chooseRandomStrings(UNIVERSAL_MOCK_TEXT),
      commentDate: chooseRandomString(UNIVERSAL_COMMENTS_DATES),
      commentRating: chooseRandomInt(0, 10),
    },
    {
      id: 1,
      commentAuthor: chooseRandomString(UNIVERSAL_MOCK_NAMES),
      commentText: chooseRandomStrings(UNIVERSAL_MOCK_TEXT),
      commentDate: chooseRandomString(UNIVERSAL_COMMENTS_DATES),
      commentRating: chooseRandomInt(0, 10),
    },
    {
      id: 2,
      commentAuthor: chooseRandomString(UNIVERSAL_MOCK_NAMES),
      commentText: chooseRandomStrings(UNIVERSAL_MOCK_TEXT),
      commentDate: chooseRandomString(UNIVERSAL_COMMENTS_DATES),
      commentRating: chooseRandomInt(0, 10),
    }],
    runTime: `${chooseRandomInt(1, 3)}h ${chooseRandomInt(10, 59)}m`,
  }, {
    id: 3,
    title: chooseRandomString(UNIVERSAL_MOCK_TEXT),
    src: `https://www.thepaws.net/wp-content/uploads/2018/10/funny-chihuahua.jpg`,
    description: chooseRandomStrings(UNIVERSAL_MOCK_TEXT),
    director: chooseRandomString(UNIVERSAL_MOCK_NAMES),
    starring: chooseRandomString(UNIVERSAL_MOCK_NAMES),
    genre: chooseRandomString(UNIVERSAL_MOCK_GENRES),
    date: chooseRandomString(UNIVERSAL_MOCK_DATES),
    background: chooseRandomString(UNIVERSAL_MOCK_BACKGROUND),
    ratingScore: chooseRandomInt(0, 10),
    ratingCount: chooseRandomInt(1, 450),
    url: chooseRandomString(UNIVERSAL_MOCK_VIDEO),
    comments: [{
      id: 0,
      commentAuthor: chooseRandomString(UNIVERSAL_MOCK_NAMES),
      commentText: chooseRandomStrings(UNIVERSAL_MOCK_TEXT),
      commentDate: chooseRandomString(UNIVERSAL_COMMENTS_DATES),
      commentRating: chooseRandomInt(0, 10),
    },
    {
      id: 1,
      commentAuthor: chooseRandomString(UNIVERSAL_MOCK_NAMES),
      commentText: chooseRandomStrings(UNIVERSAL_MOCK_TEXT),
      commentDate: chooseRandomString(UNIVERSAL_COMMENTS_DATES),
      commentRating: chooseRandomInt(0, 10),
    },
    {
      id: 2,
      commentAuthor: chooseRandomString(UNIVERSAL_MOCK_NAMES),
      commentText: chooseRandomStrings(UNIVERSAL_MOCK_TEXT),
      commentDate: chooseRandomString(UNIVERSAL_COMMENTS_DATES),
      commentRating: chooseRandomInt(0, 10),
    }],
    runTime: `${chooseRandomInt(1, 3)}h ${chooseRandomInt(10, 59)}m`,
  }, {
    id: 4,
    title: chooseRandomString(UNIVERSAL_MOCK_TEXT),
    src: `https://memepedia.ru/wp-content/uploads/2018/12/hamster.jpg`,
    description: chooseRandomStrings(UNIVERSAL_MOCK_TEXT),
    director: chooseRandomString(UNIVERSAL_MOCK_NAMES),
    starring: chooseRandomString(UNIVERSAL_MOCK_NAMES),
    genre: chooseRandomString(UNIVERSAL_MOCK_GENRES),
    date: chooseRandomString(UNIVERSAL_MOCK_DATES),
    background: chooseRandomString(UNIVERSAL_MOCK_BACKGROUND),
    ratingScore: chooseRandomInt(0, 10),
    ratingCount: chooseRandomInt(1, 450),
    url: chooseRandomString(UNIVERSAL_MOCK_VIDEO),
    comments: [{
      id: 0,
      commentAuthor: chooseRandomString(UNIVERSAL_MOCK_NAMES),
      commentText: chooseRandomStrings(UNIVERSAL_MOCK_TEXT),
      commentDate: chooseRandomString(UNIVERSAL_COMMENTS_DATES),
      commentRating: chooseRandomInt(0, 10),
    },
    {
      id: 1,
      commentAuthor: chooseRandomString(UNIVERSAL_MOCK_NAMES),
      commentText: chooseRandomStrings(UNIVERSAL_MOCK_TEXT),
      commentDate: chooseRandomString(UNIVERSAL_COMMENTS_DATES),
      commentRating: chooseRandomInt(0, 10),
    },
    {
      id: 2,
      commentAuthor: chooseRandomString(UNIVERSAL_MOCK_NAMES),
      commentText: chooseRandomStrings(UNIVERSAL_MOCK_TEXT),
      commentDate: chooseRandomString(UNIVERSAL_COMMENTS_DATES),
      commentRating: chooseRandomInt(0, 10),
    }],
    runTime: `${chooseRandomInt(1, 3)}h ${chooseRandomInt(10, 59)}m`,
  }, {
    id: 5,
    title: chooseRandomString(UNIVERSAL_MOCK_TEXT),
    src: `https://stihi.ru/pics/2013/04/04/1852.jpg`,
    description: chooseRandomStrings(UNIVERSAL_MOCK_TEXT),
    director: chooseRandomString(UNIVERSAL_MOCK_NAMES),
    starring: chooseRandomString(UNIVERSAL_MOCK_NAMES),
    genre: chooseRandomString(UNIVERSAL_MOCK_GENRES),
    date: chooseRandomString(UNIVERSAL_MOCK_DATES),
    background: chooseRandomString(UNIVERSAL_MOCK_BACKGROUND),
    ratingScore: chooseRandomInt(0, 10),
    ratingCount: chooseRandomInt(1, 450),
    url: chooseRandomString(UNIVERSAL_MOCK_VIDEO),
    comments: [{
      id: 0,
      commentAuthor: chooseRandomString(UNIVERSAL_MOCK_NAMES),
      commentText: chooseRandomStrings(UNIVERSAL_MOCK_TEXT),
      commentDate: chooseRandomString(UNIVERSAL_COMMENTS_DATES),
      commentRating: chooseRandomInt(0, 10),
    },
    {
      id: 1,
      commentAuthor: chooseRandomString(UNIVERSAL_MOCK_NAMES),
      commentText: chooseRandomStrings(UNIVERSAL_MOCK_TEXT),
      commentDate: chooseRandomString(UNIVERSAL_COMMENTS_DATES),
      commentRating: chooseRandomInt(0, 10),
    },
    {
      id: 2,
      commentAuthor: chooseRandomString(UNIVERSAL_MOCK_NAMES),
      commentText: chooseRandomStrings(UNIVERSAL_MOCK_TEXT),
      commentDate: chooseRandomString(UNIVERSAL_COMMENTS_DATES),
      commentRating: chooseRandomInt(0, 10),
    }],
    runTime: `${chooseRandomInt(1, 3)}h ${chooseRandomInt(10, 59)}m`,
  }, {
    id: 6,
    title: chooseRandomString(UNIVERSAL_MOCK_TEXT),
    src: `https://techtoday.in.ua/wp-content/uploads/2018/01/GRUMPYCAT.jpg`,
    description: chooseRandomStrings(UNIVERSAL_MOCK_TEXT),
    director: chooseRandomString(UNIVERSAL_MOCK_NAMES),
    starring: chooseRandomString(UNIVERSAL_MOCK_NAMES),
    genre: chooseRandomString(UNIVERSAL_MOCK_GENRES),
    date: chooseRandomString(UNIVERSAL_MOCK_DATES),
    background: chooseRandomString(UNIVERSAL_MOCK_BACKGROUND),
    ratingScore: chooseRandomInt(0, 10),
    ratingCount: chooseRandomInt(1, 450),
    url: chooseRandomString(UNIVERSAL_MOCK_VIDEO),
    comments: [{
      id: 0,
      commentAuthor: chooseRandomString(UNIVERSAL_MOCK_NAMES),
      commentText: chooseRandomStrings(UNIVERSAL_MOCK_TEXT),
      commentDate: chooseRandomString(UNIVERSAL_COMMENTS_DATES),
      commentRating: chooseRandomInt(0, 10),
    },
    {
      id: 1,
      commentAuthor: chooseRandomString(UNIVERSAL_MOCK_NAMES),
      commentText: chooseRandomStrings(UNIVERSAL_MOCK_TEXT),
      commentDate: chooseRandomString(UNIVERSAL_COMMENTS_DATES),
      commentRating: chooseRandomInt(0, 10),
    },
    {
      id: 2,
      commentAuthor: chooseRandomString(UNIVERSAL_MOCK_NAMES),
      commentText: chooseRandomStrings(UNIVERSAL_MOCK_TEXT),
      commentDate: chooseRandomString(UNIVERSAL_COMMENTS_DATES),
      commentRating: chooseRandomInt(0, 10),
    }],
    runTime: `${chooseRandomInt(1, 3)}h ${chooseRandomInt(10, 59)}m`,
  }, {
    id: 7,
    title: chooseRandomString(UNIVERSAL_MOCK_TEXT),
    src: `https://cs7.pikabu.ru/post_img/2019/03/06/7/1551870696138123277.jpg`,
    description: chooseRandomStrings(UNIVERSAL_MOCK_TEXT),
    director: chooseRandomString(UNIVERSAL_MOCK_NAMES),
    starring: chooseRandomString(UNIVERSAL_MOCK_NAMES),
    genre: chooseRandomString(UNIVERSAL_MOCK_GENRES),
    date: chooseRandomString(UNIVERSAL_MOCK_DATES),
    background: chooseRandomString(UNIVERSAL_MOCK_BACKGROUND),
    ratingScore: chooseRandomInt(0, 10),
    ratingCount: chooseRandomInt(1, 450),
    url: chooseRandomString(UNIVERSAL_MOCK_VIDEO),
    comments: [{
      id: 0,
      commentAuthor: chooseRandomString(UNIVERSAL_MOCK_NAMES),
      commentText: chooseRandomStrings(UNIVERSAL_MOCK_TEXT),
      commentDate: chooseRandomString(UNIVERSAL_COMMENTS_DATES),
      commentRating: chooseRandomInt(0, 10),
    },
    {
      id: 1,
      commentAuthor: chooseRandomString(UNIVERSAL_MOCK_NAMES),
      commentText: chooseRandomStrings(UNIVERSAL_MOCK_TEXT),
      commentDate: chooseRandomString(UNIVERSAL_COMMENTS_DATES),
      commentRating: chooseRandomInt(0, 10),
    },
    {
      id: 2,
      commentAuthor: chooseRandomString(UNIVERSAL_MOCK_NAMES),
      commentText: chooseRandomStrings(UNIVERSAL_MOCK_TEXT),
      commentDate: chooseRandomString(UNIVERSAL_COMMENTS_DATES),
      commentRating: chooseRandomInt(0, 10),
    }],
    runTime: `${chooseRandomInt(1, 3)}h ${chooseRandomInt(10, 59)}m`,
  }, {
    id: 8,
    title: chooseRandomString(UNIVERSAL_MOCK_TEXT),
    src: `https://cs7.pikabu.ru/post_img/2019/03/06/7/1551870696138123277.jpg`,
    description: chooseRandomStrings(UNIVERSAL_MOCK_TEXT),
    director: chooseRandomString(UNIVERSAL_MOCK_NAMES),
    starring: chooseRandomString(UNIVERSAL_MOCK_NAMES),
    genre: chooseRandomString(UNIVERSAL_MOCK_GENRES),
    date: chooseRandomString(UNIVERSAL_MOCK_DATES),
    background: chooseRandomString(UNIVERSAL_MOCK_BACKGROUND),
    ratingScore: chooseRandomInt(0, 10),
    ratingCount: chooseRandomInt(1, 450),
    url: chooseRandomString(UNIVERSAL_MOCK_VIDEO),
    comments: [{
      id: 0,
      commentAuthor: chooseRandomString(UNIVERSAL_MOCK_NAMES),
      commentText: chooseRandomStrings(UNIVERSAL_MOCK_TEXT),
      commentDate: chooseRandomString(UNIVERSAL_COMMENTS_DATES),
      commentRating: chooseRandomInt(0, 10),
    },
    {
      id: 1,
      commentAuthor: chooseRandomString(UNIVERSAL_MOCK_NAMES),
      commentText: chooseRandomStrings(UNIVERSAL_MOCK_TEXT),
      commentDate: chooseRandomString(UNIVERSAL_COMMENTS_DATES),
      commentRating: chooseRandomInt(0, 10),
    },
    {
      id: 2,
      commentAuthor: chooseRandomString(UNIVERSAL_MOCK_NAMES),
      commentText: chooseRandomStrings(UNIVERSAL_MOCK_TEXT),
      commentDate: chooseRandomString(UNIVERSAL_COMMENTS_DATES),
      commentRating: chooseRandomInt(0, 10),
    }],
    runTime: `${chooseRandomInt(1, 3)}h ${chooseRandomInt(10, 59)}m`,
  }, {
    id: 9,
    title: chooseRandomString(UNIVERSAL_MOCK_TEXT),
    src: `https://cs7.pikabu.ru/post_img/2019/03/06/7/1551870696138123277.jpg`,
    description: chooseRandomStrings(UNIVERSAL_MOCK_TEXT),
    director: chooseRandomString(UNIVERSAL_MOCK_NAMES),
    starring: chooseRandomString(UNIVERSAL_MOCK_NAMES),
    genre: chooseRandomString(UNIVERSAL_MOCK_GENRES),
    date: chooseRandomString(UNIVERSAL_MOCK_DATES),
    background: chooseRandomString(UNIVERSAL_MOCK_BACKGROUND),
    ratingScore: chooseRandomInt(0, 10),
    ratingCount: chooseRandomInt(1, 450),
    url: chooseRandomString(UNIVERSAL_MOCK_VIDEO),
    comments: [{
      id: 0,
      commentAuthor: chooseRandomString(UNIVERSAL_MOCK_NAMES),
      commentText: chooseRandomStrings(UNIVERSAL_MOCK_TEXT),
      commentDate: chooseRandomString(UNIVERSAL_COMMENTS_DATES),
      commentRating: chooseRandomInt(0, 10),
    },
    {
      id: 1,
      commentAuthor: chooseRandomString(UNIVERSAL_MOCK_NAMES),
      commentText: chooseRandomStrings(UNIVERSAL_MOCK_TEXT),
      commentDate: chooseRandomString(UNIVERSAL_COMMENTS_DATES),
      commentRating: chooseRandomInt(0, 10),
    },
    {
      id: 2,
      commentAuthor: chooseRandomString(UNIVERSAL_MOCK_NAMES),
      commentText: chooseRandomStrings(UNIVERSAL_MOCK_TEXT),
      commentDate: chooseRandomString(UNIVERSAL_COMMENTS_DATES),
      commentRating: chooseRandomInt(0, 10),
    }],
    runTime: `${chooseRandomInt(1, 3)}h ${chooseRandomInt(10, 59)}m`,
  }
];

export const fetchFilms = ({offset = 0, limit = CountLimit.MAX_FILMS, genre}) => {
  return new Promise((resolve, _) => {
    let _films = films;
    if (genre && !(genre === `All Genres`)) {
      _films = _films.filter((film) => {
        return film.genre === genre;
      });
    }
    return resolve(_films.slice(offset, offset + limit));
  });
};

export const fetchFilm = (filmId) => {
  return new Promise((resolve, _) => {
    return resolve(films.find((film) => {
      return film.id === filmId;
    }));
  });
};

export default films;
