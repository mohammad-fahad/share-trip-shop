import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartPage = lazy(() => import('./pages/CartPage'));

const App = () => (
  <Router>
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/cart" element={<CartPage />} />
            <Route path="/" element={<ProductList />} />
          </Routes>
        </Suspense>
      </main>
      <ToastContainer />
    </div>
  </Router>
);

export default App;
