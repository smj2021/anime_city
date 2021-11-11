import { Router } from 'express';
import * as reviewsCtrl from '../controllers/reviews.js';
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js';

const router = Router();

router.use(decodeUserFromToken);
router.get('/reviews', checkAuth, reviewsCtrl.index)
router.get('reviews/:animeId', checkAuth, reviewsCtrl.show);
router.post('reviews/:animeId', checkAuth, reviewsCtrl.rating)
router.post('/reviews', checkAuth, reviewsCtrl.create);
router.put('/reviews/:animeId', checkAuth, reviewsCtrl.update)
router.delete('/reviews/:animeId', checkAuth, reviewsCtrl.delete)

export {
    router
}