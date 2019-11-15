import HeaderActionTypes from './header.types';

const INITIAL_STATE = {
  cartHidden: true
};

const headerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HeaderActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        cartHidden: !state.cartHidden
      };
    default:
      return state;
  }
};

export default headerReducer;
