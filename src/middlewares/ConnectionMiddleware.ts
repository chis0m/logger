import express from 'express';
import { ApiError, Response} from '../utils';
/**
 * Collection of methods for ConnectionMiddleware
 * This will handle validation connection to servers
 * @class ConnectionMiddleware
 */
export class ConnectionMiddleware {
    /**
     *
     * Validates server details
     * @static
     * @param {Request} req - request object from the client.
     * @param {Response} res - response object returned to the client.
     * @param {Next} next - the returned values going into the next operation.
     * @returns {object} Returns an true if validation passes or error if validation fails.
     * @memberof ConnectionMiddleware
     */
    public static async validateDetails(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            req.check('ip', 'IP is required').notEmpty().isLength({ min: 12 }).withMessage('IP must be 12 digits in length');
            req.check('username', 'username is required').notEmpty().trim();
            req.check('path', 'Path to .env is required').notEmpty().trim();
            req.check('private_key_path', 'Path to private key is required').notEmpty().trim();
            let errors = req.validationErrors();
            if (errors) {
                errors = Response.extractErrors(errors);
                throw new ApiError(400, errors);
            }
            next();
        } catch (error) {
            console.log(error);
            return Response.fatal(res, error.message, error.statusCode);
        }
    }
}

