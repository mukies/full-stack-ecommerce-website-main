/** @format */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../component/layout/Layout.jsx";
import toast from "react-hot-toast";

export default function EditCategory() {
    const auth = JSON.parse(localStorage.getItem("_L"));

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [error, setError] = useState(false);

    async function addNew() {
        if (!name) {
          setError(true)
            toast.error("category name field is empty.");
        } else {
            const data = await fetch(
                `http://localhost:8080/api/v1/category/add-category`,
                {
                    method: "post",
                    body: JSON.stringify({ name }),
                    headers: {
                        authorization: auth.token,
                        "Content-Type": "application/json"
                    }
                }
            );
            const result = await data.json();

            if (result.success) {
                toast.success(result.message);
                navigate("/admin-dashboard");
            } else {
                toast.error(result.message);
            }
        }
    }
    return (
        <Layout>
            <div
                className='mt-20 h-[70dvh] text-center flex flex-col justify-center
            items-center '
            >
                <h1
                    className='text-2xl my-10 border-b-2 border-b-gray-600 px-2
                inline-block'
                >
                    Add New Category
                </h1>
                <div className='w-[60dvw] md:w-60 text-left'>
                    <div className='relative mb-2'>
                        <label
                            for='text'
                            className='leading-7 text-sm text-gray-600'
                        >
                            Category Name
                        </label>
                        <input
                            value={name}
                            onChange={e => setName(e.target.value)}
                            type='text'
                            placeholder='category name...'
                            id='text'
                            name='text'
                            className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                        />
                        {error&&!name && (
                            <p
                                className='text-red-600
                            text-sm'
                            >
                                name is required.
                            </p>
                        )}
                    </div>
                    <button
                        onClick={addNew}
                        className='text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'
                    >
                        add
                    </button>
                </div>
            </div>
        </Layout>
    );
}
