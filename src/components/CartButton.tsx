import React from "react";
import useCartStore from "../store/cartStore";
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

interface CartButtonProps {
  product: {
    id: number;
    title: string;
  };
  isInCart: boolean;
}

const CartButton: React.FC<CartButtonProps> = ({ product, isInCart }) => {
  const { cart, addToCart, removeFromCart } = useCartStore();

  const handleCartClick = () => {
    if (isInCart) {
      removeFromCart(product.id);
      toast.error(`${product.title} removed from cart!`);
    } else {
      addToCart(product);
      toast.success(`${product.title} added to cart!`);
    }
  };

  return (
    <button
      onClick={handleCartClick}
      className={`flex items-center justify-center px-16 py-2 border rounded-lg transition-colors ${
        isInCart
          ? "text-red-500 border-red-500 hover:bg-red-100"
          : "text-green-500 border-green-500 hover:bg-green-100"
      }`}
      style={{ backdropFilter: "blur(10px)", opacity: 0.8 }}
    >
      {isInCart ? (
        <>
          <FaTrash className="mr-2" /> Remove
        </>
      ) : (
        <>
          <FaShoppingCart className="mr-2" /> Add to Cart
        </>
      )}
    </button>
  );
};

export default CartButton;
