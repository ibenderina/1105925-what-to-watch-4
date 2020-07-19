import {connect} from "react-redux";
import {getPromoFilm} from "@reducer/films/selectors";
import PromoFilm from "@components/promo-film/promo-film";

const mapStateToProps = (state) => ({
  film: getPromoFilm(state),
});

export default connect(mapStateToProps, () => ({}))(PromoFilm);
