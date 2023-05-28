/**
 * A file to put common swagger definitions ex. your error schemas
 * Note: your DTOs and Models is best to define in the files itself documentation should be on the file that way is easier to maintain.
 * TIP: indentation can a problem when documenting try to keep swagger sections small and grouped, see example below
 */

/**
 * Error Schemas
 * 
 * @swagger
 *  components:
 *    schemas:
 *      UnauthorizedError:
 *        type: object
 *        description: Unauthorized response example. Note that these are basic properties of the response error, and depending on the case, more properties can be included in the response.
 *        properties:
 *          errorCode:
 *            type: string
 *          msg:
 *            type: string
 *        example:
 *          errorCode: unauthorized_error
 *          msg: Not logged
 *      BadRequestError:
 *        type: object
 *        description: Bad request response example. Note that these are basic properties of the response error, and depending on the case, more properties can be included in the response.
 *        properties:
 *          errorCode:
 *            type: string
 *          msg:
 *            type: string
 *        example:
 *          errorCode: bad_request
 *          msg: Bad Request
 *      NotFoundError:
 *        type: object
 *        description: Not found response example. Note that these are basic properties of the response error, and depending on the case, more properties can be included in the response.
 *        properties:
 *          errorCode:
 *            type: string
 *          msg:
 *            type: string
 *        example:
 *          errorCode: not_found
 *          msg: Not Found
 *      ConflictError:
 *        type: object
 *        description: Conflict response example. Note that these are basic properties of the response error, and depending on the case, more properties can be included in the response.
 *        properties:
 *          errorCode:
 *            type: string
 *          msg:
 *            type: string
 *        example:
 *          errorCode: conflict
 *          msg: Already Exist
 *      InternalError:
 *        type: object
 *        description: Internal error response example. Note that these are basic properties of the response error, and depending on the case, more properties can be included in the response.
 *        properties:
 *          errorCode:
 *            type: string
 *          msg:
 *            type: string
 *        example:
 *          errorCode: application_error
 *          msg: Ups something went wrong, please try again later
 *      ForbiddenError:
 *        type: object
 *        description: Forbidden response example. Note that these are basic properties of the response error, and depending on the case, more properties can be included in the response.
 *        properties:
 *          errorCode:
 *            type: string
 *          msg:
 *            type: string
 *        example:
 *          errorCode: forbidden
 *          msg: Forbidden
 *      
 */

/**
 * Server Status Schema
 * @swagger
 *  components:
 *    schemas:
 *      ServerStatus:
 *        type: object
 *        description: Server Rest APIs information
 *        properties:
 *          version:
 *            type: string
 *          description:
 *            type: string
 *          status:
 *            type: string
 *          
 */