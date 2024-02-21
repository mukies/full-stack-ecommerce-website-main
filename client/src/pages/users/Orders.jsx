import { Link } from "react-router-dom";
import { useOrder } from "../../context/OrderContext";

export default function Orders() {
  const { order } = useOrder();
  return (
    <div className="">
      <p
        className=" text-2xl my-4 flex
  justify-center"
      >
        All Orders
      </p>

      <div>
        {order?.length ? (
          <div className="p-5 w-full border-[2px] border-gray-500 h-20 flex justify-around">
            <div className="w-20 flex-1">
              <p className="text-lg md:text-2xl font-bold">Product Image</p>
            </div>
            <div className=" flex-2 flex md:gap-x-[0px] gap-x-[40px]">
              <p className="flex-1 md:text-xl md:px-10 font-bold">name</p>
              <p className="flex-1 md:text-xl md:px-10 font-bold">Price</p>
              <p className="flex-1 md:text-xl md:px-10 font-bold">quantity</p>
              <p className="flex-1 md:text-xl md:px-10 font-bold">total</p>
              <p className="flex-1 md:text-xl md:px-10 font-bold">status</p>
            </div>
          </div>
        ) : (
          ""
        )}
        {order ? (
          order.map((item, i) => (
            <div
              key={i}
              className="p-5 items-center w-full h-[100px] border-b-[1px] border-b-gray-600 flex justify-around"
            >
              <div className="w-[40px] h-full flex-2 md:flex-1">
                <img
                  className=" h-full object-cover object-center"
                  src={`http://localhost:8080/api/v1/product/product-image/${item.item.slug}`}
                  alt="product-image"
                />
              </div>
              <div className=" flex-2 flex md:gap-x-[8px] gap-x-[40px]">
                <p className="flex-1 md:text-nowrap md:text-lg md:px-10">
                  {item.item.name}
                </p>
                <p className="flex-1 md:text-nowrap md:text-lg md:px-10">
                  $ {item.item.price}
                </p>
                <p className="flex-1 md:text-nowrap md:text-lg md:px-10">
                  {item.quantity}
                </p>
                <p className="flex-1 md:text-nowrap md:text-lg md:px-10">
                  $ {item.item.price * item.quantity}
                </p>
                <p className="flex-1 md:text-nowrap md:text-lg md:px-10">
                  Pending
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-xl text-center ">
            You have 0 item in your Order list.{" "}
            <Link to={"/"}>
              <button className="px-2 py-1 rounded-lg bg-green-600 text-white">
                Shop Now
              </button>
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
