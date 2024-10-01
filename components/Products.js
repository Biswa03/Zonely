"use client";

import { addToCart, setProducts, setSearchTerm, setSelectedCategory, setSkip } from '@/store/store';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import PopUp from './PopUp';
import { fetchProducts } from '@/utils/api';

const Products = () => {
    const dispatch = useDispatch();
    // const selectedCategory = useSelector(state => state.app.selectedCategory);
    // const searchTerm = useSelector(state => state.app.searchTerm); 
    const { selectedCategory, searchTerm, skip } = useSelector(state => state.app);

    const products = useSelector(state => state.app.products) || []; 
    // const [skip, setSkip] = useState(0);

    const [selectedProduct, setSelectedProduct] = useState(null);

    const openProductDetails = (product) => {
      setSelectedProduct(product);
    };
  
    const closeProductDetails = () => {
      setSelectedProduct(null);
    };

    useEffect(() => {   
        // const fetchProductsData = async () => {
        //     let url = `https://dummyjson.com/products?limit=10&skip=${skip}`;

        //     if (searchTerm) {
        //         url = `https://dummyjson.com/products/search?q=${searchTerm}&limit=10&skip=${skip}`;
        //     }
        //     else if (selectedCategory) {
        //         url = `https://dummyjson.com/products/category/${selectedCategory}?limit=10&skip=${skip}`;
        //     } 
        //     const res = await fetch(url);
        //     const data = await res.json();
        //     dispatch(setProducts(data.products || []));
        // };
        // fetchProductsData();
        dispatch(fetchProducts(selectedCategory, skip, searchTerm));
    }, [dispatch, selectedCategory, searchTerm, skip]); 



    const handleCategoryClick = (category) => {
        dispatch(setSelectedCategory(category));
        dispatch(setSkip(0));  
      };
    
      const handleSearch = (term) => {
        dispatch(setSearchTerm(term));
        dispatch(setSkip(0)); 
      };

    const handleNextPage = () => {
        dispatch(setSkip(skip + 10)); 
    };

    const handlePrevPage = () => {
        if (skip >= 10) {
            dispatch(setSkip(skip - 10));
        }
    };

    // const handleNextPage = () => setSkip(prevSkip => prevSkip + 10);
    // const handlePrevPage = () => setSkip(prevSkip => (prevSkip >= 10 ? prevSkip - 10 : 0));

    return (
        <div className="p-6 bg-white text-black">
            <h2 className="text-3xl font-bold mb-6 border-b border-gray-500 pb-4">Products</h2>
            {selectedCategory && products.length === 0 && (
                <p className="text-center text-gray-400">No products found for the selected category.</p>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {products.map(product => (
                    <div  onClick={() => openProductDetails(product)} key={product.id} className="bg-white cursor-pointer shadow-xl rounded-lg p-4 hover:bg-gray-100 transition duration-300 ease-in-out border-solid border-2 border-gray-200">      
                          <Image
                            src={product.thumbnail}
                            alt={product.title}     
                            width={500}         
                            height={300}   
                            className="w-full h-45 object-cover rounded-t-lg mb-3 shadow-md rounded-lg p-2 bg-white "
                           

                        />
                        <div >
                        <div className="text-lg font-semibold mb-2 text-black">{product.title}</div>
                        <div className="text-gray-700 text-sm">Price: <span className="font-bold text-green-500">${product.price}</span></div>
                        <div className="text-gray-700 text-sm">Rating: <span className="font-bold">{product.rating}</span></div>
                        <div className="text-gray-700 text-sm">
                            {product.stock > 0 ? <span className="text-green-500">In Stock</span> : <span className="text-red-500">Out of Stock</span>}
                        </div>
                        

                    </div>
                        
                    </div>
                ))}
            </div>
            <div className="mt-6 flex justify-between">
                <button
                    onClick={handlePrevPage}
                    className={`px-6 py-3 rounded-md transition duration-300 ease-in-out
                    ${skip === 0 
                    ? 'text-white bg-white cursor-not-allowed' 
                    : 'bg-black text-white hover:bg-gray-900'}`}
                    disabled={skip === 0}
                >
                    Prev Page
                </button>
                {products.length >= 10 && (
                    <button
                        onClick={handleNextPage}
                        className="px-6 py-3 rounded-md transition duration-300 ease-in-out bg-black text-white hover:bg-white hover:text-black"
                    >
                        Next Page
                    </button>
                )}
            </div>

        {selectedProduct && (
            <PopUp product={selectedProduct} onClose={closeProductDetails} />
        )}
        </div>
    );
};

export default Products;
