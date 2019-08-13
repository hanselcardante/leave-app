import * as React from 'react';
import User from '../../models/user';
import { NotificationInterface} from '../../definitions/notification';
import { NotificationList } from '../../notifications/containers/NotificationList';

import Employee from '../../models/employee';

interface NavbarProps {
  signOut: () => void;
  user?: User | Employee;
  notifications: NotificationInterface[];
}

export const Navbar = (props: NavbarProps) => {

  const { signOut, user, notifications } = props;

  if (!user) {
    return null;
  }

  return (
  <aside className="col-md-4 col-lg-3 col-xl-2" id="sidebar">
    <div className="row py-3" id="logo-container">
      <div className="col">
        <img src={window.AutomatedLeave.images.icon} className="img-fluid p-3"/>
          <p className="lead text-center">Chromedia Far East Inc.</p>
      </div>
    </div>
    <nav
      className="navbar navbar-toggleable-sm
      navbar-toggleable-md navbar-expand-xl navbar-expand-sm
      navbar-dark navbar-inverse p-0"
      id="sidenav">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
              data-target="#navbar">
        <span className="navbar-toggler-icon"/>
      </button>
      <div className="side-menu mt-3">
        <ul className="">
          <li className="active nav-item"><a className="nav-link">Dashboard</a></li>
          <li className="nav-item"><a className="nav-link">My Leaves</a></li>
          <li className="nav-item"><a onClick={signOut} className="nav-link">Logout</a></li>
        </ul>
      </div>
    </nav>
  </aside>
  )
};