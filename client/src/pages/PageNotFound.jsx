/** @format */
import Layout from "../component/layout/Layout.jsx";
import { Link } from "react-router-dom";

export default function Pnt() {
  return (
    <Layout>
      <div className="h-[70dvh] md:h-[80dvh] flex justify-center items-center">
        <div className="text-center md:space-y-20 space-y-5">
          <p className="md:text-5xl text-xl ">Opss !!! 404 Page Not Found</p>
          <div className="">
            <Link className="" to="/">
              <button
                className="flex  md:scale-150 mx-auto text-white bg-blue-500
              border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600
              rounded text-lg"
              >
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
