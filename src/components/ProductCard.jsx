import React, { useEffect, useState } from 'react';
import useCartStore from '../store/cartStore';
import CartButton from './CartButton.tsx';
import QuickViewModal from './QuickViewModal';
import discountTagImage from '../assets/Discount Type.png';

const ProductCard = ({ product }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [hasDiscountTag, setHasDiscountTag] = useState(false);
  const { cart } = useCartStore();
  const isInCart = cart.some(item => item.id === product.id);

  // Randomly display discount tag on mount
  useEffect(() => {
    setHasDiscountTag(Math.random() > 0.5);  // 50% chance of showing the tag
  }, []);

  return (
    <div className="relative bg-white rounded-lg shadow-md overflow-visible hover:shadow-lg transition-shadow"> {/* Changed overflow-hidden to overflow-visible */}
      {hasDiscountTag && (
        <img
          src={discountTagImage}
          alt="Discount Tag"
          className="absolute top-4 -left-2 w-16 h-7 z-10" // Adjusted positioning to -left-5
        />
      )}

      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-medium mb-1">{product.title}</h3>
        <p className="text-gray-500">৳ {product.price}</p>
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-gray-800 bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
        <button
          onClick={() => setModalOpen(true)}
          className="mb-2 px-4 py-2 bg-white text-gray-800 font-semibold rounded-lg hover:bg-gray-100"
        >
          Quick View
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
