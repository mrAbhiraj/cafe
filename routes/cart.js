var mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/cart');
mongoose.connect('mongodb://127.0.0.1:27017/cafeteria')

var cartSchema = mongoose.Schema({
  prdc: Number
})

module.exports = mongoose.model('cart', cartSchema);