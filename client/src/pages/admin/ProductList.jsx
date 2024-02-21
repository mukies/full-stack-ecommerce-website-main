/* eslint-disable react/prop-types */
/** @format */
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";
import { Confirm } from "semantic-ui-react";

export default function ProductList({ item, getProduct }) {
  const [show, setShow] = useState(false);
  const auth = JSON.parse(localStorage.getItem("_L"));
  async function deleteItem(id) {
    const data = await fetch(
      `http://localhost:8080/api/v1/product/delete/${id}`,
      {
        method: "delete",
        headers: { authorization: auth.token },
      }
    );
    const result = await data.json();
    if (result.success) {
      toast.success(`${item.name} was deleted`);
      getProduct();
    } else {
      toast.error(result.message);
    }
    setShow(false);
  }

  return (
    <div
      className=" md:w-[250px] shadow-md shadow-[rgba(0,0,0,0.4)]
        rounded-xl bg-red-200 mb-10 p-4 w-full"
    >
      <Link
        className=" bg-white hover:scale-105
                    duration-700 border border-red-200 relative h-48 rounded-lg
                         flex justify-center "
      >
        <img
          alt="ecommerce"
          className="object-cover  object-center rounded-lg 
                               w-auto
                                h-full block"
          src={`http://localhost:8080/api/v1/product/product-image/${item.slug}`}
        />
      </Link>
      <div className="my-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {item.category.name}
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {item.name}
        </h2>
        <p className="mt-1">${item.price}</p>
      </div>
      <div
        className="flex mx-auto gap-x-3 w-full px-5
                                            
                                        justify-between"
      >
        <button
          className="px-2 py-1 w-1/2 bg-black rounded-xl
                                text-white"
        >
          <Link to={`/product/edit/${item.slug}`}>edit</Link>
        </button>
        <button
          onClick={() => setShow(true)}
          className="px-2 py-1 w-1/2 bg-black rounded-xl
                                text-white"
        >
          delete
        </button>
        <Confirm
          open={show}
          cancelButton="Cancel"
          confirmButton="Delete"
          onCancel={() => setShow(false)}
          onConfirm={() => deleteItem(item._id)}
        />
      </div>
    </div>
  );
}
