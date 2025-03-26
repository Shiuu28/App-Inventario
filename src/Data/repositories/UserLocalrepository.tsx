import { User } from "../../Domain/entity/User";
import { UserLocalRepository } from "../../Domain/repositories/UserLocalRepository";
import { LocalStorage } from "../sources/remote/LocalStorage";



export class UserLocalRepositoryImp implements UserLocalRepository {

    async save(user: User): Promise<void> {
        const { save } = LocalStorage();
        await save('user', JSON.stringify(user));
    }


    async getUser(): Promise<User> {
        const { getItem } = LocalStorage();
        const data = await getItem('user');
        const user: User = JSON.parse(data as any);
        return user;
    }


    async remove(): Promise<void> {
        const { remove } = LocalStorage();
        await remove('user');
    }

} 