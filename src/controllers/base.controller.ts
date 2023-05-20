/**
 * Example of controller you can remove this file
 */
import { Router, Request, Response, NextFunction } from "express";

const
    router = Router(),
    baseUrl = '/v1';

router.get('', async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.json({
            version: 1,
            description: 'TypeScript - Express - Graphql, routes and resolvers dynamic',
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