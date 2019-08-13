import { SuperiorsActions } from './constants';
import { Reducer } from 'redux';

// TODO: REFACTOR use key mapping instead of using switch statement
export const SuperiorsReducer: Reducer<any> = (state = {}, action) => {
  switch ((action as SuperiorsActions).type) {
    case 'get_superior':
      return { ...state, employee: action.payload.employee };
    case 'get_all_superiors':
      return { ...state, superiors: action.payload.superiors };
    default:
      return state;
  }
}