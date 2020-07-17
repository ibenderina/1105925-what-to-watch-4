import {connect} from "react-redux";
import {getAuthState, getUserAccount, getAuthStateInProgress} from "@reducer/user/selectors";
import UserBlock from "@components/user-block/user-block";

const mapStateToProps = (state) => ({
  isLogged: getAuthState(state),
  inProgress: getAuthStateInProgress(state),
  userAccount: getUserAccount(state),
});


export default connect(mapStateToProps, () => ({}))(UserBlock);
