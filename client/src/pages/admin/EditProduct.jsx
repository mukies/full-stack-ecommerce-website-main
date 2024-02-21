/** @format */

import Layout from "../../component/layout/Layout.jsx";
import {
    FormGroup,
    FormField,
    Form,
    Input,
    TextArea,
    Button,
    Select
} from "semantic-ui-react";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditProduct() {
    const [category, setCategory] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [description, setDescription] = useState("");
    const [photo, setPhoto] = useState(null);
    const navigate = useNavigate();
    const [list, setList] = useState([]);
    const option = [];

    const { slug } = useParams();
    const dbPhoto = `http://localhost:8080/api/v1/product/product-image/${slug}`;
    const auth = JSON.parse(localStorage.getItem("_L"));

    useEffect(() => {
        getCategory();
        productDetail();
    }, []);
    //to make list in category
    async function getCategory() {
        const data = await fetch("http://localhost:8080/api/v1/category/all");
        const { result } = await data.json();
        result.map(data => {
            const opts = { key: data.name, text: data.name, value: data._id };
            option.push(opts);
        });
        setList(option);
    }
    //to get the details of selected product based on their slug

    async function productDetail() {
        const { data } = await axios.get(
            `http://localhost:8080/api/v1/product/get/${slug}`
        );
        setName(data.result.name);
        setPrice(data.result.price);
        setQuantity(data.result.quantity);
        setDescription(data.result.description);

        setCategory(data.result.category._id);
    }
    //on submit form
    async function submit(e) {
        e.preventDefault();

        try {
            if (!name || !price || !description || !category || !quantity) {
                toast.error("please fill all the fields");
            } else {
                const product = new FormData();
                if (photo) {
                    product.append("photo", photo);
                }

                product.append("name", name);
                product.append("price", price);
                product.append("quantity", quantity);
                product.append("category", category);
                product.append("description", description);

                const { data } = await axios.put(
                    `http://localhost:8080/api/v1/product/update/${slug}`,
                    product,
                    {
                        headers: {
                            authorization: auth.token
                        }
                    }
                );

                if (data.success) {
                    toast.success(data.message);
                    navigate("/admin-dashboard");
                } else {
                    toast.error(data.message);
                }
            }
        } catch (error) {
            console.log(error);
            toast.error("something went wrong while creating the product.");
        }
    }

    return (
        <Layout>
            <div className='space-y-2 mt-20 pb-10 md:w-[200px] px-2 mx-auto'>
                <h1 className='text-2xl text-center border-b-2 pt-5 border-b-gray-600 my-5'>
                    Update Product
                </h1>
                <Form onSubmit={submit} success size='small'>
                    <FormGroup
                        style={{ display: "flex", flexDirection: "column" }}
                        widths='equal'
                    >
                        <FormField
                            id='form-input-control-first-name'
                            onChange={e => setName(e.target.value)}
                            control={Input}
                            value={name}
                            label='Product Name'
                            placeholder='Product Name'
                        />
                        <FormField
                            id='form-input-control-last-name'
                            onChange={e => setPrice(e.target.value)}
                            control={Input}
                            value={price}
                            type='number'
                            label='Price'
                            placeholder='Price'
                        />
                        <FormField
                            id='form-input-control-last-name'
                            onChange={e => setQuantity(e.target.value)}
                            control={Input}
                            type='number'
                            value={quantity}
                            label='Quantity'
                            placeholder='Quantity'
                        />
                        <FormField
                            id='form-input-control-last-name'
                            control={Input}
                            onChange={(e, data) => setPhoto(e.target.files[0])}
                            type='file'
                            label='New photo'
                            accept='image/*'
                        />

                        <div className='space-y-3 mx-2 my-3'>
                            <p className='text-lg font-bold'>current photo</p>
                            <img
                                className='md:w-40 w-20'
                                src={
                                    photo ? URL.createObjectURL(photo) : dbPhoto
                                }
                                alt='photo'
                            />
                        </div>
                        <FormField
                            deburr
                            control={Select}
                            onChange={(e, data) => setCategory(data.value)}
                            options={list}
                            label={{
                                children: "Category",
                                htmlFor: "form-select-control-gender"
                            }}
                            placeholder='Category'
                            value={category}
                            search
                            searchInput={{ id: "form-select-control-gender" }}
                        />
                        <FormField
                            id='form-textarea-control-opinion'
                            onChange={e => setDescription(e.target.value)}
                            value={description}
                            control={TextArea}
                            label='Product Description'
                            placeholder='Description'
                        />
                        <FormField control={Button} type='submit' color='green'>
                            Update
                        </FormField>
                    </FormGroup>
                </Form>
            </div>
        </Layout>
    );
}
