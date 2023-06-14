/**
 * @description This is a dummy User Model to show swagger definition
 */

interface UserProperties  {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string

}

const users: User[] = [];


/**
 * @swagger
 *   components:
 *     schemas:
 *       User:
 *         type: object
 *         description: User Entity
 *         required:
 *           - id
 *           - firstName
 *           - lastName
 *           - email
 *           - password
 *         properties:
 *           id:
 *             type: number
 *             read only: true
 *           firstName:
 *             type: string
 *           lastName:
 *             type: string
 *           email:
 *             type: string
 *             unique: true
 *           password:
 *             type: string
 *             write only: true
 */
export class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string
    
    constructor(properties: UserProperties){
        this.id = this.getId();
        this.firstName = properties.firstName;
        this.email = properties.email;
        this.firstName = properties.firstName;
        this.lastName = properties.lastName;
        this.password = properties.password;
    }

    /**
     * Model Mock method to get a user by ID
     * @param id 
     * @returns 
     */
    static findOneById(id: number): User {
        return users.find(u => u.id == id) as User;
    }

    /**
     * Model Mock method to list users paginated
     * @param id 
     * @returns 
     */
    static find(): User[]{
        return users;
    }

    /**
     * Model Mock method to count users 
     * @returns 
     */
    static count(): number {
        return users.length;
    }

    /**
     * Model Mock method to save user 
     * @returns 
     */
    static save(user: User): User{
        users.push(user);
        return user;
    }

    /**
     * Model Mock method to update user 
     * @returns 
     */
    static update(id:number, user: Partial<User>): {new: User, old: User}{
        const 
            newUser = this.findOneById(id),
            oldUser = (newUser)? {...user} : null;
        
        if(!newUser) return null as unknown as any;
        
        delete user.id;
        
        Object.assign(newUser, user);
        
        return {new: newUser, old: oldUser as User};
    }

    private getId() {
        if(users.length == 0 ) return 1;
        return [...users].sort((first, second) => {
            if(first.id > second.id) return -1;
            if(first.id < second.id) return 1;
            return 0;
        })[0].id+1;
    }
}