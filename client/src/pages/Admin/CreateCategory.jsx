import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import CategoryForm from "../../components/Form/CategoryForm";
import EditModal from "../../components/Model/EditModel";

const CreateCategory = () => {
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [updateName, setUpdateName] = useState("");

    // Handle form submit for new category
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                "http://localhost:8080/api/v1/category/create-category",
                { name }
            );
            if (data?.success) {
                toast.success(`${name} is created`);
                setName("");
                getAllCategory();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong in the form");
        }
    };

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

    // Handle update category
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.put(
                `http://localhost:8080/api/v1/category/update-category/${selectedCategory}`,
                { name: updateName }
            );
            if (data.success) {
                toast.success(`${updateName} updated successfully`);
                setIsModalOpen(false);
                getAllCategory();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };

    // Handle delete category
    const handleDelete = async (pId) => {
        try {
            const { data } = await axios.delete(
                `http://localhost:8080/api/v1/category/delete-category/${pId}`,
                { name: updateName }
            );
            if (data.success) {
                toast.success('Category is deleted');
                getAllCategory();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };

    return (
        <Layout title={"Dashboard - Create Category"}>
            <div className="grid grid-cols-12 gap-4 m-3">
                <div className="col-span-3">
                    <AdminMenu />
                </div>
                <div className="col-span-9">
                    <h1>Manage Category</h1>
                    <div className="p-3">
                        <CategoryForm
                            handleSubmit={handleSubmit}
                            value={name}
                            setValue={setName}
                        />
                    </div>
                    <div>
                        <table className="table-fixed">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories?.map((c) => (
                                    <tr key={c._id}>
                                        <td>{c.name}</td>
                                        <td>
                                            <button
                                                onClick={() => {
                                                    setIsModalOpen(true);
                                                    setSelectedCategory(c._id);
                                                    setUpdateName(c.name);
                                                }}
                                                className="px-2 py-1 bg-black text-white"
                                            >
                                                Edit
                                            </button>
                                            <button onClick={() => { handleDelete(c._id) }} className="px-2 py-1 bg-red-600 ml-2 text-white">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* Modal Component */}
                <EditModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <CategoryForm
                        value={updateName}
                        setValue={setUpdateName}
                        handleSubmit={handleUpdate}
                    />
                </EditModal>
            </div>
        </Layout>
    );
};

export default CreateCategory;
