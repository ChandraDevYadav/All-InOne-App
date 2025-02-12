import React from "react";
import { useSearch } from "../../context/search";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
const SearchInput = () => {
    const [values, setValues] = useSearch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.get(
                `http://localhost:8080/api/v1/product/search/${values.keyword}`
            );
            setValues({ ...values, results: data });
            navigate("/search");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <form
                className="flex items-center gap-2"
                role="search"
                onSubmit={handleSubmit}
            >
                <div className="relative w-full">
                    <input
                        className="flex-grow w-full pl-4 pr-9 py-3 border border-red-200 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500"
                        type="search"
                        placeholder="Search here..."
                        aria-label="Search"
                        value={values.keyword}
                        onChange={(e) => setValues({ ...values, keyword: e.target.value })}
                    />
                    <button className="absolute right-2 top-4 text-gray-500" type="submit">
                        <FaSearch className="text-xl" />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SearchInput;