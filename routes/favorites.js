import { Router } from 'express'
import * as favoritesCtrl from '../controllers/favorites.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

router.use(decodeUserFromToken)
router.post('/', checkAuth, favoritesCtrl.create)



export { router }