import mongoose from 'mongoose'

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  inventory: {
    type: Number
  },
  price: {
    type: Number
  },
  specifications: {
    type: String,
    require: true
  },
  description: {
    type: String
  },
  provider: {
    type: String,
    required: true,
  }
})

export default mongoose.model('Products', productsSchema)
