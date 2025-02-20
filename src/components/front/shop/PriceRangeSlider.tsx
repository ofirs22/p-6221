import React, { useState } from "react";

interface PriceRangeSliderProps {
  min: number;
  max: number;
}

export const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({ min, max }) => {
  const [minPrice, setMinPrice] = useState(min);
  const [maxPrice, setMaxPrice] = useState(max);

  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(event.target.value), maxPrice - 1);
    setMinPrice(value);
  };

  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(event.target.value), minPrice + 1);
    setMaxPrice(value);
  };

  return (
    <div className="flex flex-col items-center w-[265px]">
      {/* Slider Container */}
      <div className="relative w-full h-[22px]">
        {/* Track */}
        <div className="absolute w-full bg-gray-300 h-[10px] rounded-md top-[6px]" />

        {/* Active Track */}
        <div
          className="absolute bg-sky-500 h-[10px] rounded-md top-[6px]"
          style={{
            left: `${((minPrice - min) / (max - min)) * 100}%`,
            width: `${((maxPrice - minPrice) / (max - min)) * 100}%`,
          }}
        />

        {/* Min Handle */}
        <input
          type="range"
          min={min}
          max={max}
          value={minPrice}
          onChange={handleMinChange}
          className="absolute w-full h-[22px] appearance-none bg-transparent cursor-pointer"
          style={{ zIndex: 2 }}
        />

        {/* Max Handle */}
        <input
          type="range"
          min={min}
          max={max}
          value={maxPrice}
          onChange={handleMaxChange}
          className="absolute w-full h-[22px] appearance-none bg-transparent cursor-pointer"
          style={{ zIndex: 3 }}
        />

        {/* Min Knob */}
        <div
          className="absolute bg-sky-500 rounded-full h-[22px] w-[22px] cursor-pointer"
          style={{
            left: `calc(${((minPrice - min) / (max - min)) * 100}% - 11px)`,
            top: 0,
            zIndex: 4,
          }}
        />
        
        {/* Max Knob */}
        <div
          className="absolute bg-sky-500 rounded-full h-[22px] w-[22px] cursor-pointer"
          style={{
            left: `calc(${((maxPrice - min) / (max - min)) * 100}% - 11px)`,
            top: 0,
            zIndex: 4,
          }}
        />
      </div>

      {/* Price Display */}
      <div className="text-base text-right w-full mt-2">
        מחיר: ₪{minPrice} - ₪{maxPrice}
      </div>
    </div>
  );
};
