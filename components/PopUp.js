import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/store';
import { CircleCheck, CircleX } from 'lucide-react';

function Popup({ product, onClose }) {
  const dispatch = useDispatch();
  const popupRef = useRef();

  const handleClose = (e) => {
    if (popupRef.current === e.target) {
      onClose(); // Close the popup if clicked outside the modal
    }
  };
  
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };


  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCartClick = (product) => {
    handleAddToCart(product);
    setIsAdded(true);
    
    // Hide the "Added to Cart" message after 1 second
    setTimeout(() => {
      setIsAdded(false);
    }, 1000);
  };

  return (
    <div
      ref={popupRef}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-lg p-6 w-11/12 max-w-md"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>
          <button className="text-gray-500 hover:text-red-400" onClick={onClose}>
            <CircleX/>
          </button>
        </div>

        <Image
          src={product.thumbnail}
          alt={product.title}
          width={500}
          height={300}
          className="w-full h-48 object-contain rounded mb-4"
        />

        <div className="mb-2">
          <p className="text-gray-700 mb-2">{product.description}</p>
          <p className="text-gray-600">Category: {product.category}</p>
          <p className="text-green-500">Price: ${product.price}       Discount: {product.discountPercentage}%</p>
          <p className="text-gray-600">Rating: {product.rating}      In Stock: {product.stock}</p>
          <p className="text-gray-600">Weight: {product.weight}kg</p>
          
          <p className="text-gray-600">Warranty: {product.warrantyInformation}</p>
          <p className="text-gray-600">Shipping: {product.shippingInformation}</p>
        </div>

            {/* Check icon and "Added to Cart" message */}
     

        <div className='flex justify-between'>

          <div className='flex justify-start gap-2'>
              <button 
                onClick={() =>  handleAddToCartClick(product) }
                className=" mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-600"
              >  Add to Cart </button>

              {isAdded && (
                <div className="flex items-center mt-2 text-green-500 transition-opacity duration-300">
                  <CircleCheck className="h-5 w-5 mr-2" />
                  <span>Added to Cart</span>
                </div>
              )}
          </div>

          <button
            onClick={onClose}
            className=" mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-600 "
          >
            Close
          </button>
        </div>

      
       
      </div>
    </div>
  );
}

export default Popup;
