import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavoriteProducts } from '../../../store/favoriteSlice';
import { FavoriteProductCard } from './FavoriteProductCard';

export const FavoriteProducts: React.FC = () => {
  const favoriteProducts = useSelector(selectFavoriteProducts);
    console.log(favoriteProducts)
  return (
    <div className="flex gap-8 items-center p-0 mx-auto my-0 font-semibold w-full">
      <div className="flex flex-col flex-1 justify-center self-stretch w-full bg-white rounded-2xl min-w-[240px] max-md:px-5 max-md:py-8 max-sm:p-5">
        <div className="flex gap-2.5 items-start w-full text-lg leading-none text-right text-slate-900 max-sm:text-xl ">
            <div className="mr-10 flex flex-col justify-center w-[1104px] text-2xl">
                <div className="self-end">מוצרים מועדפים</div>
                <div className="flex mt-3 w-[200px] bg-sky-500 min-h-[3px] ml-auto mb-5" /> 
            </div>
        </div>
        <div className="flex w-full bg-neutral-300 min-h-[1px]" />
            <FavoriteProductCard />
      </div>
    </div>
  );
};


