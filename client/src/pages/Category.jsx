import { useEffect, useState } from "react";
import Layout from "../component/layout/Layout";
import { FaArrowRight } from "react-icons/fa";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Category = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    getCategory();
  }, []);

  async function getCategory() {
    const data = await fetch(
      "https://meroshop-3vns.onrender.com/api/v1/category/all"
    );
    const result = await data.json();

    if (result.success) {
      setCategory(result.result);
    } else {
      toast.success(result.message);
    }
  }

  return (
    <Layout>
      <section>
        <div className="h-[calc(100dvh-115px)] py-5">
          <p className="pb-3 text-center text-xl lg:text-3xl">All Categories</p>
          <hr className="h-1 w-[70%] mx-auto bg-black" />
          {category
            ? category.map((c, i) => (
                <div
                  key={i}
                  className=" flex justify-between items-center my-3 py-5 w-[60%] mx-auto bg-gray-300 hover:bg-gray-200 px-5 rounded-lg "
                >
                  <p className="capitalize text-2xl ">{c.name}</p>
                  <Link
                    to={`/category/${c.slug}`}
                    className=" border-[1px] cursor-pointer border-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-lg duration-300 overflow-hidden flex gap-x-5 justify-between items-center"
                  >
                    <span className="capitalize text-lg">view items</span>
                    <FaArrowRight size={20} />
                  </Link>
                </div>
              ))
            : "No category available right now."}
        </div>
      </section>
    </Layout>
  );
};

export default Category;
