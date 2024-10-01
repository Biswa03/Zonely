import Image from 'next/image';
import heroRight from '../public/infographic-showing-benefits-ecommerce-hosting-online-businesses_1327465-20373.png'; // replace with actual image path
import heroImage from '../public/immGE.jpg'; // replace with actual image path
import heroFur from '../public/living-room-with-couch-coffee-table_651412-58111.png'; // replace with actual image path
import imageY from '../public/happy-excited-shopping-girls-with-colorful-bags_1003686-91003.jpg'; // replace with actual image path
import { Truck, CreditCard, Lock, Phone } from 'lucide-react';

const HomeHero = () => {
  return (
    <div className='px-4'> 
        <div className="flex flex-col items-center justify-between h-300 bg-white px-20 ">
          <div className="flex items-center justify-between w-full h-full max-w-6xl px-4 py-1 mt-20 gap-8">
     
          <div className="flex flex-col justify-between items-start space-y-4 animate-fadeInUp">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
        Unlock the World of Choices.
      </h1>
      <p className="text-2xl md:text-2xl font-bold mb-3 text-gray-800">
        For Every Choice, For Every Need
      </p>

      <a
        href="/products"
        className=" px-12 py-4 text-base font-semibold text-white bg-gray-900 rounded transition duration-300 ease-in-out hover:bg-white hover:text-black group mt-7"
      > Explore Products </a>
    </div>

            <div className="hidden md:block">
              <Image
                src={heroRight} 
                alt="Hero Right"
                className="w-85 h-85"
              />
            </div>
          </div>
        </div>



        <div className="flex px-20 flex-col md:flex-row items-center justify-between p-8 gap-8 bg-white">
          <div className="md:w-1/2 mt-8 md:mt-0">
              <Image
                src={heroImage} 
                alt="Shop effortlessly"
                width={400} 
                height={400}
                className="w-auto h-auto"
              />
          </div>
          <div className="md:w-1/2 flex flex-col md:flex-col items-start justify-evenly">
            <h1 className="text-4xl font-bold mb-4">Shop effortlessly!</h1>
            <p className="text-lg text-gray-700 mb-6">
              Explore a wide range of products with Variety Vault. Enjoy fast browsing and diverse product options.
            </p>
            <a href='/products' className="px-12 py-4 text-base font-semibold text-white bg-black rounded transition duration-300 hover:bg-white hover:text-black mt-2">
              Buy Products
            </a>
          </div>
         
        </div>

        <div className="flex flex-wrap justify-center p-5 gap-5 bg-gray-50">
          <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 m-4 text-center">
            <Truck className="w-12 h-12 text-gray-600 mb-4" />
            <h2 className="text-xl font-semibold">Free Shipping</h2>
            <p className="text-gray-500">Order above $200</p>
          </div>
          <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 m-4 text-center">
            <CreditCard className="w-12 h-12 text-gray-600 mb-4" />
            <h2 className="text-xl font-semibold">Money-back</h2>
            <p className="text-gray-500">30 days guarantee</p>
          </div>
          <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 m-4 text-center">
            <Lock className="w-12 h-12 text-gray-600 mb-4" />
            <h2 className="text-xl font-semibold">Secure Payments</h2>
            <p className="text-gray-500">Secured by Stripe</p>
          </div>
          <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 m-4 text-center">
            <Phone className="w-12 h-12 text-gray-600 mb-4" />
            <h2 className="text-xl font-semibold">24/7 Support</h2>
            <p className="text-gray-500">Phone and Email support</p>
          </div>
        </div>





        <div class="flex justify-center px-20 items-center gap-8 bg-white p-6">
            <div class="flex-1 h-full">
                <h2 class="text-lg font-semibold text-gray-800">SALE UP TO 35% OFF</h2>
                <p class="text-xl font-bold text-gray-800 mt-1">HUNDREDS OF</p>
                <p class="text-3xl font-bold text-black mt-1">New stylish furniture pieces!</p>
                <p class="text-gray-700 mt-4">It’s the perfect time to upgrade your living space with luxurious comfort at unbeatable prices.</p>
                <a href="/products" class="px-8 py-3 inline-block text-base font-semibold text-white bg-black rounded transition duration-300 hover:bg-white hover:text-black mt-2">
                Shop Now →
                </a>
            </div>
            <div class="flex-1 hidden lg:block">
            <Image
                src={heroFur}
                alt="Shop effortlessly"
                width={400} 
                height={400} 
                className="w-full h-auto" 
            />  </div>
        </div>

        <div class="flex justify-center px-20 items-center bg-white p-6 gap-8 mt-10 mb-12">
            <div class="flex-1 hidden lg:block">
            <Image
                src={imageY}
                alt="Shop effortlessly"
                width={400}
                height={400} 
                className="w-full h-auto" 
            />  </div>
            <div className="flex-1 p-6">
                <h2 className="text-lg font-semibold text-gray-800">SALE UP TO 65% OFF</h2>
                <p className="text-xl font-bold text-gray-800 mt-2">TRENDING STYLES</p>
                <p className="text-3xl font-bold text-black mt-1">New season, new wardrobe!</p>
                <p className="text-gray-700 mt-4">Discover the latest in fashion trends and step out in style without breaking the bank.</p>
                <a href="/products" className="px-8 py-3 inline-block text-base font-semibold text-white bg-black rounded transition duration-300 hover:bg-white hover:text-black mt-2">
                Shop Now →
                </a>
            </div>
        </div>

    </div>
  );
};

export default HomeHero;
