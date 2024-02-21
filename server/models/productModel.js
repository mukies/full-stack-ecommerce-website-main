const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    slug: { type: String, required: true },
    photo: { data: Buffer, contentType: String },
    category: {
        type: mongoose.ObjectId,
        ref: "ecomm-categories",
        required: true
    },
  //  name: { type: String, required: true }
},{timestamps:true});

const productModel = mongoose.model("ecomm-products", productSchema);

module.exports = productModel;
