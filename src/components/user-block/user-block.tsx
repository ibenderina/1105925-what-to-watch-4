import * as React from "react";
import {UserAccount} from "@api/adapter";
import {Link} from "react-router-dom";

interface Props {
  isLogged: boolean
  inProgress: boolean
  userAccount: UserAccount
}

const UserBlock = (props: Props): React.ReactElement => {
  const {isLogged, inProgress, userAccount} = props;
  if (!inProgress) {
    if (isLogged) {
      return (
        <div className="user-block">
          <div className="user-block__avatar">
            <Link to="/mylist">
              <img src={`https://htmlacademy-react-3.appspot.com${userAccount.avatarUrl}`}
                alt="User avatar" width="63" height="63"/>
            </Link>
          </div>
        </div>
      );
    }

    return (
      <div className="user-block">
        <a href="/login" className="user-block__link">Sign in</a>
      </div>
    );
  }
  return <></>;
};

export default UserBlock;
