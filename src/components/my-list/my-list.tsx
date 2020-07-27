import * as React from "react";
import PageHeaderLogo from "@components/page-header-logo/page-header-logo";
import FilmsList from "@components/films-list/films-list";
import UserBlock from "@components/user-block/user-block.connect";
import {Film} from "@api/adapter";

interface Props {
  loadFavoriteFilms: () => void
  films: Film[]
}

class MyList extends React.PureComponent<Props> {

  componentDidMount() {
    this.props.loadFavoriteFilms();
  }

  render() {
    const {films} = this.props;
    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <PageHeaderLogo isLight={false}/>
          <h1 className="page-title user-page__title">My list</h1>
          <UserBlock/>
        </header>
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <FilmsList films={films}/>
        </section>
        <footer className="page-footer">
          <PageHeaderLogo isLight={true}/>
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default MyList;
