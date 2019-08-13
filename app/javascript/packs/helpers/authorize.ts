import AppRoutes from '../routes';

export default function authorizeUser (user, role) {
  let ret: boolean = false;
  if (!user || user.role !== role) {
    window.location.href = AppRoutes.rootUrl;
  } else {
    ret = true;
  }
  return ret;
};