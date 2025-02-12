import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'

const Users = () => {
    return (
        <Layout >
            <div className='grid grid-cols-12 gap-4 m-3'>
                <div className='col-span-3'>
                    <AdminMenu />
                </div>
                <div className='col-span-9'>
                    <h1>All Users</h1>
                </div>
            </div>
        </Layout>
    )
}

export default Users