import React from 'react';
import { ProductCard } from '../shop/ProductCard';
import type { AppDispatch } from '../../../store';
import { Product } from '../../../types/product';

interface ProductGridProps {
  products: Product[];
  rows: number; // Number of rows to display
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, rows }) => {
  // Calculate the number of columns based on the rows prop
  const columns = Math.ceil(products.length / rows); // Calculate columns based on total products and rows

  return (
    <div className="bg-[#f4f5f5] py-16">
      <h2 
        className="text-2xl font-bold text-[#05172C] mb-8 text-center" 
        style={{ fontFamily: 'Ploni ML v2 AAA' }}
      >
        מבצעים חמים
      </h2>
      <div className="flex justify-center w-full">
        <div className={`grid grid-cols-${columns} gap-8 w-full max-w-[1200px] px-4`}> {/* Dynamic columns */}
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