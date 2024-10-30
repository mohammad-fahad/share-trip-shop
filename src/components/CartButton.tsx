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
      onClick={() =>
        isInCart ? removeFromCart(product.id) : addToCart(product)
      }
      className={`px-4 py-2 font-semibold rounded-lg transition-colors ${
        isInCart
          ? "bg-red-500 text-white hover:bg-red-600"
          : "bg-green-500 text-white hover:bg-green-600"
      }`}
    >
      {isInCart ? "Remove" : "Add to Cart"}
    </button>
  );
};

export default CartButton;
