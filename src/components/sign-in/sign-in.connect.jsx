import {connect} from "react-redux";
import SignIn from "@components/sign-in/sign-in";
import {Operations as UserOperations} from "@reducer/user/user";
import {getAuthState, getErrorMessage} from "@reducer/user/selectors";

const mapStateToProps = (state) => ({
  errorMessage: getErrorMessage(state),
  authStatus: getAuthState(state),
});

const mapDispatchToProps = (dispatch) => ({
  requireAuthorization: (email, password) => {
    return dispatch(UserOperations.login({email, password}));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
