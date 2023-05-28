/**
 * Example of controller you can remove this file
 */
import { Router, Request, Response, NextFunction } from "express";

const
    router = Router(),
    baseUrl = '/v1';

    
/**
 * @swagger
 * tags:
 *   name: ROOT
 *   description: Server root
 * /api/v1:
 *   get:
 *     summary: Server status
 *     tags: [ROOT]
 *     responses:
 *       200:
 *         description: Server status
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServerStatus' 
 *               
 *  
 */
router.get('', async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.json({
            version: 1,
            description: 'TypeScript - Express - APIs documentation, routes and resolvers dynamic',
            status: 'Up and running'
        })
    }
    catch (error) {
        next(error);
    }
})

export default {
    baseUrl,
    router
};