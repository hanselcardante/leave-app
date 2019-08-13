 import { createAction } from 'redux-actions';
import {
      AUTHENTICATED,
      AUTHENTICATION_ERROR,
      UNAUTHENTICATED
 } from './constants';

export const authenticate = createAction(AUTHENTICATED);
export const authenticationError = createAction(AUTHENTICATION_ERROR);
export const unauthenticate = createAction(UNAUTHENTICATED);
