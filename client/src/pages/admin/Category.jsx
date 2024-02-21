/** @format */

import { Segment, Button, Confirm } from "semantic-ui-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { FaSquarePlus } from "react-icons/fa6";
import CategoryList from "./CategoryList.jsx";

export default function CreateCategory() {
    const [category, setCategory] = useState([]);
    async function getCategory() {
        const data = await fetch("http://localhost:8080/api/v1/category/all");
        const result = await data.json();
        if (result.success) {
            setCategory(result.result);
        }
    }
    useEffect(() => {
        getCategory();
        console.log("category");
    }, []);

    return (
        <div className='flex  flex-col'>
            <h1 className='text-2xl text-center border-b-2 border-b-gray-600 my-5'>
                Categories
            </h1>
            <div className='flex md:px-10 justify-end w-full px-5 my-5'>
                <button
                    className='px-3 py-2 bg-blue-600 text-white
                hover:opacity-70 duration-300 rounded-xl'
                >
                    <Link
                        to='/add-category'
                        className='flex hover:text-white duration-300 justify-between items-center gap-x-2'
                    >
                        {" "}
                        <span>
                            <FaSquarePlus />
                        </span>{" "}
                        Add Category
                    </Link>
                </button>
            </div>
            <div className='md:w-[50dvw] mx-auto  w-full'>
                {category.length ? (
                    category.map((item, id) => (
                        <div key={id}>
                            <CategoryList
                                key={id}
                                getCategory={getCategory}
                                item={item}
                            />
                        </div>
                    ))
                ) : (
                    <h1>Create category to view...</h1>
                )}
            </div>
        </div>
    );
}
