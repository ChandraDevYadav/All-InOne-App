import React from 'react'
import { NavLink } from 'react-router-dom'

const UserMenu = () => {
    return (
        <div>
            <div className="text-center">
                <h4 className="text-xl font-medium mb-4">Dashboard</h4>
                <div className="flex flex-col">
                    <NavLink
                        to="/dashboard/user/profile"
                        className={({ isActive }) =>
                            `px-4 py-2 border cursor-pointer ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
                            }`
                        }
                    >
                        Profile
                    </NavLink>
                    <NavLink
                        to="/dashboard/user/orders"
                        className={({ isActive }) =>
                            `px-4 py-2 border border-t-0 cursor-pointer ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
                            }`
                        }
                    >
                        Orders
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default UserMenu