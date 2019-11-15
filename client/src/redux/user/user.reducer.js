import UserActionTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  signInError: null,
  signUpError: null,
  signOutError: null,
  signUpHidden: true
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        signInError: null
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        signOutError: null
      };
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        signUpError: action.payload
      };
    case UserActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        signOutError: action.payload
      };
    case UserActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        signInError: action.payload
      };
    case UserActionTypes.TOGGLE_SIGN_UP:
      return {
        ...state,
        signUpHidden: !state.signUpHidden
      };
    case UserActionTypes.INITIALIZE_SIGN_IN_ERROR:
      return {
        ...state,
        signInError: null
      };
    case UserActionTypes.INITIALIZE_SIGN_UP_ERROR:
      return {
        ...state,
        signUpError: null
      };
    default:
      return state;
  }
};

export default userReducer;
