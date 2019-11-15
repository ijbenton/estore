import { createSelector } from 'reselect';

const selectHeader = state => state.header;

export const selectCartHidden = createSelector(
  [selectHeader],
  header => header.cartHidden
);
