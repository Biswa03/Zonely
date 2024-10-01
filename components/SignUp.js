import { CircleX, X } from 'lucide-react';

export default function SignUp({onClose}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50">

      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative text-center">
      <button  onClick={onClose} className="absolute top-5 right-5 text-black hover:text-gray-500 text-3xl"><CircleX /></button>

        <h2 className="text-black text-2xl mb-6">Sign Up</h2>

        <form>
          
            <div className="mb-4">
              <label htmlFor="email" className="block text-left text-gray-700 mb-2">Email:</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-red-200 rounded-lg"
              />
            </div>
          

          <div className="mb-4">
            <label htmlFor="password" className="block text-left text-gray-700 mb-2">Password:</label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border border-red-200 rounded-lg"
            />
          </div>

          <button type="submit" className="w-full py-3 bg-black text-white rounded-lg hover:bg-slate-600 transition duration-300">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
