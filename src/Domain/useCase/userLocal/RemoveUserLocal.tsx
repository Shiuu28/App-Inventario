import { UserLocalRepositoryImp } from '../../../Data/repositories/UserLocalrepository';
import { User } from '../../entity/User';


const { remove } = new UserLocalRepositoryImp();

export const RemoveUserLocalUseCase = async () => {
    return await remove();
} 