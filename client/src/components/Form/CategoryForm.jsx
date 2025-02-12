import React from 'react'

const CategoryForm = ({ handleSubmit, value, setValue }) => {
    return (
        <>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white border rounded-lg shadow-md">
                {/* Email Input */}
                <div className="mb-4">
                    <input
                        type="text"
                        id="category"
                        placeholder='Enter new category'
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Submit
                </button>
            </form>
        </>
    )
}

export default CategoryForm