import User from '../../models/user';
import { connect } from 'react-redux';
import * as actions from '../middleware';
import { NotificationList as NotificationListComponent } from '../components/NotificationList';
import { NotificationInterface } from '../../definitions/notification';
import AppRoutes from '../../routes';

const mapStateToProps = state => {
  return {
  	user: state.auth ? state.auth.user : null,
    notifications: state.notification.notificationList || null
	};
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    markAsRead: (id: number) => () => dispatch(actions.markAsRead(id))
  };
};

export const NotificationList: any = connect(mapStateToProps, mapDispatchToProps)(NotificationListComponent as any);