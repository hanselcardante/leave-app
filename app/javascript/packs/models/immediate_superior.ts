import { User } from './user'
import { ImmediateSuperiorListInterface } from '../definitions/immediateSuperior';

class ImmediateSuperior {
	public static instance = new ImmediateSuperior();

	public list: ImmediateSuperiorListInterface;

	public init(data: ImmediateSuperiorListInterface) {
        return this.list = data;
    }
}

export default ImmediateSuperior;