
import { configureStore, createSlice } from '@reduxjs/toolkit'; 
import thunk from 'redux-thunk';
// import rootReducer from './rootReducer'; 
const initialState = {
    categories: [],
    products: [],
    selectedCategory: null,
    searchTerm: '',
    skip:0,
    cart: [],
};

// Slice (combines actions and reducer)
const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload;
        },
        setProducts: (state, action) => {
            state.products = action.payload;
            // state.categoriesWithProducts = Array.from(new Set(action.payload.map(product => product.category)));
        },
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload;
            state.skip = 0; // Reset skip when category changes
            state.searchTerm = '';

        },
        setSearchTerm: (state, action) => {
            console.log('Redux searchTerm updated:', action.payload);
            state.searchTerm = action.payload;
            state.skip = 0; // Reset skip when search term changes
        },
        setSkip: (state, action) => {
            state.skip = action.payload;
        },
        addToCart: (state, action) => {
            const itemIndex = state.cart.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) {
              state.cart[itemIndex].quantity += 1;
            } else {
              state.cart.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload);
        },
        updateCartItemQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.cart.find(item => item.id === id);
            if (item) {
              item.quantity = quantity;
            }
        },
        
    },
});

// Export actions
export const { setCategories, setProducts, setSelectedCategory, setSearchTerm, setSkip, addToCart, 
    removeFromCart, 
    updateCartItemQuantity  } = appSlice.actions;

// Create store using configureStore
const store = configureStore({
    reducer: {
        app: appSlice.reducer
    }
});

export default store;