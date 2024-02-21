/** @format */
const { register, login, test } = require("../controllers/authController.js");
const { verifyToken, isAdmin } = require("../middlewares/authMiddlewares.js");

const express = require("express");
const router = express.Router();

router.post("/register", register);
//login routes
router.post("/login", login);
router.get("/test", verifyToken, isAdmin, test);

//route to check Admin

router.get("/admin-check", verifyToken, isAdmin, (req, res) => {
    res.json({ success: true, message: "you are admin" });
});

module.exports = router;
