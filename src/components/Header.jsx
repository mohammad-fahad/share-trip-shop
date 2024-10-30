import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import useCartStore from '../store/cartStore';

const Header = () => {
  const { cart } = useCartStore();

  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <Link to="/"><h1 className="text-2xl font-bold">Shop</h1></Link>
      <div className="flex items-center">
        <Link to="/cart" className="mr-4">
          <FiShoppingCart className="text-2xl cursor-pointer" />
          {cart.length > 0 && (
            <span className="absolute top-1 right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;
