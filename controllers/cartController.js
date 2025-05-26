const CartItem = require('../models/CartItem');

// GET all cart items
exports.getCart = async (req, res) => {
  try {
    const items = await CartItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch cart items" });
  }
};

// POST add new item
exports.addToCart = async (req, res) => {
  try {
    const { productId, title, price, image } = req.body;
    const item = new CartItem({ productId, title, price, image });
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ error: "Failed to add item to cart" });
  }
};

// DELETE item by ID
exports.removeFromCart = async (req, res) => {
  try {
    await CartItem.findByIdAndDelete(req.params.id);
    res.json({ message: "Item removed" });
  } catch (err) {
    res.status(500).json({ error: "Failed to remove item" });
  }
};
