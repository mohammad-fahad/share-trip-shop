import React, { useEffect, useState } from 'react';
import useCartStore from '../store/cartStore';
import CartButton from './CartButton.tsx';
import QuickViewModal from './QuickViewModal';
import discountTagImage from '../assets/Discount Type.png';
import { FaHeart, FaEye, FaTrash, FaShoppingCart } from 'react-icons/fa';
import { toast } from 'react-toastify';


const ProductCard = ({ product }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [hasDiscountTag, setHasDiscountTag] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false); 
  const { cart } = useCartStore();
  const isInCart = cart.some(item => item.id === product.id);

  // Randomly display discount tag on mount
  useEffect(() => {
    setHasDiscountTag(Math.random() > 0.4);  // 40% chance of showing the tag
  }, []);

  const handleFavoriteClick = () => {
    setIsFavorite(prev => {
      const newFavoriteStatus = !prev;
      if (newFavoriteStatus) {
        toast.success(`${product.title} added to favorites!`);
      } else {
        toast.error(`${product.title} removed from favorites!`);
      }
      return newFavoriteStatus;
    });
  };

  return (
    <div className="relative bg-white rounded-lg shadow-md overflow-visible hover:shadow-lg transition-shadow">
      {hasDiscountTag && (
        <img
          src={discountTagImage}
          alt="Discount Tag"
          className="absolute top-4 -left-2 w-16 h-7 z-10"
        />
      )}

      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full object-cover"
      />

      {/* Favorite Button */}
      <button
        onClick={handleFavoriteClick}
        className={`absolute top-2 right-2 p-2 rounded-full ${isFavorite ? 'text-red-500' : 'text-gray-400'} z-10`}
      >
        <FaHeart size={24} />
      </button>

      <div className="p-4">
        <h3 className="text-lg font-medium mb-1">{product.title}</h3>
        <p className="text-gray-500">৳ {product.price}</p>
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-center bg-gray-800 bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
        <button
          onClick={() => setModalOpen(true)}
          className="mb-2 flex items-center justify-center px-16 py-2 border border-transparent text-white font-semibold rounded-lg transition-colors bg-transparent hover:bg-white hover:text-gray-600 hover:border-gray-300"
          style={{ backdropFilter: 'blur(10px)', opacity: 0.8 }}
        >
          <FaEye className="mr-2" /> Quick View
        </button>
        <CartButton product={product} isInCart={isInCart} />
      </div>

      {isModalOpen && (
        <QuickViewModal
          product={product}
          onClose={() => setModalOpen(false)}
        />
      )} 
    </div>
  );
};

export default ProductCard;
