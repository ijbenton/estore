import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);

export const selectSignUpHidden = createSelector(
  [selectUser],
  user => user.signUpHidden
);

export const selectSignInError = createSelector(
  [selectUser],
  user => user.signInError
);
export const selectSignUpError = createSelector(
  [selectUser],
  user => user.signUpError
);
