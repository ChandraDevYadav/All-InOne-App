import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import moment from "moment";

const AdminOrders = () => {
    const [status, setStatus] = useState([
        "Not Process",
        "Processing",
        "Shipped",
        "deliverd",
        "cancel",
    ]);
    const [changeStatus, setCHangeStatus] = useState("");
    const [orders, setOrders] = useState([]);
    const [auth, setAuth] = useAuth();
    const getOrders = async () => {
        try {
            const { data } = await axios.get("http://localhost:8080/api/v1/auth/all-orders");
            setOrders(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (auth?.token) getOrders();
    }, [auth?.token]);

    const handleChange = async (orderId, value) => {
        try {
            const { data } = await axios.put(
                `http://localhost:8080/api/v1/auth/order-status/${orderId}`,
                { status: value } // ✅ Now correctly formatted
            );
            getOrders();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Layout title={"All Orders Data"}>
            <div className="grid grid-cols-12 dashboard">
                <div className="col-span-3">
                    <AdminMenu />
                </div>
                <div className="col-span-9">
                    <h1 className="text-center">All Orders</h1>
                    {orders?.map((o, i) => {
                        return (
                            <div className="border">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Status</th>
                                            <th>Buyer</th>
                                            <th> date</th>
                                            <th>Payment</th>
                                            <th>Quantity</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{i + 1}</td>
                                            <td>
                                                <select
                                                    onChange={(e) => handleChange(o._id, e.target.value)} // ✅ Extract the value correctly
                                                    defaultValue={o?.status}
                                                >

                                                    {status.map((s, i) => (
                                                        <option key={i} value={s}>
                                                            {s}
                                                        </option>
                                                    ))}
                                                </select>
                                            </td>
                                            <td>{o?.buyer?.name}</td>
                                            <td>{moment(o?.createAt).fromNow()}</td>
                                            <td>{o?.payment.success ? "Success" : "Failed"}</td>
                                            <td>{o?.products?.length}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="container">
                                    {o?.products?.map((p, i) => (
                                        <div className="grid grid-cols-12 mb-2 p-3 flex-row" key={p._id}>
                                            <div className="col-span-4">
                                                <img
                                                    src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
                                                    className="object-fill"
                                                    alt={p.name}
                                                    width="100px"
                                                    height={"100px"}
                                                />
                                            </div>
                                            <div className="col-span-8">
                                                <p>{p.name}</p>
                                                <p>{p.description.substring(0, 30)}</p>
                                                <p>Price : {p.price}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Layout>
    );
};

export default AdminOrders;