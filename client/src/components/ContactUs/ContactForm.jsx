import React, { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        services: "",
        message: "",
    });

    const isFormValid = formData.name && formData.email;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
    };

    return (
        <div className="mt-20">
            <h2 className="text-4xl font-semibold text-gray-900 text-center">
                Have Any Question?
            </h2>
            <p className="text-gray-500 text-center font-medium text-md mt-6 mb-14">
                It is a long established fact that a reader will be distracted <br /> by the content of a page when looking.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 p-12 bg-white">
                <div className="flex justify-start items-center gap-4">
                    <div className="w-full">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="w-full px-6 py-2 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="w-full">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full px-6 py-2 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                </div>

                <div className="flex justify-start items-center gap-4">
                    <div className="w-full">
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Enter your address"
                            className="w-full px-6 py-2 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="w-full">
                        <input
                            type="text"
                            name="services"
                            value={formData.services}
                            onChange={handleChange}
                            placeholder="Enter service type"
                            className="w-full px-6 py-2 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                <div>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write your message"
                        className="w-full px-6 py-2 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="5"
                    ></textarea>
                </div>

                <div className="flex justify-center items-center">
                    <button
                        type="submit"
                        className={`px-6 py-3 rounded-md font-semibold text-white transition ${isFormValid
                            ? "bg-blue-500 hover:bg-blue-600 cursor-pointer"
                            : "bg-gray-400 cursor-not-allowed"
                            }`}
                        disabled={!isFormValid}
                    >
                        Get in Touch
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
