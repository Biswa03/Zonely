"use client";

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { Search, ShoppingCart } from 'lucide-react';
import { setCategories, setSearchTerm } from '@/store/store';
import SignUp from './SignUp';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Cart from './Cart';

const Navbar = () => {
    const [searchInput, setSearchInput] = useState(''); 
    const dispatch = useDispatch();

    const pathname = usePathname();

    const [isSearchVisible, setIsSearchVisible] = useState(true);

    useEffect(() => {
        const shouldShowSearch = () => {
            const hideSearchPaths = ['/products'];
            return !hideSearchPaths.includes(pathname);
        };

        setIsSearchVisible(shouldShowSearch());
    }, [pathname]);


    const handleSearchChange = (e) => {
        setSearchInput(e.target.value);
    };
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        dispatch(setSearchTerm(searchInput));
        // console.log('Search submitted:', searchInput);
        // setSearchInput(''); // Clears input after submitting
    };

    const [isSignUp, setIsSignUp] = useState(false);

    const openSignUp=()=>{
        setIsSignUp(true);
    }
    const onClose=()=>{
        setIsSignUp(false);
    }


    const [isCart, setIsCart] = useState(false);

    const openCart=()=>{
        setIsCart(true);
    }
    const onCloseCart=()=>{
        setIsCart(false);
    }


    const cartItems = useSelector(state => state.app.cart);
  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);


    return (
        <div>
            <nav className="flex px-20 items-center justify-between py-4 shadow-lg fixed w-full z-1000 bg-white">
                <div className="text-3xl font-bold pl-4">
                    <a href='/'>Zonely</a>
                </div>

                <div className="hidden space-x-8 lg:flex">
                    <a href="/products" className="text-base font-bold text-gray-700 hover:text-black">Explore</a>
                    <a href="/products" className="text-base font-bold text-gray-700 hover:text-black">Categories</a>
                    <a href="/products" className="text-base font-bold text-gray-700 hover:text-black">Products</a>
                </div>

                {!isSearchVisible && (
                <div className="relative" onSubmit={handleSearchSubmit}>
                    
                    <form onSubmit={handleSearchSubmit}>
                        <input
                            type="text"
                            placeholder="Search products"
                            value={searchInput}
                            onChange={handleSearchChange}
                            className="px-4 py-2 pl-10 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring focus:ring-gray-400"
                        />
                        <button type="submit" className="absolute inset-y-0 right-0 flex items-center pr-3">
                            <span className="text-gray-500"><Search/></span> {/* You can replace this with an icon */}
                        </button>
                    </form>
                </div>
                )}


                <div className='flex gap-4'>
                    <div>
                        <button onClick={openSignUp} type="button" className="px-6 py-2.5 text-sm font-semibold text-white bg-gray-900 rounded-full">
                            Sign in
                        </button>
                        {isSignUp && <SignUp onClose={() => setIsSignUp(false)} />}
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={openCart} 
                            className="relative flex items-center bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition duration-300 ease-in-out"
                        >
                            <span className="mr-2 text-sm font-semibold">Cart</span>
                            <div className="relative">
                                <ShoppingCart className="w-6 h-6" />
                                {cartItemsCount > 0 && (
                                    <span className="absolute -top-2 -right-2 text-xs font-medium bg-gray-700 text-white px-1.5 py-0.5 rounded-full">
                                        {cartItemsCount}
                                    </span>
                                )}
                            </div>
                        </button>

                        {isCart && <Cart onClose={onCloseCart} />}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
