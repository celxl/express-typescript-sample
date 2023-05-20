/**
 * Example how the errors will look, this is just to show api response 
 * in practice commonly the error is throw within the services
 */
import { Router, Request, Response, NextFunction } from "express";
import { BadRequestError } from '../commons/exceptions';

const
    router = Router(),
    baseUrl = '/v1/exceptions';

router.get('/bad_req', async (req: Request, res: Response, next: NextFunction) => {
    try {
        throw new BadRequestError('error simulation',{path: req.path});
    }
    catch (error) {
        next(error);
    }
})

export default {
    baseUrl,
    router
};