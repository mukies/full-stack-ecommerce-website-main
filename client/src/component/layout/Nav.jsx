/** @format */
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { FiShoppingCart } from "react-icons/fi";
import { LiaTimesCircleSolid } from "react-icons/lia";
import { useState } from "react";
import { DropdownMenu, DropdownItem, Dropdown } from "semantic-ui-react";
import { useSelector } from "react-redux";

export default function Nav() {
  const auth = JSON.parse(localStorage.getItem("_L"));
  const [nav, setNav] = useState(true);
  const navigate = useNavigate();
  const data = useSelector((d) => d.cart);
  let count = 0;
  data.length &&
    data.map((i) => {
      count += i.quantity;
    });
  const home = () => {
    navigate("/");
  };

  function logout() {
    localStorage.clear();
    navigate("/login");
  }

  return (
    <nav
      className="h-[60px] w-full z-[100]  sticky top-0 right-0 left-0 flex items-center
             justify-between
            md:px-10 px-2  bg-gray-300
        shadow-gray-500 shadow-md"
    >
      <div className="flex justify-between items-center">
        <div
          onClick={home}
          className="space-x-1 cursor-pointer font-signature flex justify-center items-center"
        >
          <img
            className="h-10 w-10"
            src="/Shopping-Cart-Icon-3.svg"
            alt="icon"
          />
          <span className="font-signature md:text-2xl text-xl">Mero Shop</span>
        </div>
      </div>

      <div className="md:hidden gap-x-4 flex">
        <div className="md:hidden relative">
          <Link to="/cart">
            {count > 0 && (
              <div
                className="absolute top-0 right-0 bg-red-700
                    text-white rounded-[100%] flex justify-center
                    overflow-hidden items-center
                     h-5 w-5"
              >
                <span className="text-center text-[10px] font-bold">
                  {count}
                </span>
              </div>
            )}
            <FiShoppingCart size={30} />
          </Link>
        </div>

        <div onClick={() => setNav(!nav)} className="">
          {nav ? (
            <HiOutlineBars3BottomRight size={30} />
          ) : (
            <LiaTimesCircleSolid size={30} />
          )}
        </div>
      </div>
      {/* nav menu for mobile devices*/}
      <div
        className={
          !nav
            ? "absolute top-[60px] duration-300 left-0 right-0"
            : "absolute duration-300 scale-150 top-[-1000px] left-0 right-0"
        }
      >
        <ul
          className="bg-gray-200 rounded-b-xl flex flex-col
                    justify-center items-center py-5 gap-y-4"
        >
          <li
            className="px-2 py-1  text-black hover:text-black
                        duration-300 
                         text-lg
                    hover:border-b-[1px] hover:scale-105 hover:border-b-gray-900 inline-block"
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className="px-2 py-1  text-black hover:text-black
                        duration-300 
                         text-lg
                    hover:border-b-[1px] hover:scale-105 hover:border-b-gray-900 inline-block"
          >
            <Link to="/category">Category</Link>
          </li>

          {auth ? (
            <>
              <li
                className="px-2 py-1  text-black hover:text-black
                        duration-300 
                         text-lg
                    hover:border-b-[1px] hover:scale-105 hover:border-b-gray-900 inline-block"
              >
                <Dropdown text="More" pointing="left" className="link item">
                  <DropdownMenu>
                    <DropdownItem>
                      {" "}
                      <Link
                        to={`${auth.admin ? "/admin-dashboard" : "/dashboard"}`}
                      >
                        Dashboard
                      </Link>
                    </DropdownItem>

                    <DropdownItem>
                      <Link onClick={logout} to="/login">
                        Logout
                      </Link>{" "}
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </li>
            </>
          ) : (
            <>
              <li
                className="px-2 py-1  text-black hover:text-black
                        duration-300 
                         text-lg
                    hover:border-b-[1px] hover:scale-105 hover:border-b-gray-900 inline-block"
              >
                <Link to="/register">Signup</Link>
              </li>
              <li
                className="px-2 py-1  text-black hover:text-black
                        duration-300 
                         text-lg
                    hover:border-b-[1px] hover:scale-105 hover:border-b-gray-900 inline-block"
              >
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      {/* nav menu for desktops*/}
      <div className="hidden md:flex ">
        <ul className="flex gap-x-5">
          <li
            className="px-1 py-1 duration-300 hover:scale-105
                        active:text-gray-400  hover:border-b-[1.5px]
                    hover:border-b-gray-700"
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className="px-1 py-1 duration-300 hover:scale-105
                        active:text-gray-400  hover:border-b-[1.5px]
                    hover:border-b-gray-700"
          >
            <Link to="/category">Category</Link>
          </li>

          {auth ? (
            <>
              <li
                className="px-1 py-1 duration-300 hover:scale-105
                        active:text-gray-400  hover:border-b-[1.5px]
                    hover:border-b-gray-700"
              >
                <Dropdown text="More" pointing="up" className="link item">
                  <DropdownMenu>
                    <DropdownItem>
                      <Link
                        to={`${auth.admin ? "/admin-dashboard" : "/dashboard"}`}
                      >
                        Dashboard
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link onClick={logout} to="/login">
                        Logout
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </li>
            </>
          ) : (
            <>
              <li
                className="px-1 py-1 duration-300 hover:scale-105
                        active:text-gray-400  hover:border-b-[1.5px]
                    hover:border-b-gray-700"
              >
                <Link to="/register">Signup</Link>
              </li>
              <li
                className="px-1 py-1 duration-300 hover:scale-105
                        active:text-gray-400  hover:border-b-[1.5px]
                    hover:border-b-gray-700"
              >
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
          <li
            className="px-1 py-1 duration-300 hover:scale-105
                        active:text-gray-400  hover:border-b-[1.5px]
                    hover:border-b-gray-700"
          >
            <div className="hidden md:block relative">
              <Link to="/cart">
                {count > 0 && (
                  <div
                    className="absolute top-[-5px]
                                                right-[-5px] bg-red-700
                    text-white rounded-[100%] flex justify-center
                    overflow-hidden items-center
                     h-5 w-5"
                  >
                    <span className="text-center text-[10px] font-bold">
                      {count}
                    </span>
                  </div>
                )}
                <FiShoppingCart size={25} />
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
