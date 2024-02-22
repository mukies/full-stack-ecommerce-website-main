/** @format */
import { FaSquarePlus } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Icon, GridColumn, Grid, Image } from "semantic-ui-react";
import ProductList from "./ProductList.jsx";
import axios from "axios";
import toast from "react-hot-toast";

export default function Product() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);
  async function getProduct() {
    const { data } = await axios.get(
      "https://meroshop-3vns.onrender.com/api/v1/product/all-products"
    );
    if (data.success) {
      setProduct(data.result);
    }
  }

  return (
    <div className="">
      <h1 className="text-2xl text-center border-b-2 border-b-gray-600 my-5">
        Products
      </h1>
      <div className="flex md:px-10 justify-end w-full px-5">
        <button
          className="px-3 py-2 bg-blue-600 text-white
                hover:opacity-70 duration-300 rounded-xl"
        >
          <Link
            to="/add-product"
            className="flex hover:text-white duration-300 justify-between items-center gap-x-2"
          >
            {" "}
            <span>
              <FaSquarePlus />
            </span>{" "}
            Add Product
          </Link>
        </button>
      </div>

      <section className="">
        <div className=" px-5 py-24 mx-auto">
          <div className=" grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 m-4">
            {product.length ? (
              product.map((item, i) => {
                return (
                  <div key={i}>
                    <ProductList item={item} getProduct={getProduct} />
                  </div>
                );
              })
            ) : (
              <h1>No Product available..</h1>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
