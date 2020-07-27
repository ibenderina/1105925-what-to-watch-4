import * as React from "react";
import {CommentLength, ErrorMessages, RatingLevel, Tab} from "@consts";
import {extend} from "@utils/utils";

interface State {
  rating: number
  comment: string
  errorMessage: string
}

const withErrorMessage = (Component) => {
  type P = React.ComponentProps<typeof Component>;

  class WithErrorMessage extends React.PureComponent<P, State> {
    state = {
      rating: 0,
      comment: '',
      errorMessage: null,
    };

    private onSubmit = (evt: React.FormEvent<HTMLFormElement>): boolean => {
      evt.preventDefault();

      const state = this.state;
      const errorMessage = ((): string => {
        if (state.rating < RatingLevel.MIN || state.rating > RatingLevel.MAX) {
          return ErrorMessages.INVALID_RATING;
        }
        if (state.comment.length < CommentLength.MIN) {
          return ErrorMessages.TOO_SHORT_COMMENT;
        }
        if (state.comment.length > CommentLength.MAX) {
          return ErrorMessages.TOO_LONG_COMMENT;
        }
        return ``;
      })();

      this.setState({
          errorMessage
      });

      return errorMessage.length === 0;
    };

    private onInput = (evt: React.FormEvent<HTMLFormElement>): void => {
      const newState = extend<State, Object>(this.state, ((element: HTMLInputElement): Object => {
        switch (element.type) {
          case `radio`:
            return {rating: parseInt(element.value, 10)};
          case `textarea`:
            return {comment: element.value};
        }
        return {};
      })(evt.target as HTMLInputElement));
      this.setState(newState);
    };

    render = (): React.ReactElement => {
      return (
        <Component
          rating={this.state.rating}
          comment={this.state.comment}
          errorMessage={this.state.errorMessage}
          onSubmit={this.onSubmit}
          onInput={this.onInput}
          {...this.props}
        />
      );
    }
  }

  return WithErrorMessage;
};


export default withErrorMessage;
