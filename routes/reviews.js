import { Router } from 'express';
import * as reviewsCtrl from '../controllers/reviews.js';
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js';

const router = Router();

router.use(decodeUserFromToken);
router.post('/:animeId', checkAuth, reviewsCtrl.rating)
router.post('/', checkAuth, reviewsCtrl.create);
// router.get('/:id', checkAuth, reviewsCtrl.show);

export {
    router
}