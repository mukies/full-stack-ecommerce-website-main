import Layout from "../component/layout/Layout.jsx";
// import DropDown from "../component/Dropdown.jsx";
import { Button } from "semantic-ui-react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/userSlice.js";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function Home() {
  const [searchedItems, setSearchedItems] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
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

  function addCart(item) {
    dispatch(add(item));
    toast.success("added to cart");
  }

  async function searchProduct() {
    if (searchText) {
      const { data } = await axios.get(
        `https://meroshop-3vns.onrender.com/api/v1/product/search/${searchText}`
      );
      if (data.success) {
        setSearchedItems(data.data);
      } else {
        toast.error(data.message);
      }
    }
  }

  return (
    <Layout>
      <div className="h-auto w-full border-b-2 border-b-gray-500 flexs py-3 space-y-2 justify-around lg:py-0   lg:mt-0 mb-10">
        <div className="search  w-full  my-5">
          <div className="input flex w-[50%] mx-auto  justify-around">
            <input
              onKeyDown={(e) => {
                if (e.key == "Enter") {
                  searchProduct();
                }
              }}
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
                if (!searchText) {
                  setSearchedItems(null);
                }
              }}
              type="text"
              className=" focus:outline-2 w-[90%] rounded-tl-md rounded-bl-md px-3 focus:outline-blue-500 border-[1px] border-sky-700 "
              placeholder="Smart watch..."
            />
            <button
              onClick={searchProduct}
              className=" px-3 py-2 font-semibold text-[17px] hover:opacity-[.9] active:opacity-[.7] rounded-tr-md bg-green-700 text-white rounded-br-md "
            >
              search
            </button>
          </div>
        </div>
        <div className="w-screen h-[30dvh]">
          <img
            className="object-cover w-full h-full"
            src="/images/ecommerce-banner.jpg"
            alt=""
          />
        </div>

        {/* <div className="sm md:hidden ">
          <DropDown scale={"90%"} />
        </div>
        <div className="md hidden md:block ml-5 lg:ml-0">
          <DropDown scale={"110%"} />
        </div> */}

        <p className="text-xl font-bold">
          {searchedItems?.length && searchText
            ? `Search result for ${searchText}:-`
            : ""}
        </p>
        <div className="grid py-5 grid-cols-1 w-full lg:gap-x-10 gap-y-5 lg:px-5 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2">
          {searchedItems?.length && searchText ? (
            searchedItems?.map((item, i) => (
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
            ))
          ) : searchedItems?.length == 0 ? (
            <p className="text-center w-full text-2xl">
              {" "}
              No item found related to:- {searchText}
            </p>
          ) : (
            ""
          )}
        </div>

        <h1 className="text-2xl text-center lg:text-3xl font-bold">
          All products
        </h1>
      </div>
      <div className="grid mb-10 grid-cols-1 w-full lg:gap-x-10 gap-y-5 lg:px-5 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2">
        {product &&
          product.map((item, i) => (
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
          ))}
      </div>
      <div className="w-screen h-[30dvh]">
        <img
          className="object-cover w-full h-full"
          src="/images/bottom-banner.jpg"
          alt=""
        />
      </div>
    </Layout>
  );
}
