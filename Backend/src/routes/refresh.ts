import express from 'express';
import { Router } from 'express';
import { handleRefreshToken } from '../controllers/refreshTokenController';

const router: Router = express.Router();

router.get('/', handleRefreshToken);

export default router;
