import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCartItemQuantity } from '../store/store';
import { CircleX, Trash2, Check } from 'lucide-react';

const Cart = ({onClose}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.app.cart);

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, newQuantity) => {
    dispatch(updateCartItemQuantity({ id, quantity: newQuantity }));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);




  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-3xl max-h-[80vh] overflow-auto rounded-lg p-6">
      
        <div className='flex justify-between items-center'>
            <h1 className="text-2xl font-bold mb-3 mt-2">Your Cart</h1>
            <button
                onClick={onClose}
                className=" text-black hover:text-gray-700 text-2xl"
            ><CircleX className='font-bold hover:text-red-500'/>
            </button>
        </div>
      
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center justify-between border-b py-4">
              <div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-green-500">${item.price}</p>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => handleQuantityChange(item.id, Math.max(1, item.quantity - 1))}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="ml-4 text-red-500"
                >
                  <Trash2/>
                </button>
              </div>
            </div>
          ))}
          <div className="mt-8 flex justify-between items-center">
            <div className='flex justify-start gap-1 items-center'>
                <h2 className="text-xl font-bold">Total: </h2>
                <h2 className="text-xl font-bold text-green-500"> ${total.toFixed(2)}</h2>
            </div>
            <button
            className="px-6 py-3 rounded-md transition duration-300 ease-in-out bg-black text-white hover:bg-white hover:text-green-500 hover:font-extrabold"
            > Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  </div>
  );
};

export default Cart;
