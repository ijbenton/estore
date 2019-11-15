import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/header/header.actions';
import { selectCartHidden } from '../../redux/header/header.selectors';

import {
  CartIconContainer,
  ShoppingIconContainer,
  ItemCountContainer
} from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden, itemCount, dispatch, hidden }) => {
  const node = useRef();
  const handleClick = e => {
    if (node.current.contains(e.target)) {
      // inside click
      console.log('carticon handleClick fired');
      toggleCartHidden();
      return;
    }
    // outside click
    console.log('outside click of cart icon');
  };
  useEffect(() => {
    console.log('cart icon click event added');
    document.addEventListener('mousedown', handleClick);
    // return function to be called when unmounted
    return () => {
      console.log('cart icon click event removed');
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);
  return (
    <CartIconContainer ref={node}>
      <ShoppingIconContainer />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
  hidden: selectCartHidden
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
