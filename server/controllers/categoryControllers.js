/** @format */
const categoryModel = require("../models/categoryModels.js");
const slug = require("slugify");

//category create
exports.addCategory = async (req, res) => {
    const { name } = req.body;
    const isExist = await categoryModel.findOne({ name });
    if (isExist) {
        return res.json({
            success: false,
            message: "category name already exist"
        });
    } else {
        const data = await new categoryModel({ name, slug: slug(name) }).save();
        return res.json({
            success: true,
            message: "category created successfully",
            result: data
        });
    }
};

//category update
exports.updateCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const data = await categoryModel.updateOne(
            { _id: req.params.id },
            { $set: { name, slug: slug(name) } }
        );
        return res.json({
            success: true,
            message: "category update successfully",
            result: data
        });
    } catch (err) {
        console.log("Error while updating the category", err);
    }
};

//delete category
exports.deleteCategory = async (req, res) => {
    try {
        const data = await categoryModel.deleteOne({ _id: req.params.id });
        res.json({
            success: true,
            message: `item deleted successfully.`,
            result: data
        });
    } catch (err) {
        console.log("error in deleting category ");
        res.json({
            success: false,
            message: "error while deleting category.",
            error: err
        });
    }
};

//get all category

exports.allCategory = async (req, res) => {
    try {
        const data = await categoryModel.find({});
        res.json({
            success: true,
            message: "category fetching request successful.",
            result: data
        });
    } catch (err) {
        console.log("error while getting all category", err);
        res.json({
            success: false,
            message: "error while fetching category data",
            err
        });
    }
};

//get one category
exports.oneCategory = async (req, res) => {
    try {
        const data = await categoryModel.findOne({ _id: req.params.id });
        res.json({
            success: true,
            message: "specific category fetching request successful.",
            result: data
        });
    } catch (err) {
        console.log("error while getting specific  category", err);
        res.json({
            success: false,
            message: "error while fetching specific category data",
            err
        });
    }
};
