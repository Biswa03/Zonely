
import { setProducts, setSkip  } from '@/store/store';
import axios from 'axios';
import { useDispatch } from 'react-redux';

export const fetchCategories = async () => {
    try {
        // const res = await axios.get('https://dummyjson.com/products/categories');
        const res = await axios.get('https://dummyjson.com/products?limit=150');
        // console.log(res.data);
        const uniqueCategories = [...new Set(res.data.products.map(product => product.category))];
        // console.log(uniqueCategories);
        return uniqueCategories;   
        
    } catch (error) {
        console.error('Error fetching categories:', error);
        return []; 
    }
};

export const fetchProducts =  (selectedCategory, skip, searchTerm) => {
    return async (dispatch) => {
    try{
    let url = `https://dummyjson.com/products?limit=10&skip=${skip}`;

    if (searchTerm) {
        url = `https://dummyjson.com/products/search?q=${searchTerm}&limit=10&skip=${skip}`;
    } else if (selectedCategory) {
        url = `https://dummyjson.com/products/category/${selectedCategory}?limit=10&skip=${skip}`;
    }

    // const res = await fetch(url);
    // const data = await res.json();
    // console.log('Products fetched:', data.products);
    // return data.products || []; 
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    
    dispatch(setProducts(data.products || []));
}
catch (error) {
    console.error('Error fetching products:', error);
    // You might want to dispatch an error action here
}
    };
};
