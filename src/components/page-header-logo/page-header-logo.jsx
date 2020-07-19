const PageHeaderLogo = ({isLight = false}) => {
  return (
    <div className="logo">
      <a href="/" className={`logo__link ` + (isLight ? `logo__link--light` : ``)}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </div>
  );
};

PageHeaderLogo.propTypes = {
  isLight: PropTypes.bool,
};

export default PageHeaderLogo;
