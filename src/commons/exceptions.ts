/**
 * Must common error cases, feel free to add new cases here ex Unprocessable entity 422
 */


import { NextFunction, Request, Response } from "express";

interface Options {
    [key: string]: any;
};

export class UserFacingError extends Error {
    errorCode = 'custom_error';
    
    constructor(message: string) { super(message) }

    get Status() { return 400 }
}

export class BadRequestError extends UserFacingError {
    msg = 'Bad Request';
    [key: string]: any; 
    constructor(message: string, options?: Options) {
        super(message);
        this.errorCode = "bad_request";
        for (const key in options) {
            this[key] = options[key];
        }
    }

    get Status() { return 400 }
}

export class NotFoundError extends UserFacingError {
    msg = 'Not Found';
    [key: string]: any; 
    constructor(message: string, options?: Options) {
        super(message);
        this.errorCode = "not_found";
        for (const key in options) {
            this[key] = options[key]
        }
    }

    get Status() { return 404 }

}

export class ConflictError extends UserFacingError {
    msg = 'Already Exist';
    [key: string]: any; 
    constructor(message: string, options?: Options) {
        super(message);
        this.errorCode = "conflict";
        for (const key in options) {
            this[key] = options[key]
        }
    }

    get Status() { return 409 }

}

export class InternalError extends UserFacingError {
    msg = 'Ups something went wrong, please try again later';
    [key: string]: any; 
    constructor(message: string, options?: Options) {
        super(message);
        this.errorCode = "application_error";
        for (const key in options) {
            this[key] = options[key]
        }
    }

    get Status() { return 500 }

}

export class ForbiddenError extends UserFacingError {
    msg = 'Forbidden';
    [key: string]: any; 
    constructor(message: string, options: Options) {
        super(message);
        this.errorCode = "forbidden_error";
        for (const key in options) {
            this[key] = options[key]
        }
    }

    get Status() { return 403 }

}

export class UnauthorizedError extends UserFacingError {
    msg = 'Not logged';
    [key: string]: any; 
    constructor(message: string, options?: Options) {
        super(message);
        this.errorCode = "unauthorized_error";
        for (const key in options) {
            this[key] = options[key]
        }
    }

    get Status() { return 401 }

}



