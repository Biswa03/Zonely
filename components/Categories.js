"use client";

import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { setCategories, setProducts, setSearchTerm, setSelectedCategory } from '../store/store'; // Import the setSelectedCategory action
import { fetchCategories, fetchProducts } from '@/utils/api';

const Categories = () => {
    const dispatch = useDispatch();
    const { categories, selectedCategory } = useSelector(state => state.app);

    useEffect(() => {
        const loadCategories = async () => {
            const fetchedCategories = await fetchCategories();  // Use fetchCategories from api.js
            // dispatch(setCategories(fetchedCategories.slice(0, 20)));  // Update categories in Redux
            dispatch(setCategories(fetchedCategories));  // Update categories in Redux
        };

        loadCategories();
    }, [dispatch]);


    const handleCategoryChange = (categoryName) => {
        // console.log("Clicked category:", categoryName);
        dispatch(setSelectedCategory(categoryName));  // Update selected category globally
        dispatch(setSearchTerm(''));
    };
 
    return (
        <div className="w-80 bg-white shadow-lg p-4">
            <h2 className="text-xl font-bold mb-4 pl-1">Categories</h2>
            <div onClick={() => handleCategoryChange('')} className={`flex items-center p-2 rounded-lg cursor-pointer mb-2 
                            ${'' === selectedCategory ? 'bg-gray-950 text-white' : 'hover:bg-gray-950 hover:text-white transition duration-300 ease-in-out'}`}> All Categories</div>
            {categories && categories.length > 0 ? (
                categories.map((category, index) => (
                    <div
                        key={index} 
                        onClick={() => handleCategoryChange(category)} 
                        className={`flex items-center p-2 rounded-lg cursor-pointer mb-2 
                            ${category === selectedCategory ? 'bg-gray-950 text-white' : 'hover:bg-gray-950 hover:text-white transition duration-300 ease-in-out'}`}
                    >
                        <span className="flex-grow capitalize">{category}</span> 
                    </div>
                ))
            ) : (
                <p>No categories available.</p>
            )}
        </div>
    );
};

export default Categories;
