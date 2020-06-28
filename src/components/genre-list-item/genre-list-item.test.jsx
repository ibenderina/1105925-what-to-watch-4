import GenreListItem from "@components/genre-list-item/genre-list-item";

it(`Should GenreListItem render correctly`, () => {
  let tree;

  window.act(() => {
    tree = window.create(<GenreListItem
      genre={`Drama`}
      isCurrent={true}
      onClick={() => {}}
    />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
