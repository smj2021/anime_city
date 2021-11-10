import { Router } from 'express';
import * as reviewsCtrl from '../controllers/reviews.js';
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js';

const router = Router();

router.use(decodeUserFromToken);
router.post('/', checkAuth, reviewsCtrl.create);
router.get('/:id', checkAuth, reviewsCtrl.show);
router.post('/rating/:anime_id', checkAuth, reviewsCtrl.rating)


export {
    router
}