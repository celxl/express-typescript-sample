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
        this.id = properties.id || 1;
        this.firstName = properties.firstName;
        this.email = properties.email;
        this.firstName = properties.firstName;
        this.lastName = properties.lastName;
        this.password = properties.password;
    }
}