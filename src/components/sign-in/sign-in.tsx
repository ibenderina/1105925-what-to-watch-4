import * as React from "react";
import {Redirect} from "react-router-dom";
import PageHeaderLogo from "@components/page-header-logo/page-header-logo";

interface Props {
  authStatus: boolean
  inProgress: boolean
  errorMessage: string
  requireAuthorization: (email: string, password: string) => void
}

class SignIn extends React.Component<Props> {
  private emailRef = React.createRef<HTMLInputElement>();
  private passwordRef = React.createRef<HTMLInputElement>();

  onSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    this.props.requireAuthorization(this.emailRef.current.value, this.passwordRef.current.value);
  };

  render() {
    const {authStatus, errorMessage, inProgress} = this.props;
    if (inProgress) {
      return <></>;
    }
    if (authStatus) {
      return <Redirect to='/'/>;
    }
    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <PageHeaderLogo isLight={false}/>
          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <form action="#" className="sign-in__form" onSubmit={this.onSubmit} noValidate={true}>
            <div className="sign-in__message">
              <p>{errorMessage}</p>
            </div>
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input
                  ref={this.emailRef}
                  autoComplete="username"
                  className="sign-in__input"
                  type="email"
                  placeholder="Email address" name="user-email"
                  id="user-email"
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-email" defaultValue={``}>Email address</label>
              </div>
              <div className="sign-in__field">
                <input
                  autoComplete="current-password"
                  ref={this.passwordRef}
                  className="sign-in__input"
                  type="password"
                  placeholder="Password"
                  name="user-password"
                  id="user-password"
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">Sign in</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
