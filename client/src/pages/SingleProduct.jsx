import { Link, useParams } from "react-router-dom";
import Layout from "../component/layout/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "semantic-ui-react";
import toast from "react-hot-toast";
import { add } from "../redux/userSlice";
import { useDispatch } from "react-redux";

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getProduct() {
    const { data } = await axios.get(
      `http://localhost:8080/api/v1/product/get/${id}`
    );
    if (data.success) {
      console.log(data.result);
      setProduct(data.result);
    }
  }

  function addCart(item) {
    dispatch(add(item));
    toast.success("added to cart");
  }

  return (
    <Layout>
      <div className=" px-5 flex flex-col">
        <Link className="my-5 mx-3" to={"/"}>
          <button className="px-2 py-1 rounded-md bg-green-500 text-white text-lg font-bold lg:w-[8%]  md:w-[10%]  w-[20%]">
            back
          </button>
        </Link>

        <div className="flex flex-col gap-5 md:gap-10 md:py-5 py-3 px-3 md:px-7 justify-center items-center md:flex-row">
          <div className=" max-w-[400px]">
            <img
              className=" object-cover object-center"
              src={`http://localhost:8080/api/v1/product/product-image/${id}`}
              alt="product-image"
            />
          </div>
          <div className="   space-y-4 ">
            <h1 className="text-3xl md:text-5xl font-bold">{product?.name}</h1>
            <p className="text-2xl text-yellow-600 font-bold">
              <span className="line-through text-lg">
                {" "}
                $ {product?.price + (product?.price * 30) / 100}
              </span>{" "}
              <span className="text-green-500">$ {product?.price}</span>
            </p>
            <p className="text-xl font-semibold">
              Description:{" "}
              <span className="font-normal"> {product?.description}</span>
            </p>
            <p className="text-xl font-semibold">
              Category:{" "}
              <span className="font-normal">{product?.category?.name}</span>
            </p>
            <p className="text-xl font-semibold">
              In Stock: <span className="font-normal">{product?.quantity}</span>
            </p>
            <div className=" w-full mx-auto mt-5">
              <Button onClick={() => addCart(product)} color="orange">
                add to cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleProduct;
