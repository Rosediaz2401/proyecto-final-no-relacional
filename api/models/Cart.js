import mongoose from 'mongoose'

const cartSchema = new mongoose.Schema({
  products:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Products',
    required: true
  }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
})

export default mongoose.model('Cart', cartSchema)
