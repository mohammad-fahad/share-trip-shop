import React from 'react';
import useCartStore from '../store/cartStore';
import CartItem from '../components/CartItem.tsx';

const CartPage = () => {
    const { cart, removeFromCart } = useCartStore();

    const handleRemove = (id) => {
        removeFromCart(id);
    };

    const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-semibold mb-6">Shopping Cart</h1>
            {cart.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
            ) : (
                <div>
                    {cart.map((item) => (
                        <CartItem key={item.id} item={item} onRemove={handleRemove} />
                    ))}
                    <div className="mt-4 text-xl font-bold">
                        Total: ৳ {totalPrice}
                    </div>
                    <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                        Proceed to Checkout
                    </button>
                </div>
            )}
        </div>
    );
};

export default CartPage;
