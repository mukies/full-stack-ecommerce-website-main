/** @format */
const fs = require("fs");
const productModel = require("../models/productModel.js");
const slug = require("slugify");

//creating a new product

exports.addProduct = async (req, res) => {
    try {
        const { name, description, price, quantity, category } = req.fields;
        const { photo } = req.files;

        if (!name || !description || !price || !quantity || !category) {
            return res.json({
                success: false,
                message: "please fill all required fields."
            });
        } else {
            if (photo.size > 921600) {
                return res.json({
                    success: false,
                    message: "photo must not be greater than 900KB."
                });
            } else {
                const photoItems = {
                    data: fs.readFileSync(photo.path),
                    contentType: "image/png"
                };
                const data = new productModel({
                    name,
                    description,
                    price,
                    quantity,
                    category,
                    photo: photoItems,
                    slug: slug(name)
                });
                data.save();
                res.json({
                    success: true,
                    message: "product created successfully.",
                    result: data
                });
            }
        }
    } catch (error) {
        res.json({
            success: false,
            message: "error while creating the product",
            error
        });
    }
};

//get all products

exports.allProducts = async (req, res) => {
    try {
        const data = await productModel
            .find({})
            .select("-photo")
            .populate("category");
        res.json({ success: true, result: data });
    } catch (error) {
        console.log(error);
        res.json({ success: false, error });
    }
};
///get one specific product
exports.oneProduct = async (req, res) => {
    try {
        const data = await productModel
            .findOne({ slug: req.params.slug })
            .select("-photo")
            .populate("category");
        res.json({
            success: true,
            message: "get request of one product successful.",
            result: data
        });
    } catch (error) {
        console.log(error);
        res.json({ success: false, error });
    }
};

///get product image based on product id
exports.productImage = async (req, res) => {
    try {
        const product = await productModel
            .findOne({ slug: req.params.slug })
            .select("photo");
        res.set("Content-Type", product.photo.contentType);
        res.send(product.photo.data);
    } catch (error) {
        console.log(error);
        res.json({ success: false, error });
    }
};
//delete product based on product id
exports.deleteProduct = async (req, res) => {
    try {
        const data = await productModel.deleteOne({ _id: req.params.pid });
        res.json({
            success: true,
            message: "product deleted successfully.",
            result: data
        });
    } catch (error) {
        res.json({ success: false, message: "error while deleting", error });
    }
};

//update product based on product slug
exports.updateProduct = async (req, res) => {
    try {
        const { name, description, price, category, quantity } = req.fields;
        const { photo } = req.files;
        //check validation
        if (!name || !description || !price || !quantity || !category) {
            return res.json({
                success: false,
                message: "please fill all required fields."
            });
        }
        //check photo
        if (photo) {
              if(photo.size>921600){
                            return res.json({
                success: false,
                message: "photo must not be greater than 900KB."
            });
              }else{
                const photoItem = {
                data: fs.readFileSync(photo.path),
                contentType: "image/png"
            };

            const data = await productModel.updateOne(
                { slug: req.params.slug },
                {
                    $set: {
                        name,
                        description,
                        price,
                        quantity,
                        category,
                        slug: slug(name),
                        photo:photoItem
                        
                    }
                }
            );

            res.json({
                success: true,
                message: "product updated",
                result: data
            });
              }
        } else {
          
            

            const data = await productModel.updateOne(
                { slug: req.params.slug },
                {
                    $set: {
                        name,
                        description,
                        price,
                        quantity,
                        category,
                        slug: slug(name),
                        
                    }
                }
            );

            res.json({
                success: true,
                message: "product updated",
                result: data
            });
        }
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "error while updating the product",
            error
        });
    }
};
