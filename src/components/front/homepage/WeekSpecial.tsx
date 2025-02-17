import React from 'react';
import ProductFeatures from './ProductFeatures';
import ProductGrid from './ProductGrid';
import HotOffer from './HotOffer';

const WeekSpecial: React.FC = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-[535px] mb-10 text-center mx-auto">
          <h2 
            className="text-2xl font-semibold text-[#05172C] mb-5"
            style={{ fontFamily: 'Ploni ML v2 AAA' }}
          >
            מוצרי השבוע
          </h2>
          <p 
            className="text-xl text-[#264653]"
            style={{ fontFamily: 'Ploni ML v2 AAA' }}
          >
            מוצרים עם מבצעים מובילים שיוזילו את העגלה שלכם בכל פעם!
          </p>
        </div>

        {/* Features */}
        <ProductFeatures />

        {/* Products Grid and Hot Offer */}
        <div className="flex gap-8 mt-8 flex-col-reverse lg:flex-row justify-center">
          <HotOffer />
          <ProductGrid />
        </div>
      </div>
    </section>
  );
};

export default WeekSpecial;
