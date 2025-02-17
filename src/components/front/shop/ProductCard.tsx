import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
// import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Heart from '../../Heart';
import { useMobile } from '../../../hooks/use-mobile';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice: number | null;
  image: string;
  isSale: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  originalPrice,
  image,
  isSale,
}) => {
  const isMobile = useMobile();

  return (
    
      <div className={`relative mb-[31px] ${isMobile ? 'w-full max-w-[100%]' : 'w-[221px]'} h-[368px]`}>
        <div 
          className="absolute top-8 left-4 z-10 w-[22px] h-[22px] flex items-center justify-center"
          aria-label="Add to favorites"
        >
          <Heart id={id} entity="product" />
        </div>
        
        <Link to={`/product/${id}`}>
        <img 
          src={image} 
          alt={name} 
          className={`${isMobile ? 'w-full' : 'w-[221px]'} bg-white h-[282px] object-contain rounded-xl`}
        />

        <div className="p-4 justify-center">
          <h3 className="text-lg font-semibold text-[#05172C] mb-2 text-center">{name}</h3>
          
          <div className="flex items-center justify-center gap-2">
            <span className="text-xl font-bold text-[#f00]">
              ₪{price.toFixed(2)}
            </span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ₪{originalPrice.toFixed(2)}
              </span>
            )}
          </div>

        </div>
        </Link>
      </div>

  );
};