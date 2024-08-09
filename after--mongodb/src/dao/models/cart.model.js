const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    products: [
        {
            product: {
                type: String, 
                require: true
            }, 
            quantity: {
                type: Number, 
                required: true
            }
        }
    ]
})

const CartModel = mongoose.model("carts", cartSchema);

module.exports = CartModel; 