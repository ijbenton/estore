import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionItem } from '../../redux/shop/shop.selectors';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import {
  clearItemFromCart,
  addItem,
  removeItem
} from '../../redux/cart/cart.actions';

import {
  DescriptionPageContainer,
  ItemNameContainer,
  ItemPriceContainer,
  ItemImageContainer,
  AddButton,
  LineBreak,
  ItemDescriptionContainer
} from './description.styles';

const DescriptionPage = ({ collectionItem, addItem }) => {
  const { name, price, imageUrl } = collectionItem;
  return (
    <DescriptionPageContainer>
      <ItemImageContainer>
        <img src={imageUrl} alt={name} />
      </ItemImageContainer>
      <ItemDescriptionContainer>
        <ItemNameContainer>{name}</ItemNameContainer>
        <LineBreak />
        <ItemPriceContainer>{'$ ' + price}</ItemPriceContainer>
        <LineBreak />
        <AddButton onClick={() => addItem(collectionItem)}>
          Add to cart
        </AddButton>
      </ItemDescriptionContainer>
    </DescriptionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) =>
  createStructuredSelector({
    collectionItem: selectCollectionItem(
      ownProps.match.params.collectionId,
      ownProps.match.params.id
    ),
    cartItems: selectCartItems
  });

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(DescriptionPage);
