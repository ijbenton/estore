import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { addItem } from "../../redux/cart/cart.actions";

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from "./collection-item.styles";

const CollectionItem = ({
  item,
  index,
  addItem,
  history,
  match,
  routeName,
  title
}) => {
  const { name, price, imageUrl } = item;
  const openItem = (history, match, routeName, index, title) => {
    if (routeName) {
      history.push(`${match.path}/${routeName}/${index}`);
    } else {
      history.push(`/shop/${title.toLowerCase()}/${index}`);
    }
  };
  return (
    <CollectionItemContainer>
      <BackgroundImage
        className="image"
        imageUrl={imageUrl}
        onClick={() => openItem(history, match, routeName, index, title)}
      />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default withRouter(connect(null, mapDispatchToProps)(CollectionItem));
