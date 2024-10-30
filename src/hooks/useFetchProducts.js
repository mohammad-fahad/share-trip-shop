// src/hooks/useFetchProducts.js
import { useState, useEffect } from 'react';

const useFetchProducts = (url) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setProducts(data.products);
            } catch (err) {
                setError('Failed to fetch products');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [url]);

    return { products, loading, error };
};

export default useFetchProducts;
