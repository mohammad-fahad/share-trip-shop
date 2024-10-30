import React from 'react';
import CartButton from './CartButton.tsx';

const QuickViewModal = ({ product, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white w-11/12 md:w-2/3 lg:w-1/2 p-6 rounded-lg shadow-lg relative">
                <button
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                    onClick={onClose}
                >
                    &times;
                </button>
                <div className="flex flex-col md:flex-row">
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-full md:w-1/2 h-48 object-cover rounded-lg"
                    />
                    <div className="md:ml-4 mt-4 md:mt-0">
                        <h3 className="text-2xl font-semibold">{product.title}</h3>
                        <p className="text-gray-500 mt-2 mb-4">{product.description}</p>
                        <p className="text-xl font-semibold text-blue-600">৳ {product.price}</p>
                        <CartButton product={product} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickViewModal;
