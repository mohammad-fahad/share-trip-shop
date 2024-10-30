import React from 'react';
import useCartStore from '../store/cartStore';

interface CartButtonProps {
  product: {
    id: number;
    title: string;
  };
}

const CartButton: React.FC<CartButtonProps> = ({ product }) => {
  const { cart, addToCart, removeFromCart } = useCartStore();
  const isInCart = cart.some(item => item.id === product.id);

  return (
    <button
      onClick={() => (isInCart ? removeFromCart(product.id) : addToCart(product))}
      className={`px-4 py-2 font-semibold rounded-lg transition-colors ${
        isInCart ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-blue-500 text-white hover:bg-blue-600'
      }`}
    >
      {isInCart ? 'Added to Cart' : 'Add to Cart'}
    </button>
  );
};

export default CartButton;
