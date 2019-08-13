import { createSelector } from 'reselect';
import { SignupState } from './constants';

// Derived data selectors = using reselect
const userSelector = (state: SignupState) => state.signedUp;

export const selectUser = createSelector(
  userSelector,
  signedUp => signedUp
);

export function isUserAuthentic(check) {
  if (check) {
    return true;
  }
}
