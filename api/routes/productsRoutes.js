import { Router } from 'express'
import { productsController }  from '../controllers/index.js'

const router = Router()

router.post('/product', productsController.createProducts)
router.get('/getproducts', productsController.getAllProducts)
router.put('/updateproducts/:id', productsController.updateProductById)
router.delete('/deleteproducts/:id', productsController.deleteById)

export default router
