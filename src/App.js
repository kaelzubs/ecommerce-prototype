import React from 'react';
import './App.css';
import Header from './components/Header';
import Featured from './components/Featured';
import Products from './components/Products';
import Latest from './components/Latest';
import Offer from './components/Offers';
import Testimonial from './components/Testimonial';
import Brands from './components/Brands';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Featured />
      <div className="small-container">
        <h2 className="title">Featured Product</h2>
        <Products />
        <Latest />
      </div>
      <Offer />
      <Testimonial />
      <Brands />
      <Footer />
    </div>
  );
}

export default App;
