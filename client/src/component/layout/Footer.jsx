/** @format */
import Layout from "./Layout.jsx";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className=" bg-gradient-to-r w-full bottom-0 left-0 right-0 h-[60px] from-gray-400 to-gray-700  body-font">
      <div
        className="container  md:px-1 px-3 py-4 mx-auto flex
                md:justify-between items-center
            md:flex-row flex-col"
      >
        <Link
          className="flex  title-font font-medium items-center
                md:item-left justify-center md:mr-10 text-gray-900"
        >
          <img
            className="h-10 text-white w-10"
            src="/Shopping-Cart-Icon-3.svg"
            alt="icon"
          />
          <span className="ml-3 text-white text-xl">Mero Shop</span>
        </Link>
        <p
          className="text-sm text-white flex  sm:ml-3 sm:pl-3
                gap-x-[2px] sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0
                mt-4"
        >
          © 2020 Mero-Shop
          <Link
            to="https://github.com/mukies"
            className="text-white ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @mukesh
          </Link>
        </p>
        <div className="md:mx-4 ">
          <Link
            to="/about"
            className="text-white text-sm px-1 py-1 duration-300 hover:border-b-2
                    hover:border-b-white "
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-white text-sm px-1 py-1 duration-300 hover:border-b-2
                    hover:border-white "
          >
            contact
          </Link>
          <Link
            to="/privacy"
            className="text-white text-sm px-1 py-1 duration-300 hover:border-b-2
                    hover:border-b-white "
          >
            privacy
          </Link>
        </div>
        <span
          className="inline-flex sm:ml-auto sm:mt-0 mt-4
                justify-center sm:justify-start"
        >
          <Link className="text-white">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </Link>
          <Link className="ml-3 text-white">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </Link>
          <Link className="ml-3 text-white">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </Link>
          <Link className="ml-3 text-white">
            <svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </Link>
        </span>
      </div>
    </footer>
  );
}
