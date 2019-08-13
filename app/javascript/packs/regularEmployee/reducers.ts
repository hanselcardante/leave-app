import { EmployeesActions } from './constants';
import { Reducer } from 'redux';

export const EmployeesReducer: Reducer<any> = (state = {}, action) => {
	switch ((action as EmployeesActions).type) {
		case 'get_employee':
			return { ...state, employee: action.payload.employee };
		default:
			return state;
	}
}