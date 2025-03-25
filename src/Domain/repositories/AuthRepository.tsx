import { ResponseApiDelivery } from "../../Data/sources/remote/models/ResponseApiDelivery";
import { User } from "../entity/User";

export interface AuthRepository {
    register(user: User): Promise<ResponseApiDelivery>;

} 