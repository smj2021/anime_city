import { Router } from 'express';
import * as reviewsCtrl from '../controllers/reviews.js';
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js';

const router = Router();

router.use(decodeUserFromToken);
router.get('/reviews', checkAuth, reviewsCtrl.index)
//creates a rating
router.post('/:animeid', checkAuth, reviewsCtrl.rating)
router.post('/', checkAuth, reviewsCtrl.create);
router.get('/:animeId', checkAuth, reviewsCtrl.show);
router.put('/:animeId', checkAuth, reviewsCtrl.update)
router.delete('/:animeId', checkAuth, reviewsCtrl.delete)

export {
    router
}