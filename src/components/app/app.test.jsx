import App from "@components/app/app";
import films from "../../mocks/films";

it(`Render App`, () => {
  let tree;
  window.act(() => {
    tree = window.create(<App
      filmsList={films}
    />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
