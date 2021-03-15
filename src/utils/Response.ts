import express, { Request } from "express";
import { MESSAGE } from "./Messages";
import { IMessage } from "./Interfaces";

export class Response {

    public static message : IMessage = MESSAGE;
    public static HTTP_CONTINUE : number = 100;
    public static HTTP_SWITCHING_PROTOCOLS : number = 101;
    public static HTTP_PROCESSING : number = 102;     
    public static HTTP_EARLY_HINTS : number = 103;
    public static HTTP_OK : number = 200;
    public static HTTP_CREATED : number = 201;
    public static HTTP_ACCEPTED : number = 202;
    public static HTTP_NON_AUTHORITATIVE_INFORMATION : number = 203;
    public static HTTP_NO_CONTENT : number = 204;
    public static HTTP_RESET_CONTENT : number = 205;
    public static HTTP_PARTIAL_CONTENT : number = 206;
    public static HTTP_MULTI_STATUS : number = 207;
    public static HTTP_ALREADY_REPORTED : number = 208;
    public static HTTP_IM_USED : number = 226;
    public static HTTP_MULTIPLE_CHOICES : number = 300;
    public static HTTP_MOVED_PERMANENTLY : number = 301;
    public static HTTP_FOUND : number = 302;
    public static HTTP_SEE_OTHER : number = 303;
    public static HTTP_NOT_MODIFIED : number = 304;
    public static HTTP_USE_PROXY : number = 305;
    public static HTTP_RESERVED : number = 306;
    public static HTTP_TEMPORARY_REDIRECT : number = 307;
    public static HTTP_PERMANENTLY_REDIRECT : number = 308;
    public static HTTP_BAD_REQUEST : number = 400;
    public static HTTP_UNAUTHORIZED : number = 401;
    public static HTTP_PAYMENT_REQUIRED : number = 402;
    public static HTTP_FORBIDDEN : number = 403;
    public static HTTP_NOT_FOUND : number = 404;
    public static HTTP_METHOD_NOT_ALLOWED : number = 405;
    public static HTTP_NOT_ACCEPTABLE : number = 406;
    public static HTTP_PROXY_AUTHENTICATION_REQUIRED : number = 407;
    public static HTTP_REQUEST_TIMEOUT : number = 408;
    public static HTTP_CONFLICT : number = 409;
    public static HTTP_GONE : number = 410;
    public static HTTP_LENGTH_REQUIRED : number = 411;
    public static HTTP_PRECONDITION_FAILED : number = 412;
    public static HTTP_REQUEST_ENTITY_TOO_LARGE : number = 413;
    public static HTTP_REQUEST_URI_TOO_LONG : number = 414;
    public static HTTP_UNSUPPORTED_MEDIA_TYPE : number = 415;
    public static HTTP_REQUESTED_RANGE_NOT_SATISFIABLE : number = 416;
    public static HTTP_EXPECTATION_FAILED : number = 417;
    public static HTTP_I_AM_A_TEAPOT : number = 418;
    public static HTTP_MISDIRECTED_REQUEST : number = 421;
    public static HTTP_UNPROCESSABLE_ENTITY : number = 422;
    public static HTTP_LOCKED : number = 423;   
    public static HTTP_FAILED_DEPENDENCY : number = 424;
    public static HTTP_TOO_EARLY : number = 425;
    public static HTTP_UPGRADE_REQUIRED : number = 426;
    public static HTTP_PRECONDITION_REQUIRED : number = 428;
    public static HTTP_TOO_MANY_REQUESTS : number = 429;              
    public static HTTP_REQUEST_HEADER_FIELDS_TOO_LARGE : number = 431;
    public static HTTP_UNAVAILABLE_FOR_LEGAL_REASONS : number = 451;
    public static HTTP_INTERNAL_SERVER_ERROR : number = 500;
    public static HTTP_NOT_IMPLEMENTED : number = 501;
    public static HTTP_BAD_GATEWAY : number = 502;
    public static HTTP_SERVICE_UNAVAILABLE : number = 503;
    public static HTTP_GATEWAY_TIMEOUT : number = 504;
    public static HTTP_VERSION_NOT_SUPPORTED : number = 505;
    public static HTTP_VARIANT_ALSO_NEGOTIATES_EXPERIMENTAL : number = 506;
    public static HTTP_INSUFFICIENT_STORAGE : number = 507;
    public static HTTP_LOOP_DETECTED : number = 508;
    public static HTTP_NOT_EXTENDED : number = 510;
    public static HTTP_NETWORK_AUTHENTICATION_REQUIRED : number = 511;

    public static extractErrors(errors: any): string[] {
        let validationErrors: string[] = [];
        errors.map((error: any) => validationErrors.push(error.msg));
        return validationErrors;
    }

    public static success(res : express.Response, data: object = {}, message?: string, statusCode?: number): object {
        return res.status(statusCode || 200).json(
            {
                status: true,
                message: message || MESSAGE[Response.HTTP_OK],
                data
            }
        );
    }

    public static error(res : express.Response, data: any = null, message?: string, statusCode?: number): object {
        return res.status(statusCode || 400).json(
            {
                status: false,
                message: message || MESSAGE[Response.HTTP_BAD_REQUEST],
                data
            }
        );
    }

    public static fatal(res : express.Response, message?: any, statusCode?: number): object {
        return res.status(statusCode || 500).json(
            {
                status: false,
                error: message || MESSAGE[Response.HTTP_INTERNAL_SERVER_ERROR]
            }
        );
    }
}