import { Router } from 'express';
import pingRouter from './services/ping.ts';
import authRouter from './services/auth.ts';

const router = Router();

router.use('/auth', authRouter);
router.use('/ping', pingRouter);


export default router;


