import { GET_SUPERIOR, GET_ALL_SUPERIORS } from './constants';
import { createAction } from 'redux-actions';

export const getSuperior = createAction(GET_SUPERIOR);
export const getAllSuperiors = createAction(GET_ALL_SUPERIORS);