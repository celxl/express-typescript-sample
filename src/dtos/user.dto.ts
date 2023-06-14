import { Expose } from 'class-transformer';
import { User } from '../models/user.model';
import { IsEmail, IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { Trim } from 'class-sanitizer';
import { PaginationMeta } from './pagination-metadata.dto';

/**
 * @swagger
 *   components:
 *     schemas:
 *       CreateUserDTO:
 *         type: object
 *         description: Create user payload
 *         required:
 *           - firstName
 *           - lastName
 *           - email
 *           - password
 *         properties:
 *           firstName:
 *             type: string
 *           lastName:
 *             type: string
 *           email:
 *             type: string
 *             unique: true
 *           password:
 *             type: string
 */
export class CreateUserDTO implements Partial<Omit<User, "id">> {
    @IsString()
    @MinLength(3)
    @MaxLength(25)
    @Trim()
    @Expose()
    firstName!: string;

    @IsString()
    @MinLength(3)
    @MaxLength(25)
    @Trim()
    @Expose()
    lastName!: string;

    @IsString()
    @IsEmail()
    @Trim()
    @Expose()
    email!: string;

    @IsString()
    @MinLength(8)
    @MaxLength(25)
    @Matches(/(?=.*[a-z])(?=.*[A-Z])/)
    @Expose()
    password!: string
}


/**
 * @swagger
 *   components:
 *     schemas:
 *       UpdateUserDTO:
 *         type: object
 *         description: Update user payload
 *         properties:
 *           firstName:
 *             type: string
 *           lastName:
 *             type: string
 *           email:
 *             type: string
 *             unique: true
 */
export class UpdateUserDTO implements Partial<Omit<CreateUserDTO, "password">> {
    @Expose()
    firstName!: string;

    @Expose()
    lastName!: string;

    @Expose()
    email!: string;
}

/**
 * @swagger
 *   components:
 *     schemas:
 *       UpdatePasswordDTO:
 *         type: object
 *         description: change user's password payload
 *         required:
 *           - password
 *         properties:
 *           password:
 *             type: string
 */
export class UpdatePasswordDTO implements Pick<CreateUserDTO, "password"> {
    @Expose()
    password!: string;
}

/**
 * @swagger
 *   components:
 *     schemas:
 *       UserDTO:
 *         type: object
 *         description: User response 
 *         required:
 *           - id
 *           - firstName
 *           - lastName
 *           - email
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
 */
export class UserDTO implements Partial<Omit<User, "password">> {
    @Expose()
    id!: number

    @Expose()
    firstName!: string;

    @Expose()
    lastName!: string;

    @Expose()
    email!: string;

}

/**
 * @swagger
 *   components:
 *     schemas:
 *       UserListDTO:
 *         type: object
 *         properties:
 *           result:
 *             type: array
 *             items:
 *               $ref: '#/components/schemas/UserDTO'  
 *           metaData:
 *             $ref: '#/components/schemas/PaginationMeta'
 */
export class UserListDTO {
    @Expose()
    result!: UserDTO[];

    @Expose()
    metaData!: PaginationMeta;
}



