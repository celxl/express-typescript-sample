import { User } from "../models/user.model";

export  class UserService {
    static create(userPayload: User){
        const user: User = new User(userPayload);
        return user;
    }
}