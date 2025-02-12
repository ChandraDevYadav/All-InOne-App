import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { FaCloudUploadAlt } from 'react-icons/fa'

const CreateProduct = () => {
    const navigate = useNavigate()
    const [categories, setCategories] = useState([])
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [quantity, setQuantity] = useState("")
    const [shipping, setShipping] = useState("")
    const [category, setCategory] = useState("")
    const [photo, setPhoto] = useState("")

    // Get all categories
    const getAllCategory = async () => {
        try {
            const { data } = await axios.get(
                "http://localhost:8080/api/v1/category/get-category"
            );
            if (data?.success) {
                setCategories(data?.category);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong in getting Category");
        }
    };

    useEffect(() => {
        getAllCategory();
    }, []);

    //create product function
    const handleCreate = async (e) => {
        e.preventDefault()
        try {
            const productData = new FormData()
            productData.append("name", name)
            productData.append("description", description)
            productData.append("price", price)
            productData.append("quantity", quantity)
            productData.append("photo", photo)
            productData.append("category", category)
            const { data } = axios.post(`http://localhost:8080/api/v1/product/create-product`, productData);
            if (data?.success) {
                toast.error(data?.message)
            } else {
                toast.success('Product Create Successfully')
                navigate('/dashboard/admin/products')
            }
        } catch (error) {
            console.log(error)
            toast.error('Something went wrong')
        }
    }

    return (
        <Layout title={"Dashboard - Create Product"}>
            <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-3'>
                    <AdminMenu />
                </div>
                <div className='col-span-9'>
                    <div className="m-10 w-full">
                        <select
                            defaultValue=""
                            className='w-1/2 py-2 px-4 rounded-md'
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="" disabled>
                                Select a category
                            </option>
                            {categories?.map((c) => (
                                <option key={c._id} value={c._id}>
                                    {c.name}
                                </option>
                            ))}
                        </select>
                        <div className="mb-3 mt-4 ">
                            <label className="border border-gray-800 bg-gray-100 hover:bg-blue-200 w-1/2 py-4 px-4 flex items-center justify-center rounded-md gap-2 cursor-pointer">
                                {photo ? (
                                    <span>{photo.name}</span>
                                ) : (
                                    <>
                                        {/* <FaCloudUploadAlt className="h-12 w-12 text-gray-500" /> */}
                                        <img src="/upload.png" alt="" className='w-14 h-14' />
                                        <span className='font-medium text-lg'>Upload Photo</span>
                                    </>
                                )}
                                <input
                                    type="file"
                                    name="photo"
                                    accept="image/*"
                                    onChange={(e) => setPhoto(e.target.files[0])}
                                    hidden
                                />
                            </label>
                        </div>
                        <div className="mb-3">
                            {photo && (
                                <div className='text-center'>
                                    <img
                                        src={URL.createObjectURL(photo)}
                                        alt="product_photo"
                                        height={"200px"}
                                        className='object-fill' />
                                </div>
                            )}
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                value={name}
                                placeholder='write a name'
                                className='border py-2 px-4 rounded-md placeholder:text-black w-1/2'
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <textarea
                                type="text"
                                value={description}
                                rows={6}
                                placeholder='write a description'
                                className='border py-2 px-4 w-1/2 rounded-md placeholder:text-black'
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                value={price}
                                placeholder='Prices'
                                className='border py-2 px-4 w-1/2 rounded-md placeholder:text-black'
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="number"
                                value={quantity}
                                placeholder='quantity'
                                className='border py-2 px-4 w-1/2 rounded-md placeholder:text-black'
                                onChange={(e) => setQuantity(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <select
                                defaultValue=""
                                className='w-1/2 py-2 px-4 rounded-md placeholder:text-black'
                                onChange={(value) => { setShipping(value); }}
                            >
                                <option value="" disabled>
                                    Select Shipping
                                </option>
                                <option value="0">No</option>
                                <option value="1">Yes</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <button className='border px-4 py-2 bg-green-600 rounded-md text-white' onClick={handleCreate}>Create Product</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CreateProduct