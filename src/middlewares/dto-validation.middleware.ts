import { sanitize } from "class-sanitizer";
import { plainToClass, plainToInstance } from "class-transformer";
import { ValidationError, validate } from "class-validator";
import { NextFunction, Request, RequestHandler, Response } from "express";
import { BadRequestError } from "../commons/exceptions";

enum Location {
    body = 'body',
    query = 'query'
}

export function dtoValidationMiddleware(type: { body?: any, query?: any }, skipMissingProperties = false): RequestHandler {

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            let
                dtoBodyObj: any,
                dtoQueryObj: any,
                dtoBodyErrors: ValidationError[] = [],
                dtoQueryErrors: ValidationError[] = [];

            if (type.body) {
                dtoBodyObj = plainToInstance(type.body, req.body, { excludeExtraneousValues: true });
                dtoBodyErrors = await validate(dtoBodyObj);
            }

            if (type.query) {
                dtoQueryObj = plainToInstance(type.query, req.query, { excludeExtraneousValues: true });
                dtoQueryErrors = await validate(dtoQueryObj);
                console.log(dtoQueryObj);
            }

            if (dtoBodyErrors.length > 0 || dtoQueryErrors.length > 0) {
                console.error(dtoQueryErrors)
                let { errorMsg, errorDetails } = (dtoBodyErrors.length > 0) ? getErrorParameters(dtoBodyErrors, Location.body) : getErrorParameters(dtoQueryErrors, Location.query);

                throw new BadRequestError(`Validation for DTO ${(dtoBodyErrors.length) ? type.body : type.query} fail`, { msg: errorMsg, details: errorDetails });
            }

            if (dtoBodyObj) {
                sanitize(dtoBodyObj)
                req.body = dtoBodyObj;
            }

            if (dtoQueryObj) {
                sanitize(dtoQueryObj);
                req.query = dtoQueryObj;
            }

            next();
        } catch (error) {
            next(error);
        }

    };
}


/**
 * 
 * @param errors 
 * @param location 
 * @returns 
 */
function getErrorParameters(errors: ValidationError[], location: Location): { errorMsg: string, errorDetails: any[] } {
    let
        errorMsg = "",
        errorDetails: any[] = [];

    errors.map(err => {
        errorDetails.push({
            value: err.value,
            property: err.property,
            constraints: err.constraints,
            location
        });

        for (const key in err.constraints) {
            errorMsg += (errorMsg == "") ? err.constraints[key] : `, ${err.constraints[key]}`;
        }
    });

    return { errorMsg, errorDetails };
}