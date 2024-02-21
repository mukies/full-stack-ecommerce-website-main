/** @format */
const { verifyToken, isAdmin } = require("../middlewares/authMiddlewares.js");
const {
    addCategory,
    updateCategory,
    deleteCategory,
    allCategory,
    oneCategory
} = require("../controllers/categoryControllers.js");
const express = require("express");
const router = express.Router();
//create category
router.post("/add-category", verifyToken, isAdmin, addCategory);

//update category
router.put("/update-category/:id", verifyToken, isAdmin, updateCategory);

//delete category
router.delete("/delete-category/:id", verifyToken, isAdmin, deleteCategory);

//get all category
router.get("/all", allCategory);

//get one category
router.get("/:id", oneCategory);

module.exports = router;
