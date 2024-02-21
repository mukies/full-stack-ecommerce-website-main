/** @format */
const { getToken } = require("../utils/jwtToken.js");
const userModel = require("../models/userModels.js");

exports.register = async (req, res) => {
    const isExist = await userModel.find({ email: req.body.email });

    if (isExist.length) {
        res.json({ success: false, message: "email already exist." });
    } else {
        const data = new userModel(req.body);

        const result = await data.save();

        res.json({
            success: true,
            message: "Account created successfully !!!",
            result
        });
    }
};

//login controller || post

exports.login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.send({ success: false, message: "Input field is empty." });
    } else {
        const isExist = await userModel.findOne({ email, password });
        if (isExist) {
            const token = await getToken(isExist);
        //console.log("exist", isExist);
            res.json({
                success: true,
                message: "Login successfully.",
                user: isExist,
                token
            });
        } else {
            return res.json({
                success: false,
                message: "invalid email or password"
            });
        }
    }
};

exports.test = async (req, res) => {
    res.send({ success: true, message: "it is a protected route" });
};


