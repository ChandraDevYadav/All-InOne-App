import React from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'
import { useAuth } from '../../context/auth'

const Dashboard = () => {

    const [auth] = useAuth()

    return (
        <Layout title={"Dashboard - Ecommerce App"}>
            <div className='grid grid-cols-12 gap-4 m-3'>
                <div className='col-span-3'>
                    <UserMenu />
                </div>
                <div className='col-span-9'>
                    <div className='border p-4'>
                        <h3>{auth?.user?.name}</h3>
                        <h3>{auth?.user?.email}</h3>
                        <h3>{auth?.user?.address}</h3>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard