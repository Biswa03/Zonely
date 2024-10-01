// export async function getStaticProps() {
//     const res = await fetch('https://dummyjson.com/products');
//     const data = await res.json();
  
//     return {
//       props: { products: data.products }, // Pass data to the page via props
//     };
//   }
  "use client"
import { Provider } from 'react-redux';

import React from 'react';
import store from '@/store/store';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import HomeHero from '@/components/HomeHero';
import Footer from '@/components/Footer';



const Home = () => {
  return (
    <>
        <HomeHero/>
        {/* <Footer/> */}
    </>
     
  )
}

export default Home
//   const Home = ({ products }) => {
//     return (
//       <div>
//         <h1>Products</h1>
//         <pre>{JSON.stringify(products, null, 2)}</pre>
//       </div>
//     );
//   };
  
//   export default Home;