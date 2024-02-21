/** @format */

const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
require("./config.js");
const authRoutes = require("./routes/authRoutes.js");
const categoryRoutes = require("./routes/categoryRoutes.js");
const productRoutes = require("./routes/productRoutes.js");

//middlewares
app.use(cors());
app.use(express.json());

//routes

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

//port and server starting
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`server starting at port ${port}`);
});
