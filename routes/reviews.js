import { Router } from 'express';
import * as reviewsCtrl from '../controllers/reviews.js';
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js';

const router = Router();

router.get('/', reviewsCtrl.index)
router.use(decodeUserFromToken);
//creates a rating
// router.post('/:animeId', checkAuth, reviewsCtrl.rating)
router.post('/:animeId', checkAuth, reviewsCtrl.create);
router.put('/:animeId', checkAuth, reviewsCtrl.update)
router.delete('/:animeId', checkAuth, reviewsCtrl.delete)

export {
    router
}