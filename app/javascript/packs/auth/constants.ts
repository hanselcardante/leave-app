import { createBrowserHistory, History } from 'history';
import { Action } from 'redux';
import User from '../models/user';

export interface SignupState {
  signedUp: boolean;
}

// Feel free to include more types for good measure.

// Declare our action types using our interface. For a better debugging experience,
// I use the `@@context/ACTION_TYPE` convention for naming action types.

export interface SignupSuccessAction extends Action {
  type: '@@auth/SIGNUP_SUCCESS';
}

export interface SignupErrorAction extends Action {
  type: '@@auth/SIGNUP_ERROR';
  payload: {
    message: string;
  };
}

export interface UnauthenticatedAction extends Action {
  type: '@@auth/UNAUTHENTICATED';
}
// Down here, we'll create a discriminated union
// type of all actions which will be used for our reducer.
export type SignupActions =
    SignupSuccessAction
    | SignupErrorAction
    |UnauthenticatedAction;

export const history: History = createBrowserHistory();

export interface Authenticated extends Action {
  type: 'authenticated_user';
  payload: User;
}

export interface Unauthenticated extends Action {
  type: 'unauthenticated_user';
}

export interface AuthenticationError extends Action {
  type: 'authentication_error';
}

export const AUTHENTICATED = 'authenticated_user';
export const UNAUTHENTICATED = 'unauthenticated_user';
export const AUTHENTICATION_ERROR = 'authentication_error';

export type LoginActions =
    Authenticated
    | Unauthenticated
    | AuthenticationError;
