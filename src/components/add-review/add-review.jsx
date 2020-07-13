import UserBlock from "@components/user-block/user-block.connect";
import PageHeaderLogo from "@components/page-header-logo/page-header-logo";
import {useRef} from "react";

const AddReview = (props) => {
  const filmId = props.match.params.id;
  const {statusMessage, getFilmById, addComment, inProgress, addIsSuccess} = props;
  const film = getFilmById(filmId);

  const ratingRef = useRef();
  const commentRef = useRef();

  if (film) {
    return (
      <section className="movie-card movie-card--full" style={{backgroundColor: film.backgroundColor}}>
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={film.background} alt={film.title}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <PageHeaderLogo/>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <a href={`/films/${filmId}`} className="breadcrumbs__link">{film.title}</a>
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
            onSubmit={(evt) => {
              evt.preventDefault();
              addComment(filmId, ratingRef.current.value, commentRef.current.value);
            }}>
            <div className={addIsSuccess ? `add-review__success-message` : `add-review__error-message`}>
              <p>{statusMessage}</p>
            </div>
            <div className="rating">
              <div className="rating__stars">
                <input className="rating__input" id="star-1" type="radio" name="rating" value="1" ref={ratingRef}/>
                <label className="rating__label" htmlFor="star-1">Rating 1</label>

                <input className="rating__input" id="star-2" type="radio" name="rating" value="2" ref={ratingRef}/>
                <label className="rating__label" htmlFor="star-2">Rating 2</label>

                <input className="rating__input" id="star-3" type="radio" name="rating" value="3" ref={ratingRef} defaultChecked={true}/>
                <label className="rating__label" htmlFor="star-3">Rating 3</label>

                <input className="rating__input" id="star-4" type="radio" name="rating" value="4" ref={ratingRef}/>
                <label className="rating__label" htmlFor="star-4">Rating 4</label>

                <input className="rating__input" id="star-5" type="radio" name="rating" value="5" ref={ratingRef}/>
                <label className="rating__label" htmlFor="star-5">Rating 5</label>
              </div>
            </div>

            <div className="add-review__text">
              <textarea className="add-review__textarea" name="review-text" id="review-text"
                minLength={50}
                maxLength={400}
                placeholder="Review text" ref={commentRef}/>
              <div className="add-review__submit">
                <button className="add-review__btn" type="submit">Post</button>
              </div>
            </div>

          </form>
        </div>
      </section>
    );
  }
  return <h2>Loading</h2>;
};

AddReview.propTypes = {
  addIsSuccess: PropTypes.bool.isRequired,
  inProgress: PropTypes.bool.isRequired,
  statusMessage: PropTypes.string,
  getFilmById: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired
  }).isRequired,
};

export default AddReview;
