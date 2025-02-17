
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Heart from '../../Heart';
import { useMobile } from '../../../hooks/use-mobile';
import { addItem } from '../../../store/cartSlice';
import { toast } from 'sonner';
import { CartItemProps } from '../../../types/cartTypes';

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
  const dispatch = useDispatch();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking the add to cart button
    const cartItem: CartItemProps = {
      id,
      name,
      price,
      originalPrice: originalPrice || 0,
      quantity: 1,
      image
    };
    dispatch(addItem(cartItem));
    toast.success('המוצר נוסף לעגלה בהצלחה');
  };

  return (
    <div className={`relative mb-[31px] ${isMobile ? 'w-full max-w-[100%]' : 'w-[221px]'} h-[368px] group`}>
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
          <div className="group-hover:opacity-0 group-hover:h-0 transition-all duration-300">
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

          {/* Add to Cart Button - Shows on Hover */}
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={handleAddToCart}
              className="w-full h-[52px] bg-[#00BAFF] text-white rounded-full flex items-center justify-center gap-3 hover:bg-[#0096CC] transition-colors"
              style={{ fontFamily: 'Ploni ML v2 AAA' }}
              aria-label={`Add ${name} to cart`}
            >
              <span className="text-lg">הוספה לעגלה</span>
              <FontAwesomeIcon icon={faCartShopping} className="text-lg" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};
