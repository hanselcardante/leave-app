import { Action } from 'redux';

export const GET_EMPLOYEE = 'get_employee';

export interface GetEmployee extends Action {
	type: 'get_employee';
}

export type EmployeesActions = GetEmployee;