/** @format */

const express = require("express");
const router = express.Router();
const { isAdmin, verifyToken } = require("../middlewares/authMiddlewares.js");
const {
  addProduct,
  allProducts,
  oneProduct,
  productImage,
  deleteProduct,
  updateProduct,
} = require("../controllers/productControllers.js");
const formidable = require("express-formidable");
const productModel = require("../models/productModel.js");

//post products
router.post("/add-product", verifyToken, isAdmin, formidable(), addProduct);

//get all products
router.get("/all-products", allProducts);

//get one specific product
router.get("/get/:slug", oneProduct);

//get product image
router.get("/product-image/:slug", productImage);

//delete product
router.delete("/delete/:pid", verifyToken, isAdmin, deleteProduct);

//update product

router.put("/update/:slug", verifyToken, isAdmin, formidable(), updateProduct);

//search product
router.get("/search/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const data = await productModel.find({
      $or: [{ name: { $regex: id } }],
    });

    if (data) {
      res.send({
        success: true,
        data,
      });
    }
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

//filter product

module.exports = router;
