/**
 * Example of controller you can remove this file
 */
import { Router, Request, Response, NextFunction } from "express";
import { UserService } from "../services/user.service";

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
 *     responses:
 *       200:
 *         description: Success - Return user's list
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
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
router.get('', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = UserService.create(req.body);
        res.status(200).json(result);
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
 *               $ref: '#/components/schemas/User'
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
        const result = UserService.create(req.body);
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
 *             $ref: '#/components/schemas/User'
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
router.post('', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = UserService.create(req.body);
        res.status(200).json(result);
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
 *             $ref: '#/components/schemas/User'
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
        const result = UserService.create(req.body);
        res.status(200).json(result);
    }
    catch (error) {
        next(error);
    }
});

export default {
    baseUrl,
    router
};