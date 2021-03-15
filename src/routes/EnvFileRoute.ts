import { Router } from 'express';
import { EnvFileController } from '../controllers';
import { ConnectionMiddleware } from '../middlewares';

const router = Router();

const { connect } = EnvFileController;
const { validateDetails} = ConnectionMiddleware;


router.post('/connect', validateDetails, connect);


export default router;