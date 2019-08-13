import { UserTypesInterface } from './definitions/user';

interface Pages {
  dashboard: string;
}

const Users: UserTypesInterface = {
  ['regular_employee']: '/employee',
  ['superior']: '/superior',
  ['admin']: '/admin'
};

export const Pages: Pages = {
  dashboard: 'dashboard'
};

export const Routes = {
  employee: (page: string): string => {
    const url = [Users.regular_employee, page].join('/');
    return url;
  },
  superior: (page: string): string => {
    return '/superior/dashboard';
  }
}

export default class AppRoutes {

  public static rootUrl = '/';

  public getDashboard(user: string): string {
    return [Users[user], Pages.dashboard].join('/');
  }

  // public getPermission(pathname: string): string {
  //   return [pathname, 'permission'].join('/');
  // }
}
