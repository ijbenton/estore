import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { addItem, toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './collection-item.styles';

const CollectionItem = ({
  item,
  index,
  addItem,
  history,
  match,
  routeName,
  title,
  toggleCartHidden,
  hidden
}) => {
  const { name, price, imageUrl } = item;

  const openItem = (history, match, routeName, index, title) => {
    if (routeName) {
      history.push(`${match.path}/${routeName}/${index}`);
    } else {
      history.push(`/shop/${title.toLowerCase()}/${index}`);
    }
  };

  const addButtonClick = item => {
    addItem(item);
    toggleCartHidden();
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
      <AddButton onClick={() => addButtonClick(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CollectionItem)
);
