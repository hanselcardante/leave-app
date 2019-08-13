import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { LoginReducer } from '../auth/reducers';
import { LeavesReducer, WizardReducer } from '../leaves/reducers';
import { NotificationReducer } from '../notifications/reducers';
import { EmployeesReducer } from '../regularEmployee/reducers';
import { SuperiorsReducer } from '../immediateSuperior/reducers';
import * as WidgetReducer from '../widgets/reducers';

const rootReducer = combineReducers({
  form: formReducer,
  auth: LoginReducer,
  wizard: WizardReducer,
  notification: NotificationReducer,
  regularEmployee: EmployeesReducer,
  leaves: LeavesReducer,
  alerts: WidgetReducer.AlertReducer,
  immediateSuperior: SuperiorsReducer,
  widget: WidgetReducer.WidgetReducer
});

export default rootReducer;
