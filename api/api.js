import express from 'express'
import authValidator from './middlewares/authValidator.js'
import {
productsRoutes,
authRoutes,
userRoutes,
salesRoutes,
cartRoutes
} from './routes/index.js'

const api = express()
api.use(express.json())


api.get('/status', (_, res) => {
  return res.json({
    msg: 'API Funcionando'
  })
})
api.use(authRoutes)
api.use(authValidator)
api.use(userRoutes, 
  productsRoutes, 
  salesRoutes, 
  cartRoutes
  )
  

export default api