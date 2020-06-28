const ShowMore = (props) => {
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

ShowMore.propTypes = {
  handleShowButtonClick: PropTypes.func.isRequired,
};

export default ShowMore;
