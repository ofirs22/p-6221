import React from 'react';

export const FavoriteProductCard: React.FC = () => {
  return (
    <div className="flex flex-col px-5 py-6 mt-8 w-full bg-white rounded-xl ">
      <div className="flex gap-5 justify-between items-center w-full max-md:flex-col-reverse">
        <button className="px-6 py-3 text-xl text-center text-white bg-sky-500 rounded-3xl transition-all cursor-pointer duration-[0.2s] ease-[ease] max-md:w-full max-sm:px-5 max-sm:py-2.5 max-sm:text-lg">
          עבור למועדפים
        </button>
        <div className="flex gap-5 items-center text-2xl mr-5 leading-none text-slate-700 max-sm:text-lg">
          <i className="ti ti-heart text-lg text-slate-900" aria-hidden="true" />
          <div>מוצרים שסימנתי</div>
        </div>
      </div>
    </div>
  );
};

