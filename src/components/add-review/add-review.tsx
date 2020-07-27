import * as React from "react";
import {Redirect} from "react-router-dom";
import {PageRoute} from "@consts";
import {Film} from "@api/adapter";
import UserBlock from "@components/user-block/user-block.connect";
import PageHeaderLogo from "@components/page-header-logo/page-header-logo";


interface Props {
  addIsSuccess: boolean,
  inProgress: boolean,
  statusMessage: string,
  getFilmById: (filmId: string) => Film,
  addComment: (filmId: string, rating: number, comment: string) => void,
  match: {
    params: {
      id: string,
    }
  },
  rating: number,
  comment: string,
  errorMessage: string,
  onInput: (evt: React.FormEvent<HTMLFormElement>) => void,
  onSubmit: (evt: React.FormEvent<HTMLFormElement>) => boolean,
}

const AddReview = (props: Props): React.ReactElement => {
  const filmId = props.match.params.id;
  const {statusMessage, getFilmById, inProgress, addIsSuccess, addComment,
    rating, comment, onInput, onSubmit, errorMessage} = props;
  const film = getFilmById(filmId);

  if (addIsSuccess) {
    return <Redirect to={`${PageRoute.FILMS}/${filmId}`}/>;
  }

  if (film) {
    return (
      <section className="movie-card movie-card--full" style={{backgroundColor: film.backgroundColor}}>
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={film.background} alt={film.title}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <PageHeaderLogo isLight={false}/>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <a href={`${PageRoute.FILMS}/${filmId}`} className="breadcrumbs__link">{film.title}</a>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <UserBlock/>
          </header>

          <div className="movie-card__poster movie-card__poster--small">
            <img src={film.src}
              alt={film.title + ` poster`}
              width="218"
              height="327"/>
          </div>
        </div>

        <div className="add-review">
          <form action="#" className="add-review__form"
            style={inProgress ? {pointerEvents: `none`, opacity: 0.6} : {}}
            onChange={onInput}
            onKeyPress={onInput}
            onSubmit={(evt: React.FormEvent<HTMLFormElement>): void => {
              if (onSubmit(evt)) {
                addComment(filmId, rating, comment);
              }
            }}>
            <div className="add-review__error-message">
              <p>{statusMessage || errorMessage}</p>
            </div>
            <div className="rating">
              <div className="rating__stars">
                <input className="rating__input" id="star-0" type="radio" name="rating" value="0"
                  autoComplete="off"
                  defaultChecked={true}/>

                <input className="rating__input" id="star-1" type="radio" name="rating" value="1"
                  autoComplete="off"/>
                <label className="rating__label" htmlFor="star-1">Rating 1</label>

                <input className="rating__input" id="star-2" type="radio" name="rating" value="2"
                  autoComplete="off"/>
                <label className="rating__label" htmlFor="star-2">Rating 2</label>

                <input className="rating__input" id="star-3" type="radio" name="rating" value="3"
                  autoComplete="off"/>
                <label className="rating__label" htmlFor="star-3">Rating 3</label>

                <input className="rating__input" id="star-4" type="radio" name="rating" value="4"
                  autoComplete="off"/>
                <label className="rating__label" htmlFor="star-4">Rating 4</label>

                <input className="rating__input" id="star-5" type="radio" name="rating" value="5"
                  autoComplete="off"/>
                <label className="rating__label" htmlFor="star-5">Rating 5</label>
              </div>
            </div>

            <div className="add-review__text">
              <textarea className="add-review__textarea" name="review-text" id="review-text"
                placeholder="Review text"/>
              <div className="add-review__submit">
                <button className="add-review__btn" type="submit">Post</button>
              </div>
            </div>

          </form>
        </div>
      </section>
    );
  }
  return <></>;
};

export default AddReview;
