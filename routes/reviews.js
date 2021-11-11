import { Router } from 'express';
import * as reviewsCtrl from '../controllers/reviews.js';
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js';

const router = Router();

router.use(decodeUserFromToken);
router.get('/', checkAuth, reviewsCtrl.index)
router.post('reviews/:animeId', checkAuth, reviewsCtrl.rating)
router.post('/reviews', checkAuth, reviewsCtrl.create);
// router.get('/:id', checkAuth, reviewsCtrl.show);

export {
    router
}