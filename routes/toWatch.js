import { Router } from 'express'
import * as toWatchCtrl from '../controllers/toWatch.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

router.use(decodeUserFromToken)
router.get('/', checkAuth, toWatchCtrl.index)
router.post('/', checkAuth, toWatchCtrl.create)
router.delete('/:id', checkAuth, toWatchCtrl.delete)



export { router }