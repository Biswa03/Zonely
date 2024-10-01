"use client"
import { Provider } from 'react-redux';

import React from 'react';
import store from '@/store/store';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';



const about = () => {
  return (
    <Provider store={store}>
       <Navbar/>
        <Hero />
        <Footer/>
      </Provider>
  )
}

export default about
