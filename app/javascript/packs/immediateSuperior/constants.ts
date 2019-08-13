import { Action } from 'redux';

export const GET_SUPERIOR = 'get_superior';

export interface GetSuperior extends Action {
  type: 'get_superior';
}

export const GET_ALL_SUPERIORS = 'get_all_superiors';

export interface GetAllSuperiors extends Action {
  type: 'get_all_superiors';
}

export type SuperiorsActions = GetSuperior | GetAllSuperiors;