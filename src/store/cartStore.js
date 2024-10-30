import { create } from 'zustand';

const useCartStore = create((set) => ({
  cart: [],
  addToCart: (product) => set((state) => {
    if (!state.cart.some(item => item.id === product.id)) {
      return { cart: [...state.cart, product] };
    }
    return state;
  }),
  removeFromCart: (productId) => set((state) => ({
    cart: state.cart.filter(item => item.id !== productId),
  })),
}));

export default useCartStore;
