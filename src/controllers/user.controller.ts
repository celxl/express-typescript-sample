/**
 * Example of controller you can remove this file
 */
import { Router, Request, Response, NextFunction } from "express";
import { UserService } from "../services/user.service";
import { CreateUserDTO, UpdatePasswordDTO, UpdateUserDTO, UserDTO, UserListDTO } from "../dtos/user.dto";
import { classToPlain, plainToClass, plainToInstance } from "class-transformer";
import { dtoValidationMiddleware } from "../middlewares/dto-validation.middleware";
import { PaginationMeta } from "../dtos/pagination-metadata.dto";

const
    router = Router(),
    baseUrl = '/v1/users';

/**
 * User API tag
 * @swagger
 * tags:
 *   name: USER
 *   description: User related APIs
 */

/**
 * @swagger
 * /api/v1/users:
 *   get:
 *     summary: List/Search users
 *     tags: [USER]
 *     parameters:
 *       - name: offset
 *         in: query
 *         schema:
 *           type: number
 *           default: 1
 *       - name: limit
 *         in: query
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Success - Return user's list
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserListDTO'
 *       400:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BadRequestError'
 *       401:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UnauthorizedError'
 *       403:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ForbiddenError'
 *       500:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/InternalError'
 *               
 *  
 */
router.get('', dtoValidationMiddleware({query: PaginationMeta}), async (req: Request, res: Response, next: NextFunction) => {
    try {
        const 
            {limit, offset} = req.query as PaginationMeta,
            users = UserService.list(offset, limit);

        console.log(req.query)
        res.status(200).json(plainToClass(UserListDTO, users, {excludeExtraneousValues: true, }));
        
        return users;
    }
    catch (error) {
        next(error);
    }
});

/**
 * @swagger
 * /api/v1/users/{userId}:
 *   get:
 *     summary: Get a user
 *     tags: [USER]
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Success - Return a user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserDTO'
 *       401:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UnauthorizedError'
 *       403:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ForbiddenError'
 *       500:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/InternalError'
 *               
 *  
 */
router.get('/:userId', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = UserService.get(parseInt(req.params.userId));
        const result = plainToClass(UserDTO, response, {excludeExtraneousValues: true})
        res.status(200).json(result);
    }
    catch (error) {
        next(error);
    }
});
    
/**
 * @swagger
 * /api/v1/users:
 *   post:
 *     summary: Create User
 *     tags: [USER]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateUserDTO'
 *     responses:
 *       200:
 *         description: Success - Return created user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BadRequestError'
 *       401:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UnauthorizedError'
 *       403:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ForbiddenError'
 *       409:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ConflictError'
 *       500:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/InternalError'
 *               
 *  
 */
router.post('', dtoValidationMiddleware({body: CreateUserDTO}), async (req: Request, res: Response, next: NextFunction) => {
    try {
        const payload: CreateUserDTO = req.body; console.log(payload)
        const result = UserService.create(payload);
        res.status(200).json(plainToInstance(UserDTO, result, {excludeExtraneousValues: true}));
    }
    catch (error) {
        next(error);
    }
});

/**
 * @swagger
 * /api/v1/users/{userId}:
 *   put:
 *     summary: Update User
 *     tags: [USER]
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         schema:
 *           type: number
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateUserDTO'
 *     responses:
 *       200:
 *         description: Success - Return updated user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BadRequestError'
 *       401:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UnauthorizedError'
 *       403:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ForbiddenError'
 *       409:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ConflictError'
 *       500:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/InternalError'
 *               
 *  
 */
router.put('/:userId', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const 
            payload: UpdateUserDTO = plainToClass(UpdateUserDTO, req.body, {excludeExtraneousValues: true}),
            userId: number = parseInt(req.params.userId);

        const result = UserService.update(userId,  payload);
        res.status(200).json(plainToInstance(UserDTO, result.new, {excludeExtraneousValues: true}));
    }
    catch (error) {
        next(error);
    }
});

/**
 * @swagger
 * /api/v1/users/{userId}/password:
 *   put:
 *     summary: Change User Password
 *     tags: [USER]
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         schema:
 *           type: number
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdatePasswordDTO'
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BadRequestError'
 *       401:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UnauthorizedError'
 *       403:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ForbiddenError'
 *       500:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/InternalError'
 *               
 *  
 */
router.put('/:userId/password', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const payload: UpdatePasswordDTO = plainToClass(UpdatePasswordDTO, req.body, {excludeExtraneousValues: true});
        // const result = UserService.update(payload);
        res.sendStatus(200);
    }
    catch (error) {
        next(error);
    }
});



export default {
    baseUrl,
    router
};