import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import DescriptionPage from "./description.component";

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
});

const DescriptionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(DescriptionPage);

export default DescriptionPageContainer;
