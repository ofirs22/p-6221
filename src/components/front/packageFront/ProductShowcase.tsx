import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectHotProducts, fetchHotProducts } from '../../../store/productSlice';
import type { AppDispatch } from '../../../store'
import HotProductCard from './HotProductCard';
import ProductGrid from '../homepage/ProductGrid';

const ProductShowcase: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>(); // Use AppDispatch
  const products = useSelector(selectHotProducts);
  React.useEffect(() => {
    dispatch(fetchHotProducts());
  }, [dispatch]);

  return (
    <section className="flex flex-col items-center max-w-7xl mx-auto px-4 bg-[#f4f5f5]" dir="rtl">
      <header>
        <h2 className="text-[rgba(5,23,44,1)] text-[28px] font-semibold leading-none text-center z-10 mt-[-7px]">
          אל תפספסו!
        </h2>
        <p className="text-[rgba(38,70,83,1)] text-base font-normal leading-[22px] text-center mt-3.5 max-md:max-w-full">
          חטיפים מתוקים, פירות טריים, מאפים מפנקים ועוד עשרות מוצרים במחירים
          מפתיעים.
          <br />
          רק לשבוע הקרוב – אל תפספסו!
        </p>
      </header>

      <div className="w-full mt-[41px] max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">

            <div className="w-3/12 max-md:w-full max-md:ml-0">
              <ProductGrid 
                products={products}
                rows={2}
              />
            </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;