import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/categories/:categoryname/products" element={<ProductList />} />
        <Route path="/categories/:categoryname/products/:productid" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
