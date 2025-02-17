import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectProducts } from '../../../store/productSlice';
import { ProductCard } from './ProductCard';
import { MeatDepartmentBanner } from './MeatDepartmentBanner';

export const ProductGrid: React.FC = () => {
  const products = useSelector(selectProducts);
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 15; // 6 + 9 products per page
  const totalPages = Math.ceil(products.length / productsPerPage);

  const getCurrentPageProducts = () => {
    const start = currentPage * productsPerPage;
    return products.slice(start, start + productsPerPage);
  };

  const currentProducts = getCurrentPageProducts();
  const topProducts = currentProducts.slice(0, 6);
  const bottomProducts = currentProducts.slice(6, 15);

  return (
    <div className="flex flex-col gap-8">
      {/* Top 6 Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {topProducts.map((product) => (
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

      {/* Meat Department Banner */}
      <MeatDepartmentBanner />

      {/* Bottom 9 Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {bottomProducts.map((product) => (
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

      {/* Pagination Dots */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentPage === index ? 'bg-[#00BAFF]' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentPage(index)}
              aria-label={`Page ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};