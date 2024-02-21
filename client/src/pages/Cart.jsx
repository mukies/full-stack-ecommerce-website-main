/** @format */
import Layout from "../component/layout/Layout.jsx";
import { useSelector, useDispatch } from "react-redux";
import { removeAll, remove, decrease, increase } from "../redux/userSlice.js";
import toast from "react-hot-toast";
import { useOrder } from "../context/OrderContext.jsx";

export default function Cart() {
  const dispatch = useDispatch();
  const { setOrder, order } = useOrder();
  const data = useSelector((item) => item.cart);
  const auth = JSON.parse(localStorage.getItem("_L"));
  function total() {
    let rupe = 0;
    data.length && data.map((i) => (rupe += i.item.price * i.quantity));
    return rupe;
  }
  function clearCart(info) {
    dispatch(removeAll());
    if (info == "reset") {
      toast.success("cart reset successfully.");
    } else {
      toast.success("Order placed successfully.");
    }
  }

  return (
    <Layout>
      <div className="">
        <h1 className="text-center text-lg lg:text-[25px] lg:py-5 ">
          {" "}
          {auth && data.length
            ? `Hello ${auth.name}. you have ${data.length} 
            items in your cart.`
            : auth && !data.length
            ? `Hello ${auth.name}. your
            cart is empty.`
            : data.length
            ? `You have ${data.length} items in your
            cart. please login to check out.`
            : "Your cart is empty."}
        </h1>
      </div>
      {data.length ? (
        <div className=" bg-amber-300 flex justify-around items-center py-3 sticky top-[65px] md:top-[70px]">
          <h1 className="text-xl lg:text-[25px] lg:font-bold">
            Sub-Total: ${total()}
          </h1>

          <button
            onClick={() => {
              if (data.length) {
                if (order) {
                  setOrder([...order, data]);
                } else {
                  setOrder(data);
                }
                sessionStorage.setItem("order", JSON.stringify(order));
                clearCart("checkout");
              }
            }}
            className="px-3 py-1 lg:py-3 lg:px-4 lg:text-[17px] bg-green-500 rounded-xl
                    text-white"
          >
            checkout
          </button>
        </div>
      ) : (
        ""
      )}
      <div
        className="h-auto mt-3 mb-5 p-3 gap-y-20 flex-col  flex justify-start
           "
      >
        {data.length
          ? data.map((i, id) => (
              <div
                key={id}
                className={`h-[100px] md:border-b-black
                               md:h-[200px] md:border-b-2
                               justify-center
                          flex gap-x-3 md:gap-x-10 items-center`}
              >
                <div className="h-full w-1/4">
                  <div className="h-full">
                    <img
                      className="h-full object-cover w-full"
                      src={`http://localhost:8080/api/v1/product/product-image/${i.item.slug}`}
                      alt="product photo"
                    />
                  </div>
                </div>
                <div className="w-3/4  ">
                  <div className="h-1/3 my-2">
                    <h1 className="border-b-2 md:inline-block border-b-gray-500 text-xl">
                      {i.item.name}
                    </h1>
                    <h1>
                      <span className="text-lg font-bold">quantity:- </span>{" "}
                      {i.quantity}
                    </h1>
                    <h1>
                      <span className="text-lg font-bold">per piece:- </span> $
                      {i.item.price}
                    </h1>
                    <h1>
                      <span className="text-lg font-bold">total:- </span> $
                      {i.quantity * i.item.price}
                    </h1>
                  </div>
                  <div className="space-x-1">
                    <button
                      //   {(i?.quantity <= 1 && disabled)}
                      onClick={() => dispatch(decrease(i.item._id))}
                      className={
                        i.quantity > 1
                          ? "px-3 py-1 bg-red-700 text-white font-bold rounded-lg"
                          : "px-3 py-1 bg-gray-600 text-white font-bold rounded-lg"
                      }
                    >
                      -
                    </button>
                    <button
                      onClick={() => dispatch(remove(id))}
                      className="px-2 py-1 bg-blue-500
                                      text-white rounded-lg"
                    >
                      remove from cart
                    </button>

                    <button
                      onClick={() => dispatch(increase(i.item._id))}
                      className="px-3 py-1 bg-green-600 text-white font-bold rounded-lg"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          : ""}
        {data.length ? (
          <div className="my-2">
            <button
              className="px-3 py-1 rounded-lg bg-red-500
                    text-white"
              onClick={() => clearCart("reset")}
            >
              reset cart
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </Layout>
  );
}
