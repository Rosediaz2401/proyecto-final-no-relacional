import { Router } from 'express'
import { salesController }  from '../controllers/index.js'

const router = Router()

router.post('/sales', salesController.createSales)
router.get('/getsales', salesController.getAllSales)
router.put('/updatesales/:id', salesController.updateSalesById)
router.delete('/deletesales/:id', salesController.deleteById)

export default router
