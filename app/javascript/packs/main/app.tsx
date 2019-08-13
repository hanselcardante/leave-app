import  * as React  from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import * as actions from '../auth/actions';
import { default as Login } from '../auth/containers/Login';
import Signup from '../auth/containers/Signup';
import ImmediateSuperior from '../immediateSuperior/containers/ImmediateSuperior';
import User from '../models/user';
import RegularEmployee from '../regularEmployee/containers/RegularEmployee';
import reducers from './reducers';
import { initializeLeaves, initializeRequests } from '../leaves/middleware'
import { Routes, Pages } from '../routes';
import authorizeUser from '../helpers/authorize'
import { initializeEmployee } from '../regularEmployee/middleware'
import { initializeSuperior, initializeSuperiors } from '../immediateSuperior/middleware'
import * as notifMid from '../notifications/middleware';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const store = createStoreWithMiddleware(reducers);

if (window.AutomatedLeave.user) {
  const user: User = User.instance.init(window.AutomatedLeave.user);
  store.dispatch(actions.authenticate({
    user
  }));
}

const onEnterPage = props => {

  const user: User  = store.getState().auth.user;

  switch (props.location.pathname) {
    case Routes.superior(Pages.dashboard):
      if (!authorizeUser(user, 'superior')) {
        return null;
      }
      notifMid.getNotifications(store, user);
      initializeLeaves(store);
      initializeSuperior(store);
      initializeSuperiors(store);
      initializeRequests(store);
      return <ImmediateSuperior/>;
    case Routes.employee(Pages.dashboard):
      if (!authorizeUser(user, 'regular_employee')) {
        return null;
      }
      notifMid.getNotifications(store, user);
      initializeLeaves(store);
      initializeSuperiors(store);
      initializeEmployee(store);
      return <RegularEmployee/>;
    default: return <div>Page not found!</div>;
  }
}

render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path={Routes.employee(Pages.dashboard)} render={onEnterPage}/>
        <Route path={Routes.superior(Pages.dashboard)} render={onEnterPage}/>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
