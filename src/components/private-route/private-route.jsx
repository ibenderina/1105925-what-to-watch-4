import {Redirect, Route} from "react-router-dom";

const PrivateRoute = (props) => {
  const {isLogged, inProgress} = props;
  if (inProgress) {
    return ``;
  }
  if (isLogged) {
    return <Route {...props}/>;
  }
  return <Redirect to="/login"/>;
};

PrivateRoute.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  inProgress: PropTypes.bool.isRequired
};

export default PrivateRoute;
