import { UsersInterface } from './user'


export interface ImmediateSuperiorListInterface {
  [index: number]: {
    id: ImmediateSuperiorInterface['id'];
    first_name: ImmediateSuperiorInterface['first_name'];
    last_name: ImmediateSuperiorInterface['last_name'];
    };
}
export interface ImmediateSuperiorInterface extends UsersInterface{  
	id: number;
}