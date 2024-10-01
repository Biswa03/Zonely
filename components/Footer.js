


const Footer = () => {
    return (
      <>
        <footer class="bg-gray-950 px-20 text-white py-7 rounded-md">
            <div class="container mx-auto px-4">
                <div class="flex flex-col md:flex-row justify-between items-center py-5">
                    <div>
                        <h2 class="text-2xl font-bold mb-2">Zonely </h2>
                        <p class="text-sm">Your One Zone for All Your Shopping Needs.</p>
                    </div>
                    <hr class="my-4 border-gray-700 w-full md:hidden"/>
                    <div class="flex justify-center space-x-4">
                        <a href="#" class="hover:text-gray-300">Home</a>
                        <a href="#" class="hover:text-gray-300">Shop</a>
                        <a href="#" class="hover:text-gray-300">Product</a>
                        <a href="#" class="hover:text-gray-300">Blog</a>
                        <a href="#" class="hover:text-gray-300">Contact Us</a>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-4 pb-5">
                    <p>© 2024 Zonely. All rights reserved.</p>
                    <p>Made by Biswajyoti</p>

                    <div class="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" class="text-xs hover:text-gray-300">Privacy Policy</a> 
                        
                        <a href="#" class="text-xs hover:text-gray-300 ml-1">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>

      </>
       
    )
  }
  
  export default Footer