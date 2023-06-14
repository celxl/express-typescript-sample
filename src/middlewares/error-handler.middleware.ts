import { NextFunction, Request, Response } from "express";
import { UserFacingError } from "../commons/exceptions";

/**
 * Global Error Handler middleware
 * @param err 
 * @param req 
 * @param res 
 * @param next 
 */
export function globalErrorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    (err) && console.error(err);

    if (err instanceof UserFacingError) {
        res.status(err.Status || 500).json(err);
    }
    else {
        console.log(res.statusCode);
        res.sendStatus(500)
    }
}