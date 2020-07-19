import FilmInfoReviews from "@components/film-info-reviews/film-info-reviews.connect";
import {testComments, testFilmStore} from "@utils/test-data";
import configureStore from "redux-mock-store";
import NameSpace from "@reducer/name-space";
import {Provider} from "react-redux";

it(`Should FilmInfoReviews render correctly`, () => {
  const mockStore = configureStore([]);
  const store = mockStore({
    [NameSpace.FILMS]: testFilmStore,
    [NameSpace.COMMENTS]: {
      1: testComments
    }
  });

  let tree;

  window.act(() => {
    tree = window.create(
        <Provider store={store}>
          <FilmInfoReviews filmId={`1`}/>
        </Provider>
    );
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
