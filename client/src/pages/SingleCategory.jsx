import { useEffect, useState } from "react";
import Layout from "../component/layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { add } from "../redux/userSlice";

const SingleCategory = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  function addCart(item) {
    dispatch(add(item));
    toast.success("added to cart");
  }

  async function getProduct() {
    const { data } = await axios.get(
      "https://meroshop-3vns.onrender.com/api/v1/product/all-products"
    );
    if (data.success) {
      setProducts(data.result);
    } else {
      toast.error(data.message);
    }
  }

  return (
    <Layout>
      <div className="flex flex-col ">
        <Link className="my-5 mx-3" to={"/category"}>
          <button className="px-2 py-1 rounded-md bg-green-500 text-white text-lg font-bold lg:w-[8%]  md:w-[10%]  w-[20%]">
            back
          </button>
        </Link>

        <p className="text-2xl md:text-3xl my-3 py-3 border-b-2 text-center border-b-gray-800 font-[400]">
          Items related to <span className="font-bold">&apos;{id}&apos;</span>{" "}
          category:-
        </p>

        <div className="grid mb-10 grid-cols-1 w-full lg:gap-x-10 gap-y-5 lg:px-5 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2">
          {products.length ? (
            products.map((item, i) => {
              if (item.category.slug == id) {
                return (
                  <div
                    key={i}
                    className="bg-red-200 shadow-md
                                    shadow-[rgba(0,0,0,0.4)] rounded-xl space-y-1
                                    mx-auto
                                    w-[300px] py-[6px]
                        h-[350px]"
                  >
                    <div
                      className="  rounded-xl  
                                      overflow-hidden  w-[95%] mx-auto bg-white h-2/3"
                    >
                      <img
                        className="h-full hover:scale-110 duration-500  w-full rounded-xl
                                            object-cover"
                        src={`https://meroshop-3vns.onrender.com/api/v1/product/product-image/${item.slug}`}
                        alt="photo"
                      />
                    </div>
                    <div className="w-[95%] px-2 mx-auto rounded-xl h-1/3 bg-white">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {item.category.name}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {item.name}
                      </h2>
                      <p className="mb-1 text-sm">${item.price}</p>
                      <div className="flex justify-center w-full mx-auto gap-x-3">
                        <Link to={`/product/${item.slug}`}>
                          <Button color="black">details</Button>
                        </Link>
                        <Button onClick={() => addCart(item)} color="green">
                          add to cart
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              }
            })
          ) : (
            <p className="z-10">Sorry !! No products available right now.</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SingleCategory;
