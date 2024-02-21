/** @format */
import Layout from "../component/layout/Layout.jsx";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const auth = localStorage.getItem("_L");
  useEffect(() => {
    if (auth) {
      navigate("/");
    }
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePass, setRePass] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);
  /*match state is created to check if password and confirm password are same
    or not */
  const [match, setMatch] = useState(true);
  //show is created to make show and hide password functionality
  const [show, setShow] = useState(false);

  //
  async function register() {
    if (!name || !email || !password || !rePass || !phone) {
      toast.error("Please fill the form properly.");
      setError(true);
    } else {
      if (password == rePass) {
        //all condition is true
        const data = await fetch("http://localhost:8080/api/v1/auth/register", {
          method: "post",
          body: JSON.stringify({ name, email, password, phone }),
          headers: { "Content-Type": "application/json" },
        });
        const result = await data.json();
        if (result.success) {
          ///  everything is ok
          navigate("/login");
          toast.success(result.message);
          toast.success("Login now");
        } else {
          toast.error(result.message);
        }
      } else {
        setMatch(false);
        toast.error("Password didn't match.");
      }
    }
  }

  return (
    <Layout>
      <section
        className="text-gray-600 pt-10 md:pt-0 h-auto md:h-[calc(100dvh-60px)] lg:h-auto  justify-center items-center
            flex  body-font"
      >
        <div className=" container lg:scale-[100%] px-5  mx-auto flex  items-center">
          <div
            className=" md:w-1/2 bg-gray-100 rounded-lg p-8 flex
                    flex-col mx-auto  w-full mt-10 md:mt-0"
          >
            <h2 className="text-gray-900 text-center md:text-3xl text-lg lg:text-3xl font-medium title-font mb-5">
              Sign Up
            </h2>
            <div className="relative mb-2">
              <label
                for="full-name"
                className="leading-7 lg:text-lg text-sm text-gray-600"
              >
                Full Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="full-name"
                name="full-name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {error && !name && (
                <p
                  className="text-red-600 lg:text-lg
                            text-sm"
                >
                  Name is required.
                </p>
              )}
            </div>
            <div className="relative mb-2">
              <label
                for="email"
                className="leading-7 lg:text-lg text-sm text-gray-600"
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
                  className="text-red-600 lg:text-lg
                            text-sm"
                >
                  Email is required.
                </p>
              )}
            </div>
            <div className="relative mb-2">
              <label
                for="number"
                className="leading-7 text-sm text-gray-600 lg:text-lg"
              >
                Phone
              </label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="Number"
                id="number"
                name="number"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {error && !phone && (
                <p
                  className="text-red-600 lg:text-lg
                            text-sm"
                >
                  Phone number is required.
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
            </div>
            <div className="relative mb-2">
              <label
                for="re-password"
                className="leading-7 text-sm lg:text-lg text-gray-600"
              >
                Confirm Password
              </label>
              <input
                value={rePass}
                onChange={(e) => setRePass(e.target.value)}
                type={show ? "text" : "password"}
                id="re-password"
                name="re-password"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {!match && (
                <p
                  className="text-red-600
                            text-sm lg:text-lg"
                >
                  Password didn't match.
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
              onClick={register}
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Register
            </button>
            <p className="text-xs text-gray-500 mt-3 lg:text-lg">
              Already have an account ? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Signup;
