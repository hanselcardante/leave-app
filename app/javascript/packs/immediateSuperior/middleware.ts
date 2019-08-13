import * as actions from './actions';
import Employee from '../models/employee';
import axios from 'axios';
import User from '../models/user';
import ImmediateSuperior from '../models/immediate_superior';
import { ImmediateSuperiorListInterface } from '../definitions/immediateSuperior';

export function getSuperior (user: User) {
  return async dispatch => {
    try {
      await axios.get('/api/employees/'.concat(user.id.toString())).then(response => {
        const employee: Employee = Employee.instance.init(response.data);
        dispatch(actions.getSuperior({ employee }))
      })
    } catch (error) {
      throw error;
    }
  };
}

export function getAllSuperiors () {
  return async dispatch => {
    try {
      await axios.get('/api/immediate_superiors/').then(response => {
        const superiors: ImmediateSuperiorListInterface = ImmediateSuperior.instance.init(response.data);
        dispatch(actions.getAllSuperiors({ superiors }))
      })
    } catch (error) {
      throw error;
    }
  };
}

export function initializeSuperiors (store) {
  store.dispatch(getAllSuperiors());
}

export function initializeSuperior (store) {
  const user: User = store.getState().auth.user;
  store.dispatch(getSuperior(user));
}