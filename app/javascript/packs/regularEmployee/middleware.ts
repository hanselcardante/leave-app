import * as actions from './actions';
import Employee from '../models/employee';
import axios from 'axios';
import User from '../models/user';

export function getEmployee (user: User) {
	return async dispatch => {
		try {
			await axios.get('/api/employees/'.concat(user.id.toString())).then(response => {
				const employee: Employee = Employee.instance.init(response.data);
				dispatch(actions.getEmployee({ employee }))
			})
		} catch (error) {
			throw error;
		}
	};
}

export function initializeEmployee (store) {
	const user: User = store.getState().auth.user;
	store.dispatch(getEmployee(user));
}