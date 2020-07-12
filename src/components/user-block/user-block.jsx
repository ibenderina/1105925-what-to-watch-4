import {UserAccount} from "@api/adapter";

const UserBlock = (props) => {
  const {userStatus, userAccount} = props;
  if (userStatus) {
    return (
      <div className="user-block">
        <div className="user-block__avatar">
          <img src={`https://htmlacademy-react-3.appspot.com` + userAccount.avatarUrl} alt="User avatar" width="63" height="63"/>
        </div>
      </div>
    );
  }
  return (
    <div className="user-block">
      <a href="/login" className="user-block__link">Sign in</a>
    </div>
  );
};


UserBlock.propTypes = {
  userStatus: PropTypes.bool.isRequired,
  userAccount: PropTypes.instanceOf(UserAccount).isRequired,
};

export default UserBlock;
