import React from "react";
import { render, screen } from "@testing-library/react";
import CartButton from "../CartButton";
import useCartStore from "../../store/cartStore";

jest.mock("../../store/cartStore");

describe("CartButton", () => {
  const product = { id: 1, title: "Test Product" };

  it('displays "Add to Cart" when product is not in cart', () => {
    useCartStore.mockReturnValue({
      cart: [],
      addToCart: jest.fn(),
      removeFromCart: jest.fn(),
    });

    render(<CartButton product={product} />);
    expect(screen.getByText(/Add to Cart/i)).toBeInTheDocument();
  });

  it('displays "Added to Cart" when product is in cart', () => {
    useCartStore.mockReturnValue({
      cart: [{ id: 1 }],
      addToCart: jest.fn(),
      removeFromCart: jest.fn(),
    });

    render(<CartButton product={product} />);
    expect(screen.getByText(/Added to Cart/i)).toBeInTheDocument();
  });
});
