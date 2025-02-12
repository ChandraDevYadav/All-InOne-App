import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import { useAuth } from '../../context/auth'
// import AdminReviewManagement from './AdminReviewManagement'

const AdminDashboard = () => {
    const [auth] = useAuth();
    return (
        <Layout title={"Admin Dashboard"}>
            <div className='grid grid-cols-12 gap-4 m-3'>
                <div className="col-span-3">
                    <AdminMenu />
                </div>
                <div className="col-span-9">
                    <div className='border w-[80%] p-3'>
                        <h1 className='text-xl font-medium'>Admin Name : {auth?.user?.name}</h1>
                        <h1 className='text-xl font-medium'>Admin Email : {auth?.user?.email}</h1>
                        <h1 className='text-xl font-medium'>Admin Contact : {auth?.user?.phone}</h1>
                        {/* <AdminReviewManagement /> */}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AdminDashboard