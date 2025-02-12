import React, { useState } from "react";

export const Prices = [
    { _id: 0, name: "$0 to $50", array: [0, 50] },
    { _id: 1, name: "$51 to $100", array: [51, 100] },
    { _id: 2, name: "$101 to $150", array: [101, 150] },
    { _id: 3, name: "$151 to $500", array: [151, 500] },
    { _id: 4, name: "$501 to $1000", array: [501, 1000] },
    { _id: 5, name: "$1001 or more", array: [1001, 9999] },
];

const FilterSidebar = ({ categories, handleFilter, setRadio }) => {
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [selectedPrice, setSelectedPrice] = useState(null);

    // ✅ Handle category selection
    const handleCategoryChange = (checked, id) => {
        let updatedCategories = checked
            ? [...selectedCategory, id]
            : selectedCategory.filter((catId) => catId !== id);

        setSelectedCategory(updatedCategories);
        handleFilter(checked, id);
    };

    // ✅ Handle price selection
    const handlePriceChange = (value) => {
        setSelectedPrice(value);
        setRadio(value); // Ensure it's an array
    };

    // ✅ Reset filters properly (without reload)
    const resetFilters = () => {
        setSelectedCategory([]);
        setSelectedPrice(null);
        setRadio([]); // Reset price filter
    };

    return (
        <div>
            {/* 🏷 Filter by Category */}
            <h6 className="text-xl font-medium mb-2">Filter By Category</h6>
            {categories?.length ? (
                categories.map((c) => (
                    <div key={c._id} className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            className="w-4 h-4 rounded-full"
                            checked={selectedCategory.includes(c._id)}
                            onChange={(e) => handleCategoryChange(e.target.checked, c._id)}
                        />
                        <label>{c.name}</label>
                    </div>
                ))
            ) : (
                <p className="text-sm text-gray-500">No categories available.</p>
            )}

            {/* 🏷 Filter by Price */}
            <h6 className="text-xl font-medium mb-2 mt-4">Filter By Price</h6>
            {Prices.map((p) => (
                <div key={p._id} className="flex items-center gap-2">
                    <input
                        type="radio"
                        name="price"
                        value={JSON.stringify(p.array)}
                        checked={JSON.stringify(p.array) === JSON.stringify(selectedPrice)}
                        onChange={(e) => handlePriceChange(JSON.parse(e.target.value))}
                    />
                    <label>{p.name}</label>
                </div>
            ))}

            {/* 🛠 Reset Button */}
            <button
                onClick={resetFilters}
                className="bg-red-600 font-medium px-4 py-2 text-sm text-white mt-6 rounded-md"
            >
                Reset Filters
            </button>
        </div>
    );
};

export default FilterSidebar;
