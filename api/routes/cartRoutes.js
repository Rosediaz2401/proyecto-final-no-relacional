import { Router } from 'express'
import { cartController } from '../controllers/index.js'

const router = Router()

router.post('/cart', cartController.createCart)
router.get('/cartgetall', cartController.getAllCart)
router.put('/cartupdate/:id', cartController.updateCartById)
router.delete('/cartdelete/:id', cartController.deleteById)

export default router