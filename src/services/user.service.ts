import { NotFoundError } from "../commons/exceptions";
import { CreateUserDTO, UpdateUserDTO, UserListDTO } from "../dtos/user.dto";
import { User } from "../models/user.model";



export  class UserService {
    
    static create(userPayload: CreateUserDTO){
        const user: User = new User(userPayload);

        return User.save(user);
    }

    static update(id: number, userPayload: UpdateUserDTO): {new: User, old: User} {
        const result =  User.update(id, userPayload);
        
        if(!result) throw new NotFoundError('user not found');

        return result;
    }

    static get(userId: number) {
        const result = User.findOneById(userId);
        
        if(!result) throw new NotFoundError('user not found');

        return result;
    }

    static list(offset: number =1 , limit: number = 10): UserListDTO {
        const result: UserListDTO = {
            result: User.find(),
            metaData: {
                limit,
                offset,
                total: User.count()
            }
        } 
        return result;
    }
}