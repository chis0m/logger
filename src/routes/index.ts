import { Router } from 'express';
import envRoutes from './EnvFileRoute';

const router = Router();

//route inclusion
router.use('/env', envRoutes);


export default router;