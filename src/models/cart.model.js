const mongoose = require("mongoose")

// course schema and model

const cartSchema = new mongoose.Schema({
   
    userId:{ 
        type:mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    Items:[]
},{
    versionKey: false,
    timestamps: true
})

const CartItem = mongoose.model("cartItem", cartSchema)


module.exports = CartItem;