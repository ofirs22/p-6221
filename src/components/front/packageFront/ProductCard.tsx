
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { Product } from '../../../types/productTypes';

interface ProductCardProps {
  isOpen: boolean;
  id: string;
  price: number;
  originalPrice: number;
  image: string;
  onToggle: (id: string) => void;
  isReversed: boolean;
  isFavorite: boolean;
  toggleHeart: (id: string) => void;
  title: string;
  description: string;
  items: Product[];
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  price,
  originalPrice,
  description,
  image,
  isOpen,
  onToggle,
  isReversed,
  isFavorite,
  toggleHeart,
  items
}) => {
  return (
    <div
      className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} bg-white border border-gray-200 rounded-lg p-4 md:p-10 gap-4 md:gap-8 w-full max-w-[69rem] mx-auto items-center`}
      onClick={() => onToggle(id)}
    >
      {/* Image Section */}
      <div
        className="flex-shrink-0 bg-white rounded-lg overflow-hidden shadow-md w-full md:w-[21.25rem] flex items-center justify-center"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-[200px] md:h-full object-cover"
        />
      </div>

      {/* Content Section with Shadow */}
      <div
        className="flex-1 bg-white rounded-lg shadow-md w-full md:w-[39.625rem]"
      >
        <div className="flex flex-col h-full">
          {/* Main Content Area */}
          <div className="flex-1 p-4 md:p-8 pb-0">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
              <div className="flex items-center gap-4">
                <span
                  className="text-xl md:text-[2.25rem] font-bold text-[#FC4B4E]"
                  style={{ fontFamily: "Ploni ML v2 AAA" }}
                >
                  ₪{price.toFixed(2)}
                </span>
                <span
                  className="text-lg md:text-[1.375rem] text-[#778080] line-through"
                  style={{ fontFamily: "Ploni ML v2 AAA" }}
                >
                  ₪{originalPrice.toFixed(2)}
                </span>
              </div>
              <div className="flex flex-col items-center md:items-end text-center md:text-right">
                <span
                  className="text-lg md:text-[1.5rem] font-bold text-[#05172C]"
                  style={{ fontFamily: "Ploni DL 1.1 AAA" }}
                >
                  {title}
                </span>
                <div className="w-full h-[0.188rem] bg-[#00BAFF]"></div>
              </div>
            </div>

            {/* Description */}
            <p
              className="text-base md:text-[1.25rem] text-[#05172C] mt-6 text-center md:text-right"
              style={{ fontFamily: "Ploni ML v2 AAA" }}
            >
              {description}
            </p>
          </div>

          {/* Actions */}
          <div className="p-4 md:p-8 flex flex-wrap md:flex-nowrap items-center justify-center gap-4">
            {/* Heart Button */}
            <button
              className={`w-12 h-12 md:w-[3.313rem] md:h-[3.313rem] rounded-full flex items-center justify-center shadow-md transition-colors duration-300 ${isFavorite ? "bg-[#00BAFF]" : "bg-white"}`}
              onClick={(e) => {
                e.stopPropagation();
                toggleHeart(id);
              }}
            >
              <FontAwesomeIcon
                icon={isFavorite ? solidHeart : regularHeart}
                className={`text-[0.835rem] ${isFavorite ? "text-white" : "text-[#00BAFF]"}`}
              />
            </button>

            <button
              className="flex-1 md:flex-none h-12 md:h-[3.313rem] px-4 md:px-10 bg-[#00BAFF] text-white rounded-full text-base md:text-[1.5rem] font-semibold shadow-md"
              style={{ fontFamily: "Ploni DL 1.1 AAA" }}
            >
              שלח לעגלה
            </button>
            <button
              className="flex-1 md:flex-none h-12 md:h-[3.313rem] px-4 md:px-10 border border-[#778080] text-[#778080] rounded-full text-base md:text-[1.5rem] font-semibold"
              style={{ fontFamily: "Ploni DL 1.1 AAA" }}
              onClick={() => onToggle(id)}
            >
              לפירוט המארז
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
