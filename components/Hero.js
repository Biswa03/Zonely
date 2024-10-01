"use client";
import React, { useState } from 'react';
import Products from './Products';
import Categories from './Categories';

const Hero = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    return (
        <div className="flex gap-6 justify-start pt-20">
            <Categories setSelectedCategory={setSelectedCategory} />
            <Products selectedCategory={selectedCategory} />
        </div>
    );
};

export default Hero;
