import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminMenu = () => {
    return (
        <div className="text-center">
            <h4 className="text-xl font-medium mb-4">Admin Panel</h4>
            <div className="flex flex-col">
                <NavLink
                    to="/dashboard/admin/create-category"
                    className={({ isActive }) =>
                        `px-4 py-2 border cursor-pointer ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
                        }`
                    }
                >
                    Create Category
                </NavLink>
                <NavLink
                    to="/dashboard/admin/create-product"
                    className={({ isActive }) =>
                        `px-4 py-2 border border-t-0 cursor-pointer ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
                        }`
                    }
                >
                    Create Product
                </NavLink>
                <NavLink
                    to="/dashboard/admin/products"
                    className={({ isActive }) =>
                        `px-4 py-2 border border-t-0 cursor-pointer ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
                        }`
                    }
                >
                    Product
                </NavLink>
                <NavLink
                    to="/dashboard/admin/orders"
                    className={({ isActive }) =>
                        `px-4 py-2 border border-t-0 cursor-pointer ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
                        }`
                    }
                >
                    Orders
                </NavLink>
                <NavLink
                    to="/dashboard/admin/users"
                    className={({ isActive }) =>
                        `px-4 py-2 border border-t-0 cursor-pointer ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
                        }`
                    }
                >
                    Users
                </NavLink>
            </div>
        </div>
    );
};

export default AdminMenu;
