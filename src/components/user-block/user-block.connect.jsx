import {connect} from "react-redux";
import {getAuthState, getUserAccount} from "@reducer/user/selectors";
import UserBlock from "@components/user-block/user-block";

const mapStateToProps = (state) => ({
  userStatus: getAuthState(state),
  userAccount: getUserAccount(state),
});


export default connect(mapStateToProps, () => ({}))(UserBlock);
