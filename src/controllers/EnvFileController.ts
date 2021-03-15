import express from 'express';
import { Response } from '../utils';
import { EnvFileService } from '../services'; 


export class EnvFileController {
    public static async connect(req: express.Request, res: express.Response) : Promise<object> {
        const data = await EnvFileService.connect(req.body);
        return Response.success(res, data, Response.message[Response.HTTP_CREATED], Response.HTTP_CREATED);
    }
}