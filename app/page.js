"use client"
import { Provider } from 'react-redux';

import React from 'react';
import store from '@/store/store';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Home from './home';
import Footer from '@/components/Footer';

const Page = () => {

  return (
    <>
       <Provider store={store}>
       <Navbar/>
        <Home/>
        <Footer/>
      </Provider>
      
    </>
  );
};

export default Page;