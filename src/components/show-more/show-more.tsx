import * as React from "react";

interface Props {
  handleShowButtonClick: () => void
}

const ShowMore = (props: Props) => {
  const {handleShowButtonClick} = props;

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button"
        onClick={handleShowButtonClick}>
        Show more
      </button>
    </div>
  );
};

export default ShowMore;
