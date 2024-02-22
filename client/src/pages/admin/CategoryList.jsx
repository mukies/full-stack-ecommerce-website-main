/** @format */
import { Segment, Confirm } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default function CategoryList({ item, id, getCategory }) {
  const auth = JSON.parse(localStorage.getItem("_L"));

  const [show, setShow] = useState(false);
  const handleConfirm = async (i) => {
    // alert(i);
    const data = await fetch(
      `https://meroshop-3vns.onrender.com/api/v1/category/delete-category/${i}`,
      {
        method: "delete",
        headers: { authorization: auth.token },
      }
    );
    const result = await data.json();
    if (result.success) {
      toast.success(`${item.name} is deleted.`);
      setShow(false);
      getCategory();
    } else {
      toast.error(result.message);
    }
  };

  return (
    <Segment style={{ marginBottom: "20px" }}>
      <div className="flex justify-between">
        {item.name}
        <div className="flex gap-x-2">
          <button
            className=" px-2 py-1 rounded-xl
                                        bg-orange-500 text-white
                                    hover:bg-orange-400 hover:scale-105
                                    duration-300"
          >
            <Link to={`/category/${item._id}`}>edit</Link>
          </button>
          <div>
            <button
              className=" px-2 py-1 rounded-xl
                                            text-white
                                        hover:bg-red-400  bg-red-800
                                        hover:scale-105
                                    duration-300"
              onClick={() => setShow(true)}
            >
              delete
            </button>
            <Confirm
              open={show}
              cancelButton="Cancel"
              confirmButton="Delete"
              onCancel={() => setShow(false)}
              onConfirm={() => handleConfirm(item._id)}
            />
          </div>
        </div>
      </div>
    </Segment>
  );
}
