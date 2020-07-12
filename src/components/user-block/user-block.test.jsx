import configureStore from "redux-mock-store";
import NameSpace from "@reducer/name-space";
import {testUserStore} from "@utils/test-data";
import {Provider} from "react-redux";
import UserBlock from "@components/user-block/user-block.connect";

it(`Should UserBlock render correctly`, () => {
  const mockStore = configureStore([]);
  const store = mockStore({
    [NameSpace.USER]: testUserStore
  });
  let tree;

  window.act(() => {
    tree = window.create(
        <Provider store={store}>
          <UserBlock/>
        </Provider>
    );
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
