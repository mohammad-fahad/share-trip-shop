import React from 'react';
import ProductCard from './ProductCard';
import useFetchProducts from '../hooks/useFetchProducts';

const ProductList = () => {
  const { products, loading, error } = useFetchProducts('https://dummyjson.com/products');

  if (loading) return <p className="text-center text-gray-600">Loading products...</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-semibold mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
