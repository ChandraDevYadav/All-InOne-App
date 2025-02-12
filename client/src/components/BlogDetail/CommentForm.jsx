import React, { useState } from 'react';

const CommentForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, website, comment });
    };

    const isFormValid = name && email && website && comment;

    return (
        <div className="pb-6">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Leave a reply</h2>
            <form onSubmit={handleSubmit}>
                <div className='flex justify-start items-center gap-4'>
                    <div className="mb-4 w-full">
                        <input
                            type="text"
                            id="name"
                            placeholder='Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>

                    <div className="mb-4 w-full">
                        <input
                            type="email"
                            id="email"
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <input
                        type="url"
                        id="website"
                        placeholder='Website'
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                <div className="mb-4">
                    <textarea
                        id="comment"
                        value={comment}
                        placeholder='Write Your Comments...'
                        onChange={(e) => setComment(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        rows="6"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className={`py-3 px-6 text-white font-semibold rounded-full transition-colors ${isFormValid ? 'bg-indigo-500 hover:bg-indigo-600' : 'bg-gray-400 cursor-not-allowed'}`}
                    disabled={!isFormValid}
                >
                    Post Comment
                </button>
            </form>
        </div>
    );
};

export default CommentForm;
