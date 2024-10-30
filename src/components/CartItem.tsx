import React from "react";

interface CartItemProps {
  item: {
    id: number;
    title: string;
    thumbnail: string;
    price: number;
  };
  onRemove: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onRemove }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b bg-opacity-50 opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
      <div className="flex items-center">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-16 h-16 object-cover rounded"
        />
        <div className="ml-4">
          <h2 className="text-lg font-semibold">{item.title}</h2>
          <p className="text-gray-500">৳ {item.price}</p>
        </div>
      </div>
      <button onClick={() => onRemove(item.id)} className="text-red-500">
        Remove
      </button>
    </div>
  );
};

export default CartItem;
