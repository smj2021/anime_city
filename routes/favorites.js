import { Router } from 'express'
import * as favoritesCtrl from '../controllers/favorites.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

router.use(decodeUserFromToken)
router.post('/', checkAuth, favoritesCtrl.create)
router.get('/', checkAuth, favoritesCtrl.index)
router.delete('/', checkAuth, favoritesCtrl.delete)



export { router }