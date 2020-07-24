import * as React from "react";
import {Redirect, Route} from "react-router-dom";
import {ReactElement} from "react";
import {RouteProps} from "react-router";

interface Props extends RouteProps {
  isLogged: boolean,
  inProgress: boolean,
}

const PrivateRoute = (props: Props): ReactElement => {
  const {isLogged, inProgress} = props;
  if (inProgress) {
    return <></>;
  }
  if (isLogged) {
    return <Route {...props}/>;
  }
  return <Redirect to="/login"/>;
};

export default PrivateRoute;
