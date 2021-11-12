import { Router } from 'express'
import * as favoritesCtrl from '../controllers/favorites.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

router.use(decodeUserFromToken)
router.get('/', checkAuth, favoritesCtrl.index)
router.post('/', checkAuth, favoritesCtrl.create)
router.delete('/:id', checkAuth, favoritesCtrl.delete)



export { router }