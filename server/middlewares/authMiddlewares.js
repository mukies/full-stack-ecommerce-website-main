/** @format */

const jwt = require("jsonwebtoken");
const key = "mukesh1234";

exports.verifyToken = async (req, res, next) => {
    const token = req.headers.authorization;

    jwt.verify(token, key, (err, resolve) => {
        if (err) {
            return res.send({ success: false, message: "invalid token" });
        } else {
            req.id = resolve;

            next();
        }
    });
};

exports.isAdmin = async (req, res, next) => {


    if (req.id.body.admin) {
        next();
    } else {
        res.send({ success: false, result: "you are not the admin" });
    }
};
