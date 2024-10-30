import React from "react";
import { render, screen } from "@testing-library/react";
import CartItem from "../CartItem";

describe("CartItem", () => {
  const item = {
    id: 1,
    title: "Test Product",
    thumbnail: "https://via.placeholder.com/150",
    price: 100,
  };

  it("renders the item title, image, and price", () => {
    render(<CartItem item={item} onRemove={jest.fn()} />);

    expect(screen.getByText(/Test Product/i)).toBeInTheDocument();
    expect(screen.getByText(/৳ 100/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Test Product/i)).toBeInTheDocument();
  });

  it("calls onRemove when the remove button is clicked", () => {
    const onRemoveMock = jest.fn();
    render(<CartItem item={item} onRemove={onRemoveMock} />);

    screen.getByText(/Remove/i).click();
    expect(onRemoveMock).toHaveBeenCalledWith(1);
  });
});
