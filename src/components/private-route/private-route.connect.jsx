import {connect} from "react-redux";
import {getAuthState, getAuthStateInProgress} from "@reducer/user/selectors";
import PrivateRoute from "@components/private-route/private-route";

const mapStateToProps = (state) => ({
  isLogged: getAuthState(state),
  inProgress: getAuthStateInProgress(state),
});

export default connect(mapStateToProps, () => ({}))(PrivateRoute);
