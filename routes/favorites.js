import { Router } from 'express'
import * as favoritesCtrl from '../controllers/favorites.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

router.post('/', favoritesCtrl.create)



export { router }