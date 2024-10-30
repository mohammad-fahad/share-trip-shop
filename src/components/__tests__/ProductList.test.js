import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductList from '../ProductList';
import * as useFetchProducts from "../../hooks/useFetchProducts";

jest.mock('../../hooks/useFetchProducts');

describe('ProductList', () => {
    it('displays loading message', () => {
        useFetchProducts.default.mockReturnValue({
            products: [],
            loading: true,
            error: null,
        });

        render(<ProductList />);
        expect(screen.getByText(/Loading products.../i)).toBeInTheDocument();
    });

    it('displays error message', () => {
        useFetchProducts.default.mockReturnValue({
            products: [],
            loading: false,
            error: 'Error fetching products',
        });

        render(<ProductList />);
        expect(screen.getByText(/Error fetching products/i)).toBeInTheDocument();
    });

    it('renders product cards', () => {
        const mockProducts = [
            { id: 1, title: 'Product 1', thumbnail: 'https://via.placeholder.com/150', price: 100 },
            { id: 2, title: 'Product 2', thumbnail: 'https://via.placeholder.com/150', price: 200 },
        ];

        useFetchProducts.default.mockReturnValue({
            products: mockProducts,
            loading: false,
            error: null,
        });

        render(<ProductList />);
        expect(screen.getByText(/Product 1/i)).toBeInTheDocument();
        expect(screen.getByText(/Product 2/i)).toBeInTheDocument();
    });
});
