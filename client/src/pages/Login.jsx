/** @format */
import Layout from "../component/layout/Layout.jsx";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
//import { useDispatch, useSelector } from "react-redux";
//import { add } from "../redux/userSlice.js";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Login() {
  const location = useLocation();
  const auth = localStorage.getItem("_L");
  const navigate = useNavigate();
  useEffect(() => {
    if (auth) {
      navigate("/");
    }
  }, []);

  //const dispatch = useDispatch();
  // const user = useSelector(d => d.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);

  async function login() {
    /*   */

    if (!email || !password) {
      setError(true);
      toast.error("enter email or password to login !!");
    } else {
      //paste the code
      const data = await fetch("http://localhost:8080/api/v1/auth/login", {
        method: "post",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });
      const result = await data.json();
      if (result.success) {
        //login successful
        //everything is ok set data to local storage
        const user = result.user;
        const storeItem = {
          id: user._id,
          name: user.name,
          email: user.email,
          admin: user.admin,
          phone: user.phone,
          token: result.token,
        };
        toast.success(result.message);
        localStorage.setItem("_L", JSON.stringify(storeItem));
        //dispatch(add(result.user));
        navigate(location.state || "/");
        console.log("user from redux", user);
        console.log("auth...", auth);
      } else {
        toast.error(result.message);
      }
    }
  }
  return (
    <Layout>
      <section
        className="text-gray-600 h-[90dvh] md:h-[100dvh] justify-center  items-center
            flex  body-font"
      >
        <div className="container lg:scale-[100%] px-5  mx-auto flex  items-center">
          <div
            className="md:w-1/2 bg-gray-100 rounded-lg p-8 flex
                    flex-col mx-auto  w-full mt-10 md:mt-0"
          >
            <h2 className="text-gray-900 text-center lg:text-4xl md:text-3xl text-lg font-medium title-font mb-5">
              Login
            </h2>

            <div className="relative mb-2">
              <label
                for="email"
                className="leading-7 text-sm text-gray-600 lg:text-lg "
              >
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {error && !email && (
                <p
                  className="text-red-600
                            text-sm lg:text-lg "
                >
                  Email is required.
                </p>
              )}
            </div>

            <div className="relative mb-2">
              <label
                for="password"
                className="leading-7 text-sm text-gray-600 lg:text-lg"
              >
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={show ? "text" : "password"}
                id="password"
                name="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {error && !password && (
                <p
                  className="text-red-600
                            text-sm lg:text-lg"
                >
                  Password is required.
                </p>
              )}
              <div className="flex justify-start my-2 gap-x-2 ">
                <input
                  onChange={() => setShow(!show)}
                  type="checkbox"
                  id="checkbox"
                  className=" bg-white rounded border border-gray-300  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <label
                  for="checkbox"
                  className="leading-7 text-sm lg:text-lg text-gray-600"
                >
                  {!show ? "show" : "hide"}
                </label>
              </div>
            </div>

            <button
              onClick={login}
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Login
            </button>
            <p className="text-xs lg:text-lg text-gray-500 mt-3">
              Didn't have an account ? <Link to="/register">Sign up</Link>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Login;
