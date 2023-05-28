/**
 * Example how the errors will look, this is just to show api response 
 * in practice commonly the error is throw within the services
 */
import { Router, Request, Response, NextFunction } from "express";
import { BadRequestError, ConflictError, ForbiddenError, InternalError, NotFoundError, UnauthorizedError } from '../commons/exceptions';

const
    router = Router(),
    baseUrl = '/v1/exceptions';


/**
 * @swagger
 * tags:
 *   name: ERROR EXAMPLE
 *   description: Error responses examples
 * /api/v1/exceptions/bad_req:
 *   get:
 *     summary: Bad Request Example
 *     tags: [ERROR EXAMPLE]
 *     responses:
 *       400:
 *         description: Bad request - Either server can't process the request or there are validation errors
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BadRequestError'
 *  
 */
router.get('/bad_req', async (req: Request, res: Response, next: NextFunction) => {
    try {
        throw new BadRequestError('error simulation',{path: req.path});
    }
    catch (error) {
        next(error);
    }
});

/**
 * @swagger
 * tags:
 *   name: ERROR EXAMPLE
 *   description: Error responses examples
 * /api/v1/exceptions/not_found:
 *   get:
 *     summary: Not Found Example
 *     tags: [ERROR EXAMPLE]
 *     responses:
 *       404:
 *         description: Not found - desired resource does not exist
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/NotFoundError'
 *  
 */
router.get('/not_found', async (req: Request, res: Response, next: NextFunction) => {
    try {
        throw new NotFoundError('error simulation',{path: req.path});
    }
    catch (error) {
        next(error);
    }
});

/**
 * @swagger
 * tags:
 *   name: ERROR EXAMPLE
 *   description: Error responses examples
 * /api/v1/exceptions/forbidden:
 *   get:
 *     summary: Forbidden Example
 *     tags: [ERROR EXAMPLE]
 *     responses:
 *       403:
 *         description: Forbidden - attempt to CRUD a resource when not having permissions for it
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ForbiddenError'
 *  
 */
router.get('/forbidden', async (req: Request, res: Response, next: NextFunction) => {
    try {
        throw new ForbiddenError('error simulation',{path: req.path});
    }
    catch (error) {
        next(error);
    }
});

/**
 * @swagger
 * tags:
 *   name: ERROR EXAMPLE
 *   description: Error responses examples
 * /api/v1/exceptions/conflict:
 *   get:
 *     summary: Conflict Example
 *     tags: [ERROR EXAMPLE]
 *     responses:
 *       409:
 *         description: Conflict error when a resource already exist
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ConflictError'
 *  
 */
router.get('/conflict', async (req: Request, res: Response, next: NextFunction) => {
    try {
        throw new ConflictError('error simulation',{path: req.path});
    }
    catch (error) {
        next(error);
    }
});

/**
 * @swagger
 * tags:
 *   name: ERROR EXAMPLE
 *   description: Error responses examples
 * /api/v1/exceptions/internal_error:
 *   get:
 *     summary: Internal Error Example
 *     tags: [ERROR EXAMPLE]
 *     responses:
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/InternalError'
 *  
 */
router.get('/internal_error', async (req: Request, res: Response, next: NextFunction) => {
    try {
        throw new InternalError('error simulation',{path: req.path});
    }
    catch (error) {
        next(error);
    }
});

/**
 * @swagger
 * tags:
 *   name: ERROR EXAMPLE
 *   description: Error responses examples
 * /api/v1/exceptions/unauthorized:
 *   get:
 *     summary: Unauthorized Example
 *     tags: [ERROR EXAMPLE]
 *     responses:
 *       401:
 *         description: Not logged or session expired
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UnauthorizedError'
 *  
 */
router.get('/unauthorized', async (req: Request, res: Response, next: NextFunction) => {
    try {
        throw new UnauthorizedError('error simulation',{path: req.path});
    }
    catch (error) {
        next(error);
    }
});

export default {
    baseUrl,
    router
};