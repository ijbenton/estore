import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import {
  CartIconContainer,
  ShoppingIconContainer,
  ItemCountContainer
} from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  const node = useRef();
  const handleClick = e => {
    if (node.current.contains(e.target)) {
      // inside click
      toggleCartHidden();
      return;
    }
    // outside click
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    // return function to be called when unmounted
    return () => {
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
  itemCount: selectCartItemsCount
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
