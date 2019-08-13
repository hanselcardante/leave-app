export interface UserRolesInterface {
    role_type: string;
}

export interface UsersInterface {
  id?: number;
  first_name?: string;
  last_name?: string;
  civil_status?: string;
  sex?: string;
  email: string;
  password?: string;
  employment_date?: Date;
  authentication_token?: string;
  user_role_type?: UserRolesInterface;
  notificationCount?: number;
}

export interface UserTypesInterface {
    regular_employee: string;
    superior: string;
    admin: string;
}
