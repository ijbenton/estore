import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/header/header.actions';
import { selectCartHidden } from '../../redux/header/header.selectors';

import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer
} from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch, hidden }) => {
  const node = useRef();
  const handleClick = e => {
    if (node.current.contains(e.target)) {
      // inside click
      console.log('dropdown handleClick fired');
      return;
    }
    // outside click
    console.log('outside click of cart dropdown');
    dispatch(toggleCartHidden());
  };

  useEffect(() => {
    // add when mounted
    console.log('cart dropdown click event added');
    document.addEventListener('mousedown', handleClick);
    // return function to be called when unmounted
    return () => {
      console.log('cart dropdown click event removed');
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);
  return (
    <CartDropdownContainer ref={node}>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropdownButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  hidden: selectCartHidden
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
