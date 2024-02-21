/** @format */

const jwt = require("jsonwebtoken");
const key = "mukesh1234";

exports.getToken = body => {
    return jwt.sign({body}, key);
};

