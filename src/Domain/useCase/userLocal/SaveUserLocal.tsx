import { UserLocalRepositoryImp } from '../../../Data/repositories/UserLocalrepository';
import { User } from '../../../Domain/entity/User';


const { save } = new UserLocalRepositoryImp();


export const SaveUserLocalUseCase = async (user: User) => {
    return await save(user);

} 