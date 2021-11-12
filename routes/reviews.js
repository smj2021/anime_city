import { Router } from 'express';
import * as reviewsCtrl from '../controllers/reviews.js';
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js';

const router = Router();

router.use(decodeUserFromToken);
router.get('/', checkAuth, reviewsCtrl.index)
//creates a rating
// router.post('/:animeId', checkAuth, reviewsCtrl.rating)
router.post('/:animeId', checkAuth, reviewsCtrl.create);
router.get('/:animeId', checkAuth, reviewsCtrl.show);
router.put('/:animeId', checkAuth, reviewsCtrl.update)
router.delete('/:animeId', checkAuth, reviewsCtrl.delete)

export {
    router
}