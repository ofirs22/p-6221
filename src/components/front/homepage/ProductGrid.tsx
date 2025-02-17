import React from 'react';
import { ProductCard } from '../shop/ProductCard';

import { useSelector, useDispatch } from 'react-redux';
import { selectSaleProducts, fetchSaleProducts } from '../../../store/productSlice';
import type { AppDispatch } from '../../../store'

const ProductGrid: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>(); // Use AppDispatch
  const products = useSelector(selectSaleProducts);
  React.useEffect(() => {
    dispatch(fetchSaleProducts());
  }, [dispatch]);
  return (
    <div className="bg-white py-16">
      <h2 
        className="text-2xl font-bold text-[#05172C] mb-8 text-center" 
        style={{ fontFamily: 'Ploni ML v2 AAA' }}
      >
       מבצעים חמים
      </h2>
      <div className="flex justify-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1200px] px-4">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              originalPrice={product.originalPrice}
              image={product.image}
              isSale={product.isSale}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
