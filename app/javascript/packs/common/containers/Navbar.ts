import { connect } from 'react-redux';
import { didSignOut } from '../../auth/middleware';
import { Navbar as NavbarComponent } from '../../common/components/Navbar';
import User from '../../models/user';
import { NotificationInterface} from '../../definitions/notification';
import AppRoutes from '../../routes';

interface NavbarProps {
  signOut: () => void;
  user: User|null;
  notifications: NotificationInterface[];
}
interface Props {
  user: User;
  notifications: NotificationInterface[];
}

const mapStateToProps = (state, props: Props) => {
  return { user: props.user, notifications: props.notifications };
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => {
      dispatch(didSignOut(() => {
        window.location.href = AppRoutes.rootUrl
      }));
    }
  };
};

export const Navbar: any = connect(mapStateToProps, mapDispatchToProps)(NavbarComponent as any);
