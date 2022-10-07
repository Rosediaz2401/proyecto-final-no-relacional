import { Router } from 'express'
import { userController }  from '../controllers/index.js'

const router = Router()

router.post('/user', userController.createUser)
router.get('/getuser', userController.getAllUsers)
router.put('/updateuser/:id', userController.updateUserById)
router.delete('/deleteuser/:id', userController.deleteById)

export default router
