const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  productId: Number,
  title: String,
  price: Number,
  image: String,
  quantity: {
    type: Number,
    default: 1
  }
}, { timestamps: true });

module.exports = mongoose.model('CartItem', cartItemSchema);
