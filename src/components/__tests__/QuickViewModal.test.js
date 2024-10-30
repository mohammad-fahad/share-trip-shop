import React from 'react';
import { render, screen } from '@testing-library/react';
import QuickViewModal from '../QuickViewModal';

describe('QuickViewModal', () => {
    const product = {
        id: 1,
        title: 'Test Product',
        thumbnail: 'https://via.placeholder.com/150',
        description: 'Test Description',
        price: 100,
    };

    it('renders product details', () => {
        render(<QuickViewModal product={product} onClose={jest.fn()} />);

        expect(screen.getByText(/Test Product/i)).toBeInTheDocument();
        expect(screen.getByText(/Test Description/i)).toBeInTheDocument();
        expect(screen.getByText(/৳ 100/i)).toBeInTheDocument();
        expect(screen.getByAltText(/Test Product/i)).toBeInTheDocument();
    });

    it('calls onClose when close button is clicked', () => {
        const onCloseMock = jest.fn();
        render(<QuickViewModal product={product} onClose={onCloseMock} />);

        screen.getByText(/×/i).click();
        expect(onCloseMock).toHaveBeenCalled();
    });
});
