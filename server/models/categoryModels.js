/** @format */

const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    slug: { type: String, lowercase:true }
});

const categoryModel = mongoose.model("ecomm-categories", categorySchema);

module.exports = categoryModel;
