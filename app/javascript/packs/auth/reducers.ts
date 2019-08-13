import { Reducer } from 'redux';
import { LoginActions, SignupActions, SignupState } from './constants';

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.

import { Action, ActionFunctionAny, handleActions } from 'redux-actions';
import * as actions from './actions';


// Type-safe initialState!
export const initialState: SignupState = {
  signedUp: false
};

// Unfortunately, typing of the `action` parameter seems to be broken at the moment.
// This should be fixed in Redux 4.x, but for now, just augment your types.

export const signReducer: Reducer<SignupState> = (state: SignupState = initialState, action) => {
  // We'll augment the action type on the switch case to make sure we have
  // all the cases handled.
  switch ((action as SignupActions).type) {
    case '@@auth/SIGNUP_SUCCESS':
      return { ...state, signedUp: true };
    default:
      return state;
  }
};

export interface ApplicationState {
  sign: SignupState;
}

export const LoginReducer: Reducer<any> = (state= {}, action) => {
  switch ((action as LoginActions).type) {
    case 'authenticated_user':
      return { ...state, error: null, authenticated: true, user: action.payload.user };
    case 'unauthenticated_user':
      return null;
    case 'authentication_error':
      return { ...state, error: 'Invalid email or password' , context: '' };
    default:
      return state;
  }
};
