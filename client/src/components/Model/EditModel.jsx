import React from 'react';

const EditModal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Update Category</h2>
                    <button
                        className="text-gray-400 hover:text-gray-600"
                        onClick={onClose}
                    >
                        ✕
                    </button>
                </div>
                <div className="mb-4">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default EditModal;
